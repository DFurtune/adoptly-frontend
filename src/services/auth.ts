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
    firstName: '',
    lastName: '',
    phone: '',
    location: '',
  });
  return response;
};
