import { v4 } from 'node-uuid'

import {
  SHOW_ADDNEWPOST, HIDE_ADDNEWPOST, UPDATE_NEW_POST,
  SHOW_POSTDETAIL, HIDE_POSTDETAIL,
  CLOSE_SIDENAV, OPEN_SIDENAV, TOGLE_SIDENAV,
  SHOW_LOADING, HIDE_LOADING,
  SHOW_SNACKBAR, HIDE_SNACKBAR,
  SHOW_HEADERMENU, HIDE_HEADERMENU,
  SET_ORDERFILTER, OPEN_ORDERFILTER, CLOSE_ORDERFILTER,
  OPEN_FILTER, CLOSE_FILTER,
  OPEN_DETAIL_CATEGORIES, CLOSE_DETAIL_CATEGORIES,
  TOGLE_COMMENTS, UPDATE_NEW_COMMENT, RESET_NEW_COMMENT,
  TOGLE_EDIT_POST, EDIT_POST,
  TOGLE_EDIT_COMMENT, EDIT_COMMENT
} from '../actions/appState'

import { DELETE_POST } from '../actions/posts'

function initialPostState() {
  return {
    author: '',
    id: v4(),
    timestamp: new Date().getTime(),
    title: '',
    body: '',
    category: 'react',
    voteScore: 0,
    deleted: false
  }
}

function initialCommentState() {
  return {
    author: '',
    id: v4(),
    parentId: '',
    timestamp: new Date().getTime(),
    body: '',
    voteScore: 0,
    deleted: false,
    parentDeleted: false
  }
}

const initialAppState = {
  navDrawerOpen: false,
  isLoading: false,
  snackBarOpen: false,
  snackBarMessage: null,
  dialogueAddNewOpen: false,
  dialoguePostDetailOpen: false,
  headerMenuOpen: false,
  anchorEl: null,
  orderBy: 'timestamp',
  newComment: initialCommentState(),
  newPost: initialPostState(),
  editPost: {},
  commentsExpanded: true,
  editMode: false,
  editCommentMode: false,
  editComment: {}
}

function app(appState = initialAppState, action) {

  switch (action.type) {
    //EDIT MODE

    case EDIT_POST:
      return {
        ...appState,
        editPost: action.editPost
      }
    case EDIT_COMMENT:
      return {
        ...appState,
        editPost: action.editComment
      }
    case TOGLE_EDIT_POST:
      return {
        ...appState,
        editMode: !appState.editMode,
        editPost: action.editPost
      }
      case TOGLE_EDIT_COMMENT:
      return {
        ...appState,
        editCommentMode: !appState.editCommentMode,
        editComment: action.editComment
      }
    case DELETE_POST:
      return {
        ...appState,
        editMode: false,
        dialoguePostDetailOpen: false,
        editPost: {}
      }
    //SIDENAV STATES
    case TOGLE_SIDENAV:
      return {
        ...appState,
        navDrawerOpen: !appState.navDrawerOpen
      }
    case CLOSE_SIDENAV:
      return {
        ...appState,
        navDrawerOpen: false
      }
    case OPEN_SIDENAV:
      return {
        ...appState,
        navDrawerOpen: true
      }
    //LOADING STATES
    case SHOW_LOADING:
      return {
        ...appState,
        isLoading: true
      }
    case HIDE_LOADING:
      return {
        ...appState,
        isLoading: false
      }
    //SNACKBAR
    case SHOW_SNACKBAR:
      return {
        ...appState,
        snackBarOpen: true,
        snackBarMessage: action.message
      }
    case HIDE_SNACKBAR:
      return {
        ...appState,
        snackBarOpen: false,
        snackBarMessage: null
      }
    //ADD NEW POST
    case SHOW_ADDNEWPOST:
      return {
        ...appState,
        dialogueAddNewOpen: true,
        newPost: initialPostState(),
      }
    case HIDE_ADDNEWPOST:
      return {
        ...appState,
        dialogueAddNewOpen: false,
      }
    // NEW POST DATA STORE
    case UPDATE_NEW_POST:
      return {
        ...appState,
        newPost: action.newPost
      }


    //POST DETAIL
    case SHOW_POSTDETAIL:
      return {
        ...appState,
        dialoguePostDetailOpen: true,
        editMode: false
      }
    case HIDE_POSTDETAIL:
      return {
        ...appState,
        editMode: false,
        dialoguePostDetailOpen: false,
        editPost: {}
      }
    //HEADER USER MENU
    case SHOW_HEADERMENU:
      return {
        ...appState,
        anchorEl: action.target,
        headerMenuOpen: true,
      }
    case HIDE_HEADERMENU:
      return {
        ...appState,
        anchorEl: null,
        headerMenuOpen: false,
      }
    //ORDER BY
    case SET_ORDERFILTER:
      return {
        ...appState,
        orderBy: action.orderBy
      }
    case OPEN_ORDERFILTER:
      return {
        ...appState,
        orderByOpen: true,
        anchorEl: action.target
      }
    case CLOSE_ORDERFILTER:
      return {
        ...appState,
        orderByOpen: false
      }
    case OPEN_FILTER:
      return {
        ...appState,
        filterOpen: true,
        anchorEl: action.target
      }
    case CLOSE_FILTER:
      return {
        ...appState,
        filterOpen: false
      }
    case OPEN_DETAIL_CATEGORIES:
      return {
        ...appState,
        dialogueCategoriesOpen: true,
        anchorEl: action.target
      }
    case CLOSE_DETAIL_CATEGORIES:
      return {
        ...appState,
        dialogueCategoriesOpen: false
      }
    case TOGLE_COMMENTS:
      return {
        ...appState,
        commentsExpanded: !appState.commentsExpanded
      }
    case UPDATE_NEW_COMMENT:
      return {
        ...appState,
        newComment: action.newComment
      }
    case RESET_NEW_COMMENT:
      return {
        ...appState,
        newComment: initialCommentState()
      }
    default:
      return appState
  }
}

export default app;