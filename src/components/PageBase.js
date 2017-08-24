import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import themeDefault from '../theme-default';
import { Button, Divider } from 'material-ui';

import PostFormDialogue from './PostFormDialogue';
import Data from '../data';



class PageBase extends Component {

  state = {
    dialogueOpen: false,
    newPostData:{}
  };
  openDialogue = event => {
    this.setState({ dialogueOpen: true, anchorEl: event.currentTarget });
  };
  
  handleRequestClose = value => {
    this.setState({ newPostData: value, dialogueOpen: false });
  };

  render() {
    const { title, breadcrumb, children } = this.props;

    return (
      <div style={themeDefault.page}>
        <span>{breadcrumb}</span>
        <h2 style={themeDefault.capitalize}>{title}</h2>
        <Divider />
        <div className="row">

          {children}

        </div>

        <Switch>
          <Route exact path="/login" />
          <Route path="*" >
            <div>
              <PostFormDialogue
                user={Data.user}
                selectedValue={this.state.selectedValue}
                open={this.state.dialogueOpen}
                onRequestClose={this.handleRequestClose}
              />
              <Button fab
                onClick={this.openDialogue}
                style={themeDefault.fabButton}
                aria-label="create" >
                <i className="material-icons">playlist_add</i>
              </Button>
            </div>
          </Route>
        </Switch>
      </div >
    );
  };
}

export default PageBase;
