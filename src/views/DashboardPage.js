import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../components/PageBase';
import Post from '../components/Post';
import themeDefault from '../theme-default';

const DashboardPage = () => {

  return (

    <PageBase title="Dashboard Page"
      breadcrumb="Readable / Dashboard Page">
      <div>
        <div style={themeDefault.actionsDiv}>
        </div>
        <Link to="/post">
          <Post/>
        </Link>
      </div>

    </PageBase>
  );
};

export default DashboardPage;
