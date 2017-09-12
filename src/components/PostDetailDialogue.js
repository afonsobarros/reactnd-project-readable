import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import themeDefault from '../theme-default';
import { Button, TextField } from 'material-ui';
import Dialog, {
  DialogActions,
  DialogContent,
} from 'material-ui/Dialog';
import Post from './Post';

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
              <div style={themeDefault.actionsDiv}>
                <TextField
                  multiline
                  label="Add a comment"
                  helperText="Please don't be a troll..."
                  rowsMax="4"
                  style={themeDefault.inputFullActions}
                />
                  <Button raised onClick={onRequestClose} color="primary" style={themeDefault.raisedButton}>
                    cancel
                </Button>
                <Button raised color="accent" onClick={onRequestClose} style={themeDefault.raisedButton}>
                  save
              </Button>
              </div>
            </DialogActions>
        </Dialog>
        : null
    );
  }
}


export default PostDetailDialogue;
