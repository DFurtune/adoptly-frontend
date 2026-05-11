import { registerUser } from './auth';
import { apiClient } from './api';

jest.mock('./api', () => ({
  apiClient: {
    post: jest.fn(),
  },
}));

const mockedPost = apiClient.post as jest.MockedFunction<
  typeof apiClient.post
>;

describe('registerUser', () => {
  beforeEach(() => {
    mockedPost.mockReset();
    mockedPost.mockResolvedValue({ data: { accessToken: null } });
  });

  test('posts to /auth/register endpoint', async () => {
    await registerUser({
      email: 'test@example.com',
      password: 'password123',
      role: 'adopter',
    });

    expect(mockedPost).toHaveBeenCalledTimes(1);
    expect(mockedPost.mock.calls[0][0]).toBe('/auth/register');
  });

  test('maps adopter role to USER', async () => {
    await registerUser({
      email: 'test@example.com',
      password: 'password123',
      role: 'adopter',
    });

    expect(mockedPost.mock.calls[0][1]).toMatchObject({ role: 'USER' });
  });

  test('maps shelter role to SHELTER', async () => {
    await registerUser({
      email: 'shelter@example.com',
      password: 'password123',
      role: 'shelter',
    });

    expect(mockedPost.mock.calls[0][1]).toMatchObject({ role: 'SHELTER' });
  });

  test('passes email and password through unchanged', async () => {
    await registerUser({
      email: 'user@example.com',
      password: 'secret123',
      role: 'adopter',
    });

    expect(mockedPost.mock.calls[0][1]).toMatchObject({
      email: 'user@example.com',
      password: 'secret123',
    });
  });

  test('includes empty strings for optional backend fields', async () => {
    await registerUser({
      email: 'test@example.com',
      password: 'password123',
      role: 'adopter',
    });

    expect(mockedPost.mock.calls[0][1]).toMatchObject({
      firstName: '',
      lastName: '',
      phone: '',
      location: '',
    });
  });

  test('returns the response from apiClient', async () => {
    const response = { data: { accessToken: null, message: 'check email' } };
    mockedPost.mockResolvedValueOnce(response);

    const result = await registerUser({
      email: 'test@example.com',
      password: 'password123',
      role: 'adopter',
    });

    expect(result).toBe(response);
  });

  test('propagates errors from apiClient', async () => {
    const error = { type: 'client', status: 409, message: 'Email Already Exists' };
    mockedPost.mockRejectedValueOnce(error);

    await expect(
      registerUser({
        email: 'taken@example.com',
        password: 'password123',
        role: 'adopter',
      })
    ).rejects.toEqual(error);
  });
});
