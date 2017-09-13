import React, { Component } from 'react';
import { connect } from 'react-redux'

import Dialog, {
  DialogActions,
  DialogContent,
} from 'material-ui/Dialog';

import {
  Button
} from 'material-ui';

import themeDefault from '../theme-default';

import Post from './Post';
import Comment from './Comment';

import { deletePost, updatePost } from '../actions/posts'
import { toggleEditMode } from '../actions/appState'

class PostDetailDialogue extends Component {

  toggleEdit(post) {
    this.props.toggleEditMode( this.props.post );
  }

  onSave() {
    this.props.updatePost(this.props.editPost);
    this.props.toggleEditMode();
  }
  onDelete() {
    this.props.deletePost(this.props.post);
  }

  render() {
    const { classes, updatePost, editPost, onRequestClose, post, user, category, categories, editMode, toggleEditMode, deletePost, ...other } = this.props;

    return (
      post
        ? <Dialog onRequestClose={onRequestClose} {...other}>
          <DialogContent>
            {
              editMode
                ? <div>
                  <Button style={themeDefault.editAbsolute} onClick={this.toggleEdit.bind(this)} color="primary" >

                    <i className="material-icons">close</i>cancel
                </Button>

                  <Button style={themeDefault.editAbsolute} onClick={this.onSave.bind(this)} color="primary" >

                    <i className="material-icons">check</i>save
                  </Button>
                  <Button style={themeDefault.editAbsolute} onClick={this.onDelete.bind(this)} color="primary" >

                    <i className="material-icons">delete</i> delete post
                  </Button>
                </div>
                : <Button style={themeDefault.editAbsolute} onClick={this.toggleEdit.bind(this)} color="primary" >

                  <i className="material-icons">edit</i>edit post
                </Button>
            }

            <Post post={post} insidedialogue={true} />
          </DialogContent>
          {
            !editMode
              ?
              <DialogActions>
                <Comment onRequestClose={onRequestClose} target={post} />
              </DialogActions>
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleEditMode: (post) => dispatch(toggleEditMode(post)),
    deletePost: (post) => dispatch(deletePost(post)),
    updatePost: (post) => dispatch(updatePost(post)),    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailDialogue);
