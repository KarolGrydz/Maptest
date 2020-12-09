import React, { useEffect, useState } from 'react';
import { styled } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import { Preloader } from './Preloader';
import { BlogContent } from './BlogContent';
import { BlogSidebar } from './BlogSidebar';
import { BlogPagination } from './BlogPagination';

import { adventures } from './utils/blogConstans';

const BlogContainer = styled(Container)({
  padding: '10vh 0',
});

export const Blog = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // getTrips(numberOfAllPosts, pageNr, sidebarTrips);
    setTrips(adventures);
    console.log(adventures);
    // eslint-disable-next-line
  }, []);

  if (!trips.length) return <Preloader />;

  return (
    <BlogContainer>
      <Grid container>
        <BlogContent posts={trips} />
        <BlogSidebar trips={trips} />
        {/* <BlogPagination /> */}
      </Grid>
    </BlogContainer>
  );
};
export default Blog;
