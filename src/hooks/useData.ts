import { useEffect, useState } from 'react';
import { req } from '../utils/api';
import { Endpoints, RequestOptions } from '../interface/api';

export interface UseDataResponse<T> {
  isLoading: boolean;
  isError: boolean;
  data: T | null;
}

const useData = <T>(endpoint: Endpoints, options?: RequestOptions, deps: unknown[] = []): UseDataResponse<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await req<T>(endpoint, options);
        setData(response);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return { isLoading, isError, data };
};

export default useData;
