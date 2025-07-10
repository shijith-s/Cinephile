const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
  },
  endpoints: {
    discover: "/discover/movie?sort_by=popularity.desc",
    search: "/search/movie",
  },
};

export default TMDB_CONFIG;
