import { useEffect, useState } from "react";

type DataType<T> = {
  [key: string]: T;
};

export default function usePaginate<T>(url: string, page: number) {
  const [data, setData] = useState<DataType<T>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (data[page]) return;
    const fetchData = async () => {
      try {
        const response = await fetch(url + `?page=${page}`);
        const result = await response.json();
        setData({
          ...data,
          [page]: result,
        });
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, page]);

  return {
    data: data[page],
    loading,
    error,
  };
}
