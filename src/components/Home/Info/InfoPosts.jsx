import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@material-ui/core';

import Forest from '../../../assets/img/forest.jpg';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: '250px',
  },

  title: {
    padding: theme.spacing(4, 0, 4, 2),
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
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
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 2, 2, 2),
    },
  },
}));

const InfoPosts = ({ frontTrips }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={8}>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h5">
          Ostatnie wyprawy
        </Typography>
      </Grid>
      <Grid container>
        {frontTrips.map(({ id, title, image }) => (
          <Grid item xs={12} sm={6} key={id}>
            <Card className={classes.cardRoot}>
              <Link to={`/wyprawy/${id}`} className={classes.titleLink}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image ? image : Forest}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default InfoPosts;
