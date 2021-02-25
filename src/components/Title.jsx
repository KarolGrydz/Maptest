import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Fade, Container, Typography } from '@material-ui/core';

// import '../../assets/fonts/fonts.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0, 8, 0),
    lineHeight: theme.spacing(1),
    textAlign: 'center',
    position: 'relative',
    zIndex: '1000',
    textShadow: '3px 3px white',
    // backgroundImage: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
  },
}));

const Title = ({ title, subTitle }) => {
  const classes = useStyles();
  return (
    <>
      <Fade in timeout={{ enter: 1000 }} style={{ transitionDelay: '3500ms' }}>
        <Container className={classes.root}>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="h3">{subTitle}</Typography>
        </Container>
      </Fade>
    </>
  );
};

Title.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
};

export default Title;
