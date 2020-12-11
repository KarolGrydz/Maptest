import React, { useEffect, useState } from 'react';
import { styled } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import { Preloader } from './Preloader';
import { BlogContent } from './BlogContent';
import { BlogSidebar } from './BlogSidebar';
import { BlogPagination } from './BlogPagination';

import { getTrips } from './utils/blogFunctions';

const BlogContainer = styled(Container)({
  padding: '10vh 0',
});

export const Blog = () => {
  const [trips, setTrips] = useState([]);
  const [allTripsNumber, setAllTripsNumber] = useState(0);
  const [allPagesNumber, setAllPagesNumber] = useState(0);
  const [lastPosts, setLastPosts] = useState([]);
  const [pageNr, setPageNr] = useState(1);

  useEffect(() => {
    const data = getTrips(pageNr);
    data.then((data) => {
      setTrips(data.data);
      if (!lastPosts.length) setLastPosts(data.data.slice(0, 4));
      if (!Boolean(allTripsNumber)) setAllTripsNumber(data.headers['x-wp-total']);
      if (!Boolean(allPagesNumber)) setAllPagesNumber(data.headers['x-wp-totalpages']);
    });
  }, [pageNr]);

  const changePage = (event) => setPageNr(event);

  if (!trips.length) return <Preloader />;

  console.log(trips);

  return (
    <BlogContainer>
      <Grid container>
        <BlogContent posts={trips} />
        <BlogSidebar trips={lastPosts} allTrips={Number(allTripsNumber)} />
        <BlogPagination pages={allPagesNumber} changePage={changePage} />
      </Grid>
    </BlogContainer>
  );
};
export default Blog;
