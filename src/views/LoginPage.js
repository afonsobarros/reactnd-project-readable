import React, { Component } from 'react';
import PageBase from '../components/PageBase';
import User from '../components/User';
import { Paper } from 'material-ui/';
import themeDefault from '../theme-default';


class LoginPage extends Component {

  render() {
    return (
      <PageBase title="Login"
        breadcrumb="Readable / login">

        <Paper style={themeDefault.paper}>
          <User />
        </Paper>

      </PageBase>
    )
  };
};

export default LoginPage;
