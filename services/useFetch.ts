import { useEffect, useState } from "react";

const useFetch = (
  fetchFunction: (query: string | null) => Promise<Movie[]>,
  autoFetch: boolean = true
) => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (query: string | null = null) => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFunction(query);
      setData(result);
    } catch (error) {
      setError(error instanceof Error ? error : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData([]);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);

  return { data, loading, error, reset, refetch: fetchData };
};

export default useFetch;
