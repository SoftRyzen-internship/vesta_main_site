import { request } from 'graphql-request';

export const fetchData = async <T>(query: string): Promise<T> => {
  try {
    const data = await request<T>(
      'https://vesta-admin.onrender.com/graphql',
      query,
    );
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
