import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from 'material-ui/';

import themeDefault from '../theme-default';

import { showHeaderSubmenu, hideHeaderSubmenu } from '../actions/appState';

class Header extends Component {

  state = {
    open: false,
    anchorEl: undefined,
  };

  handleClick = event => {
    this.props.showHeaderSubmenu({ target: event.currentTarget });
  };

  handleRequestClose = () => {
    this.props.hideHeaderSubmenu();
  };

  render() {
    const { handleChangeRequestNavDrawer, user, headerMenuOpen, anchorEl } = this.props;

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
              aria-owns={headerMenuOpen ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <i className="material-icons">{user ? 'account_circle' : 'person_add'}</i>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={headerMenuOpen}
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


function mapStateToProps(state) {
  return {
    headerMenuOpen: state.appState.headerMenuOpen,
    anchorEl: state.appState.anchorEl
  }
}


function mapDispatchToProps(dispatch) {
  return {
    showHeaderSubmenu: (target) => dispatch(showHeaderSubmenu(target)),
    hideHeaderSubmenu: () => dispatch(hideHeaderSubmenu()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);