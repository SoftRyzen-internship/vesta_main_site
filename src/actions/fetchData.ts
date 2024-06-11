import { request } from 'graphql-request';

export const fetchData = async (query: string) => {
  try {
    const data = await request('https://vesta-admin.onrender.com/graphql', query);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};