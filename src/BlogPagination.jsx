import React from 'react';
import propTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

const BlogPagination = ({ pages, changePage, currentPage }) => (
  <Container>
    <Pagination
      count={Number(pages)}
      variant="outlined"
      shape="rounded"
      onChange={(event, page) => changePage(page)}
      page={currentPage}
    />
  </Container>
);

BlogPagination.propTypes = {
  pages: propTypes.array.isRequired,
  changePage: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
};

export default BlogPagination;
