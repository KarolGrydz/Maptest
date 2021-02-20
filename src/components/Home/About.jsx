import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';

import { randomImg } from '../../utils/randomImg';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'black',
    margin: theme.spacing(10, 0, 0, 0),
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Grid item xs={3} className={classes.root}>
      <Typography variant='h5' align='center' className={classes.text}>
        Przyjaciele
      </Typography>
      <Box className={classes.box}>
        <img src={randomImg()} alt='' className={classes.image} />
      </Box>
    </Grid>
  );
};

export default About;
