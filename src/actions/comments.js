
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT_UP = 'VOTE_COMMENT_UP'
export const VOTE_COMMENT_DOWN = 'VOTE_COMMENT_DOWN'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export function updateComments(comments) {
  return {
    type: UPDATE_COMMENTS,
    comments: comments
  }
}

export function addComment({ newComment }) {
  return {
    type: ADD_COMMENT,
    newComment,
  }
}

export function deleteComment( comment ) {
  return {
    type: DELETE_COMMENT,
    comment,
  }
}

export const voteCommentUp = (comment) => {
  return {
    type: VOTE_COMMENT_UP,
    comment
  }
}

export const voteCommentDown = (comment) => {
  return {
    type: VOTE_COMMENT_DOWN,
    comment
  }
}
export function updateComment( comment ) {
  return {
    type: UPDATE_COMMENT,
    comment,
  }
}
