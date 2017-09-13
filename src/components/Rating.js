import React, { Component } from 'react';
import { connect } from 'react-redux'

import themeDefault from '../theme-default';
import { Badge, IconButton } from 'material-ui';
import { votePostDown, votePostUp } from '../actions/posts'
import { voteCommentDown, voteCommentUp } from '../actions/comments'
import * as ReadableAPI from '../utils/ReadableAPI';

class Rating extends Component {

  voteUp = (e) => {
    e.preventDefault();
    e.stopPropagation();

    switch (this.props.type) {
      case 'post':
        ReadableAPI.votePost(this.props.target, 'upVote')
          .then(res => {
            this.props.votePostUp(this.props.target);
            this.forceUpdate()
          })
        break
      case 'comment':
        ReadableAPI.voteComment(this.props.target, 'upVote')
          .then(res => {
            this.props.voteCommentUp(this.props.target);
            this.forceUpdate()
          })
        break
      default:
        break;
    }
  };

  voteDown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    switch (this.props.type) {
      case 'post':
        ReadableAPI.votePost(this.props.target, 'downVote')
          .then(res => {
            this.props.votePostDown(this.props.target);
            this.forceUpdate()
          })
        break;
      case 'comment':
        ReadableAPI.voteComment(this.props.target, 'downVote')
          .then(res => {
            this.props.voteCommentDown(this.props.target);
            this.forceUpdate()
          })
        break;
      default:
        break;
    }
  };

  getScore(id, target) {
    let element;
    if (target === 'post') {
      element = this.props.posts.filter((item) => item.id === id)
    } else {
      element = this.props.comments.filter((item) => item.id === id)
    }
    return element[0].voteScore;
  }

  render() {
    const { target, type } = this.props;
    let voteScore = this.getScore(target.id, type);

    return (
      <div style={type === 'post' ? themeDefault.reverse : themeDefault.reverseAbsolute}>
        <IconButton aria-label="Vote up"
          onClick={this.voteUp}
          style={themeDefault.greenColor}>
          <i className="material-icons">thumb_up</i>
        </IconButton>

        <IconButton aria-label="Vote down"
          onClick={this.voteDown}
          style={themeDefault.warnColor}>
          <i className="material-icons">thumb_down</i>
        </IconButton>

        <IconButton aria-label="Rating" color="primary">
          <Badge badgeContent={voteScore} color="accent">
            <i className="material-icons">stars</i>
          </Badge>
        </IconButton>
      </div >
    );
  };
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}
function mapDispatchToProps(dispatch) {
  return {
    votePostUp: (target) => dispatch(votePostUp(target)),
    votePostDown: (target) => dispatch(votePostDown(target)),
    voteCommentUp: (target) => dispatch(voteCommentUp(target)),
    voteCommentDown: (target) => dispatch(voteCommentDown(target)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rating);