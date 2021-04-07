import React from 'react';
import Map from '../components/Home/Map';
import Movie from '../components/Home/Movie';
import Column from '../components/Home/Column';
import Boxes from '../components/Home/Boxes';
import Title from '../components/Title';
import Info from '../components/Home/Info';
import Facebook from '../components/Home/Facebook';
import { Grid } from '@material-ui/core';
import { Parallax } from 'react-parallax';
import Fire from '../assets/img/fire.jpg';

const Home = () => (
  <>
    <Movie />
    <Info />
    <Boxes />
    <Title title='Linki' subTitle='' />
    <Column />
    <Grid>
      <Title title='Mapa' subTitle='Wszystkie nasze wyprawy' />
      <Map />
    </Grid>
    <Facebook />
  </>
);

export default Home;
