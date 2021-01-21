import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  readMore: {
    backgroundColor: `${theme.palette.secondary.main}`,
    transition: 'color 300ms ease-in-out',
    color: `${theme.palette.secondary.contrastText}`,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}`,
      color: `${theme.palette.primary.contrastText}`,
    },
  },
}));

const BlogButtonMore = ({ id, text }) => {
  const classes = useStyles();

  return (
    <Link to={`/wyprawy/${id}`} style={{ textDecoration: 'none' }}>
      <Button className={classes.readMore} variant="contained">
        {text}
      </Button>
    </Link>
  );
};

BlogButtonMore.propTypes = {
  text: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
};

export default BlogButtonMore;
