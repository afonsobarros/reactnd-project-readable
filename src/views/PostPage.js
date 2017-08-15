import React from 'react';
import PageBase from '../components/PageBase';
import Post from '../components/Post';
import themeDefault from '../theme-default';

const PostPage = () => {

  return (

    <PageBase title="Post Detail"
      breadcrumb="Readable / Post Page">

        <Post/>

    </PageBase>
  );
};

export default PostPage;
