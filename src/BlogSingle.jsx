import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import TripsContext from '../../context/trips/tripsContext';
import { Container, Grid } from '@material-ui/core';

import { Preloader } from '../layout/Preloader';
import { BlogSidebar } from '../layout/BlogSidebar';

import ForestImage from '../../assets/img/forest.jpg';

const BlogContainer = styled(Container)({
  padding: '10vh 0',
});

const Title = styled('h2')({
  padding: '15px 0',
  borderBottom: 'solid #e4e7e8 1px',
  marginRight: '25px',
  color: '#000',
  '&:hover': {
    color: 'rgb(166, 183, 27)',
  },
});

const PostContainer = styled('div')({
  padding: '0 25px',
  display: 'flex',
  flexDirection: 'column',
  '& h6': {
    textTransform: 'uppercase',
    fontSize: '1.17em',
    color: '#000',
  },
  '& h6:hover': {
    color: 'rgb(166, 183, 27)',
  },
  '& span': {
    color: 'rgb(166, 183, 27)',
    fontSize: '1em',
    textTransform: 'uppercase',
    padding: '25px 0',
  },
});

const PostDescription = styled('div')({
  display: 'block',
  padding: '25px 0 40px 0',
  '& span': {
    color: '#000',
  },
});

const PostImg = styled('div')({
  backgroundColor: '#cecece',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '500px',
});

export const BlogSinglePost = ({ match }) => {
  const tripsContext = useContext(TripsContext);
  const { singleTrip, getSingleTrip, trips, clearSingleTrip } = tripsContext;

  useEffect(() => {
    getSingleTrip(match.params.id);
    // eslint-disable-next-line
  }, [match.params.id]);

  if (!singleTrip.length && !trips.length) return <Preloader />;

  return (
    <BlogContainer>
      {singleTrip.length === 0 ? (
        <Preloader />
      ) : (
        <Grid container>
          <Grid item xs={9}>
            <PostContainer key={singleTrip.id}>
              <Link to={`/wyprawy/${singleTrip.id}`} onClick={() => clearSingleTrip()}>
                <Title>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: singleTrip.title.rendered,
                    }}
                  ></div>
                </Title>
              </Link>
              <span>Data wyprawy: {singleTrip.date.slice(0, 10)}</span>
              <PostImg style={{ backgroundImage: `url(${ForestImage})` }}></PostImg>
              <PostDescription>
                <div
                  dangerouslySetInnerHTML={{
                    __html: singleTrip.content.rendered,
                  }}
                ></div>
              </PostDescription>
            </PostContainer>
          </Grid>
          <BlogSidebar posts={trips} />
        </Grid>
      )}
    </BlogContainer>
  );
};
