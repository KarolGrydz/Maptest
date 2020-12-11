import React from 'react';
import { styled } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const BlogPagination = ({ pages, changePage }) => (
  <Container>
    <Pagination
      count={Number(pages)}
      variant="outlined"
      shape="rounded"
      onChange={(event, page) => changePage(page)}
      // onClick={() => clearTrips()}
    />
  </Container>
);
