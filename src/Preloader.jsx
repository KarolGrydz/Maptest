import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '80vh',
    alignItems: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export const Preloader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={80} style={{ color: 'rgb(166, 183, 27)' }} />
    </div>
  );
};
