import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import { Grid, Typography, Container } from '@material-ui/core';

import BlogTitle from './BlogTitle';
import BlogButtonMore from './BlogButtonMore';
import BlogDate from './BlogDate';

import { randomImg } from '../../utils/randomImg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 3),
    height: '130vh',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      height: '100vh',
    },
  },

  description: {
    display: 'block',
    padding: theme.spacing(3, 0, 5, 0),
  },

  postImg: {
    // backgroundImage: `url(${randomImg()})`,
    backgroundColor: '#cecece',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },
}));

const BlogContent = ({ posts }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={9}>
      {posts.length !== 0 ? (
        posts.map(({ id, title, date }) => (
          <div className={classes.root} key={id}>
            <BlogTitle id={id} title={title} />
            <BlogDate date={date} text='Data wyprawy: ' />
            <div
              className={classes.postImg}
              style={{ backgroundImage: `url(${randomImg()})` }}
            />
            <Container className={classes.description}>
              <BlogButtonMore id={id} text='Czytaj' />
            </Container>
          </div>
        ))
      ) : (
        <Typography variant='h2'>Brak postów</Typography>
      )}
    </Grid>
  );
};

BlogContent.propTypes = {
  posts: propTypes.arrayOf(propTypes.object).isRequired,
};

export default BlogContent;
