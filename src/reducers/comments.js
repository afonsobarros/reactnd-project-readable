import { UPDATE_COMMENTS,UPDATE_COMMENT, DELETE_COMMENT, ADD_COMMENT, VOTE_COMMENT_UP, VOTE_COMMENT_DOWN } from '../actions/comments'
import { DELETE_POST } from '../actions/posts'

const initialCommentsState = []

function comments(commentsState = initialCommentsState, action) {

  switch (action.type) {
    case DELETE_POST:
      return commentsState.map(comment => {
        if (comment.parentId === action.post.id)
          comment.parentDeleted = true;
        return comment
      })
    case DELETE_COMMENT:
      return commentsState.map(comment => {
        if (comment.id === action.comment.id) {
          comment.deleted = true;
        }
        return comment
      })
      case UPDATE_COMMENT:
      return commentsState.map(comment => {
        if (comment.id === action.comment.id) {
          comment.timestamp = action.comment.timestamp;
          comment.body = action.comment.body;
        }
        return comment
      })
    case UPDATE_COMMENTS:
      return commentsState.concat(action.comments)
    case ADD_COMMENT:
      return commentsState.concat([action.newComment])
    case VOTE_COMMENT_UP:
      return commentsState.map(item => {
        if (item.id === action.comment.id)
          item.voteScore++;
        return item
      })
    case VOTE_COMMENT_DOWN:
      return commentsState.map(item => {
        if (item.id === action.comment.id)
          item.voteScore--;
        return item
      })
      
    default:
      return commentsState
  }
}

export default comments;