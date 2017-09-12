export const GET_POSTS = 'GET_POSTS'
export const VOTE_POST_UP = 'VOTE_POST_UP'
export const VOTE_POST_DOWN = 'VOTE_POST_DOWN'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const UPDATE_POSTS = 'UPDATE_POSTS'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

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

export const editPost = (post) => {
  return {
    type: EDIT_POST,
    post
  }
}

export const addNewPost = (post) => {
  return {
    type: ADD_NEW_POST,
    post
  }
}

export const deletePost = (post) => {
  return {
    type: DELETE_POST,
    post
  }
}
export const votePostUp = (post) => {
  return {
    type: VOTE_POST_UP,
    post
  }
}

export const votePostDown = (post) => {
  return {
    type: VOTE_POST_DOWN,
    post
  }
}

