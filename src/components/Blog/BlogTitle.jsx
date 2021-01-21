import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(2, 0),
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
}));

const BlogTitle = ({ id, title, variant = 'h4' }) => {
  const classes = useStyles();

  return (
    <Link to={`/wyprawy/${id}`} className={classes.title}>
      <Typography variant={variant}>
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </Typography>
    </Link>
  );
};

BlogTitle.propTypes = {
  title: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  variant: propTypes.string,
};

BlogTitle.defaultProps = {
  variant: 'h4',
};

export default BlogTitle;
