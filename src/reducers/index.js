import { combineReducers } from 'redux'

import appState from './appState';
import user from './user';
import posts from './posts';
import comments from './comments';
import categories from './categories';

export default combineReducers({
  categories,
  posts,
  comments,
  user,
  appState
})