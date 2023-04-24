import { Dispatch, SetStateAction } from 'react';
export default interface IMoviesFilters {
  setMoviesFilters: Dispatch<
    SetStateAction<{
      popularityOrder: string;
      certification: string;
      genre: string;
      year: string;
    }>
  >;
  currentMoviesFilters: {
    popularityOrder: string;
    certification: string;
    genre: string;
    year: string;
  };
}
