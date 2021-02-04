import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Facebook, YouTube } from '@material-ui/icons';
import { blue, red } from '@material-ui/core/colors';
import Collapse from '@material-ui/core/Collapse';

import menu from '../constants/menu';
import HunterLogo from '../assets/img/logo.jpg';

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
    width: 60,
    height: 60,
  },
  menuItem: {
    display: 'flex',
    marginLeft: theme.spacing(2),
    color: `${theme.palette.primary.contrastText}`,
    textDecoration: 'none',
    transition: 'color 100ms ease-in-out',
    '&:hover': {
      color: `${theme.palette.secondary.contrastText}`,
      borderBottom: `1px solid ${theme.palette.secondary.contrastText}`,
    },
  },
  menuItemMobile: {
    display: 'flex',
    margin: theme.spacing(2),
    color: `${theme.palette.primary.contrastText}`,
    textDecoration: 'none',
    transition: 'color 100ms ease-in-out',
    '&:hover': {
      color: `${theme.palette.secondary.contrastText}`,
      borderBottom: `1px solid ${theme.palette.secondary.contrastText}`,
    },
  },
  divider: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    opacity: '.25',
    backgroundColor: theme.palette.primary.contrastText,
  },
  dividerMobile: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    opacity: '.25',
    backgroundColor: theme.palette.primary.contrastText,
    height: theme.spacing(0.1),
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
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
    },
  },
  menuNav: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuMobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <AppBar
      position='sticky'
      color='primary'
      elevation={0}
      className={classes.root}
    >
      <Toolbar>
        <Link to='/'>
          <Avatar alt='Logo' src={HunterLogo} className={classes.logo} />
        </Link>
        <nav className={classes.nav}>
          <div className={classes.menuNav}>
            {menu.map(({ id, link, label }) => (
              <Link key={id} className={classes.menuItem} to={link}>
                {label}
              </Link>
            ))}
          </div>
          <IconButton
            edge='end'
            className={classes.menuButton}
            color='inherit'
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Divider
            orientation='vertical'
            flexItem
            className={classes.divider}
          />
          <Link
            to='https://www.youtube.com/user/grupahunter'
            target='blank'
            className={classes.ytIcon}
          >
            <YouTube />
          </Link>
          <Link
            to='https://www.facebook.com/grupahunter'
            target='blank'
            className={classes.fbIcon}
          >
            <Facebook />
          </Link>
        </nav>
      </Toolbar>
      <Collapse in={open}>
        <div className={classes.menuMobile}>
          <Divider
            orientation='horizontal'
            flexItem
            className={classes.dividerMobile}
          />
          {menu.map(({ id, link, label }) => (
            <Link
              key={id}
              className={classes.menuItemMobile}
              to={link}
              onClick={() => setOpen(!open)}
            >
              {label}
            </Link>
          ))}
        </div>
      </Collapse>
    </AppBar>
  );
};

export default Navbar;
