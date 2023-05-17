import { useState } from 'react';
import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { useQueries } from 'react-query';
import { getFavorites } from '@/apiRequests/loginRequests';
import { IMovies } from '@/interfaces/moviesInterface';
import Session from '@/components/Context';
import Pagination from '../Pagination';
import Loading from '../Loading';
import NoResults from '../NoResults';
import FavoriteCard from './FavoriteCard';
import { ITvShows } from '@/interfaces/tvShowsInterface';
import FavoriteList from './FavoriteList';

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

  const moviesData: IMovies = moviesQuery.data;
  const tvShowsData: ITvShows = tvQuery.data;

  return (
    <div className=" min-h-screen">
      <div className="flex justify-center items-center mx-auto l mt-5">
        <p className="font-oswald text-crimson text-4xl">Favorite Movies</p>
      </div>

      <FavoriteList>
        {moviesData?.results.map((result, index) => (
          <FavoriteCard
            key={index}
            resourceType="movie"
            resourceId={result.id}
            resourceName={result.title}
            imagePath={result.posterPath}
          />
        ))}
      </FavoriteList>
      <Pagination
        totalPages={moviesData ? moviesData.totalPages : 500}
        currentPage={currentMoviesPage}
        setCurrentPage={setCurrentMoviesPage}
      />

      <div className="flex justify-center items-center mx-auto l mt-10">
        <p className="font-oswald text-crimson text-4xl">Favorite TvShows</p>
      </div>
      <FavoriteList>
        {tvShowsData?.results.map((result, index) => (
          <FavoriteCard
            key={index}
            resourceType="tv"
            resourceId={result.id}
            resourceName={result.name}
            imagePath={result.posterPath}
          />
        ))}
      </FavoriteList>
      <Pagination
        totalPages={tvShowsData ? tvShowsData.totalPages : 500}
        currentPage={currentMoviesPage}
        setCurrentPage={setCurrentMoviesPage}
      />
      <Toaster />
    </div>
  );
}

export default Favorites;
