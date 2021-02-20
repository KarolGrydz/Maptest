import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';

import { randomImg } from '../../utils/randomImg';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'black',
    margin: theme.spacing(10, 0, 0, 0),
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 'auto',
    width: '100%',
    transition: 'all 500ms ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },

  link: {
    textDecoration: 'none',
    color: 'black',
  },

  text: {
    zIndex: '9999',
    color: '#fff',
  },

  box: {
    opacity: '0.5',
    transition: 'all 500ms ease',
    overflow: 'hidden',
    position: 'absolute',
    '&:hover': {
      opacity: '1',
    },
  },
}));

const Column = () => {
  const classes = useStyles();

  return (
    <Grid item xs={3} className={classes.root}>
      <Typography variant='h5' align='center' className={classes.text}>
        Przyjaciele
      </Typography>
      <Box className={classes.box}>
        <Link className={classes.link} to='/kim-jestesmy'>
          <img src={randomImg()} alt='' className={classes.image} />
        </Link>
      </Box>
    </Grid>
  );
};

export default Column;
