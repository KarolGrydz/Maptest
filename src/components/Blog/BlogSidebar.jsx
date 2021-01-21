import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FilterHdr } from '@material-ui/icons';
import {
  Grid, List, ListItem, Typography,
} from '@material-ui/core';

import BlogSearch from './BlogSearch';
import BlogSidebarPosts from './BlogSidebarPosts';

import { getAllPostNumber } from '../../store/actions/selectors';

const useStyles = makeStyles((theme) => ({
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
}));

const BlogSidebar = () => {
  const classes = useStyles();
  const allPostNumber = useSelector(getAllPostNumber);

  return (
    <Grid item xs={12} md={3}>
      <Typography variant="h4" className={classes.title}>
        Kategorie
      </Typography>
      <List>
        <ListItem>
          <span className={classes.icons}>
            <FilterHdr />
          </span>
          <Typography variant="subtitle1" className={classes.categoryName}>
            Wyprawy
          </Typography>
          <span className={classes.postNumber}>
            (
            { allPostNumber }
            )
          </span>
        </ListItem>
      </List>
      <BlogSearch />
      <Typography variant="h4" className={classes.title}>
        Ostatnie posty
      </Typography>
      <BlogSidebarPosts />
    </Grid>
  );
};

export default BlogSidebar;
