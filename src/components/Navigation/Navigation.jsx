import { Link } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Home from '@material-ui/icons/Home';
import People from '@material-ui/icons/People';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import style from './style.module.css';

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    background: '#08a3a0',
  },
  toolbarIconHidden: {
    visibility: 'hidden',
  },
  drawerPaper: {
    whiteSpace: 'nowrap',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: 56,
    },
  },
  iconButton: {
    color: 'white',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      margin: 0,
      padding: '5px 10px',
    },
  },
  responsiveLink: {
    textDecoration: 'none',
    color: '#006668',
  },
}));

const menuItems = [{
  text: 'home',
  icon: <Home />,
  link: 'home_link',
}, {
  text: 'search',
  icon: <Search />,
  link: 'search_link',
}, {
  text: 'team',
  icon: <People />,
  link: 'team_link',
},
];

const Nav = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  return (
    <div className={style.main}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
        className={clsx(classes.iconButton)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="permanent"
        open={open}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
      >

        <div
          className={clsx(classes.toolbarIcon, !open && classes.toolbarIconHidden)}
          onClick={() => setOpen(false)}
          onKeyUp={() => setOpen(false)}
          role="button"
          tabIndex="0"
        >
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <List>
          {menuItems.map(item => (
            <Link to={t(item.link)} className={clsx(classes.responsiveLink)} activeClassName="active" key={item.text}>
              <ListItem button key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>

      <nav className={style.nav}>
        {menuItems.map(item => (
          <Link to={t(item.link)} activeClassName="active" key={item.text}>{t(item.text)}</Link>
        ))
        }
      </nav>
    </div>
  );
};

export default Nav;
