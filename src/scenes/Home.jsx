import React from 'react';
import Map from '../components/Home/Map';
import Movie from '../components/Home/Movie';
import Column from '../components/Home/Column';
import Boxes from '../components/Home/Boxes';
import Title from '../components/Title';
import Info from '../components/Home/Info';
import { Grid } from '@material-ui/core';
import { Parallax } from 'react-parallax';
import Fire from '../assets/img/fire.jpg';

const arr = [0, 1, 2, 3];

const Home = () => (
  <>
    <Movie />
    <Boxes />
    <Title title="Linki" subTitle="" />
    <Grid container>
      {arr.map((id) => (
        <Column key={id} />
      ))}
    </Grid>
    <Grid>
      <Title title="Mapa" subTitle="Wszystkie nasze wyprawy" />
      <Map />
    </Grid>
    <Info />
  </>
);

export default Home;
