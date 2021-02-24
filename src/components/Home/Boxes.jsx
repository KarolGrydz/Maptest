import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import { makeStyles } from '@material-ui/core/styles';
import { Public, PhotoCamera, EmojiObjects } from '@material-ui/icons';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(15, 0),
  },

  card: {
    minHeight: theme.spacing(40),
    margin: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    background: theme.palette.secondary.light,
  },

  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },

  icon: {
    fontSize: theme.spacing(25),
  },
}));

const Boxes = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <VisibilitySensor>
              {({ isVisible }) => (
                <Typography variant='h5' align='center'>
                  <CountUp end={146} start={isVisible ? 0 : 146} duration={4} />{' '}
                  wypraw udokumentowanych na naszej stronie
                </Typography>
              )}
            </VisibilitySensor>
            <Public className={classes.icon} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <VisibilitySensor>
              {({ isVisible }) => (
                <Typography variant='h5' align='center'>
                  <CountUp
                    end={3277}
                    start={isVisible ? 0 : 3277}
                    duration={4}
                  />{' '}
                  zdjęć w galeriach
                </Typography>
              )}
            </VisibilitySensor>
            <PhotoCamera className={classes.icon} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <VisibilitySensor>
              {({ isVisible }) => (
                <Typography variant='h5' align='center'>
                  <CountUp
                    end={1000000}
                    start={isVisible ? 0 : 1000000}
                    duration={4}
                  />{' '}
                  pomysłów na następne wyprawy
                </Typography>
              )}
            </VisibilitySensor>
            <EmojiObjects className={classes.icon} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Boxes;
