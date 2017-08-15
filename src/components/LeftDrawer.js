import React, { PropTypes } from 'react';
import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from 'material-ui/';
import { Link } from 'react-router-dom';
import themeDefault from '../theme-default';
import Data from '../data';

const LeftDrawer = (props) => {
  let { navDrawerOpen, handleChangeRequestNavDrawer } = props;
  const isMobile = window.innerWidth < 1000;
  const isDocked = navDrawerOpen && !isMobile;
  const menus = Data.menus;
  let username = Data.user.userName;
  let firstLetters = username.substring(0, 1).toUpperCase();

  if (username.split(" ").length > 1)
    firstLetters += username.split(" ")[1].substring(0, 1).toUpperCase();
  
  return (
    <Drawer
      onClick={handleChangeRequestNavDrawer}
      docked={isDocked}
      open={navDrawerOpen}
      style={themeDefault.drawer}>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit" >
            Menu
          </Typography>
        </Toolbar>
      </AppBar>

      <div style={themeDefault.drawer}>
        <List>
          <Link to="/user">
            <ListItem button>
              <ListItemIcon>
                <Avatar style={themeDefault.avatar}>{firstLetters}</Avatar>
              </ListItemIcon>
              <ListItemText primary={username} />
            </ListItem>
          </Link>
          {menus.map((menu, index) =>
            <Link to={menu.link} key={index}>
              <ListItem button>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.text} secondary={menu.description} />
              </ListItem>
            </Link>
          )}
        </List>
      </div>
    </Drawer >
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
