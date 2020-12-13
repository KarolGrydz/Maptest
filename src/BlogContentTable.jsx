import propTypes from 'prop-types';
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const BlogContentTable = ({ posts }) => {
  const classes = useStyles();

  return (
    <Grid item xs={9}>
      {posts.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nazwa posta</StyledTableCell>
                <StyledTableCell align="right">Data wyprawy</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <StyledTableRow key={post.id}>
                  <StyledTableCell component="th" scope="row">
                    <div dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div>
                  </StyledTableCell>
                  <StyledTableCell align="right">{post.date.slice(0, 10)}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button>Czytaj</Button>
                  </StyledTableCell>
                </StyledTableRow>
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
  posts: propTypes.array.isRequired,
};
