import React from 'react';
import propTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
// import TripsContext from '../../context/trips/tripsContext';
import { FilterHdr, FolderSharp } from '@material-ui/icons';
import { Grid, List, ListItem } from '@material-ui/core';

const Title = styled('h2')({
  padding: '15px 0',
  borderBottom: 'solid #e4e7e8 1px',
  marginRight: '25px',
});

const CategoryName = styled('a')({
  color: '#515547',
  transitionDuration: '250ms',
  transitionTimingFunction: 'ease-in-out',
  '&:hover': {
    color: 'rgb(166, 183, 27)',
  },
});

const PostNumber = styled('span')({
  paddingLeft: '5px',
  color: 'rgb(166, 183, 27)',
});

const Icons = styled('span')({
  color: 'rgb(166, 183, 27)',
  paddingRight: '15px',
  '& svg': {
    fontSize: '2rem',
  },
});

const PostContainer = styled('div')({
  paddingLeft: '1.2rem',
  borderLeft: 'solid 3px #a6b71b',
  marginTop: '50px',
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
    fontSize: '0.8em',
    textTransform: 'uppercase',
  },
});

export const BlogSidebar = ({ trips, allTrips }) => (
  <Grid item xs={3}>
    <Title>Kategorie</Title>
    <List>
      <ListItem>
        <Icons>
          <FilterHdr />
        </Icons>
        <CategoryName href="#">Wyprawy</CategoryName>
        <PostNumber>({allTrips})</PostNumber>
      </ListItem>
      <ListItem>
        <Icons>
          <FolderSharp />
        </Icons>
        <CategoryName href="#">Aktulności</CategoryName>
        <PostNumber>(0)</PostNumber>
      </ListItem>
    </List>
    <Title>Ostatnie posty</Title>
    {trips.map((post) => (
      <PostContainer key={post.id}>
        <a href={`/wyprawy/${post.id}`}>
          <h6>
            <div dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div>
          </h6>
        </a>
        <span>{post.date.slice(0, 10)}</span>
      </PostContainer>
    ))}
  </Grid>
);

BlogSidebar.propTypes = {
  trips: propTypes.array.isRequired,
  allTrips: propTypes.number.isRequired,
};
