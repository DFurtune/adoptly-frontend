import axios from 'axios';

const API_URL: string =
  process.env.VITE_API_URL || 'http://localhost:3000';

export type ApiError = {
  type: 'network' | 'server' | 'client';
  status?: number;
  message: string;
  data?: unknown;
};

export const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'type' in error &&
    'message' in error
  );
};

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      return Promise.reject<ApiError>({
        type: 'network',
        message: 'Network error. Please check your connection.',
      });
    }
    if (error.response.status >= 500) {
      return Promise.reject<ApiError>({
        type: 'server',
        status: error.response.status,
        message: 'Server error. Please try again later.',
      });
    }
    if (error.response.status === 401) {
      // TODO: handle expired token (clear storage + redirect to login)
    }
    return Promise.reject<ApiError>({
      type: 'client',
      status: error.response.status,
      message: error.response.data?.message || 'An error occurred.',
      data: error.response.data,
    });
  }
);
