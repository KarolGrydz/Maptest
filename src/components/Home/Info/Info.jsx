import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import Preloader from '../../Blog/Preloader';
import InfoPosts from './InfoPosts';
import InfoEvent from './InfoEvent';

import { getLoading, getFrontTrips } from '../../../store/actions/selectors';

import {
  getFrontPosts,
  getFrontAttachment,
  clearFrontTrips,
} from '../../../store/actions/blogActions';

import usePages from '../../../hooks/usePages';
import { events } from '../../../constants/apiUrls';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      paddingTop: theme.spacing(3),
    },
  },

  bgColor: {
    backgroundColor: theme.palette.primary.light,
  },

  grid: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      paddingBottom: theme.spacing(3),
    },
  },
}));

const Info = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const frontTrips = useSelector(getFrontTrips);
  const data = usePages(events);

  useEffect(() => {
    let mounted = true;
    if (mounted) dispatch(getFrontPosts());
    return () => {
      mounted = false;
      dispatch(clearFrontTrips());
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    if (mounted && frontTrips.length !== 0) {
      frontTrips.map((trip) =>
        dispatch(getFrontAttachment(trip.featured_media))
      );
    }
    return () => {
      mounted = false;
    };
  }, [frontTrips.length]);

  if (!isLoading) return <Preloader />;

  return (
    <Grid className={classes.bgColor}>
      <Container className={classes.root}>
        {data.length === 0 || !frontTrips.length ? (
          <Preloader />
        ) : (
          <Grid container className={classes.grid}>
            <InfoPosts frontTrips={frontTrips} />
            <InfoEvent data={data} />
          </Grid>
        )}
      </Container>
    </Grid>
  );
};

export default Info;
