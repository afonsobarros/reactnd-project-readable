import { 
  CLOSE_SIDENAV, OPEN_SIDENAV, TOGLE_SIDENAV,
  SHOW_LOADING, HIDE_LOADING,
  SHOW_SNACKBAR, HIDE_SNACKBAR
} from '../actions/appState'

const initialAppState = {
  navDrawerOpen: false,
  isLoading: false,
  snackBarOpen:false,
  snackBarMessage:null
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
      return{
        ...appState,
        isLoading:true
      }
      case HIDE_LOADING:
      return{
        ...appState,
        isLoading:false
      }
      //SNACKBAR
      case SHOW_SNACKBAR:
      return{
        ...appState,
        snackBarOpen:true,
        snackBarMessage: action.message
      }
      case HIDE_SNACKBAR:
      return{
        ...appState,
        snackBarOpen:false
      }
    default:
      return appState
  }
}

export default app;