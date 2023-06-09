import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '@/apiRequests/moviesRequest';
import { IMovies } from '@/interfaces/moviesInterface';
import MoviesGrid from '../MoviesGrid';
import Pagination from '../Pagination';
import MoviesFilters from './MoviesFilters';
import Loading from '../Loading';
import NoResults from '../NoResults';

export default function MoviesSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movieFilters, setMovieFilters] = useState({
    popularityOrder: 'popularity.desc',
    certification: '',
    genre: '',
    year: '',
  });
  const { data, status } = useQuery<IMovies>(
    ['movies', currentPage, movieFilters],
    () =>
      getMovies(
        currentPage,
        movieFilters.popularityOrder,
        movieFilters.certification,
        movieFilters.genre,
        movieFilters.year
      )
  );

  return (
    <div className="w-full mx-auto flex flex-col mt-10">
      <p className="text-fire text-5xl font-oswald m-auto" id="movies">
        Movies Section
      </p>
      <MoviesFilters
        setPage={setCurrentPage}
        setMoviesFilters={setMovieFilters}
        currentMoviesFilters={movieFilters}
      />
      <Pagination
        totalPages={data ? data.totalPages : 500}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {status == 'loading' && <Loading />}
      {data?.results.length === 0 && <NoResults />}
      <MoviesGrid data={data} />
    </div>
  );
}
