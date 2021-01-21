import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, fade } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import { InputBase, Button } from '@material-ui/core';

import { getSearch } from '../../store/actions/selectors';
import { searchTrip } from '../../store/actions/blogActions';

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
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
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  searchBtn: {
    backgroundColor: `${theme.palette.secondary.main}`,
    transition: 'color 300ms ease-in-out',
    color: `${theme.palette.secondary.contrastText}`,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}`,
      color: `${theme.palette.primary.contrastText}`,
    },
  },
}));

const BlogSearch = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const search = useSelector(getSearch);
  const [localSearch, setLocalSearch] = useState(search);
  const history = useHistory();

  const onButtonClick = () => {
    history.push('/wyprawy');
    dispatch(searchTrip(localSearch));
  };

  const onInputBase = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchTrip(e.target.value));
      history.push('/wyprawy');
    }
  };

  return (
    <div className={classes.search}>
      <Button variant="contained" onClick={onButtonClick} className={classes.searchBtn}>
        Szukaj
        <SearchIcon />
      </Button>
      <InputBase
        placeholder="Wyszukaj post po tytule"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onKeyPress={onInputBase}
        defaultValue={search}
        onChange={(e) => setLocalSearch(e.target.value)}
      />
    </div>
  );
};

export default BlogSearch;
