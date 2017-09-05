import { v4 } from 'node-uuid'

export const GET_POSTS = 'GET_POSTS'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const UPDATE_POSTS = 'UPDATE_POSTS'
export const DELETE_POST = 'DELETE_POST'

export function getCategories() {
  return {
    type: GET_POSTS,
  }
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts: posts
  }
}

export const addNewPost = (post) => {
  return {
    type: ADD_NEW_POST,
    post
  }
}

export const deletePost = id => {
  return {
    type: DELETE_POST,
    id
  }
}

