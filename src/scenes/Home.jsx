import React from 'react';
import { Container } from '@material-ui/core';
import Map from '../components/Home/Map';
import Movie from '../components/Home/Movie';
import Column from '../components/Home/Column';

const Home = () => (
  <>
    <Movie />
    <Column />
    <Map />
  </>
);

export default Home;
