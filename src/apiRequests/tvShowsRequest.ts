import api from './api';

const URL = process.env.NEXT_PUBLIC_URL;

const getTvShows = async (
  currentPage: number,
  popularityOrder: string,
  genre: string,
  year: string
) => {
  const response = await api.get(`${URL}/discover/tv?`, {
    params: {
      sort_by: popularityOrder,
      with_genres: genre,
      first_air_date_year: year,
      page: currentPage,
      api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
  return response.data;
};

export { getTvShows };
