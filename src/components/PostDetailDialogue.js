import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom'

import themeDefault from '../theme-default';
import { Avatar, Badge, Button, Chip, CardHeader, CardContent, Divider, Menu, MenuItem, TextField, Typography } from 'material-ui';
import UserAvatar from './UserAvatar';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Post from './Post';
import Data from '../data';

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
    this.state.post[prop] = value;
  };

  handleRequestClose = () => {
    this.props.onRequestClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onRequestClose(value);
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
    /*
    const post = this.props || {
      id: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'post title',
      body: 'post body',
      category: 'react',
      voteScore: 6,
      deleted: false
    }*/

    const { classes, onRequestClose, selectedValue, post, user, category, categories, ...other } = this.props;
    const date = post && post.timestamp ? new Date(post.timestamp).toDateString() : '';
    console.log('post', post)
    return (
      post 
      ? <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <form>
          <DialogContent>
            <Post post={post} insidedialogue={true} />
          </DialogContent>
          <DialogActions>
            <Link to={`/${category}`}>
              <Button raised onClick={this.handleRequestClose} color="primary" style={themeDefault.raisedButton}>
                cancel
            </Button>
            </Link>
            <Button raised color="accent" onClick={this.handleRequestClose} style={themeDefault.raisedButton}>
              save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      : null
    );
  }
}


export default PostDetailDialogue;
