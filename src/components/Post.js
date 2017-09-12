import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Avatar, Badge, Chip, Divider, IconButton, Card, CardHeader, CardContent, CardActions, Typography } from 'material-ui';
import Collapse from 'material-ui/transitions/Collapse';

import themeDefault from '../theme-default';

import Rating from './Rating';
import UserAvatar from './UserAvatar';
import { updatePosts } from '../actions/posts'
import { toggleComments } from '../actions/appState'


class Post extends Component {

  handleExpandClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.toggleComments();
  };

  render() {
    const { post, insidedialogue, comments, commentsExpanded } = this.props;
    const date = post && post.timestamp ? new Date(post.timestamp).toDateString() : '';
    const filteredComments = comments.filter(comment => comment.parentId === post.id)
    return (
      <div>
        <Card style={!insidedialogue ? themeDefault.card : themeDefault.cardNoShadow}>
          <Link to={"/" + post.category}>
            <Chip style={themeDefault.shipAbsolute}
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

          <CardContent>
            <Typography type="headline" >
              {post.title}
            </Typography>
            <Typography component="p">
              {post.body}
            </Typography>
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
                        <div key={index}>
                          <CardHeader
                            avatar={
                              <UserAvatar small={true} username={comment.author} />
                            }
                            title={comment.author}
                            subheader={new Date(comment.timestamp).toDateString()}
                          />
                          <CardContent style={themeDefault.noPadding}>
                            <Typography type="title" gutterBottom={true}>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    comments: state.comments,
    posts: state.posts,
    commentsExpanded: state.appState.commentsExpanded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updatePosts: (posts) => dispatch(updatePosts(posts)),
    toggleComments: () => dispatch(toggleComments())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
