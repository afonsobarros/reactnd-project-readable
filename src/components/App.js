import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import themeDefault from '../theme-default';
import NotFoundPage from '../views/NotFoundPage.js';
import UserPage from '../views/UserPage';
import LoginPage from '../views/LoginPage';
import CategoriesPage from '../views/CategoriesPage';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth from 'material-ui/utils/withWidth';

import { Snackbar } from 'material-ui'
import { CircularProgress } from 'material-ui/Progress';

import * as ReadableAPI from '../utils/ReadableAPI';

import { connect } from 'react-redux'
import { toggleSidenav, hideLoading, showLoading, hideSnackbar } from '../actions/appState'
import { updateUser } from '../actions/user'


class App extends Component {
  totalLoad = 0;

  componentDidMount = () => {
    this.props.showLoading();

    ReadableAPI.getUser()
      .then((res) => this.props.updateUser(res));

    ReadableAPI.getPosts()
      .then((posts) => this.onDataLoad('posts', posts));

    ReadableAPI.getCategories()
      .then((categories) => this.onDataLoad('categories', categories));

    ReadableAPI.getComments()
      .then((comments) => this.onDataLoad('comments', comments));
  }

  onDataLoad = (prop, val) => {
    this.totalLoad++;
    //console.log('onDataLoad', prop, val)
    if (this.totalLoad >= 3) {
      this.props.hideLoading()
    }
  }

  handleSnackRequestClose() {
    if (this.props.appState.snackBarOpen)
      this.props.hideSnackbar()
  }

  handleChangeRequestNavDrawer() {
    this.props.toggleSidenav(!this.props.navDrawerOpen)
  }

  render() {
    const { width, user } = this.props;
    const { navDrawerOpen, isLoading, snackBarOpen, snackBarMessage } = this.props.appState;

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
                    <Header
                      handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} 
                      user={user}/>
                    <LeftDrawer navDrawerOpen={navDrawerOpen}
                      handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}
                      isMobile={isMobile} 
                      user={user}/>
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
                <Snackbar
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  onRequestClose={this.handleSnackRequestClose.bind(this)}
                  open={snackBarOpen}
                  SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">{snackBarMessage}</span>}
                />
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
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: (data) => dispatch(updateUser(data)),
    toggleSidenav: (isExpanded) => dispatch(toggleSidenav(isExpanded)),
    hideSnackbar: () => dispatch(hideSnackbar()),
    showLoading: () => dispatch(showLoading()),
    hideLoading: () => dispatch(hideLoading()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth()(App));