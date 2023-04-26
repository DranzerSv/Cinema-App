export interface IMovie {
  adult: boolean;
  backdropPath: string;
  belongsToCollection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdbId: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies: ProductionCompany[];
  productionCountries: ProductionCountry[];
  releaseDate: string;
  revenue: number;
  runtime: number;
  spokenLanguages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
  reviews: IReviews;
  similar: Similar;
  credits: ICredits;
  images: Images;
}

export interface Genre {
  id: number;
  name: string;
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

export interface SpokenLanguage {
  englishName: string;
  iso6391: string;
  name: string;
}

export interface IReviews {
  page: number;
  results: Result[];
  totalPages: number;
  totalResults: number;
}

export interface Result {
  author: string;
  authorDetails: AuthorDetails;
  content: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  url: string;
}

export interface AuthorDetails {
  name: string;
  username: string;
  avatarPath: string;
  rating: number;
}

export interface Similar {
  page: number;
  results: Result2[];
  totalPages: number;
  totalResults: number;
}

export interface Result2 {
  adult: boolean;
  backdropPath?: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath?: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
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
  profilePath?: string;
  creditId: string;
  department: string;
  job: string;
}

export interface Images {
  backdrops: IBackdrop[];
  logos: Logo[];
  posters: Poster[];
}

export interface IBackdrop {
  aspectRatio: number;
  height: number;
  iso6391?: string;
  filePath: string;
  voteAverage: number;
  voteCount: number;
  width: number;
}

export interface Logo {
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
  iso6391?: string;
  filePath: string;
  voteAverage: number;
  voteCount: number;
  width: number;
}
