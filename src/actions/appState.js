export const TOGLE_SIDENAV = 'TOGLE_SIDENAV'
export const OPEN_SIDENAV = 'OPEN_SIDENAV'
export const CLOSE_SIDENAV = 'CLOSE_SIDENAV'

export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

export const SHOW_SNACKBAR = 'SHOW_SNACKBAR'
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR'

export function toggleSidenav({ expandedState }) {
  return {
    type: TOGLE_SIDENAV,
    expandedState,
  }
}

export function openSidenav({ expandedState }) {
  return {
    type: OPEN_SIDENAV,
    expandedState,
  }
}

export function closeSidenav({ expandedState }) {
  return {
    type: CLOSE_SIDENAV,
    expandedState,
  }
}

//CIRCULAR LOADING
export function showLoading() {
  return {
    type: SHOW_LOADING,
  }
}

export function hideLoading() {
  return {
    type: HIDE_LOADING,
  }
}


//SNACKBAR
export function showSnackbar( message ) {
  return {
    type: SHOW_SNACKBAR,
    message: message
  }
}

export function hideSnackbar() {
  return {
    type: HIDE_SNACKBAR,
  }
}