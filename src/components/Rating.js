import React, { Component } from 'react';
import { connect } from 'react-redux'

import themeDefault from '../theme-default';
import { Badge, IconButton } from 'material-ui';
import { votePostDown, votePostUp } from '../actions/posts'
import { voteCommentDown, voteCommentUp } from '../actions/comments'

class Rating extends Component {

  voteUp = (e) => {
    
    switch (this.props.type) {
      case 'post':
        this.props.votePostUp(this.props.target);
        break
      case 'comment':
        this.props.voteCommentUp(this.props.target);
        break
      default: ''
    }
    this.forceUpdate()
  };

  voteDown = (e) => {
    switch (this.props.type) {
      case 'post':
      this.props.votePostDown(this.props.target);
      break
      case 'comment':
        this.props.voteCommentDown(this.props.target);
        break
      default: ''
    }
    this.forceUpdate()
  };

  render() {
    const { target, type } = this.props;

    return (
      <div style={themeDefault.reverse}>
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
          <Badge badgeContent={target.voteScore} color="accent">
            <i className="material-icons">stars</i>
          </Badge>
        </IconButton>
      </div >
    );
  };
}

function mapStateToProps(state) {
  return {
    
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