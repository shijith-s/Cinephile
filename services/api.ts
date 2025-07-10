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
  console.log(url, options);
  const response = await fetch(url, options);
  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  return data.results;
};

export { fetchMovies };
