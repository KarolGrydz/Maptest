import React from 'react';
import propTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
// import TripsContext from '../../context/trips/tripsContext';
import SearchIcon from '@material-ui/icons/Search';
import { FilterHdr, FolderSharp } from '@material-ui/icons';
import { Grid, List, ListItem, InputBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  search: {
    border: '1px solid #ccc',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

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

const BlogSidebar = ({ trips, allTrips, search, inputValue }) => {
  const classes = useStyles();

  return (
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
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Wyszukaj post po tytule"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onKeyPress={(e) => e.key === 'Enter' && search(e)}
          defaultValue={inputValue}
        />
      </div>

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
};

BlogSidebar.propTypes = {
  trips: propTypes.array.isRequired,
  allTrips: propTypes.number.isRequired,
};

export default BlogSidebar;
