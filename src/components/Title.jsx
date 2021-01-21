import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade, Container, Typography } from '@material-ui/core';

// import '../../assets/fonts/fonts.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0, 4, 0),
    lineHeight: theme.spacing(1),
    textAlign: 'center',
  },
}));

const Title = ({ title, subTitle }) => {
  const classes = useStyles();
  return (
    <>
      <Fade in={true} timeout={2000}>
        <Container className={classes.root}>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="h3">{subTitle}</Typography>
        </Container>
      </Fade>
    </>
  );
};

export default Title;
