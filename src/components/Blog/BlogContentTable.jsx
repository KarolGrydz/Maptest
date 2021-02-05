import React from 'react';
import propTypes from 'prop-types';
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
} from '@material-ui/core';

import BlogTitle from './BlogTitle';
import BlogButtonMore from './BlogButtonMore';

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
}));

const useTableCellStyles = makeStyles(
  {
    root: {
      padding: '1px',
    },
  },
  { name: 'MuiTableCell' }
);

const BlogContentTable = ({ posts }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={9} className={classes.root}>
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
                    <BlogTitle id={id} title={title} variant="subtitle1" />
                  </TableCell>
                  <TableCell align="right">{date.slice(0, 10)}</TableCell>
                  <TableCell align="right">
                    <BlogButtonMore text="Czytaj" id={id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h2">Brak postów</Typography>
      )}
    </Grid>
  );
};

BlogContentTable.propTypes = {
  posts: propTypes.arrayOf(propTypes.object).isRequired,
};

export default BlogContentTable;
