import {
  SHOW_ADDNEWPOST, HIDE_ADDNEWPOST,
  SHOW_POSTDETAIL, HIDE_POSTDETAIL,
  CLOSE_SIDENAV, OPEN_SIDENAV, TOGLE_SIDENAV,
  SHOW_LOADING, HIDE_LOADING,
  SHOW_SNACKBAR, HIDE_SNACKBAR,
} from '../actions/appState'

const initialAppState = {
  navDrawerOpen: false,
  isLoading: false,
  snackBarOpen: false,
  snackBarMessage: null,
  dialogueAddNewOpen: false,
  dialoguePostDetailOpen: false
}

function app(appState = initialAppState, action) {

  switch (action.type) {
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
      }
    case HIDE_ADDNEWPOST:
      return {
        ...appState,
        dialogueAddNewOpen: false,
      }
      //POST DETAIL
    case SHOW_POSTDETAIL:
    return {
      ...appState,
      dialoguePostDetailOpen: true,
    }
  case HIDE_POSTDETAIL:
    return {
      ...appState,
      dialoguePostDetailOpen: false,
    }
    default:
      return appState
  }
}

export default app;