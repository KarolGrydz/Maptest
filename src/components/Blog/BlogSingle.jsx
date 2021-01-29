import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { isEmpty } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import Preloader from './Preloader';
import BlogSidebar from './BlogSidebar';
import BlogTitle from './BlogTitle';
import BlogDate from './BlogDate';

import { getLoading, getSingleTrip } from '../../store/actions/selectors';
import {
  getSinglePost,
  clearCurrentTrip,
} from '../../store/actions/blogActions';

import ForestImage from '../../assets/img/forest.jpg';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10vh 0',
  },

  postContainer: {
    padding: '0 25px',
    display: 'flex',
    flexDirection: 'column',
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
}));

const BlogSingle = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector(getSingleTrip);
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    let mounted = true;
    if (mounted) dispatch(getSinglePost(match.params.id));
    return () => {
      mounted = false;
      dispatch(clearCurrentTrip());
    };
    // eslint-disable-next-line
  }, [match.params.id]);

  if (!isLoading) return <Preloader />;

  return (
    <Container className={classes.root}>
      {isEmpty(post) ? (
        <Preloader />
      ) : (
        <Grid container>
          <Grid item xs={9}>
            <div className={classes.postContainer} key={post.id}>
              <BlogTitle id={post.id} title={post.title.rendered} />
              <BlogDate date={post.date} text="Data wyprawy: " />
              <div className={classes.postImg} />
              <div
                className={classes.postDescription}
                dangerouslySetInnerHTML={{
                  __html: post.content.rendered,
                }}
              />
            </div>
          </Grid>
          <BlogSidebar />
        </Grid>
      )}
    </Container>
  );
};

BlogSingle.propTypes = {
  match: propTypes.shape({
    isExact: propTypes.bool,
    params: propTypes.objectOf(propTypes.string),
    path: propTypes.string,
    url: propTypes.string,
  }).isRequired,
};

export default BlogSingle;
