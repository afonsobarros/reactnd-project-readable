import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from 'material-ui/';
import PageBase from '../components/PageBase';
import PostGrid from '../components/PostGrid';
import Post from '../components/Post';
import themeDefault from '../theme-default';
import Data from '../data';

const DashboardPage = () => {

  return (

    <PageBase title="All"
      breadcrumb="Readable / Dashboard Page">
      <PostGrid posts={Data.Posts} categories={Data.Categories}/>        
      </PageBase>
  );
};

export default DashboardPage;
