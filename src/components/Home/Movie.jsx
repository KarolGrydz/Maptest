import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import intro from '../../assets/video/intro.mp4';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: 'no-repeat center center fixed',
    position: 'relative',
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
    </Box>
  );
};

export default Movie;
