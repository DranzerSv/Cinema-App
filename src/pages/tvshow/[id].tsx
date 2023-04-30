import { getTvShow } from '@/apiRequests/tvShowsRequest';
import Credits from '@/components/Credits';
import ImagesCarusel from '@/components/ImagesCarusel';
import UsersReviews from '@/components/UsersReviews';
import { ITvShow } from '@/interfaces/tvShowInterface';
import defaultProfile from '@/defaultImages/profileDefault.jpg';
import Link from 'next/link';
import HeartButton from '@/components/HeartButton';

export default function TvShowDetail({
  id,
  name,
  overview,
  voteAverage,
  genres,
  images,
  credits,
  reviews,
  posterPath,
  similar,
}: ITvShow) {
  return (
    <div>
      <div className="">
        <div
          className="w-full h-fit bg-no-repeat bg-cover mb-20 "
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${images.backdrops[1].filePath}')`,
          }}
        >
          <section className="md:w-9/12 md:mx-auto lg:flex  lg:w-full 2xl:w-6/12">
            <div className="">
              <img
                className=""
                src={`https://image.tmdb.org/t/p/original${posterPath}`}
              />
            </div>

            <div className="flex flex-col gap-3 bg-smoke  opacity-90 p-5  ">
              <h1 className="font-oswald text-crimson text-2xl">{name} </h1>
              <p className="font-lato">
                <span className="font-semibold">Rate:</span> {voteAverage}
              </p>
              <p>Genres</p>
              <p className="  font-lato md:w-96 ">
                <span className="font-semibold">Overview:</span> {overview}
              </p>
              <HeartButton id={id} type="tv" />
            </div>
          </section>
        </div>
        <div className="border-2 border-steel">
          <ImagesCarusel images={images} />
        </div>

        <Credits credits={credits} />
        <UsersReviews reviews={reviews} />
      </div>
    </div>
  );
}
interface IServerProps {
  query: { id: number };
}
export async function getServerSideProps({ query: { id } }: IServerProps) {
  const tvShow = await getTvShow(id);

  return {
    props: {
      id: tvShow.id,
      name: tvShow.name,
      overview: tvShow.overview,
      posterPath: tvShow.posterPath,
      voteAverage: tvShow.voteAverage,
      genres: tvShow.genres,
      images: tvShow.images,
      credits: tvShow.credits,
      reviews: tvShow.reviews,
      similar: tvShow.similar,
    },
  };
}
