export interface ITvShows {
  page: number;
  results: Result[];
  totalPages: number;
  totalResults: number;
}

export interface Result {
  firstAirDate: string;
  genreIds: number[];
  id: number;
  name: string;
  originCountry: string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularity: number;
  posterPath: string;
  voteAverage: number;
  voteCount: number;
}
