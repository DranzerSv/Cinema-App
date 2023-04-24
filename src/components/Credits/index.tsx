import { ICredits, ICast, ICrew } from '@/interfaces/movieInterface';

interface ICreditsProps {
  credits: ICredits;
}

export default function Credits({ credits }: ICreditsProps) {
  return (
    <div className="bg-zinc-200">
      <div className="bg-lime-200">
        <h1 className="font-bold">Cast</h1>
        {credits.cast.slice(0, 5).map((person: ICast, index: number) => (
          <div key={index}>
            <img src={`https://image.tmdb.org/t/p/w45${person.profilePath}`} />
            <p>{person.name}</p>
          </div>
        ))}
      </div>
      <div className="bg-red-200">
        <h1 className="font-bold">Crew</h1>
        {credits.crew.slice(0, 5).map((person: ICrew, index: number) => (
          <div key={index}>
            <img src={`https://image.tmdb.org/t/p/w45${person.profilePath}`} />
            <p>{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
