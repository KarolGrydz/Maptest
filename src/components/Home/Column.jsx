import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card } from '@material-ui/core';

import { randomImg } from '../../utils/randomImg';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'black',
    margin: theme.spacing(10, 0),
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 'auto',
    width: '100%',
    transform: 'scale(1.2)',
  },

  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const Column = () => {
  const classes = useStyles();

  return (
    <Grid item xs={3} className={classes.root}>
      <Typography variant="h5" align="center">
        <Link className={classes.link} to="/kim-jestesmy">
          Przyjaciele
          <img src={randomImg()} alt="" className={classes.image} />
        </Link>
      </Typography>
    </Grid>
  );
};

export default Column;
