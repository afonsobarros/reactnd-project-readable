import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Snackbar } from 'material-ui'
import { CircularProgress } from 'material-ui/Progress';

import themeDefault from '../theme-default';

import NotFoundPage from '../views/NotFoundPage.js';
import UserPage from '../views/UserPage';
import LoginPage from '../views/LoginPage';
import CategoriesPage from '../views/CategoriesPage';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth from 'material-ui/utils/withWidth';


import * as ReadableAPI from '../utils/ReadableAPI';
import PostFormDialogue from './PostFormDialogue';

import {
  toggleSidenav,
  hideLoading,
  showLoading,
  hideSnackbar,
  showPostFormDialogue,
  hidePostFormDialogue
} from '../actions/appState'

import { updateUser } from '../actions/user'
import { updateCategories } from '../actions/categories'
import { updatePosts } from '../actions/posts'
import { updateComments } from '../actions/comments'


class App extends Component {
  totalLoad = 0;

  componentDidMount = () => {
    this.props.showLoading();
    console.log('componentDidMount')
    ReadableAPI.getUser()
      .then((res) => this.onDataLoad('user', res));

    ReadableAPI.getCategories()
      .then((categories) => this.onDataLoad('categories', categories));

    ReadableAPI.getPosts()
      .then((posts) => this.onDataLoad('posts', posts));
  }

  onDataLoad = (prop, val) => {
    this.totalLoad++;
    //console.log('onDataLoad', prop, val)
    switch (prop) {
      case 'user':
        this.props.updateUser(val)
        break
      case 'posts':
        this.props.updatePosts(val)
        val.map(val => {
          ReadableAPI.getComments(val.id)
            .then(comments => this.onDataLoad('comments', comments))
        })
        break
      case 'categories':
        this.props.updateCategories(val)
        break
      case 'comments':
        this.props.updateComments(val)
        break
      default:
        break
    }

    if (this.totalLoad >= 4) {
      this.props.hideLoading()
    }
  }

  handleSnackRequestClose() {
    if (this.props.snackBarOpen)
      this.props.hideSnackbar()
  }
  onRequestClose() {
    if (this.props.dialogueAddNewOpen)
      this.props.hidePostFormDialogue()
  }



  handleChangeRequestNavDrawer() {
    this.props.toggleSidenav()
  }

  render() {
    const { width } = this.props;
    const { navDrawerOpen, isLoading, snackBarOpen, snackBarMessage, dialogueAddNewOpen } = this.props;

    const paddingLeftDrawerOpen = themeDefault.drawer.width;
    const isMobile = width !== 'lg' && width !== 'xl';

    const styles = {
      header: {
        paddingLeft: navDrawerOpen && !isMobile ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && !isMobile ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider theme={themeDefault}>
        <BrowserRouter>
          <div>
            <div style={styles.header}>
              <Switch>
                <Route exact path="/" render={() => <Redirect exact from="/" to="/login" />} />
                <Route exact path="/login" />
                <Route path="*" >
                  <div>
                    <Header handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />
                    <LeftDrawer handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} isMobile={isMobile} />
                  </div>
                </Route>
              </Switch>

            </div>
            <div style={styles.container}>

              {
                !isLoading
                  ? <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/user" component={UserPage} />
                    <Route exact path="/:category" render={(props) => (
                      <CategoriesPage isMobile={isMobile} match={props.match} />
                    )} />
                    <Route path="/:category/:post_id" render={(props) => (
                      <CategoriesPage isMobile={isMobile} match={props.match} />
                    )} />
                    <Route path="*" component={NotFoundPage} />
                  </Switch>
                  : <CircularProgress style={themeDefault.center} color="primary" size={50} />
              }
            </div>

            <Switch>
              <Route path="/login" />
              <Route exact path="*" render={(props) => (
                <div>
                  <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    onRequestClose={this.handleSnackRequestClose.bind(this)}
                    open={snackBarOpen}
                    SnackbarContentProps={{
                      'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{snackBarMessage}</span>}
                  />
                  <PostFormDialogue
                    open={dialogueAddNewOpen}
                    onRequestClose={this.onRequestClose.bind(this)}
                  />
                </div>
              )} />
            </Switch>


          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}


function mapStateToProps(state) {
  return {
    navDrawerOpen: state.appState.navDrawerOpen,
    isLoading: state.appState.isLoading,
    snackBarOpen: state.appState.snackBarOpen,
    snackBarMessage: state.appState.snackBarMessage,
    dialogueAddNewOpen: state.appState.dialogueAddNewOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: (data) => dispatch(updateUser(data)),
    updateCategories: (data) => dispatch(updateCategories(data)),
    updatePosts: (data) => dispatch(updatePosts(data)),
    updateComments: (data) => dispatch(updateComments(data)),
    toggleSidenav: () => dispatch(toggleSidenav()),
    hideSnackbar: () => dispatch(hideSnackbar()),
    showPostFormDialogue: () => dispatch(showPostFormDialogue()),
    hidePostFormDialogue: () => dispatch(hidePostFormDialogue()),
    showLoading: () => dispatch(showLoading()),
    hideLoading: () => dispatch(hideLoading()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth()(App));