import { ITvShows } from '@/interfaces/tvShowsInterface';
import Link from 'next/link';
import Image from 'next/image';
import Genres from '../Genres';
import cardDefault from '@/assets/cardDefault.png';

interface ITvShowsGridProps {
  data: ITvShows | undefined;
}

function TvShowsGrid({ data }: ITvShowsGridProps) {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
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

export default TvShowsGrid;
