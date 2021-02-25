import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Title from '../Title';
import intro from '../../assets/video/intro.mp4';
import logo from '../../assets/img/logo_big.bmp';

const useStyles = makeStyles(() => ({
  root: {
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'no-repeat center center fixed',
  },

  movie: {
    position: 'absolute',
    width: '100%',
  },
}));

const Movie = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <video
        className={classes.movie}
        autoPlay={true}
        muted={true}
        loop={true}
        src={intro}
      />
      <Title title="Hunter" subTitle="grupa eksploracyjno-historyczna" />
    </Box>
  );
};

export default Movie;
