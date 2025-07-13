import TMDB_CONFIG from "./TMDB_config";

const getURL = (endPoint: string, query: string | null, page: number) => {
  const encodedQuery = query ? `&query=${encodeURIComponent(query)}` : "";
  const url = `${TMDB_CONFIG.BASE_URL}${endPoint}?&page=${page}${encodedQuery}`;
  return url;
};

// This function is used to fetch movies from the TMDB API
// Query is the search query, if it is null, it will fetch the popular movies
const fetchMovies = async (query: string | null, page: number) => {
  const endPoint = query
    ? TMDB_CONFIG.endpoints.search
    : TMDB_CONFIG.endpoints.discover;
  const url = getURL(endPoint, query, page);

  const options = {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  return data;
};

// This function is used to fetch movie details from the TMDB API
// MovieId is the id of the movie to fetch details for
const fetchMovieDetails = async (movieId: string | null) => {
  if (!movieId) {
    throw new Error("Movie ID is required");
  }
  const url = `${TMDB_CONFIG.BASE_URL}/movie/${movieId}`;
  const options = {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  const data = await response.json();
  return data;
};

// This function is used to get the poster url from the TMDB API
// PosterPath is the path of the poster to get the url for
const getMoviePosterUrl = (posterPath: string) => {
  return posterPath
    ? `${TMDB_CONFIG.IMAGE_BASE_URL}${posterPath}`
    : TMDB_CONFIG.NO_IMAGE_URL;
};

export { fetchMovies, getMoviePosterUrl, fetchMovieDetails };
