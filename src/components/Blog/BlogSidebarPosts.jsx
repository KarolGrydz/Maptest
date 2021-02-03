import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Preloader from './Preloader';
import BlogDate from './BlogDate';
import BlogTitle from './BlogTitle';

import { getSidebarPosts } from '../../store/actions/blogActions';
import { getSidebarTrips, getLoading } from '../../store/actions/selectors';

const useStyles = makeStyles((theme) => ({
  post: {
    paddingLeft: theme.spacing(1),
    borderLeft: `solid 3px ${theme.palette.secondary.main}`,
    marginTop: theme.spacing(4),
  },
}));

const BlogSidebarPosts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector(getSidebarTrips);
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    let mounted = true;
    if (mounted && Boolean(!posts.length)) dispatch(getSidebarPosts());
    return () => {
      mounted = false;
    };
  }, []);

  if (!isLoading) return <Preloader />;

  return (
    <>
      {posts.map(({ id, title, date }) => (
        <Container key={id} className={classes.post}>
          <BlogTitle id={id} title={title} variant="h6" />
          <BlogDate date={date} />
        </Container>
      ))}
    </>
  );
};

export default BlogSidebarPosts;
