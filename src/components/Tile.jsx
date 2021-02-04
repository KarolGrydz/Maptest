import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.contrastText,
  },

  container: {
    padding: theme.spacing(8, 10, 6, 10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },

  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    fontSize: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(3),
    },
  },

  text: {
    padding: theme.spacing(0, 2),
    textAlign: 'justify',
  },

  image: {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
}));

const Tile = ({ text, img, title }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.root}>
      {img ? (
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${img})` }}
        />
      ) : (
        <Container className={classes.container}>
          <Typography variant='h1' className={classes.title}>
            {title}
          </Typography>
          <Typography variant='body1' className={classes.text}>
            {text}
          </Typography>
        </Container>
      )}
    </Grid>
  );
};

Tile.propTypes = {
  text: propTypes.string,
  img: propTypes.string,
  title: propTypes.string,
};

export default Tile;
