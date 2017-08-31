import { v4 } from 'node-uuid'

export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'


export const addPost = (title, body, author, category) => ({
  type: ADD_POST,
  payload: {
    id: v4(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category
  }
})

export const deletePost = id => ({
  type: DELETE_POST,
  id
})