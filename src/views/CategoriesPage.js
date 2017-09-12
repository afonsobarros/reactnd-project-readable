import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import PageBase from '../components/PageBase';
import PostDetailDialogue from '../components/PostDetailDialogue';
import PostGrid from '../components/PostGrid';
import { hidePostDetailDialogue, showPostDetailDialogue } from '../actions/appState';

class CategoriesPage extends Component {
  constructor(props) {
    super(props)
    this.onRequestClose = this.onRequestClose.bind(this)
  }

  onRequestClose() {
    const history = createBrowserHistory();
    history.push(`/${this.props.match.params.category}`);
    this.props.hidePostDetailDialogue();
    this.forceUpdate();
  }

  componentDidMount() {
    this.props.showPostDetailDialogue();
  }

  render() {
    const { match, isMobile, posts, dialoguePostDetailOpen } = this.props;

    const currentCat = match.params['category'] || 'all';
    const currentPost = match.params['post_id'] || '';
    const post = posts.filter(post => post.id === currentPost)[0];

    return (

      <PageBase title={currentCat}
        breadcrumb="Readable / Categories Page">

        <PostDetailDialogue
          open={dialoguePostDetailOpen}
          post={post}
          category={currentCat}
          onRequestClose={this.onRequestClose}
        />
        <PostGrid isMobile={isMobile} currentCat={currentCat} />
      </PageBase>
    );
  };
}


function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts,
    dialoguePostDetailOpen: state.appState.dialoguePostDetailOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hidePostDetailDialogue: () => dispatch(hidePostDetailDialogue()),
    showPostDetailDialogue: () => dispatch(showPostDetailDialogue())

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CategoriesPage));