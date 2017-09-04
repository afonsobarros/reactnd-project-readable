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

  state = {
    anchorEl: undefined,
    open: false,
    selectedIndex: 0,
    catMenuOpen: false,
    post: {
      title: '',
      body: '',
      category: ''
    }
  };

  button = undefined;
  
  updatePost = (prop, value) => {
    let post = this.state.post;
    post[prop] = value
    this.setState({ post });
  };

  handleClickListItem = event => {
    this.setState({ catMenuOpen: true, anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, catMenuOpen: false });
  };

  handleMenuClose = () => {
    this.setState({ catMenuOpen: false });
  };

  render() {

    const { classes, onRequestClose, post, user, category, categories, ...other } = this.props;
    
    return (
      post
        ? <Dialog onRequestClose={onRequestClose} {...other}>
          <form>
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
                <Link to={`/${category}`}>
                  <Button raised onClick={onRequestClose} color="primary" style={themeDefault.raisedButton}>
                    cancel
                </Button>
                </Link>
                <Button raised color="accent" onClick={onRequestClose} style={themeDefault.raisedButton}>
                  save
              </Button>
              </div>
            </DialogActions>
          </form>
        </Dialog>
        : null
    );
  }
}


export default PostDetailDialogue;
