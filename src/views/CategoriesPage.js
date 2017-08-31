import React, { Component } from 'react';
import { Route, Switch } from 'react-router';


import PageBase from '../components/PageBase';
import PostDetailDialogue from '../components/PostDetailDialogue';

import Data from '../data';

//import { CircularProgress } from 'material-ui/Progress';
//import themeDefault from '../theme-default';

class CategoriesPage extends Component {

  state = {
    dialogueOpen: true,
    newPostData: {}
  };

  openDialogue = event => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ dialogueOpen: true, anchorEl: event.currentTarget });
  };

  closeDialogue = value => {
    this.setState({ newPostData: value, dialogueOpen: false });
    //this.props.handleChangeRequestNavDrawer();
  };

  render() {
    const { match } = this.props;

    const currentCat = match.params['category'] || 'all';
    const currentPost = match.params['post_id'] || '';

    let user = Data.user;
    let post = Data.Posts[currentPost];
    let categories = [];
    //let orderBy = 'timestamp';
    
    Object.keys(Data.Categories)
      .map((category, index) =>
        categories.push(Data.Categories[category])
      );
    //console.log('this.props', this.props, match.params)

    return (

      <PageBase title={currentCat}
        breadcrumb="Readable / Categories Page">
        <Switch>
          <Route path="/:category/:post_id" >
              <PostDetailDialogue
                selectedValue={this.state.selectedValue}
                open={true}
                onRequestClose={this.closeDialogue}
                post={post}
                user={user}
                category={currentCat}
              />
          </Route>
          <Route path="*" />
        </Switch>
      </PageBase>
    );
  };
}
export default CategoriesPage;
