import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styled, makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { getSingleTrip } from './utils/blogFunctions';

import Preloader from './Preloader';
import BlogSidebar from './BlogSidebar';

import ForestImage from './img/forest.jpg';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10vh 0',
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

  postContainer: {
    padding: '0 25px',
    display: 'flex',
    flexDirection: 'column',
  },

  postDescription: {
    display: 'block',
    padding: '25px 0 40px 0',
    '& span': {
      color: '#000',
    },
  },

  postImg: {
    backgroundColor: '#cecece',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '500px',
  },
}));

const BlogSingle = ({ match }) => {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const fetch = getSingleTrip(match.params.id);
    fetch.then(({ data }) => {
      if (mounted) setPost(data);
      setLoading(false);
    });
    return () => (mounted = false);
    // eslint-disable-next-line
  }, [match.params.id]);

  if (loading) return <Preloader />;

  return (
    <Container className={classes.root}>
      {console.log('render')}
      {post.length === 0 ? (
        <Preloader />
      ) : (
        <Grid container>
          <Grid item xs={9}>
            <div className={classes.postContainer} key={post.id}>
              <Link to={`/wyprawy/${post.id}`}>
                <Typography variant="h2" className={classes.title}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  ></div>
                </Typography>
              </Link>
              <span>Data wyprawy: {post.date.slice(0, 10)}</span>
              <img url={ForestImage} className={classes.postImg} alt="first on gallery" />
              <div
                className={classes.postDescription}
                dangerouslySetInnerHTML={{
                  __html: post.content.rendered,
                }}
              ></div>
            </div>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

BlogSingle.propTypes = {
  match: propTypes.objectOf(propTypes.string).isRequired,
};

export default BlogSingle;
