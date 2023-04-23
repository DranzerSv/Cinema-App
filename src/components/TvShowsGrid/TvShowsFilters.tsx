import ITvShowsFilters from '@/interfaces/tvShowsFiltersInterface';

export default function TvShowsFilters({
  setTvShowsFilters,
  currentTvShowsFilters,
}: ITvShowsFilters) {
  //
  const updateMoviesFilters =
    (propertyName: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
      setTvShowsFilters({
        ...currentTvShowsFilters,
        [propertyName]: event.target.value,
      });
    };

  const changePopularityOrder = updateMoviesFilters('popularityOrder');
  const changeGenre = updateMoviesFilters('genre');
  const changeYear = updateMoviesFilters('year');

  return (
    <section className="filters">
      <select onChange={changePopularityOrder}>
        <option value="popularity.desc">Most Popular</option>
        <option value="popularity.asc">Least Popular</option>
      </select>
      <select onChange={changeGenre}>
        <option value="18">Drama</option>
        <option value="10759">Action & Adventure</option>
        <option value="35">Comedy</option>
      </select>
      <select onChange={changeYear}>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </section>
  );
}
