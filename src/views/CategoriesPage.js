import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux'

import PageBase from '../components/PageBase';
import PostDetailDialogue from '../components/PostDetailDialogue';
import PostGrid from '../components/PostGrid';

class CategoriesPage extends Component {

  render() {
    const { match, isMobile, categories, posts } = this.props;

    const currentCat = match.params['category'] || 'all';
    const currentPost = match.params['post_id'] || '';

    let post = posts[currentPost];

    return (

      <PageBase title={currentCat}
        breadcrumb="Readable / Categories Page">
        <Switch>
          <Route path="/:category/:post_id" >
            <PostDetailDialogue
              open={true}
              post={post}
              category={currentCat}
            />
          </Route>
          <Route path="*" />
        </Switch>
        <PostGrid isMobile={isMobile} currentCat={currentCat} />
      </PageBase>
    );
  };
}


function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts,
  }
}

export default connect(
  mapStateToProps,
)(CategoriesPage);
