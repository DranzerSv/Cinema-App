import { useState } from 'react';
import { useQuery } from 'react-query';
import { getTvShows } from '@/apiRequests/tvShowsRequest';
import { ITvShows } from '@/interfaces/tvShowsInterface';
import Pagination from '../Pagination';
import TvShowsFilters from './TvShowsFilters';
import Loading from '../Loading/Loading';

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
    <div className="bg-gray-200 w-11/12">
      <TvShowsFilters
        setTvShowsFilters={setTvShowsFilters}
        currentTvShowsFilters={tvShowsFilters}
      />
      <Pagination
        totalPages={data ? data.totalPages : 500}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {status == 'loading' && <Loading />}
      <section className="grid grid-cols-4 gap-20">
        {data?.results.map((result, index) => (
          <div key={index} className="w-56 bg-pink-300">
            <h3 className="font-bold">{result.name}</h3>
            <p>Date: {result.firstAirDate}</p>
            <p>Popularity: {result.popularity}</p>
            {result.genreIds.map((genre, index) => (
              <h6 key={index}>
                {genre === 18 ? 'Drama' : null}
                {genre === 10759 ? 'Action & Adventure' : null}
                {genre === 35 ? 'Comedy' : null}
              </h6>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}
