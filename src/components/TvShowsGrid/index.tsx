import { useState } from 'react';
import { useQuery } from 'react-query';
import { getTvShows } from '@/apiRequests/tvShowsRequest';
import { ITvShows } from '@/interfaces/tvShowsInterface';
import Pagination from '../Pagination';
import TvShowsFilters from './TvShowsFilters';

export default function TvShowsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tvShowsFilters, setTvShowsFilters] = useState({
    popularityOrder: 'popularity.desc',
    genre: '18',
    year: '2017',
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
  console.log(tvShowsFilters);
  if (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    console.log(status);
    console.log(message);
  }

  return (
    <div>
      <TvShowsFilters
        setTvShowsFilters={setTvShowsFilters}
        currentTvShowsFilters={tvShowsFilters}
      />
      <Pagination
        totalPages={data ? data.totalPages : 500}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <section className="cardsContainer">
        {data?.results.map((result, index) => (
          <div key={index} className="card">
            <h3>{result.name}</h3>
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
