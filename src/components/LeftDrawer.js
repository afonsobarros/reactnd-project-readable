import React, { Component } from 'react';
import { AppBar, Divider, Drawer, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from 'material-ui/';
import { Link } from 'react-router-dom';
import themeDefault from '../theme-default';
import Data from '../data';
import UserAvatar from './UserAvatar';
import PostFormDialogue from './PostFormDialogue';

class LeftDrawer extends Component {

  state = {
    dialogueOpen: false,
    newPostData: {}
  };
  openDialogue = event => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ dialogueOpen: true, anchorEl: event.currentTarget });
  };

  closeDialogue = value => {
    this.setState({ newPostData: value, dialogueOpen: false });
    this.props.handleChangeRequestNavDrawer();
  };

  render() {
    let { navDrawerOpen, handleChangeRequestNavDrawer, isMobile } = this.props;
    const isDocked = navDrawerOpen && !isMobile;
    const menus = Data.menus;
    const categories = Data.Categories;
    let username = Data.user.userName;

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

          <div style={themeDefault.menu}>
            
            <Link to="/user">
              <ListItem button>
                <ListItemIcon>
                  <UserAvatar username={username} />
                </ListItemIcon>
                <ListItemText primary={username} />
              </ListItem>
            </Link>
            <Link to={'/all'}>
              <ListItem button>
                <ListItemIcon>
                  <i className="material-icons" >filter_list</i>
                </ListItemIcon>
                <ListItemText primary='all posts' secondary='/all' />
              </ListItem>
            </Link>
            {categories.map((menu, index) =>
              <Link to={'/' + menu.name} key={index}>
                <ListItem button>
                  <ListItemIcon>
                    <i className="material-icons" >filter_list</i>
                  </ListItemIcon>
                  <ListItemText primary={menu.name + ' posts'} secondary={'/' + menu.path} />
                </ListItem>
              </Link>
            )}
            <Divider />

          </div>

          <div style={themeDefault.menu}>
            <Divider />

            <PostFormDialogue
              user={Data.user}
              selectedValue={this.state.selectedValue}
              open={this.state.dialogueOpen}
              onRequestClose={this.closeDialogue}
            />

            <ListItem button onClick={this.openDialogue}            >
              <ListItemIcon>
                <i className="material-icons">playlist_add</i>
              </ListItemIcon>
              <ListItemText primary="New Post" secondary="Create a new Post" />
            </ListItem>

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
          </div>
        </div>
      </Drawer >
    );
  }
};


export default LeftDrawer;
