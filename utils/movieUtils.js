const MILLION_VALUE = 1000000;
const getMovieDetails = (movie) => {
  if (!movie) return {};

  const releaseYear = new Date(movie.release_date).getFullYear();
  const rating = Math.round(movie.vote_average ?? 0);
  return {
    releaseYear,
    rating,
    title: movie.title,
    posterPath: movie.poster_path,
    duration: movie.runtime,
    voteCount: movie.vote_count,
    overview: movie.overview,
    genres: getGenres(movie.genres),
    budget: getFinancialText(movie.budget),
    revenue: getFinancialText(movie.revenue),
    productionCompanies: getProductionCompanies(movie.production_companies),
  };
};

const getGenres = (genres) => {
  return genres.map((genre) => genre.name).join(" - ");
};
const getFinancialText = (value) => {
  const millionValue = Math.round(value / MILLION_VALUE);
  return `$${millionValue} million`;
};
const getProductionCompanies = (productionCompanies) => {
  return productionCompanies.map((company) => company.name).join(" - ");
};
export { getMovieDetails };
