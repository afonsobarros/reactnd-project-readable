import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import { Link } from 'react-router-dom'
import { Button, Divider, Checkbox, FormControlLabel, TextField } from 'material-ui';
import themeDefault from '../theme-default';

import Data from '../data';

class User extends Component {
  state = {
    isHuman: Data.user.isHuman,
    userName: Data.user.userName,
    password: Data.user.password
  };

  updateCheckbox = prop => (event, value) => {
    this.setState({ [prop]: value });
  };
  updateUser = (prop, value) => {
    //console.log('updateUser', prop, value)
    Data.user[prop] = value;
    this.setState({ [prop]: value });
  };

  render() {
    const { isHuman, userName, password } = this.state;
    const disabled = !isHuman || (userName && userName.length < 1) || (password && password.length < 1)
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
          value={userName}
          onChange={(event) => this.updateUser('userName', event.target.value)}
          helperText="Username to identify your posts"
          style={themeDefault.input}
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={event => this.setState({ password: event.target.value })}
          helperText="Two characters are enough"
          style={themeDefault.input}
        />

        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={isHuman}
                onChange={event => this.updateUser('isHuman', !isHuman)}
              />
            }
            label="I'm not a robot"
          />

        </div>
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
                    Cancel
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
