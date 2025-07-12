import TMDB_CONFIG from "./TMDB_config";

const getURL = (endPoint: string, query: string | null) => {
  const encodedQuery = query ? encodeURIComponent(query) : "";
  const url = `${TMDB_CONFIG.BASE_URL}${endPoint}?${encodedQuery}`;
  return url;
};

const fetchMovies = async (query: string | null) => {
  const endPoint = query
    ? TMDB_CONFIG.endpoints.search
    : TMDB_CONFIG.endpoints.discover;
  const url = getURL(endPoint, query);

  const options = {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  return data.results;
};

const getMoviePosterUrl = (posterPath: string) => {
  return posterPath
    ? `${TMDB_CONFIG.IMAGE_BASE_URL}${posterPath}`
    : TMDB_CONFIG.NO_IMAGE_URL;
};

export { fetchMovies, getMoviePosterUrl };
