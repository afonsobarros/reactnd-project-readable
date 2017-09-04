import { combineReducers } from 'redux'

import appState from './appState';
import user from './user';
import posts from './posts';
import categories from './categories';

export default combineReducers({
  categories,
  posts,
  user,
  appState
})