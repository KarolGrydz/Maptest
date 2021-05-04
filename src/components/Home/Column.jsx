import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';
import columns from '../../constants/columns';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 'auto',
    width: '100%',
    transition: 'all 500ms ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },

  link: {
    textDecoration: 'none',
    color: 'black',
  },

  text: {
    zIndex: '1000',
    color: '#fff',
    position: 'absolute',
  },

  box: {
    opacity: '0.5',
    transition: 'all 500ms ease',
    overflow: 'hidden',
    '&:hover': {
      opacity: '1',
    },
  },
}));

const Column = () => {
  const classes = useStyles();

  return (
    <Grid container>
      {columns.map(({ label, id, link, img }) => (
        <Grid item xs={12} sm={12} md={3} className={classes.root} key={id}>
          <Typography variant="h5" align="center" className={classes.text}>
            {label}
          </Typography>
          <Box className={classes.box}>
            <Link className={classes.link} to={link}>
              <img src={img} alt={label} className={classes.image} />
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Column;
