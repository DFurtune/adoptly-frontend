import { apiClient } from './api';

export const registerUser = async (data: {
  email: string;
  password: string;
  role: 'adopter' | 'shelter';
}) => {
  const response = await apiClient.post('/auth/register', {
    email: data.email,
    password: data.password,
    role: data.role === 'shelter' ? 'SHELTER' : 'USER',
    // Backend returns 409 if any of these fields are missing
    firstName: '',
    lastName: '',
    phone: '',
    location: '',
  });
  return response;
};
