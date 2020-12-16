import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import CompExpert from '../assets/img/CompExpert.png';
import MoroImage from '../assets/img/moro.jpg';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${MoroImage})`,
    width: '100%',
    bottom: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  img: {
    width: 60,
  },
  compExpert: {
    marginLeft: 'auto',
    marginRight: theme.spacing(2),
    width: 100,
    opacity: '.85',
    padding: 5,
    backgroundColor: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 3,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  caption: {
    fontSize: 10,
    marginBottom: 5,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container justify="flex-end">
        <Grid item xs={4}>
          <Link to="https://www.compexpert.pl/" target="blank" className={classes.compExpert}>
            <Typography variant="caption" className={classes.caption}>Hosting zapewnia</Typography>
            <img src={CompExpert} alt="CompExpert" className={classes.img} />
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
