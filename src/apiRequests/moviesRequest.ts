import api from './api';

const URL = process.env.NEXT_PUBLIC_URL;

const getMovies = async () => {
  const response = await api.get(`${URL}/movie/popular?language=en-US`, {
    params: {
      language: 'en-US',
      api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
  return response.data;
};

export { getMovies };
