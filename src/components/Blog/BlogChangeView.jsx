import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ViewListIcon from '@material-ui/icons/ViewList';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { getView } from '../../store/actions/selectors';
import { setView } from '../../store/actions/blogActions';

const BlogChangeView = () => {
  const dispatch = useDispatch();
  const view = useSelector(getView);

  return (
    <>
      <ToggleButtonGroup
        value={view}
        size="small"
        exclusive
        onChange={(value, nextView) => dispatch(setView(nextView))}
      >
        <ToggleButton value="agenda" aria-label="agenda">
          <ViewAgendaIcon />
        </ToggleButton>
        <ToggleButton value="list" aria-label="list">
          <ViewListIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default BlogChangeView;
