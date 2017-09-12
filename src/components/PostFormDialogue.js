import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
  openDialogueCategories,
  closeDialogueCategories,
  updateNewPost
} from '../actions/appState'
import {
  addNewPost,
} from '../actions/posts'

import themeDefault from '../theme-default';
import { Avatar, Button, Chip, CardHeader, CardContent, Divider, Menu, MenuItem, Typography, TextField } from 'material-ui';
import UserAvatar from './UserAvatar';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

class PostFormDialogue extends Component {
  updatePostTimeout = 0;

  updatePost = (prop, value) => {
    //console.log('update post', prop, value)
    let post = this.props.post;
    post[prop] = value;
    this.props.updateNewPost({ newPost: post });
    this.forceUpdate();
  };

  handleClickListItem = event => {
    this.props.openDialogueCategories({ target: event.currentTarget });
  };

  handleMenuItemClick = (event, category) => {
    this.props.closeDialogueCategories();
    this.updatePost('category', category)
  };

  handleMenuClose = () => {
    this.props.closeDialogueCategories();
  };

  savePost = () => {
    let { post } = this.props;
    post.author = this.props.user.userName;
    this.props.addNewPost(post);
    this.props.onRequestClose();
  };

  render() {
    const { post, classes, onRequestClose,updateNewPost,addNewPost, user, categories, dialogueCategoriesOpen, openDialogueCategories, closeDialogueCategories, anchorEl, ...other } = this.props;

    const date = post && post.timestamp ? new Date(post.timestamp).toDateString() : '';
    const isDisabled = post.title === '' || post.body === '';

    return (
      <Dialog onRequestClose={onRequestClose} {...other}>
        <form>
          <DialogTitle>Add a new post</DialogTitle>
          <Divider />

          <DialogContent>

            <CardHeader
              avatar={
                <UserAvatar username={user.userName} />
              }
              title={user.userName}
              subheader={date}
            />
            <CardContent>
              <Typography type="caption" color="inherit" >
                <p> Select Category </p>
              </Typography>
              <Chip
                avatar={
                  <Avatar>{post.category ? post.category[0] : categories[0].name[0]}</Avatar>
                }
                label={post.category ? post.category : categories[0].name}
                onClick={this.handleClickListItem}
                style={themeDefault.chip} />
              <Menu
                id="cat-menu"
                anchorEl={anchorEl}
                open={dialogueCategoriesOpen}
                onRequestClose={this.handleMenuClose}
              >
                {categories.map((category, index) =>
                  <MenuItem key={index}
                    selected={category.name === post.category}
                    onClick={e => this.handleMenuItemClick(e, category.name)}>
                    {category.name}
                  </MenuItem>
                )}
              </Menu>

              <TextField
                required
                label="Post title"
                onChange={(event) => this.updatePost('title', event.target.value)}
                style={themeDefault.inputFull}
              />

              <TextField
                required
                label="Post body"
                multiline
                rowsMax="5"
                onChange={(event) => this.updatePost('body', event.target.value)}
                style={themeDefault.inputFull}
              />

            </CardContent>
          </DialogContent>
          <Divider />

          <DialogActions>
            <Button raised onClick={onRequestClose} color="primary" style={themeDefault.raisedButton}>
              cancel
            </Button>
            <Button raised color="accent" disabled={isDisabled} onClick={this.savePost} style={themeDefault.raisedButton}>
              send
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}


function mapStateToProps(state) {
  return {
    post: state.appState.newPost,
    user: state.user,
    categories: state.categories,
    dialogueCategoriesOpen: state.appState.dialogueCategoriesOpen,
    anchorEl: state.appState.anchorEl,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    openDialogueCategories: (target) => dispatch(openDialogueCategories(target)),
    closeDialogueCategories: () => dispatch(closeDialogueCategories()),
    updateNewPost: (post) => dispatch(updateNewPost(post)),
    addNewPost: (post) => dispatch(addNewPost(post)),

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFormDialogue);
