import { v4 } from 'node-uuid'

export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

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