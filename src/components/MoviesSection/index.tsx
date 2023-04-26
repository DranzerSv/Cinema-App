import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '@/apiRequests/moviesRequest';
import { IMovies } from '@/interfaces/moviesInterface';
import Pagination from '../Pagination';
import MoviesFilters from './MoviesFilters';
import Loading from '../Loading/Loading';
import { stat } from 'fs';
import Link from 'next/link';
import Genres from '../Genres';

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
    <div className="bg-smoke w-full mx-auto">
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

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {data?.results.map((result, index) => (
          <Link href={`/movie/${result.id}`} key={index} className="mb-14">
            <div className=" flex flex-col gap-2 w-72 md:w-64 mx-auto">
              <img
                src={`https://image.tmdb.org/t/p/w500${result.posterPath}`}
              />
              <div className=" h-16">
                <h3 className="font-oswald text-crimson font-semibold text-600 text-xl">
                  {result.title}
                </h3>
              </div>

              <p className="font-lato">
                <span className="font-semibold">Date: </span>
                {result.releaseDate}
              </p>
              <p className="font-lato">
                <span className="font-semibold">Popularity: </span>
                {result.popularity.toFixed(0)}
              </p>

              <Genres genres={result.genreIds} />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
