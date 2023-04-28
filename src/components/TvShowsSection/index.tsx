import { useState } from 'react';
import { useQuery } from 'react-query';
import { getTvShows } from '@/apiRequests/tvShowsRequest';
import { ITvShows } from '@/interfaces/tvShowsInterface';
import Pagination from '../Pagination';
import TvShowsFilters from './TvShowsFilters';
import Loading from '../Loading';
import Link from 'next/link';
import Image from 'next/image';
import cardDefault from '@/assets/cardDefault.png';
import Genres from '../Genres';

export default function TvShowsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tvShowsFilters, setTvShowsFilters] = useState({
    popularityOrder: 'popularity.desc',
    genre: '',
    year: '',
  });
  const { data, status, error } = useQuery<ITvShows>(
    ['tvShows', currentPage, tvShowsFilters],
    () =>
      getTvShows(
        currentPage,
        tvShowsFilters.popularityOrder,
        tvShowsFilters.genre,
        tvShowsFilters.year
      )
  );

  if (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    console.log(status);
    console.log(message);
  }

  return (
    <div className="bg-smoke w-full mx-auto mt-20">
      <TvShowsFilters
        setPage={setCurrentPage}
        setTvShowsFilters={setTvShowsFilters}
        currentTvShowsFilters={tvShowsFilters}
      />
      <Pagination
        totalPages={data ? data.totalPages : 500}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {status == 'loading' && <Loading />}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data?.results.map((result, index) => (
          <Link href={`/tvshow/${result.id}`} key={index} className="mb-14">
            <div className=" flex flex-col gap-2 w-72 md:w-64 mx-auto">
              <Image
                src={
                  result.posterPath
                    ? `https://image.tmdb.org/t/p/w500${result.posterPath}`
                    : cardDefault
                }
                width={500}
                height={700}
                alt={result.name + ' photo'}
              />
              <div className=" h-16">
                <h3 className="font-oswald text-crimson font-semibold text-600 text-xl">
                  {result.name}
                </h3>
              </div>
              <p className="font-lato">
                <span className="font-semibold">Date: </span>
                {result.firstAirDate}
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
