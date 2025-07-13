import { useCallback, useEffect, useRef, useState } from "react";

const useInfiniteFetch = (
  fetchFunction: (query: string | null, page: number) => Promise<MovieResponse>,
  query: string | null,
  autoFetch: boolean = true
) => {
  const [page, setPage] = useState<number>(1); //Represents the next page to fetch
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Movie[]>([]);

  const queryRef = useRef(query);

  const fetchData = useCallback(async (page: number = 1) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetchFunction(queryRef.current, page);
      const results = response.results;
      setData((prevData) => [...prevData, ...results]);
      setHasMore(page < response.total_pages);
    } catch (error) {
      setError(error instanceof Error ? error : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = () => {
    console.log("reset");
    setData([]);
    setError(null);
    setLoading(false);
    setPage(1);
    setHasMore(true);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData(1); // Fetch from page 1 with new query
      setPage(page + 1); // Increment page to 2
    }
  }, []);

  useEffect(() => {
    queryRef.current = query;
  }, [query]);

  const refetch = async () => {
    reset();
    await fetchData(1);
    setPage(page + 1);
  };

  const loadMore = async () => {
    if (loading || !hasMore || !data.length) return;
    await fetchData(page);
    setPage(page + 1);
  };

  return { data, loading, error, reset, refetch, loadMore };
};

export default useInfiniteFetch;
