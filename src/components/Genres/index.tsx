interface IGenresProps {
  genres: number[];
}

function Genres({ genres }: IGenresProps) {
  const genreNames: { [key: number]: string } = {
    18: 'Drama',
    28: 'Action',
    35: 'Comedy',
    10759: 'Action & Adventure',
  };

  return (
    <div className="font-lato flex flex-row flex-wrap gap-2 justify-start">
      {genres
        .filter((genre) => genreNames.hasOwnProperty(genre))
        .map((genre, index) => (
          <h6 key={index} className="border-b-2 border-fire p-1">
            {genreNames[genre]}
          </h6>
        ))}
    </div>
  );
}

export default Genres;
