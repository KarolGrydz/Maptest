import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: '250px',
  },

  title: {
    padding: theme.spacing(2, 0, 2, 2),
    fontWeight: 'bold',
  },

  titleLink: {
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

  cardRoot: {
    margin: theme.spacing(0, 2),
    border: 'solid 2px #e4e7e8',
  },
}));

const InfoEvent = ({ data: { title, content } }) => {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h5">
          {title.rendered}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.cardRoot}>
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              style={{ margin: '50px 0' }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: content.rendered,
                }}
              />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InfoEvent;
