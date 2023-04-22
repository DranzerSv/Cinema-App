import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '@/apiRequests/moviesRequest';
import { IMovies } from '@/interfaces/moviesInterface';
import Pagination from '../Pagination';

export default function MoviesGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, status, error } = useQuery<IMovies>(
    ['movies', currentPage],
    () => getMovies(currentPage)
  );
  console.log(data?.totalPages);
  if (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    console.log(status);
    console.log(message);
  }
  return (
    <div>
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
          </div>
        ))}
      </section>
    </div>
  );
}
