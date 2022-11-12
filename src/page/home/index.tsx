import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface IHome {}

export function Home({}: IHome) {
  return (
    <Fragment>
      <Link to="/sub">home</Link>
    </Fragment>
  );
}

export default Home;
