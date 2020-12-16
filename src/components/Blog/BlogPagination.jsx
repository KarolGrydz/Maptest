import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

const BlogPagination = ({ pages, changePage, currentPage }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Pagination
        count={pages}
        variant="outlined"
        shape="rounded"
        onChange={(event, page) => changePage(page)}
        page={currentPage}
      />
    </Container>
  );
};

BlogPagination.propTypes = {
  pages: propTypes.number.isRequired,
  changePage: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired,
};

export default BlogPagination;
