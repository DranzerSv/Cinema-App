import { useState } from 'react';
import { useQuery } from 'react-query';
import { getTvShows } from '@/apiRequests/tvShowsRequest';
import { ITvShows } from '@/interfaces/tvShowsInterface';
import Pagination from '../Pagination';
import TvShowsFilters from './TvShowsFilters';
import Loading from '../Loading';
import NoResults from '../NoResults';
import TvShowsGrid from '../TvShowsGrid';

export default function TvShowsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tvShowsFilters, setTvShowsFilters] = useState({
    popularityOrder: 'popularity.desc',
    genre: '',
    year: '',
  });
  const { data, status } = useQuery<ITvShows>(
    ['tvShows', currentPage, tvShowsFilters],
    () =>
      getTvShows(
        currentPage,
        tvShowsFilters.popularityOrder,
        tvShowsFilters.genre,
        tvShowsFilters.year
      )
  );

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
      {data?.results.length === 0 && <NoResults />}
      <TvShowsGrid data={data} />
    </div>
  );
}
