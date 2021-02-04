import React from 'react';
import * as R from 'ramda';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Fade } from '@material-ui/core';
import { about } from '../constants/apiUrls';
import Preloader from './Blog/Preloader';
import usePages from '../hooks/usePages';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  title: {
    padding: theme.spacing(3, 0),
    borderBottom: 'solid #e4e7e8 1px',
    color: '#000',
    transition: 'color 200ms ease-in-out',
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'left',
  },
}));

const About = () => {
  const classes = useStyles();
  const data = usePages(about);

  if (R.isEmpty(data)) return <Preloader />;

  return (
    <Container className={classes.root} maxWidth='md'>
      <Fade in timeout={2500}>
        <Grid container justify='center'>
          <Typography variant='h3' className={classes.title}>
            {data.title.rendered}
          </Typography>
          <Typography className={classes.text}>
            <span dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
          </Typography>
        </Grid>
      </Fade>
    </Container>
  );
};

export default About;
