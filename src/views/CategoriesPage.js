import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import PageBase from '../components/PageBase';
import PostDetailDialogue from '../components/PostDetailDialogue';
import PostGrid from '../components/PostGrid';
import { hidePostDetailDialogue, showPostDetailDialogue } from '../actions/appState';

class CategoriesPage extends Component {
  post = {}

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
    this.props.showPostDetailDialogue(this.post);
  }

  render() {
    const { match, isMobile, dialoguePostDetailOpen } = this.props;

    const currentCat = match.params['category'] || 'all';
    
    return (

      <PageBase title={currentCat}
        breadcrumb="Readable / Categories Page">

        <PostDetailDialogue
          open={dialoguePostDetailOpen}
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
    dialoguePostDetailOpen: state.appState.dialoguePostDetailOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hidePostDetailDialogue: () => dispatch(hidePostDetailDialogue()),
    showPostDetailDialogue: (post) => dispatch(showPostDetailDialogue(post))

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CategoriesPage));