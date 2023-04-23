import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '@/apiRequests/moviesRequest';
import { IMovies } from '@/interfaces/moviesInterface';
import Pagination from '../Pagination';
import MoviesFilters from './MoviesFilters';

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

  if (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    console.log(status);
    console.log(message);
  }

  return (
    <div>
      <MoviesFilters
        setMoviesFilters={setMovieFilters}
        currentMoviesFilters={movieFilters}
      />
      <Pagination
        totalPages={data ? data.totalPages : 500}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <section className="cardsContainer">
        {data?.results.map((result, index) => (
          <div key={index} className="card">
            <h3>{result.title}</h3>
            <p>Date: {result.releaseDate}</p>
            <p>Popularity: {result.popularity}</p>
            <p>Adult {result.adult ? 'Yes' : 'No'} </p>
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
