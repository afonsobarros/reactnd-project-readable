import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/ReadableAPI';

import Dialog, {
  DialogContent,
} from 'material-ui/Dialog';

import {
  Button
} from 'material-ui';

import themeDefault from '../theme-default';

import Post from './Post';
import Comment from './Comment';

import { deletePost, updatePost } from '../actions/posts'
import { toggleEditMode, showSnackbar } from '../actions/appState'

class PostDetailDialogue extends Component {

  toggleEdit() {
    this.props.toggleEditMode({ ...this.props.post });
  }

  onSave() {
    const post = this.props.editPost;
    ReadableAPI.updatePost(post)
      .then(res => {
        this.props.updatePost(post);
        this.props.toggleEditMode();
        this.props.showSnackbar('Post updated');
      })
  }

  onDelete() {
    const post = this.props.post;
    ReadableAPI.deletePost(post)
      .then(res => {
        this.props.deletePost(post);
        this.props.showSnackbar('Post deleted');
        this.props.onRequestClose();
      })
  }

  render() {
    const { classes, updatePost, editPost, editCommentMode, showSnackbar, onRequestClose, post, user, category, categories, editMode, toggleEditMode, deletePost, ...other } = this.props;

    return (
      post
        ? <Dialog onRequestClose={onRequestClose} {...other}>
          <DialogContent>
            {
              editMode
                ?
                <div>
                  <Button style={themeDefault.editAbsolute} onClick={this.toggleEdit.bind(this)} color="primary" >
                    <i className="material-icons">close</i>cancel
                  </Button>
                  <Button style={themeDefault.editAbsolute} onClick={this.onSave.bind(this)} color="primary" >
                    <i className="material-icons">check</i>save
                  </Button>
                </div>
                :
                <div>
                  <Button style={themeDefault.editAbsolute} onClick={this.toggleEdit.bind(this)} color="primary" >
                    <i className="material-icons">edit</i>edit post
                  </Button>
                  <Button style={themeDefault.editAbsolute} onClick={this.onDelete.bind(this)} color="primary" >
                    <i className="material-icons">delete_forever</i> delete post
                  </Button>
                </div>
            }

            <Post post={post} insidedialogue={true} />
          </DialogContent>
          {
            !editMode && !editCommentMode
              ?
              <div style={themeDefault.fullWidth} >
                <Comment onRequestClose={onRequestClose} target={post} />
              </div>
              : null
          }
        </Dialog>
        : null
    );
  }
}

function mapStateToProps(state) {
  return {
    editMode: state.appState.editMode,
    editPost: state.appState.editPost,
    editCommentMode: state.appState.editCommentMode
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleEditMode: (post) => dispatch(toggleEditMode(post)),
    deletePost: (post) => dispatch(deletePost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
    showSnackbar: (message) => dispatch(showSnackbar({ message })),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailDialogue);
