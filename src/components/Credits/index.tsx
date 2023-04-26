import dynamic from 'next/dynamic';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ICredits, ICast, ICrew } from '@/interfaces/movieInterface';
interface ICreditsProps {
  credits: ICredits;
}

export default function Credits({ credits }: ICreditsProps) {
  const responsive = {
    0: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1440: { items: 5 },
  };
  const AliceCarousel = dynamic(() => import('react-alice-carousel'), {
    ssr: false,
  });
  return (
    <div className="">
      <div className=" mx-auto w-5/6 flex flex-col items-center gap-3  ">
        <h3 className="font-bold text-3xl font-oswald text-crimson">Cast</h3>

        <AliceCarousel
          mouseTracking
          responsive={responsive}
          items={credits.cast
            .slice(0, 8)
            .map((person: ICast, index: number) => (
              <div key={index} className="mx-2">
                <img
                  src={`https://image.tmdb.org/t/p/w185${person.profilePath}`}
                />
                <h3 className="font-oswald text-fire text-lg">{person.name}</h3>
                <p className="font-lato text-sm">{person.knownForDepartment}</p>
              </div>
            ))}
        />
      </div>
      <div className=" mx-auto w-5/6 flex flex-col items-center gap-3 ">
        <h3 className="font-bold text-3xl font-oswald text-crimson">Crew</h3>

        <AliceCarousel
          mouseTracking
          responsive={responsive}
          items={credits.crew
            .slice(0, 8)
            .map((person: ICrew, index: number) => (
              <div key={index} className="mx-2">
                <img
                  src={`https://image.tmdb.org/t/p/w185${person.profilePath}`}
                />
                <h3 className="font-oswald text-fire text-lg">{person.name}</h3>
                <p className="font-lato text-sm">{person.knownForDepartment}</p>
              </div>
            ))}
        />
      </div>
    </div>
  );
}
