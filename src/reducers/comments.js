import { UPDATE_COMMENTS, DELETE_COMMENT, ADD_COMMENT } from '../actions/comments'

const initialCommentsState = {}

function comments(commentsState = initialCommentsState, action) {

  switch (action.type) {
    case DELETE_COMMENT:
      return action.comment.id;
    case UPDATE_COMMENTS:
      return action.comments
    case ADD_COMMENT:
      return commentsState.push(action.comment)
    default:
      return commentsState
  }
}

export default comments;