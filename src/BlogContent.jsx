import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';

import ForestImage from './img/forest.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 25px',
    height: '130vh',
    display: 'flex',
    flexDirection: 'column',
    '& h6': {
      textTransform: 'uppercase',
      fontSize: '1.17em',
      color: '#000',
    },
    '& h6:hover': {
      color: 'rgb(166, 183, 27)',
    },
    '& span': {
      color: 'rgb(166, 183, 27)',
      fontSize: '1em',
      textTransform: 'uppercase',
      padding: '25px 0',
    },
  },

  title: {
    padding: '15px 0',
    borderBottom: 'solid #e4e7e8 1px',
    marginRight: '25px',
    color: '#000',
    '&:hover': {
      color: 'rgb(166, 183, 27)',
    },
  },
}));

const PostDescription = styled('div')({
  display: 'block',
  padding: '25px 0 40px 0',
});

const PostImg = styled('div')({
  backgroundColor: '#cecece',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
});

const PostButtom = styled(Button)({
  margin: '25px 0',
  backgroundColor: 'rgb(166, 183, 27)',
  '&:hover': {
    backgroundColor: '#8d9b1a',
  },
  '& span': {
    padding: '0',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export const BlogContent = ({ posts }) => {
  const classes = useStyles();

  return (
    <Grid item xs={9}>
      {posts.length !== 0 ? (
        posts.map((post) => (
          <div className={classes.root} key={post.id}>
            <a href={`/wyprawy/${post.id}`}>
              <Typography variant="h2" className={classes.title}>
                <div dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div>
              </Typography>
            </a>
            <span>Data wyprawy: {post.date.slice(0, 10)}</span>
            <PostImg style={{ backgroundImage: `url(${ForestImage})` }}></PostImg>
            <PostDescription>
              <PostButtom variant="contained">Czytaj</PostButtom>
            </PostDescription>
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
