import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import { Link } from 'react-router-dom'
import { Button, Divider, Checkbox, FormControlLabel, TextField } from 'material-ui';
import themeDefault from '../theme-default';

import { connect } from 'react-redux'


import { updateUser } from '../actions/user'
import { showSnackbar, hideSnackbar } from '../actions/appState'

import * as ReadableAPI from '../utils/ReadableAPI';

class User extends Component {
  snackBarHideTimeout = 0;
  snackBarDelay = 1000;

  updateCheckbox = prop => (event, value) => {
    this.updateUser(prop, value);
  };

  updateUser = (prop, value) => {
    let user = {
      ...this.props.user,
      [prop]: value
    }
    ReadableAPI.updateUser(user)
      .then(() => {
        this.props.updateUser(user)
        this.props.showSnackbar('Data saved');
        clearTimeout(this.snackBarHideTimeout);
        this.snackBarHideTimeout = setTimeout(this.props.hideSnackbar, this.snackBarDelay)
      })
  };

  render() {
    //console.log('user state', this.state)
    const { isHuman, userName, password } = this.props.user;
    const disabled = !isHuman || (userName && userName.length === 0) || (password && password.length < 2)

    return (
      <form style={themeDefault.login}>
        <Switch>
          <Route exact path="/login" />
          <Route path="*" >
            <h3 >Edit user details</h3>
          </Route>
        </Switch>

        <TextField
          label="Username"
          value={userName || ""}
          onChange={(event) => this.updateUser('userName', event.target.value)}
          helperText="Username to identify your posts"
          style={themeDefault.input}
        />

        <TextField
          label="Password"
          type="password"
          value={password || ""}
          onChange={event => this.updateUser('password', event.target.value)}
          helperText="Two characters are enough"
          style={themeDefault.input}
        />
        <Switch>
          <Route exact path="/login">
            <FormControlLabel
              control={
                <Checkbox
                  checked={isHuman || false}
                  onChange={event => this.updateUser('isHuman', !isHuman)}
                />
              }
              label="I'm not a robot"
            />
          </Route>
        </Switch>

        <Divider />

        <div>
          <Switch>
            <Route exact path="/login">
              <div style={themeDefault.actionsDiv}>
                <span></span>
                <Link to="/all" onClick={e => { if (disabled) e.preventDefault() }}>
                  <Button raised color="accent" disabled={disabled} style={themeDefault.raisedButton}>
                    Login
                  </Button>
                </Link>
              </div>
            </Route>
            <Route path="*" >
              <div style={themeDefault.actionsDiv}>
                <span></span>
                <Link to="/all" >
                  <Button raised color="primary" style={themeDefault.raisedButton}>
                    Back to posts
                  </Button>
                </Link>

              </div>
            </Route>
          </Switch>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    showSnackbar: (message) => dispatch(showSnackbar({ message })),
    hideSnackbar: () => dispatch(hideSnackbar()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);