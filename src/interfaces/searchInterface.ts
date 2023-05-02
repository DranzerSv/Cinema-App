export interface ISearchInterface {
  page: number;
  results: Result[];
  totalPages: number;
  totalResults: number;
}

export interface Result {
  adult: boolean;
  backdropPath: string;
  id: number;
  title?: string;
  originalLanguage: string;
  originalTitle?: string;
  overview: string;
  posterPath: string;
  mediaType: string;
  genreIds: number[];
  popularity: number;
  releaseDate?: string;
  video?: boolean;
  voteAverage: number;
  voteCount: number;
  name?: string;
  originalName?: string;
  firstAirDate?: string;
  originCountry?: string[];
}
