import { request } from 'graphql-request';

export const fetchData = async <T>(query: string): Promise<T> => {
  try {
    const data = await request(
      'https://vesta-admin.onrender.com/graphql',
      query,
    );
    return data as T;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
