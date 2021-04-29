import React, { useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  getAllPostNumber,
  getImagesNumber,
} from '../../store/actions/selectors';
import {
  faCameraRetro,
  faGlobeAfrica,
} from '@fortawesome/free-solid-svg-icons';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
} from '@material-ui/core';
import Fire from '../../assets/img/gora.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(15, 0),
    background: `url(${Fire}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  },

  card: {
    minHeight: theme.spacing(35),
    margin: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },

  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(1),
    fontWeight: 'bold',
  },

  icon: {
    fontSize: theme.spacing(15),
  },
}));

const Boxes = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;
    if (mounted) dispatch(getFrontPosts());
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={5}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Typography variant='h5' align='center' gutterBottom={true}>
                      <CountUp
                        end={146}
                        start={isVisible ? 0 : 146}
                        duration={4}
                      />{' '}
                      wypraw udokumentowanych na naszej stronie
                    </Typography>
                  )}
                </VisibilitySensor>
                <FontAwesomeIcon
                  icon={faGlobeAfrica}
                  className={classes.icon}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Typography variant='h5' align='center' gutterBottom={true}>
                      <CountUp
                        end={3277}
                        start={isVisible ? 0 : 3277}
                        duration={4}
                      />{' '}
                      zdjęć w galeriach
                    </Typography>
                  )}
                </VisibilitySensor>
                <FontAwesomeIcon
                  icon={faCameraRetro}
                  className={classes.icon}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Boxes;
