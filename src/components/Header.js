import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from 'material-ui/';

import themeDefault from '../theme-default';

class Header extends Component {

  state = {
    open: false,
    anchorEl: undefined,
  };

  handleClick = event => {
    //this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    //this.setState({ open: false });
  };

  render() {
    const { handleChangeRequestNavDrawer, user } = this.props;

    return (
      <div>
        <AppBar position="static" >
          <Toolbar style={themeDefault.toolbar}>
            <IconButton onClick={handleChangeRequestNavDrawer} color="contrast" >
              <i className="material-icons">menu</i>
            </IconButton>
            <Typography type="headline" align="center" color="inherit" >
              Readable
            </Typography>

            <IconButton
              color="contrast"
              aria-label="More"
              aria-owns={this.state.open ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <i className="material-icons">{user ? 'account_circle' : 'person_add'}</i>
            </IconButton>
            <Menu
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              onRequestClose={this.handleRequestClose}
            >
              <Link to="/user"><MenuItem onClick={this.handleRequestClose}>Profile</MenuItem></Link>
              <Link to="/login"><MenuItem onClick={this.handleRequestClose}>Logout</MenuItem></Link>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
