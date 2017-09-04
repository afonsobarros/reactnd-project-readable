export const TOGLE_SIDENAV = 'TOGLE_SIDENAV'
export const OPEN_SIDENAV = 'OPEN_SIDENAV'
export const CLOSE_SIDENAV = 'CLOSE_SIDENAV'

export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

export const SHOW_SNACKBAR = 'SHOW_SNACKBAR'
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR'

export const SHOW_ADDNEWPOST = 'SHOW_ADDNEWPOST'
export const HIDE_ADDNEWPOST = 'HIDE_ADDNEWPOST'

export const SHOW_POSTDETAIL = 'SHOW_POSTDETAIL'
export const HIDE_POSTDETAIL = 'HIDE_POSTDETAIL'

export const SHOW_HEADERMENU = 'SHOW_HEADERMENU'
export const HIDE_HEADERMENU = 'HIDE_HEADERMENU'

//SIDENAV
export function toggleSidenav() {
  return {
    type: TOGLE_SIDENAV,
  }
}

export function openSidenav() {
  return {
    type: OPEN_SIDENAV,
  }
}

export function closeSidenav() {
  return {
    type: CLOSE_SIDENAV,
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
export function showSnackbar({ message }) {
  return {
    type: SHOW_SNACKBAR,
    message
  }
}

export function hideSnackbar() {
  return {
    type: HIDE_SNACKBAR,
  }
}

//ADD NEW DIALOGUE
export function showPostFormDialogue() {
  return {
    type: SHOW_ADDNEWPOST,
  }
}

export function hidePostFormDialogue() {
  return {
    type: HIDE_ADDNEWPOST
  }
}

//POST DETAIL DIALOGUE
export function showPostDetailDialogue() {
  return {
    type: SHOW_POSTDETAIL,
  }
}

export function hidePostDetailDialogue() {
  return {
    type: HIDE_POSTDETAIL
  }
}

// HEADER SUBMENU (USER LINKS)
export function showHeaderSubmenu( { target } ) {
  return {
    type: SHOW_HEADERMENU,
    target
  }
}

export function hideHeaderSubmenu() {
  return {
    type: HIDE_HEADERMENU
  }
}