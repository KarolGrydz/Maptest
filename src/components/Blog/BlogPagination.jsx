import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Container from '@material-ui/core/Container';

import { setCurrentPage } from '../../store/actions/blogActions';
import { getCurrentPage, getAllPagesNumber } from '../../store/actions/selectors';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

const BlogPagination = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);
  const pages = useSelector(getAllPagesNumber);

  return (
    <Container className={classes.root}>
      <Pagination
        count={pages}
        variant="outlined"
        shape="rounded"
        onChange={(event, page) => dispatch(setCurrentPage(page))}
        page={currentPage}
      />
    </Container>
  );
};

export default BlogPagination;
