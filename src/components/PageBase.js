import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux'

import themeDefault from '../theme-default';
import { Button, Divider } from 'material-ui';

import { showPostFormDialogue } from '../actions/appState'

class PageBase extends Component {

  openDialogue = event => {
    this.props.showPostFormDialogue()
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

function mapStateToProps(state) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return {
    showPostFormDialogue: () => dispatch(showPostFormDialogue()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageBase);