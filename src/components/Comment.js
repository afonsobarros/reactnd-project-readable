import React, { Component } from 'react';
import { connect } from 'react-redux'

import themeDefault from '../theme-default';
import { Button, TextField } from 'material-ui';

import { updateNewComment, resetNewComment } from '../actions/appState'
import { addComment } from '../actions/comments'

class Comment extends Component {
  updateCommentTimeout = 0;

  updateComment = (prop, value) => {
    let comment = this.props.newComment;
    comment[prop] = value;

    this.props.updateNewComment({ newComment: comment });
    this.forceUpdate();
  };

  handleMenuClose = () => {
    this.props.closeDialogueCategories();
  };

  saveComment = () => {
    let comment = this.props.newComment;
    comment.author = this.props.user.userName;
    comment.parentId = this.props.target.id;
    this.props.addComment({ newComment: comment });
    this.props.resetNewComment();
    this.forceUpdate();
  };

  render() {
    const { onRequestClose, newComment } = this.props;
    const isDisabled = newComment.body === '';
    return (
      <div style={themeDefault.actionsDiv}>
        <span style={themeDefault.flexGrow}>
          <TextField
            multiline
            required
            label="Add a comment"
            helperText="Please don't be a troll..."
            rowsMax="4"
            style={themeDefault.inputFullActions}
            onChange={(event) => this.updateComment('body', event.target.value)}
            value={newComment.body}
          />
          </span>
        <Button raised onClick={onRequestClose} color="primary" style={themeDefault.raisedButton}>
          cancel
        </Button>
        <Button raised color="accent" disabled={isDisabled} onClick={this.saveComment} style={themeDefault.raisedButton}>
          send
      </Button>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    user: state.user,
    newComment: state.appState.newComment
  }
}
function mapDispatchToProps(dispatch) {
  return {
    updateNewComment: (comment) => dispatch(updateNewComment(comment)),
    addComment: (comment) => dispatch(addComment(comment)),
    resetNewComment: () => dispatch(resetNewComment())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);