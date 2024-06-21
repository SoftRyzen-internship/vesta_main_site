import { request } from 'graphql-request';

const BASE_ADMIN_URL = process.env.NEXT_PUBLIC_BASE_ADMIN_URL as string;

export const fetchData = async <T>(query: string): Promise<T> => {
  try {
    const data = await request<T>(BASE_ADMIN_URL, query);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
