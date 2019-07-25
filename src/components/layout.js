/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import clsx from 'clsx';
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Home from '@material-ui/icons/Home';
import People from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';

import Header from "./header"
import "./layout.css"

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  toolbarIconHidden: {
    visibility: 'hidden',
  },
  drawerPaper: {
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  footer: {
    position: 'absolute',
    bottom: '0',
  }
}));

const menuItems = [{
  text: 'Home',
  icon: <Home />,
  link: '/',
}, {
  text: 'Architectors',
  icon: <People />,
  link: '/architects',
}]

const list = (
  <List>
    {menuItems.map((item) => (
      <Link to={item.link}>
        <ListItem button key={item.text}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      </Link>
    ))}
  </List>
)

const Layout = ({ children, title }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Header
        siteTitle={title}
        setOpen={setOpen}
        open={open}
       />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Drawer
          variant="permanent"
          open={open}
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
        >
          <div className={clsx(classes.toolbarIcon, !open && classes.toolbarIconHidden)}>
            <IconButton onClick={() => setOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          {list}
        </Drawer>
        <main>{children}</main>
        <footer className={classes.footer}>
          © {new Date().getFullYear()}, Built by 31 group
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
