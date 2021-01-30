import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  date: {
    color: `${theme.palette.secondary.dark}`,
    textTransform: 'uppercase',
    padding: theme.spacing(3, 0),
  },
}));

const BlogDate = ({ date, text }) => {
  const classes = useStyles();

  return (
    <div>
      <span className={classes.date}>
        {text}
        {moment(date.slice(0, 10)).calendar()}
      </span>
    </div>
  );
};

BlogDate.propTypes = {
  date: propTypes.string.isRequired,
  text: propTypes.string,
};

BlogDate.defaultProps = {
  text: '',
};

export default BlogDate;
