import { ADD_POST, DELETE_POST, } from '../actions/posts'

function posts(state = {}, action) {
  const { post } = action;
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
    default:
      return state
  }
}


export default posts;