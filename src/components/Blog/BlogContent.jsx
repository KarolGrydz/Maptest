import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import {
  Grid,
  Button,
  Typography,
  Container,
} from '@material-ui/core';

import ForestImage from '../../assets/img/forest.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 3),
    height: '130vh',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      height: '100vh',
    },
  },

  date: {
    color: `${theme.palette.secondary.main}`,
    textTransform: 'uppercase',
    padding: theme.spacing(3, 0),
  },

  title: {
    padding: theme.spacing(2, 0),
    borderBottom: 'solid #e4e7e8 1px',
    marginRight: theme.spacing(3),
    color: `${theme.palette.secondary.contrastText}`,
    textDecoration: 'none',
    transition: 'color 200ms ease-in-out',
    fontWeight: 600,
    '&:hover': {
      color: `${theme.palette.secondary.main}`,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    },
  },

  description: {
    display: 'block',
    padding: theme.spacing(3, 0, 5, 0),
  },

  postImg: {
    backgroundImage: `url(${ForestImage})`,
    backgroundColor: '#cecece',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },

  readMore: {
    margin: theme.spacing(3, 0),
    backgroundColor: `${theme.palette.secondary.main}`,
    transition: 'color 300ms ease-in-out',
    color: `${theme.palette.secondary.contrastText}`,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}`,
      color: `${theme.palette.primary.contrastText}`,
    },
  },
}));

const BlogContent = ({ posts }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={9}>
      {posts.length !== 0 ? (
        posts.map(({ id, title, date }) => (
          <div className={classes.root} key={id}>
            <Link to={`/wyprawy/${id}`} className={classes.title}>
              <Typography variant="h4">
                <div dangerouslySetInnerHTML={{ __html: title.rendered }} />
              </Typography>
            </Link>
            <span className={classes.date}>
              Data wyprawy:
              {date.slice(0, 10)}
            </span>
            <div className={classes.postImg} />
            <Container className={classes.description}>
              <Button className={classes.readMore} variant="contained">
                Czytaj
              </Button>
            </Container>
          </div>
        ))
      ) : (
        <Typography variant="h2" className={classes.title}>
          Brak postów
        </Typography>
      )}
    </Grid>
  );
};

BlogContent.propTypes = {
  posts: propTypes.arrayOf(propTypes.object).isRequired,
};

export default BlogContent;
