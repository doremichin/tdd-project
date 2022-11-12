import { useQuery } from '@tanstack/react-query';
import { getPhotosAPI } from '@src/api';

const useGetPhotos = <T>() => {
  const { isLoading, error, data } = useQuery<T>(['getPhotos'], () =>
    getPhotosAPI(),
  );

  return {
    isLoading,
    error,
    data,
  };
};

export default useGetPhotos;
