import { getMovie } from '@/apiRequests/moviesRequest';
import Credits from '@/components/Credits';
import ImagesCarusel from '@/components/ImagesCarusel';
import UsersReviews from '@/components/UsersReviews';
import { IMovie } from '@/interfaces/movieInterface';
import Link from 'next/link';
export default function MovieDetail({
  title,
  overview,
  voteAverage,
  genres,
  images,
  credits,
  reviews,
  similar,
}: IMovie) {
  return (
    <div className="bg-indigo-500 h-fit">
      <section className="bg-pink-500">
        <p>Title: {title} </p>
        <p>{voteAverage}</p>
      </section>

      <p className="bg-green-200">Overview: {overview} </p>

      <ImagesCarusel images={images} />
      <Credits credits={credits} />
      <UsersReviews reviews={reviews} />
    </div>
  );
}

interface IserverProps {
  query: { id: number };
}

export async function getServerSideProps({ query: { id } }: IserverProps) {
  const movie = await getMovie(id);

  return {
    props: {
      title: movie.title,
      overview: movie.overview,
      voteAverage: movie.voteAverage,
      genres: movie.genres,
      images: movie.images,
      credits: movie.credits,
      reviews: movie.reviews,
      similar: movie.similar,
    },
  };
}
