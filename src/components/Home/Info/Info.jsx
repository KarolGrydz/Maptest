import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@material-ui/core';

import Preloader from '../../Blog/Preloader';
import BlogButtonMore from '../../Blog/BlogButtonMore';

import { getLoading, getFrontTrips } from '../../../store/actions/selectors';

import { getFrontPosts } from '../../../store/actions/blogActions';

import Forest from '../../assets/img/forest.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
  },

  bgColor: {
    backgroundColor: theme.palette.primary.light,
  },

  grid: {
    padding: theme.spacing(5),
  },

  cardMedia: {
    height: '250px',
  },

  title: {
    padding: theme.spacing(4, 0, 4, 2),
    fontWeight: 'bold',
  },

  titleLink: {
    borderBottom: 'solid #e4e7e8 1px',
    color: `${theme.palette.secondary.contrastText}`,
    textDecoration: 'none',
    transition: 'color 200ms ease-in-out',
    fontWeight: 'bold',
    '&:hover': {
      color: `${theme.palette.secondary.main}`,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    },
  },

  cardRoot: {
    margin: theme.spacing(0, 2),
    border: 'solid 2px #e4e7e8',
  },
}));

const Info = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const frontTrips = useSelector(getFrontTrips);

  useEffect(() => {
    let mounted = true;
    if (mounted) dispatch(getFrontPosts());
    return () => {
      mounted = false;
    };
  }, []);

  if (!isLoading) return <Preloader />;

  return (
    <Grid className={classes.bgColor}>
      <Container className={classes.root}>
        {!frontTrips.length ? (
          <Preloader />
        ) : (
          <Grid container className={classes.grid}>
            <Grid item xs={8}>
              <Typography className={classes.title} variant="h5">
                Ostatnie wyprawy
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.title} variant="h5">
                Informacje o organizowaniu imprez
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.cardRoot}>
                <Link
                  to={`/wyprawy/${frontTrips[0].id}`}
                  className={classes.titleLink}
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image={Forest}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {frontTrips[0].title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.cardRoot}>
                <Link
                  to={`/wyprawy/${frontTrips[1].id}`}
                  className={classes.titleLink}
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image={Forest}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {frontTrips[1].title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.cardRoot}>
                <CardContent>
                  <Typography
                    variant="h5"
                    align="center"
                    style={{ margin: '50px 0' }}
                  >
                    Informacja o organizowaniu imprez <br /> dla grup i osób
                    prywatnych
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Container>
    </Grid>
  );
};

export default Info;
