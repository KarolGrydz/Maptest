import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import Preloader from './Preloader';
import BlogContent from './BlogContent';
import BlogSidebar from './BlogSidebar';
import BlogPagination from './BlogPagination';
import BlogContentTable from './BlogContentTable';

import { searchTrip, updatedTrips } from '../../utils/blogAPI';
import initialState from '../../constants/initialState';

import { useDispatch, useSelector } from 'react-redux';
import { getTrips } from '../../actions/blogActions';
import { selectAllTitles } from '../../actions/selectors';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10vh 0',
  },
}));

const Blog = () => {
  const classes = useStyles();
  const [trips, setTrips] = useState(initialState);
  const [lastPosts, setLastPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState('agenda');
  const dispatch = useDispatch();
  const allTrips = useSelector(selectAllTitles);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    dispatch(getTrips(2, 'bunkier'));
    console.log(allTrips);
    const fetch = searchTrip(trips.currentPage, trips.searchValue);
    fetch.then(({ data, headers }) => {
      if (mounted) setTrips(updatedTrips(data, headers, trips));
      if (!lastPosts.length) setLastPosts(data.slice(0, 4));
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, [trips.currentPage, trips.searchValue]);

  const changePage = (event) => setTrips({ ...trips, currentPage: event });

  const search = (event) => {
    setTrips({ ...trips, searchValue: event.target.value, currentPage: 1 });
  };

  const handleView = (value, nextView) => setView(nextView);

  if (loading) return <Preloader />;

  return (
    <Container className={classes.root}>
      <ToggleButtonGroup value={view} size="small" exclusive onChange={handleView}>
        <ToggleButton value="agenda" aria-label="agenda">
          <ViewAgendaIcon />
        </ToggleButton>
        <ToggleButton value="list" aria-label="list">
          <ViewListIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Grid container>
        {view === 'agenda' ? (
          <BlogContent posts={trips.all} view={view} />
        ) : (
          <BlogContentTable posts={trips.all} />
        )}
        <BlogSidebar
          trips={lastPosts}
          allTrips={Number(trips.count)}
          search={search}
          inputValue={trips.searchValue}
          view={view}
          handleView={handleView}
        />
        <BlogPagination
          pages={Number(trips.pages)}
          changePage={changePage}
          currentPage={trips.currentPage}
        />
      </Grid>
    </Container>
  );
};
export default Blog;
