import { Dispatch, SetStateAction } from 'react';
export default interface ITvShowsFilters {
  setTvShowsFilters: Dispatch<
    SetStateAction<{
      popularityOrder: string;
      genre: string;
      year: string;
    }>
  >;
  currentTvShowsFilters: {
    popularityOrder: string;
    genre: string;
    year: string;
  };
}
