import api from './api';

const URL = process.env.NEXT_PUBLIC_URL;

const getMovies = async (
  currentPage: number,
  popularityOrder: string,
  certification: string,
  genre: string,
  year: string
) => {
  const response = await api.get(`${URL}/discover/movie?`, {
    params: {
      sort_by: popularityOrder,
      certification_country: 'US',
      certification: certification,
      with_genres: genre,
      year: year,
      page: currentPage,
      api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
  return response.data;
};

export { getMovies };
