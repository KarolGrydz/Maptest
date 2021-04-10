import React, { useEffect } from 'react';
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

import {
  getView,
  getCurrentPage,
  getSearch,
  getLoading,
  getTrips,
} from '../../store/actions/selectors';

import { getPosts, clearTrips } from '../../store/actions/blogActions';

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

  cardRoot: {
    margin: theme.spacing(0, 2),
    border: 'solid 2px #e4e7e8',
  },
}));

const Home = () => {
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

  return (
    <Grid className={classes.bgColor}>
      <Container className={classes.root}>
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
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  image={Forest}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jakaś ostatnia wyprawa
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.cardRoot}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  image={Forest}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jakaś ostatnia wyprawa
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
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
      </Container>
    </Grid>
  );
};

export default Home;
