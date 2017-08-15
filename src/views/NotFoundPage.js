import React from 'react';
import PageBase from '../components/PageBase';
import { Link } from 'react-router-dom';
import { Button, Paper} from 'material-ui/';
import themeDefault from '../theme-default';

const NotFoundPage = () => {
  return (
    <PageBase title="404 Page Not Found"
      breadcrumb="Readable / 404">

      <Paper style={themeDefault.paper}>
        <p>
          ..wooops, something went wrong.
      </p>
        <Link to="/">
          <Button color="primary">
            go back Home
        </Button>
        </Link>

      </Paper>
    </PageBase>
  );
};

export default NotFoundPage;
