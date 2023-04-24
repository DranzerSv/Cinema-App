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

const getMovie = async (id: number) => {
  const response = await api.get(`${URL}/movie/${id}?`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      append_to_response: 'reviews,similar,credits,images',
    },
  });
  return response.data;
};

export { getMovies, getMovie };
