import React from 'react';
// import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

import ForestImage from './img/forest.jpg';

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
  height: '130vh',
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
});

const PostImg = styled('div')({
  backgroundColor: '#cecece',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
});

const PostButtom = styled(Button)({
  margin: '25px 0',
  backgroundColor: 'rgb(166, 183, 27)',
  '&:hover': {
    backgroundColor: '#8d9b1a',
  },
  '& span': {
    padding: '0',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export const BlogContent = ({ posts }) => (
  <Grid item xs={9}>
    {posts.map((post) => (
      <PostContainer key={post.id}>
        <a href={`/wyprawy/${post.id}`}>
          <Title>
            <div dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div>
          </Title>
        </a>
        <span>Data wyprawy: {post.date.slice(0, 10)}</span>
        <PostImg style={{ backgroundImage: `url(${ForestImage})` }}></PostImg>
        <PostDescription>
          <PostButtom variant="contained">Czytaj</PostButtom>
        </PostDescription>
      </PostContainer>
    ))}
  </Grid>
);

BlogContent.propTypes = {
  posts: propTypes.array.isRequired,
};
