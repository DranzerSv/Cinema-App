export interface ITvShow {
  adult: boolean;
  backdropPath: string;
  createdBy: CreatedBy[];
  episodeRunTime: number[];
  firstAirDate: string;
  genres: Genre[];
  homepage: string;
  id: number;
  inProduction: boolean;
  languages: string[];
  lastAirDate: string;
  lastEpisodeToAir: LastEpisodeToAir;
  name: string;
  nextEpisodeToAir: NextEpisodeToAir;
  networks: Network[];
  numberOfEpisodes: number;
  numberOfSeasons: number;
  originCountry: string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies: ProductionCompany[];
  productionCountries: ProductionCountry[];
  seasons: Season[];
  spokenLanguages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  voteAverage: number;
  voteCount: number;
  reviews: Reviews;
  credits: ICredits;
  images: Images;
  similar: Similar;
}

export interface CreatedBy {
  id: number;
  creditId: string;
  name: string;
  gender: number;
  profilePath: string | null;
}

export interface Genre {
  id: number;
  name: string;
}

export interface LastEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
  airDate: string;
  episodeNumber: number;
  productionCode: string;
  runtime: number;
  seasonNumber: number;
  showId: number;
}

export interface NextEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
  airDate: string;
  episodeNumber: number;
  productionCode: string;
  runtime: number;
  seasonNumber: number;
  showId: number;
}

export interface Network {
  id: number;
  logoPath: string;
  name: string;
  originCountry: string;
}

export interface ProductionCompany {
  id: number;
  logoPath: string;
  name: string;
  originCountry: string;
}

export interface ProductionCountry {
  iso31661: string;
  name: string;
}

export interface Season {
  airDate: string;
  episodeCount: number;
  id: number;
  name: string;
  overview: string;
  posterPath: string;
  seasonNumber: number;
}

export interface SpokenLanguage {
  englishName: string;
  iso6391: string;
  name: string;
}

export interface Reviews {
  page: number;
  results: [];
  totalPages: number;
  totalResults: number;
}

export interface ICredits {
  cast: ICast[];
  crew: ICrew[];
}

export interface ICast {
  adult: boolean;
  gender: number;
  id: number;
  knownForDepartment: string;
  name: string;
  originalName: string;
  popularity: number;
  profilePath?: string;
  character: string;
  creditId: string;
  order: number;
}

export interface ICrew {
  adult: boolean;
  gender: number;
  id: number;
  knownForDepartment: string;
  name: string;
  originalName: string;
  popularity: number;
  profilePath: string | null;
  creditId: string;
  department: string;
  job: string;
}
export interface Images {
  backdrops: IBackdrop[];
  posters: Poster[];
}

export interface IBackdrop {
  aspectRatio: number;
  height: number;
  iso6391: string;
  filePath: string;
  voteAverage: number;
  voteCount: number;
  width: number;
}

export interface Poster {
  aspectRatio: number;
  height: number;
  iso6391: string;
  filePath: string;
  voteAverage: number;
  voteCount: number;
  width: number;
}

export interface Similar {
  page: number;
  results: Result[];
  totalPages: number;
  totalResults: number;
}

export interface Result {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  originCountry: string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularity: number;
  posterPath: string;
  firstAirDate: string;
  name: string;
  voteAverage: number;
  voteCount: number;
}
