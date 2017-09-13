import {
  ADD_NEW_POST,
  VOTE_POST_UP,
  VOTE_POST_DOWN,
  DELETE_POST,
  UPDATE_POSTS,
  UPDATE_POST
} from '../actions/posts'

function posts(state = [], action) {
  const { posts, post } = action;
  switch (action.type) {
    // ADD NEW POST
    case ADD_NEW_POST:
      return state.concat([post])
    case DELETE_POST:
      return state.map(item => {
        if (item.id === post.id)
          item.deleted = true;
        return item
      })
    case UPDATE_POSTS:
      return state.concat(posts)
    case UPDATE_POST:
      return state.map(item => {
        if (item.id === post.id) {
          item.title = post.title;
          item.body = post.body;
        }
        return item
      })
    case VOTE_POST_UP:
      return state.map(item => {
        if (item.id === post.id)
          item.voteScore++;
        return item
      })
    case VOTE_POST_DOWN:
      return state.map(item => {
        if (item.id === post.id)
          item.voteScore--;
        return item
      })
    default:
      return state
  }
}

export default posts;