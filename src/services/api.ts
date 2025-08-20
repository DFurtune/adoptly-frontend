const API_URL: string =
  import.meta.env.REACT_APP_API_URL || 'http://localhost:3000';

export const fetchData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: Response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
