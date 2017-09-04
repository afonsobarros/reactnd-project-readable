import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POSTS,
  GET_POSTS
} from '../actions/posts'

function posts(state = {}, action) {
  const { posts, post } = action;
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [post.id]: post
      }
    case DELETE_POST:
      return {
        ...state,
        posts: {
          [post.id]: {
            deleted: true
          }
        }
      }
    case UPDATE_POSTS:
      return posts
    case GET_POSTS:
      return state;
    default:
      return state
  }
}


export default posts;