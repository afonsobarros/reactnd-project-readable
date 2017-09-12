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

import { deletePost } from '../actions/posts'
import { toggleEditMode } from '../actions/appState'

class PostDetailDialogue extends Component {

  toggleEdit() {
    this.props.toggleEditMode();
  }

  onSave() {
    this.props.toggleEditMode();
  }
  onDelete() {
    this.props.deletePost(this.props.post);
  }
  render() {
    const { classes, onRequestClose, post, user, category, categories, editMode, toggleEditMode, deletePost,...other } = this.props;

    return (
      post.id
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
          <DialogActions>
            <Comment onRequestClose={onRequestClose} target={post} />
          </DialogActions>
        </Dialog>
        : null
    );
  }
}

function mapStateToProps(state) {
  return {
    editMode: state.appState.editMode,
    post: state.appState.editPost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleEditMode: () => dispatch(toggleEditMode()),
    deletePost: (post) => dispatch(deletePost(post)),
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailDialogue);
