import { useQuery } from '@tanstack/react-query';
import { searchPhotosAPI } from '@src/api';

const useSearchPhotos = <T>(query?: string) => {
  const { isLoading, error, data } = useQuery<T>(
    [`search/${query}`],
    () => searchPhotosAPI(query),
    { refetchOnWindowFocus: false },
  );

  return {
    isLoading,
    error,
    data,
  };
};

export default useSearchPhotos;
