import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import themeDefault from '../theme-default';
import { Button, Divider } from 'material-ui/';

const PageBase = (props) => {

  const { title, breadcrumb, children } = props;

  return (
    <div style={themeDefault.page}>
      <span>{breadcrumb}</span>
      <h2>{title}</h2>
      <Divider />
      <div className="row">

          {children}

      </div>
      <Switch>
        <Route exact path="/login" />
        <Route exact path="/create" />
        <Route path="*" >
          <Link to="/create">
            <Button fab 
                    style={themeDefault.fabButton}
                    aria-label="create" >
              <i className="material-icons">playlist_add</i>
            </Button>
          </Link>
        </Route>
      </Switch>
    </div>
  );
};

PageBase.propTypes = {
  title: PropTypes.string,
  breadcrumb: PropTypes.string,
  children: PropTypes.element
};

export default PageBase;
