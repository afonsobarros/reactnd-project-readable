import {
  SHOW_ADDNEWPOST, HIDE_ADDNEWPOST,
  SHOW_POSTDETAIL, HIDE_POSTDETAIL,
  CLOSE_SIDENAV, OPEN_SIDENAV, TOGLE_SIDENAV,
  SHOW_LOADING, HIDE_LOADING,
  SHOW_SNACKBAR, HIDE_SNACKBAR,
  SHOW_HEADERMENU, HIDE_HEADERMENU,
  SET_ORDERFILTER,
  OPEN_ORDERFILTER,
  CLOSE_ORDERFILTER,
  OPEN_FILTER,
  CLOSE_FILTER
} from '../actions/appState'

const initialAppState = {
  navDrawerOpen: false,
  isLoading: false,
  snackBarOpen: false,
  snackBarMessage: null,
  dialogueAddNewOpen: false,
  dialoguePostDetailOpen: false,
  headerMenuOpen: false,
  anchorEl: null,
  orderBy:'timestamp'
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
      anchorEl:action.target
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
    default:
      return appState
  }
}

export default app;