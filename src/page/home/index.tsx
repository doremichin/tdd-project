import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useSearchPhotos from '@src/hooks/useSearchPhotos';
import { ISearchPhotos } from '@shared/constant/types';

interface IHome {}

export function Home({}: IHome) {
  const { data, isLoading, error } = useSearchPhotos<ISearchPhotos>('plant');

  if (isLoading) {
    return <p>Loding ...</p>;
  }
  if (error || !data) {
    return <p>Error ...</p>;
  }

  return (
    <Fragment>
      <Link data-cy="sub-button" className="" to="/sub">
        subLink
      </Link>
      <div>
        {data.results.map((photo, index) => {
          return (
            <div key={index}>
              <img src={photo.urls.thumb} alt="photo" />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Home;
