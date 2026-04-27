import axios from 'axios';

const API_URL: string =
  import.meta.env.REACT_APP_API_URL || 'http://localhost:3000';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
