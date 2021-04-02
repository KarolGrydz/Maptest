import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
}));

const Facebook = () => {
  const classes = useStyles();
  const [facebook, setfacebook] = useState({});

  useEffect(() => {
    axios
      .get(`https://hunter.polkowice.pl/wp-json/wp/v2/pages/5041`)
      .then((res) => setfacebook(res.data))
      .then((err) => console.log(err));
    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <Container>
      <Grid container className={classes.root}>
        <p>Hello facebook</p>
        {facebook.content ? (
          <div
            dangerouslySetInnerHTML={{ __html: facebook.content.rendered }}
          />
        ) : null}
      </Grid>
    </Container>
  );
};

export default Facebook;
