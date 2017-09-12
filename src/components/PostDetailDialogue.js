import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import themeDefault from '../theme-default';
import Dialog, {
  DialogActions,
  DialogContent,
} from 'material-ui/Dialog';
import Post from './Post';
import Comment from './Comment';

class PostDetailDialogue extends Component {

  render() {
    const { classes, onRequestClose, post, user, category, categories, ...other } = this.props;

    return (
      post
        ? <Dialog onRequestClose={onRequestClose} {...other}>
          <DialogContent>
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


export default PostDetailDialogue;
