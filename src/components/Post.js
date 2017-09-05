import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Avatar, Badge, Chip, Divider, IconButton, Card, CardHeader, CardContent, CardActions, Typography } from 'material-ui';
import Collapse from 'material-ui/transitions/Collapse';

import themeDefault from '../theme-default';

import UserAvatar from './UserAvatar';
import { updatePosts } from '../actions/posts'
import { toggleComments } from '../actions/appState'


class Post extends Component {

  handleExpandClick = (e) => {
    this.props.toggleComments();
  };
  voteUp = (e) => {
    //this.setState({ expanded: !this.state.expanded });
  };
  voteDown = (e) => {
    //this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { post, insidedialogue, comments, commentsExpanded } = this.props;
    const date = post && post.timestamp ? new Date(post.timestamp).toDateString() : '';
    const filteredComments = comments.filter( comment => comment.parentId === post.id)
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

              <IconButton aria-label="Vote up"
                onClick={insidedialogue ? this.voteUp : null}
                style={themeDefault.greenColor}>
                <i className="material-icons">thumb_up</i>
              </IconButton>

              <IconButton aria-label="Vote down"
                onClick={insidedialogue ? this.voteDown : null}
                style={themeDefault.warnColor}>
                <i className="material-icons">thumb_down</i>
              </IconButton>

              <IconButton aria-label="Rating" color="primary">
                <Badge badgeContent={post.voteScore} color="accent">
                  <i className="material-icons">stars</i>
                </Badge>
              </IconButton>
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
    comments:state.comments,
    posts:state.posts,
    commentsExpanded: state.appState.commentsExpanded    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updatePosts: (post) => dispatch(updatePosts(post)),
    toggleComments:() => dispatch(toggleComments())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
