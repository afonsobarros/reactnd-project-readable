import { v4 } from 'node-uuid'

export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS'
export const DELETE_COMMENT = 'DELETE_COMMENT'


export function updateComments(comments) {
  return {
    type: UPDATE_COMMENTS,
    posts: comments
  }
}


export function addComment({ comment }) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function deleteComment({ comment }) {
  return {
    type: DELETE_COMMENT,
    comment,
  }
}