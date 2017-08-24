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
    let { width } = this.props;
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
                      handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />
                    <LeftDrawer navDrawerOpen={navDrawerOpen}
                                handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}
                                isMobile ={isMobile}/>
                  </div>
                </Route>
              </Switch>

            </div>
            <div style={styles.container}>
              <Switch>
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
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}


export default withWidth()(App)
