import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Facebook, YouTube } from '@material-ui/icons';
import { blue, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
    fontWeight: 600,
    paddingTop: 5,
    paddingBottom: 5,
  },
  nav: {
    flex: '1 1 0',
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
  },
  logo: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  menuItem: {
    display: 'flex',
    marginLeft: theme.spacing(2),
    color: `${theme.palette.primary.contrastText}`,
    textDecoration: 'none',
    transition: 'color 100ms ease-in-out',
    '&:hover': {
      color: `${theme.palette.secondary.main}`,
      borderBottom: `1px solid ${theme.palette.secondary.dark}`,
    },
  },
  divider: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    opacity: '.25',
    backgroundColor: theme.palette.primary.contrastText,
  },
  fbIcon: {
    display: 'flex',
    color: blue[300],
    '&:hover': {
      color: blue[400],
    },
  },
  ytIcon: {
    display: 'flex',
    marginRight: theme.spacing(2),
    color: red[300],
    '&:hover': {
      color: red[400],
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#3f51b5',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky" color="primary" elevation={0} className={classes.root}>
      <Toolbar>
        <nav className={classes.nav}>
          <Divider orientation="vertical" flexItem className={classes.divider} />
          <a
            to="https://www.youtube.com/user/grupahunter"
            target="blank"
            className={classes.ytIcon}
          >
            <YouTube />
          </a>
          <a to="https://www.facebook.com/grupahunter" target="blank" className={classes.fbIcon}>
            <Facebook />
          </a>
        </nav>
        <button type="button" onClick={handleOpen}>
          react-transition-group
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
          </Fade>
        </Modal>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
