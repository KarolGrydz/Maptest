import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Map from '../components/Map';
import Tile from '../components/Tile';
import tileVariables from '../constants/tileVariables';

const Home = () => (
  <>
    <Map />
    <Container maxWidth="md">
      <Grid container>
        {tileVariables.map(({ img, title, text, id }) => (
          <Tile text={text} img={img} title={title} key={id} />
        ))}
      </Grid>
    </Container>
  </>
);

export default Home;
