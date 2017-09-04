import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom';
import { AppBar, Divider, Drawer, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from 'material-ui/';
import themeDefault from '../theme-default';

import UserAvatar from './UserAvatar';
import { showPostFormDialogue } from '../actions/appState'

class LeftDrawer extends Component {

  render() {
    const { navDrawerOpen, handleChangeRequestNavDrawer, isMobile, user, categories } = this.props;
    const isDocked = navDrawerOpen && !isMobile;

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
                  <UserAvatar username={user.userName} />
                </ListItemIcon>
                <ListItemText primary={user.userName} />
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

            <ListItem button onClick={this.props.showPostFormDialogue}>
              <ListItemIcon>
                <i className="material-icons">playlist_add</i>
              </ListItemIcon>
              <ListItemText primary="New Post" secondary="Create a new Post" />
            </ListItem>

            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <i className="material-icons" >exit_to_app</i>
                </ListItemIcon>
                <ListItemText primary="Logout" secondary="App sign out" />
              </ListItem>
            </Link>

          </div>
        </div>
      </Drawer >
    );
  }
};

function mapStateToProps(state) {
  return {
    user: state.user,
    categories: state.categories,
    navDrawerOpen: state.appState.navDrawerOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showPostFormDialogue: () => dispatch(showPostFormDialogue()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftDrawer);