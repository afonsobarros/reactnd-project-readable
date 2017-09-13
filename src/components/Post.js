import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/ReadableAPI';

import {
  Avatar, Badge, Button, Chip,
  Divider, IconButton,
  Card, CardHeader, CardContent, CardActions,
  TextField, Typography
} from 'material-ui';

import Collapse from 'material-ui/transitions/Collapse';

import themeDefault from '../theme-default';

import Rating from './Rating';
import UserAvatar from './UserAvatar';

import { toggleComments, updateEditPost, toggleEditComment, updateEditComment, showSnackbar} from '../actions/appState'
import { deleteComment } from '../actions/comments'

class Post extends Component {

  handleExpandClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.toggleComments();
  };

  updateEditPost = (prop, value) => {
    let post = this.props.editPost;
    post[prop] = value;
    this.props.updateEditPost(post);
    this.forceUpdate();
  };

  toggleEditComment(comment) {
    this.props.toggleEditComment({ ...comment });
  }

  updateEditComment = (prop, value) => {
    let comment = this.props.editComment;
    comment[prop] = value;
    this.props.updateEditComment(comment);
    this.forceUpdate();
  };

  onSaveComment() {
    const comment = this.props.editComment;
    ReadableAPI.updatePost(comment)
      .then(res => {
        this.props.updatePost(comment);
        this.props.toggleEditMode();
        this.props.showSnackbar('Post updated');
        this.forceUpdate();
        
      })
  }

  onDeleteComment(comment) {
    ReadableAPI.deleteComment(comment)
      .then(res => {
        this.props.deleteComment(comment);
        this.props.showSnackbar('Comment deleted');
        this.forceUpdate();
        
      })
  }

  render() {
    const { post, editPost, insidedialogue, comments, commentsExpanded, editMode, editCommentMode, editComment } = this.props;
    const date = post && post.timestamp ? new Date(post.timestamp).toDateString() : '';
    const filteredComments = comments.filter(comment => comment.parentId === post.id && !comment.deleted && (!editCommentMode || comment.id === editComment.id)).sort((a, b) => b.timestamp - a.timestamp);

    return (
      post.id
        ?
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
                    multiline
                    rowsMax="5"
                    label="Post title"
                    onChange={(event) => this.updateEditPost('title', event.target.value)}
                    style={themeDefault.inputFull}
                    value={editPost.title}
                  />
                  <TextField
                    required
                    label="Post body"
                    multiline
                    rowsMax="10"
                    onChange={(event) => this.updateEditPost('body', event.target.value)}
                    style={themeDefault.inputFull}
                    value={editPost.body}
                  />
                </div>
            }
          </CardContent>
          {
            !editMode || !insidedialogue
              ?
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
                                {
                                  editCommentMode && comment.id === editComment.id
                                    ?
                                    <div>
                                      <TextField
                                        required
                                        multiline
                                        rowsMax="5"
                                        label="Comment body"
                                        onChange={(event) => this.updateEditComment('body', event.target.value)}
                                        value={editComment.body}
                                      />
                                      <Button style={themeDefault.editAbsolute} onClick={() => this.toggleEditComment()} color="primary" >
                                        <i className="material-icons">close</i>cancel
                                      </Button>

                                      <Button style={themeDefault.editAbsolute} onClick={this.onSaveComment.bind(this)} color="primary" >
                                        <i className="material-icons">check</i>save
                                        </Button>
                                    </div>
                                    :
                                    <div>

                                      <IconButton style={themeDefault.editAbsolute} onClick={() => this.toggleEditComment(comment)} color="primary" >
                                        <i className="material-icons">edit</i>
                                      </IconButton>
                                      <IconButton style={themeDefault.editAbsolute} onClick={() => this.onDeleteComment(comment)} color="primary" >
                                        <i className="material-icons">delete_forever</i>
                                      </IconButton>
                                      <Typography type="title" gutterBottom={true} style={themeDefault.comment}>
                                        {comment.body}
                                      </Typography>
                                      <Rating target={comment} type="comment" />
                                    </div>
                                }
                              </CardContent>
                              <Divider />

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
              : null
          }
        </Card>
        : null
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    comments: state.comments,
    posts: state.posts,
    commentsExpanded: state.appState.commentsExpanded,
    editMode: state.appState.editMode,
    editPost: state.appState.editPost,
    editComment: state.appState.editComment,
    editCommentMode: state.appState.editCommentMode
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateEditPost: (post) => dispatch(updateEditPost(post)),
    toggleComments: () => dispatch(toggleComments()),
    toggleEditComment: (comment) => dispatch(toggleEditComment(comment)),
    updateEditComment: (comment) => dispatch(updateEditPost( comment )),
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    showSnackbar: (message) =>  dispatch(showSnackbar({message})),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
