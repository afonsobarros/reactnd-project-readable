import {
  ADD_NEW_POST,
  DELETE_POST,
  UPDATE_POSTS,
  GET_POSTS,
} from '../actions/posts'

function posts(state = [], action) {
  const { posts, post } = action;
  switch (action.type) {
    // ADD NEW POST
    case ADD_NEW_POST:
      return state.concat([post])
    case DELETE_POST:
      return {
        ...state,
        [post.id]: {
          deleted: true
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