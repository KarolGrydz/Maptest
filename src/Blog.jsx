import React, { useEffect, useState } from 'react';
import { styled } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import { Preloader } from './Preloader';
import { BlogContent } from './BlogContent';
import { BlogSidebar } from './BlogSidebar';
import { BlogPagination } from './BlogPagination';

import { searchTrip, updatedTrips } from './utils/blogFunctions';
import { initialState } from './utils/blogConstans';

const BlogContainer = styled(Container)({
  padding: '10vh 0',
});

export const Blog = () => {
  const [trips, setTrips] = useState(initialState);
  const [lastPosts, setLastPosts] = useState([]);

  useEffect(() => {
    const fetch = searchTrip(trips.currentPage, trips.searchValue);
    fetch.then(({ data, headers }) => {
      setTrips(updatedTrips(data, headers, trips));
      if (!lastPosts.length) setLastPosts(data.slice(0, 4));
    });
  }, [trips.currentPage]);

  const changePage = (event) => setTrips({ ...trips, currentPage: event });

  const search = (event) => {
    setTrips({ ...trips, searchValue: event.target.value });
    const fetch = searchTrip(trips.currentPage, event.target.value);
    fetch.then(({ data, headers }) => {
      setTrips(updatedTrips(data, headers, trips));
    });
  };

  if (!trips.all.length) return <Preloader />;

  return (
    <BlogContainer>
      <Grid container>
        <BlogContent posts={trips.all} />
        <BlogSidebar trips={lastPosts} allTrips={Number(trips.count)} search={search} />
        <BlogPagination pages={trips.pages} changePage={changePage} />
      </Grid>
    </BlogContainer>
  );
};
export default Blog;
