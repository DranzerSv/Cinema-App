import { useQuery } from 'react-query';
import { getMovies } from '@/apiRequests/moviesRequest';
import { IMovies } from '@/interfaces/moviesInterface';

export default function MoviesGrid() {
  const { data, status, error } = useQuery<IMovies>(['movies'], getMovies);
  if (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    console.log(status);
    console.log(message);
  }
  return (
    <div>
      {data?.results.map((result, index) => (
        <div key={index}>
          <p>{result.title}</p>
          <p>{result.releaseDate}</p>
        </div>
      ))}
    </div>
  );
}
