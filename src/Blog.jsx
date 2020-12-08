import React, { useEffect, useState } from 'react';
import { styled } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import { Preloader } from './Preloader';
import { BlogContent } from '../layout/BlogContent';
import { BlogSidebar } from '../layout/BlogSidebar';
import { BlogPagination } from '../layout/BlogPagination';

const BlogContainer = styled(Container)({
  padding: '10vh 0',
});

export const Blog = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips(numberOfAllPosts, pageNr, sidebarTrips);
    // eslint-disable-next-line
  }, []);

  if (!trips.length) return <Preloader />;

  return (
    <BlogContainer>
      <Grid container>
        <BlogContent posts={trips} />
        <BlogSidebar />
        <BlogPagination />
      </Grid>
    </BlogContainer>
  );
};
export default Blog;
