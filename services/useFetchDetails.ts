import { useEffect, useState } from "react";
import { fetchMovieDetails } from "./api";

const useFetchDetails = (
  movieId: string | null = null,
  autoFetch: boolean = true
) => {
  const [data, setData] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchMovieDetails(movieId);
      setData(result);
    } catch (error) {
      setError(error instanceof Error ? error : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);

  return {
    data,
    loading,
    error,
    reset,
    refetch: fetchData,
  };
};

export default useFetchDetails;
