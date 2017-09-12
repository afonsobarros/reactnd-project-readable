import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  Avatar, Badge, Chip,
  Divider, IconButton,
  Card, CardHeader, CardContent, CardActions,
  TextField, Typography
} from 'material-ui';

import Collapse from 'material-ui/transitions/Collapse';

import themeDefault from '../theme-default';

import Rating from './Rating';
import UserAvatar from './UserAvatar';
import { updatePosts, editPost } from '../actions/posts'
import { toggleComments, toggleEditMode } from '../actions/appState'


class Post extends Component {

  handleExpandClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.toggleComments();
  };

  updatePostTimeout = 0;

  updatePost = (prop, value) => {
    //console.log('update post', prop, value)
    let post = this.props.post;
    post[prop] = value;
    //clearTimeout(this.updatePostTimeout);
    //this.updatePostTimeout = setTimeout(() => {
      this.props.editPost({ post });
    //}, 500);
  };

  render() {
    const { post, insidedialogue, comments, commentsExpanded, editMode } = this.props;
    const date = post && post.timestamp ? new Date(post.timestamp).toDateString() : '';
    const filteredComments = comments.filter(comment => comment.parentId === post.id).sort((a, b) => b.timestamp - a.timestamp);

    return (
      <Card style={!insidedialogue ? themeDefault.card : themeDefault.cardNoShadow}>
        <Link to={"/" + post.category}>
          <Chip style={themeDefault.chipAbsolute}
            avatar={<Avatar>{post.category[0]}</Avatar>}
            label={post.category} />
        </Link>
        <CardHeader
          avatar={
            <UserAvatar username={post.author} />
          }
          title={post.author}
          subheader={date}
        />
        <Divider />

        <CardContent style={themeDefault.relative}>

          
          {
            !editMode || !insidedialogue
              ?
              <div>
                <Typography type="headline" >
                  {post.title}
                </Typography>
                <Typography component="p">
                  {post.body}
                </Typography>
              </div>
              :
              <div>
                <TextField
                  required
                  label="Post title"
                  onChange={(event) => this.updatePost('title', event.target.value)}
                  style={themeDefault.inputFull}
                  value={post.title}
                />
                <TextField
                  required
                  label="Post body"
                  multiline
                  rowsMax="10"
                  onChange={(event) => this.updatePost('body', event.target.value)}
                  style={themeDefault.inputFull}
                  value={post.body}
                />
              </div>
          }
        </CardContent>
        <div>
          <Divider />

          <CardActions >
            <Link to={"#"}>
              <Rating target={post} type="post" />
            </Link>
            <div style={themeDefault.flexGrow} />
            <IconButton
              onClick={insidedialogue ? this.handleExpandClick : null}
              color="primary"
            >
              <Badge badgeContent={filteredComments.length} color="accent">
                <i className="material-icons">{filteredComments.length > 0 ? 'speaker_notes' : 'speaker_notes_off'}</i>
              </Badge>
            </IconButton>
          </CardActions>
          {
            insidedialogue
              ? <Collapse in={commentsExpanded} transitionDuration="auto" unmountOnExit>
                <Divider />
                <CardContent style={themeDefault.commentsContainer}>
                  {
                    filteredComments.map((comment, index) =>
                      <div key={index} style={themeDefault.relative}>
                        <CardHeader
                          avatar={
                            <UserAvatar small={true} username={comment.author} />
                          }
                          title={comment.author}
                          subheader={new Date(comment.timestamp).toDateString()}
                        />
                        <CardContent style={themeDefault.noPadding}>
                          <Typography type="title" gutterBottom={true} style={themeDefault.comment}>
                            {comment.body}
                          </Typography>
                          <Rating target={comment} type="comment" />
                        </CardContent>
                      </div>
                    )
                  }
                  {
                    filteredComments.length < 1
                      ? <p>Be the first to comment this post!</p>
                      : null
                  }
                </CardContent>
              </Collapse>
              : null
          }
        </div>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    comments: state.comments,
    posts: state.posts,
    commentsExpanded: state.appState.commentsExpanded,
    editMode: state.appState.editMode
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updatePosts: (posts) => dispatch(updatePosts(posts)),
    editPost: (post) => dispatch(editPost(post)),
    toggleComments: () => dispatch(toggleComments()),
    toggleEditMode: () => dispatch(toggleEditMode())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
