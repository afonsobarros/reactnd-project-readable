import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import { Link } from 'react-router-dom'
import { Button, Divider, Checkbox, FormControlLabel, TextField } from 'material-ui';
import themeDefault from '../theme-default';

import Data from '../data';

class User extends Component {
  state = {
    remember: Data.user.remember,
    userName: Data.user.userName,
    password: ''
  };

  updateCheckbox = prop => (event, value) => {
    this.setState({ [prop]: value });
  };
  updateUser = (prop, value) => {
    console.log('updateUser', prop, value)
    Data.user[prop] = value; 
    this.setState({ [prop]: value });
  };

  render() {
    const { remember, userName, password } = this.state;
    const disabled = !remember || userName.length < 1 || password.length < 1
    return (
      <form >
        <TextField
          label="Username"
          value={userName}
          onChange={(event) => this.updateUser('userName', event.target.value )}
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={event => this.setState({ password: event.target.value })}
        />

        <Divider />

        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={event => this.updateUser('remember', !remember )}
              />
            }
            label="Remember me"
          />

        </div>
        <div>
          <Switch>
            <Route exact path="/login">
              <div style={themeDefault.actionsDiv}>
                <span></span>
                <Link to="/dashboard" onClick={e => { if (disabled) e.preventDefault() }}>
                  <Button raised color="accent" disabled={disabled} style={themeDefault.raisedButton}>
                    Login
                  </Button>
                </Link>
              </div>
            </Route>
            <Route path="*" >
              <div style={themeDefault.actionsDiv}>
                <span></span>
                <Link to="/dashboard" >
                  <Button color="primary" style={themeDefault.raisedButton}>
                    Cancel
                  </Button>
                </Link>
                <Link to="/login">
                  <Button raised color="accent" style={themeDefault.raisedButton}>
                    <i className="material-icons" >exit_to_app</i> Logout
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

export default User;
