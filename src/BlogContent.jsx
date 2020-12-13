import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { Grid, Button, Typography, Container } from '@material-ui/core';

import ForestImage from './img/forest.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 25px',
    height: '130vh',
    display: 'flex',
    flexDirection: 'column',
  },

  date: {
    color: 'rgb(166, 183, 27)',
    fontSize: '1em',
    textTransform: 'uppercase',
    padding: '25px 0',
  },

  title: {
    padding: '15px 0',
    borderBottom: 'solid #e4e7e8 1px',
    marginRight: '25px',
    color: '#000',
    textDecoration: 'none',
    transition: 'color 200ms ease-in-out',
    fontWeight: 600,
    fontSize: '1.4rem',
    '&:hover': {
      color: 'rgb(166, 183, 27)',
    },
  },

  description: {
    display: 'block',
    padding: '25px 0 40px 0',
  },

  postImg: {
    backgroundImage: `url(${ForestImage})`,
    backgroundColor: '#cecece',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },

  readMore: {
    margin: '25px 0',
    backgroundColor: 'rgb(166, 183, 27)',
    transition: 'color 300ms ease-in-out',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#8d9b1a',
      color: '#000',
    },
  },
}));

export const BlogContent = ({ posts }) => {
  const classes = useStyles();

  return (
    <Grid item xs={9}>
      {posts.length !== 0 ? (
        posts.map((post) => (
          <div className={classes.root} key={post.id}>
            <a href={`/wyprawy/${post.id}`} className={classes.title}>
              <div dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div>
            </a>
            <span className={classes.date}>Data wyprawy: {post.date.slice(0, 10)}</span>
            <div className={classes.postImg} />
            <Container className={classes.description}>
              <Button className={classes.readMore} variant="contained">
                Czytaj
              </Button>
            </Container>
          </div>
        ))
      ) : (
        <Typography variant="h2" className={classes.title}>
          Brak postów
        </Typography>
      )}
    </Grid>
  );
};

BlogContent.propTypes = {
  posts: propTypes.array.isRequired,
};
