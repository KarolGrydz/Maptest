import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Fade } from '@material-ui/core';
import intro from '../../assets/video/intro.mp4';
import czacha from '../../assets/img/czacha.png';

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

  skull: {
    textAlign: 'center',
    position: 'relative',
    zIndex: '1000',
    width: theme.spacing(40),
    marginBottom: 'auto',
    marginTop: theme.spacing(5),
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
      <Fade in timeout={{ enter: 1000 }} style={{ transitionDelay: '3500ms' }}>
        <img src={czacha} alt="logo" className={classes.skull} />
      </Fade>
    </Box>
  );
};

export default Movie;
