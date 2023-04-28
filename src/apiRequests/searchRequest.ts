import api from './api';

const URL = 'https://api.themoviedb.org/3';

const getProductions = async (currentPage: number, search: string) => {
  const response = await api.get(`${URL}/search/multi?`, {
    params: {
      query: search,
      page: currentPage,
      api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
  return response.data;
};

export { getProductions };
