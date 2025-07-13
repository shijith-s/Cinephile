import { useEffect, useState } from "react";

const useFetch = <T>(
  fetchFunction: (query: string | null) => Promise<T>,
  autoFetch: boolean = true,
  query: string | null = null
) => {
  const [data, setData] = useState<T | null>(null);
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
    setData(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData(query);
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

export default useFetch;
