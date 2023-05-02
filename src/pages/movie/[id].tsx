import { getMovie } from '@/apiRequests/moviesRequest';
import Credits from '@/components/Credits';
import ImagesCarusel from '@/components/ImagesCarusel';
import UsersReviews from '@/components/UsersReviews';
import { IMovie } from '@/interfaces/movieInterface';
import HeartButton from '@/components/HeartButton';
import { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import cardDefault from '@/assets/cardDefault.png';

export default function MovieDetail({
  id,
  title,
  overview,
  voteAverage,
  budget,
  revenue,
  releaseDate,
  genres,
  images,
  credits,
  reviews,
  posterPath,
  similar,
}: IMovie) {
  const image =
    images.backdrops[0]?.filePath || '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg';
  return (
    <div className=" w-full">
      <div
        className="w-full h-fit bg-no-repeat bg-cover mb-20 "
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${image}')`,
        }}
      >
        <section className="md:w-9/12 md:mx-auto lg:flex  lg:w-full 2xl:w-6/12">
          <div className="">
            <Image
              src={
                posterPath
                  ? `https://image.tmdb.org/t/p/w500${posterPath}`
                  : cardDefault
              }
              width={500}
              height={700}
              alt={title + ' photo'}
            />
          </div>

          <div className="flex flex-col gap-3 bg-smoke  opacity-90 p-5  ">
            <h1 className="font-oswald text-crimson text-2xl">{title} </h1>
            <p className="font-lato">
              <span className="font-semibold">Rate:</span> {voteAverage}
            </p>
            <p className="font-lato">
              <span className="font-semibold">Budget: </span>
              {budget.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
            <p className="font-lato">
              <span className="font-semibold">Revenue: </span>
              {revenue.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
            <p className="font-lato">
              <span className="font-semibold">Release Date:</span> {releaseDate}
            </p>

            <p className="  font-lato md:w-96 ">
              <span className="font-semibold">Overview:</span> {overview}
            </p>

            <HeartButton id={id} type="movie" />
          </div>
        </section>
      </div>

      <div className="">
        <ImagesCarusel images={images} />
      </div>
      <Toaster />

      <Credits credits={credits} />
      <UsersReviews reviews={reviews} />
    </div>
  );
}

interface IServerProps {
  query: { id: number };
}

export async function getServerSideProps({ query: { id } }: IServerProps) {
  const movie = await getMovie(id);

  return {
    props: {
      id: movie.id,
      title: movie.title,
      budget: movie.budget,
      revenue: movie.revenue,
      releaseDate: movie.releaseDate,
      overview: movie.overview,
      posterPath: movie.posterPath,
      voteAverage: movie.voteAverage,
      genres: movie.genres,
      images: movie.images,
      credits: movie.credits,
      reviews: movie.reviews,
      similar: movie.similar,
    },
  };
}
