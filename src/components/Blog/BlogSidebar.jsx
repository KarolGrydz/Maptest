import React from 'react';
import propTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { FilterHdr, FolderSharp } from '@material-ui/icons';
import {
  Grid,
  List,
  ListItem,
  InputBase,
  Typography,
  Container,
} from '@material-ui/core';

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

  title: {
    padding: theme.spacing(2, 0),
    borderBottom: 'solid #e4e7e8 1px',
  },

  categoryName: {
    color: `${theme.palette.secondary.contrastText}`,
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease-in-out',
    '&:hover': {
      color: `${theme.palette.secondary.main}`,
    },
  },

  postNumber: {
    paddingLeft: '5px',
    color: `${theme.palette.secondary.main}`,
  },

  icons: {
    color: `${theme.palette.secondary.main}`,
    paddingRight: theme.spacing(2),
    '& svg': {
      fontSize: theme.spacing(4),
    },
  },

  post: {
    paddingLeft: theme.spacing(1),
    borderLeft: `solid 3px ${theme.palette.secondary.main}`,
    marginTop: theme.spacing(4),
  },

  postText: {
    fontWeight: 'bold',
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease-in-out',
    color: `${theme.palette.secondary.contrastText}`,
    '&:hover': {
      color: `${theme.palette.secondary.main}`,
    },
  },

  postDate: {
    color: `${theme.palette.secondary.main}`,
    textTransform: 'uppercase',
  },
}));

const BlogSidebar = ({
  trips,
  allTrips,
  search,
  inputValue,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3}>
      <Typography variant="h4" className={classes.title}>Kategorie</Typography>
      <List>
        <ListItem>
          <span className={classes.icons}>
            <FilterHdr />
          </span>
          <Typography variant="subtitle1" className={classes.categoryName}>Wyprawy</Typography>
          <span className={classes.postNumber}>
            (
            { allTrips }
            )
          </span>
        </ListItem>
        <ListItem>
          <span className={classes.icons}>
            <FolderSharp />
          </span>
          <Typography variant="subtitle1" className={classes.categoryName}>Aktulności</Typography>
          <span className={classes.postNumber}>(0)</span>
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

      <Typography variant="h4" className={classes.title}>Ostatnie posty</Typography>
      {trips.map(({ id, title, date }) => (
        <Container key={id} className={classes.post}>
          <Link to={`/wyprawy/${id}`} style={{ textDecoration: 'none' }}>
            <Typography variant="h6" className={classes.postText}>
              <div dangerouslySetInnerHTML={{ __html: title.rendered }} />
            </Typography>
          </Link>
          <span className={classes.postDate}>{date.slice(0, 10)}</span>
        </Container>
      ))}
    </Grid>
  );
};

BlogSidebar.propTypes = {
  trips: propTypes.arrayOf(propTypes.object).isRequired,
  allTrips: propTypes.number.isRequired,
  search: propTypes.func.isRequired,
  inputValue: propTypes.string.isRequired,
};

export default BlogSidebar;
