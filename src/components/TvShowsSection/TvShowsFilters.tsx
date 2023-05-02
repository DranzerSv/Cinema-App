import ITvShowsFilters from '@/interfaces/tvShowsFiltersInterface';

export default function TvShowsFilters({
  setPage,
  setTvShowsFilters,
  currentTvShowsFilters,
}: ITvShowsFilters) {
  //
  const updateMoviesFilters =
    (propertyName: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPage(1);
      setTvShowsFilters({
        ...currentTvShowsFilters,
        [propertyName]: event.target.value,
      });
    };

  const changePopularityOrder = updateMoviesFilters('popularityOrder');
  const changeGenre = updateMoviesFilters('genre');
  const changeYear = updateMoviesFilters('year');

  return (
    <div className=" py-5 lg:flex-row lg:justify-end">
      <section className="flex flex-col w-48 md:flex-row md:w-4/6 lg:w-5/6 gap-3 mx-auto font-oswald">
        <label className="flex flex-col gap-2">
          <span className="text-crimson">Popularity</span>
          <select onChange={changePopularityOrder} className="font-lato">
            <option value="popularity.desc">Most Popular</option>
            <option value="popularity.asc">Least Popular</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-crimson">Genre</span>
          <select onChange={changeGenre} className="font-lato">
            <option value="">Any Genre</option>
            <option value="18">Drama</option>
            <option value="10759">Action & Adventure</option>
            <option value="35">Comedy</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-crimson">Year</span>
          <select onChange={changeYear} className="font-lato">
            <option value="">Any Year</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </label>
      </section>
    </div>
  );
}
