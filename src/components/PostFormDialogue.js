import React, { Component } from 'react';

import themeDefault from '../theme-default';
import { Avatar,  Button, Chip, CardHeader, CardContent, Divider, Menu, MenuItem, TextField } from 'material-ui';
import UserAvatar from './UserAvatar';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import Data from '../data';

class PostFormDialogue extends Component {

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
    post[prop] = value;
    this.setState({ post });
    
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
    const post = {
      id: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'post title',
      body: 'post body',
      category: 'react',
      voteScore: 6,
      deleted: false
    }
    const date = post && post.timestamp ? new Date(post.timestamp).toDateString() : '';

    const { classes, onRequestClose, selectedValue, user, ...other } = this.props;
    const categories = [];
    Object.keys(Data.Categories)
      .map((category, index) => 
        categories.push(Data.Categories[category])
      );

    //console.log('user', user)
    return (
      <Dialog onRequestClose={this.handleRequestClose} {...other}>
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

              <Chip avatar={
                <Avatar>{categories[this.state.selectedIndex].name[0]}</Avatar>
              }
                label={categories[this.state.selectedIndex].name}
                onClick={this.handleClickListItem} />
              <Menu
                id="cat-menu"
                anchorEl={this.state.anchorEl}
                open={this.state.catMenuOpen}
                onRequestClose={this.handleMenuClose}
              >
                {categories.map((category, index) =>
                  <MenuItem key={index}
                    selected={index === this.state.selectedIndex}
                    onClick={e => this.handleMenuItemClick(e, index)}>
                    {category.name}
                  </MenuItem>
                )}
              </Menu>

              <TextField
                required
                label="Post title"
                onChange={this.updatePost}
                style={themeDefault.inputFull}
              />

              <TextField
                required
                label="Post body"
                multiline
                rowsMax="5"
                onChange={this.updatePost}
                style={themeDefault.inputFull}
              />

            </CardContent>
          </DialogContent>
          <Divider />

          <DialogActions>
            <Button raised onClick={this.handleRequestClose} color="primary" style={themeDefault.raisedButton}>
              cancel
            </Button>
            <Button raised color="accent" onClick={this.handleRequestClose} style={themeDefault.raisedButton}>
              send
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}


export default PostFormDialogue;
