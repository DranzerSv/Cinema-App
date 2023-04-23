import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '@/apiRequests/moviesRequest';
import { IMovies } from '@/interfaces/moviesInterface';
import Pagination from '../Pagination';
import MoviesFilters from './MoviesFilters';
import Loading from '../Loading/Loading';
import { stat } from 'fs';

export default function MoviesGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movieFilters, setMovieFilters] = useState({
    popularityOrder: 'popularity.desc',
    certification: '',
    genre: '',
    year: '',
  });
  const { data, status, error } = useQuery<IMovies>(
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
  console.log(status);
  if (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    console.log(status);
    console.log(message);
  }

  return (
    <div className="bg-gray-200 w-11/12">
      <MoviesFilters
        setMoviesFilters={setMovieFilters}
        currentMoviesFilters={movieFilters}
      />
      <Pagination
        totalPages={data ? data.totalPages : 500}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {status == 'loading' && <Loading />}

      <section className="grid grid-cols-4 gap-20">
        {data?.results.map((result, index) => (
          <div key={index} className="w-56 bg-cyan-300">
            <h3 className="font-bold">{result.title}</h3>
            <p>Date: {result.releaseDate}</p>
            <p>Popularity: {result.popularity}</p>
            {result.genreIds.map((genre, index) => (
              <h6 key={index}>
                {genre === 18 ? 'Drama' : null}
                {genre === 28 ? 'Action' : null}
                {genre === 35 ? 'Comedy' : null}
              </h6>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}
