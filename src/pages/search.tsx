import { useState } from 'react';
import { useQuery } from 'react-query';
import { debounce } from 'lodash';
import { getProductions } from '@/apiRequests/searchRequest';
import { ISearchInterface } from '@/interfaces/searchInterface';
import Pagination from '@/components/Pagination';
import Loading from '@/components/Loading';
import Link from 'next/link';
import Image from 'next/image';
import cardDefault from '@/assets/cardDefault.png';
import Genres from '@/components/Genres';
import SearchBar from '@/components/SearchBar';
import NoResults from '@/components/NoResults';

function SearchPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('avengers');
  const { data, status, error } = useQuery<ISearchInterface>(
    ['productions', currentPage, search],
    () => getProductions(currentPage, search)
  );

  if (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    console.log(status);
    console.log(message);
  }
  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  }, 500);
  console.log(data);
  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <Pagination
        totalPages={data ? data.totalPages : 500}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {status == 'loading' && <Loading />}
      {data?.results.length === 0 && <NoResults />}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data?.results.map((result, index) => (
          <Link
            href={`/${result.mediaType === 'movie' ? 'movie' : 'tvshow'}/${
              result.id
            }`}
            key={index}
            className="mb-14"
          >
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
                  {result.title ? result.title : result.name}
                </h3>
              </div>

              <p className="font-lato">
                <span className="font-semibold">Type: </span>
                {result.mediaType.toUpperCase()}
              </p>

              <p className="font-lato">
                <span className="font-semibold">Popularity: </span>
                {result.popularity.toFixed(0)}
              </p>
            </div>
          </Link>
        ))}
      </section>
      <Pagination
        totalPages={data ? data.totalPages : 500}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default SearchPage;
