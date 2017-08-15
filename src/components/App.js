import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withTheme } from 'material-ui/styles'
import themeDefault from '../theme-default';
import NotFoundPage from '../views/NotFoundPage.js';
import UserPage from '../views/UserPage';
import LoginPage from '../views/LoginPage';
import PostPage from '../views/PostPage';
import CategoriesPage from '../views/CategoriesPage';
import Create from '../views/Create';
import Dashboard from '../views/DashboardPage';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import Data from '../data';

class App extends Component {
  state = {
    navDrawerOpen: false
  };

  handleChangeRequestNavDrawer() {
    //console.log('handleChangeRequestNavDrawer', !this.state.navDrawerOpen)
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = themeDefault.drawer.width;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider theme={themeDefault}>
        <BrowserRouter>
          <div>
            <div style={styles.header}>
              <Switch>
                <Route exact path="/login" />
                <Route path="*" >
                  <div>
                    <Header
                      handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />
                    <LeftDrawer navDrawerOpen={navDrawerOpen}
                      handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}
                    />
                  </div>
                </Route>
              </Switch>

            </div>
            <div style={styles.container}>
              <Switch>
                <Route exact path="/" render={() => <Redirect exact from="/" to="/login" />} />
                <Route path="/login" component={LoginPage} />
                <Route path="/post" component={PostPage} />
                <Route path="/categories" component={CategoriesPage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route path="/create" component={Create} />
                <Route path="/user" component={UserPage} />
                <Route path="*" component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
export default withTheme(App);
