import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Forest from '../../assets/img/forest.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },

  cardMedia: {
    height: '250px',
  },

  title: {
    padding: theme.spacing(4, 0),
    fontWeight: 'bold',
  },

  cardRoot: {
    margin: theme.spacing(0, 2),
    border: 'solid 2px #e4e7e8',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={8}>
          <Typography className={classes.title} variant="h5">
            Ostatnie wyprawy
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title} variant="h5">
            Informacje o organizowaniu imprez
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                image={Forest}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jakaś ostatnia wyprawa
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                image={Forest}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jakaś ostatnia wyprawa
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.cardRoot}>
            <CardContent>
              <Typography
                variant="h5"
                align="center"
                style={{ margin: '50px 0' }}
              >
                Informacja o organizowaniu imprez <br /> dla grup i osób
                prywatnych
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
