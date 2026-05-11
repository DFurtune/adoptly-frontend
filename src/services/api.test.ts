import MockAdapter from 'axios-mock-adapter';
import { apiClient, isApiError, type ApiError } from './api';

describe('apiClient response interceptor', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(apiClient);
  });

  afterEach(() => {
    mock.restore();
  });

  test('transforms network error into network ApiError', async () => {
    mock.onPost('/test').networkError();

    await expect(apiClient.post('/test')).rejects.toEqual<ApiError>({
      type: 'network',
      message: 'Network error. Please check your connection.',
    });
  });

  test('transforms 500 response into server ApiError', async () => {
    mock.onPost('/test').reply(500, { message: 'Internal' });

    await expect(apiClient.post('/test')).rejects.toEqual<ApiError>({
      type: 'server',
      status: 500,
      message: 'Server error. Please try again later.',
    });
  });

  test('transforms 503 response into server ApiError', async () => {
    mock.onPost('/test').reply(503);

    await expect(apiClient.post('/test')).rejects.toMatchObject({
      type: 'server',
      status: 503,
    });
  });

  test('passes 4xx error through as client ApiError with backend message and data', async () => {
    const body = { message: 'Email Already Exists', code: 'EMAIL_EXISTS' };
    mock.onPost('/auth/register').reply(409, body);

    await expect(apiClient.post('/auth/register')).rejects.toEqual<ApiError>({
      type: 'client',
      status: 409,
      message: 'Email Already Exists',
      data: body,
    });
  });

  test('falls back to default message when response body has no message', async () => {
    mock.onPost('/test').reply(400, {});

    await expect(apiClient.post('/test')).rejects.toMatchObject({
      type: 'client',
      status: 400,
      message: 'An error occurred.',
    });
  });

  test('returns client ApiError for 401 response', async () => {
    mock.onGet('/protected').reply(401, { message: 'Unauthorized' });

    await expect(apiClient.get('/protected')).rejects.toMatchObject({
      type: 'client',
      status: 401,
      message: 'Unauthorized',
    });
  });
});

describe('isApiError', () => {
  test('returns true for a valid ApiError object', () => {
    const apiError: ApiError = { type: 'client', message: 'oops' };
    expect(isApiError(apiError)).toBe(true);
  });

  test('returns false for null', () => {
    expect(isApiError(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(isApiError(undefined)).toBe(false);
  });

  test('returns false for a plain Error', () => {
    expect(isApiError(new Error('boom'))).toBe(false);
  });

  test('returns false for a string', () => {
    expect(isApiError('oops')).toBe(false);
  });

  test('returns false for an object missing required fields', () => {
    expect(isApiError({ type: 'client' })).toBe(false);
    expect(isApiError({ message: 'oops' })).toBe(false);
    expect(isApiError({})).toBe(false);
  });
});
