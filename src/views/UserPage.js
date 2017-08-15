import React, { Component } from 'react';
import PageBase from '../components/PageBase';
import User from '../components/User';
import { Paper } from 'material-ui/';
import themeDefault from '../theme-default';


class UserPage extends Component {

  render() {
    return (
      <PageBase title="My Account"
        breadcrumb="Readable / User Settings">
        <Paper style={themeDefault.paper}>
          <User />
        </Paper>

      </PageBase>
    )
  };
};

export default UserPage;
