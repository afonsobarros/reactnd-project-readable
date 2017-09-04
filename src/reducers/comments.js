import { UPDATE_COMMENTS, DELETE_COMMENT, ADD_COMMENT } from '../actions/comments'

const initialCommentsState = {
  "894tuq4ut84ut8v4t8wun89g": {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false
  },
  "8tu4bsun805n8un48ve89": {
    id: '8tu4bsun805n8un48ve89',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false
  }
};

function comments(commentsState = initialCommentsState, action) {

  switch (action.type) {
    case DELETE_COMMENT:
      return action.comment.id;
    case UPDATE_COMMENTS:
      return action.comments
    case ADD_COMMENT:
      return commentsState.push(action.comment)
    default:
      return commentsState
  }
}

export default comments;