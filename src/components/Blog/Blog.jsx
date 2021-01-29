import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import Preloader from './Preloader';
import BlogContent from './BlogContent';
import BlogSidebar from './BlogSidebar';
import BlogPagination from './BlogPagination';
import BlogContentTable from './BlogContentTable';
import BlogChangeView from './BlogChangeView';

import {
  getView,
  getCurrentPage,
  getSearch,
  getLoading,
  getTrips,
} from '../../store/actions/selectors';
import { getPosts, clearTrips } from '../../store/actions/blogActions';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10vh 0',
  },
}));

const Blog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const view = useSelector(getView);
  const currentPage = useSelector(getCurrentPage);
  const search = useSelector(getSearch);
  const isLoading = useSelector(getLoading);
  const trips = useSelector(getTrips);

  useEffect(() => {
    let mounted = true;
    if (mounted) dispatch(getPosts(currentPage, search));
    return () => {
      mounted = false;
      dispatch(clearTrips());
    };
  }, [currentPage, search]);

  if (!isLoading) return <Preloader />;

  return (
    <Container className={classes.root}>
      <BlogChangeView />
      <Grid container>
        {view === 'agenda' ? (
          <BlogContent posts={trips} />
        ) : (
          <BlogContentTable posts={trips} />
        )}
        <BlogSidebar />
        <BlogPagination />
      </Grid>
    </Container>
  );
};

export default Blog;
