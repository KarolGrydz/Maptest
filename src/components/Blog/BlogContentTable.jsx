import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },

  table: {
    minWidth: 700,
  },

  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
    fontWeight: 'bold',
  },

  body: {
    fontSize: 14,
  },

  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },

  readMore: {
    backgroundColor: `${theme.palette.secondary.main}`,
    transition: 'color 300ms ease-in-out',
    color: `${theme.palette.secondary.contrastText}`,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}`,
      color: `${theme.palette.primary.contrastText}`,
    },
  },

  title: {
    color: `${theme.palette.secondary.contrastText}`,
    textDecoration: 'none',
    transition: 'color 200ms ease-in-out',
    fontWeight: 600,
    '&:hover': {
      color: `${theme.palette.secondary.main}`,
    },
  },
}));

const BlogContentTable = ({ posts }) => {
  const classes = useStyles();

  return (
    <Grid item xs={9} className={classes.root}>
      {posts.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead className={classes.head}>
              <TableRow>
                <TableCell>Nazwa posta</TableCell>
                <TableCell align="right">Data wyprawy</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody className={classes.body}>
              {posts.map(({ id, title, date }) => (
                <TableRow className={classes.row} key={id}>
                  <TableCell component="th" scope="row">
                    <Link to={`/wyprawy/${id}`} className={classes.title}>
                      <div dangerouslySetInnerHTML={{ __html: title.rendered }} />
                    </Link>
                  </TableCell>
                  <TableCell align="right">{date.slice(0, 10)}</TableCell>
                  <TableCell align="right">
                    <Button className={classes.readMore}>Czytaj</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>Brak postów</Typography>
      )}
    </Grid>
  );
};

BlogContentTable.propTypes = {
  posts: propTypes.arrayOf(propTypes.object).isRequired,
};

export default BlogContentTable;
