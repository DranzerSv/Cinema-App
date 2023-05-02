import { useState } from 'react';
import { useContext } from 'react';
import { useQueries } from 'react-query';
import { getFavorites } from '@/apiRequests/loginRequests';
import MoviesGrid from '../MoviesGrid';
import TvShowsGrid from '../TvShowsGrid';
import Session from '@/components/Context';
import Pagination from '../Pagination';
import Loading from '../Loading';
import NoResults from '../NoResults';

function Favorites() {
  const { sessionValue } = useContext(Session);
  const [currentMoviesPage, setCurrentMoviesPage] = useState(1);
  const [currentShowsPage, setCurrentShowsPage] = useState(1);
  const queries = [
    {
      queryKey: ['movies', currentMoviesPage],
      queryFn: () => getFavorites(sessionValue, currentMoviesPage, 'movies'),
    },
    {
      queryKey: ['tv', currentMoviesPage],
      queryFn: () => getFavorites(sessionValue, currentMoviesPage, 'tv'),
    },
  ];
  const [moviesQuery, tvQuery] = useQueries(queries);

  return (
    <div>
      <div className="flex justify-center items-center mx-auto l mt-5">
        <p className="font-oswald text-crimson text-4xl">Favorite Movies</p>
      </div>

      <Pagination
        totalPages={moviesQuery.data ? moviesQuery.data.totalPages : 500}
        currentPage={currentMoviesPage}
        setCurrentPage={setCurrentMoviesPage}
      />
      {moviesQuery.status == 'loading' && <Loading />}
      {moviesQuery.data?.results.length === 0 && <NoResults />}

      <MoviesGrid data={moviesQuery.data} />
      <div className="flex justify-center items-center mx-auto l">
        <p className="font-oswald text-crimson text-4xl">Favorite TvShows</p>
      </div>

      <Pagination
        totalPages={tvQuery.data ? tvQuery.data.totalPages : 500}
        currentPage={currentShowsPage}
        setCurrentPage={setCurrentShowsPage}
      />
      <TvShowsGrid data={tvQuery.data} />
    </div>
  );
}

export default Favorites;
