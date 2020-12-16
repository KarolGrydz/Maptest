import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { getSingleTrip } from '../../utils/blogAPI';

import Preloader from './Preloader';
// import BlogSidebar from './BlogSidebar';

import ForestImage from '../../assets/img/forest.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10vh 0',
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

  postContainer: {
    padding: '0 25px',
    display: 'flex',
    flexDirection: 'column',
  },

  postDescription: {
    display: 'block',
    padding: '25px 0 40px 0',
    '& span': {
      color: '#000',
    },
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
}));

const BlogSingle = ({ match }) => {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const fetch = getSingleTrip(match.params.id);
    fetch.then(({ data }) => {
      if (mounted) setPost(data);
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line
  }, [match.params.id]);

  if (loading) return <Preloader />;

  return (
    <Container className={classes.root}>
      {post.length === 0 ? (
        <Preloader />
      ) : (
        <Grid container>
          <Grid item xs={9}>
            <div className={classes.postContainer} key={post.id}>
              <Link to={`/wyprawy/${post.id}`} className={classes.title}>
                <Typography variant="h4">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  />
                </Typography>
              </Link>
              <span className={classes.postDescription}>
                Data wyprawy:
                {post.date.slice(0, 10)}
              </span>
              <div className={classes.postImg} />
              <div
                className={classes.postDescription}
                dangerouslySetInnerHTML={{
                  __html: post.content.rendered,
                }}
              />
            </div>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

BlogSingle.propTypes = {
  match: propTypes.shape({
    path: propTypes.string,
    url: propTypes.string,
    isExact: propTypes.bool,
    params: propTypes.objectOf(propTypes.string),
  }).isRequired,
};

export default BlogSingle;
