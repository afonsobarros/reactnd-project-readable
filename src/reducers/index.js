import { combineReducers } from 'redux'

import appState from './appState';
import user from './user';
import posts from './posts';

export default combineReducers({
  posts,
  user,
  appState
})