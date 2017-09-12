export const TOGLE_SIDENAV = 'TOGLE_SIDENAV'
export const OPEN_SIDENAV = 'OPEN_SIDENAV'
export const CLOSE_SIDENAV = 'CLOSE_SIDENAV'

export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

export const SHOW_SNACKBAR = 'SHOW_SNACKBAR'
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR'

export const SHOW_ADDNEWPOST = 'SHOW_ADDNEWPOST'
export const HIDE_ADDNEWPOST = 'HIDE_ADDNEWPOST'
export const UPDATE_NEW_POST = 'UPDATE_NEW_POST'

export const SHOW_POSTDETAIL = 'SHOW_POSTDETAIL'
export const HIDE_POSTDETAIL = 'HIDE_POSTDETAIL'

export const SHOW_HEADERMENU = 'SHOW_HEADERMENU'
export const HIDE_HEADERMENU = 'HIDE_HEADERMENU'

export const SET_ORDERFILTER = 'SET_ORDERFILTER'
export const OPEN_ORDERFILTER = 'OPEN_ORDERFILTER'
export const CLOSE_ORDERFILTER = 'CLOSE_ORDERFILTER'

export const OPEN_FILTER = 'OPEN_FILTER'
export const CLOSE_FILTER = 'CLOSE_FILTER'

export const OPEN_DETAIL_CATEGORIES = 'OPEN_DETAIL_CATEGORIES'
export const CLOSE_DETAIL_CATEGORIES = 'CLOSE_DETAIL_CATEGORIES'

export const TOGLE_COMMENTS = 'TOGLE_COMMENTS'
export const UPDATE_NEW_COMMENT = 'UPDATE_NEW_COMMENT'
export const RESET_NEW_COMMENT = 'RESET_NEW_COMMENT'

export const TOGLE_EDIT = 'TOGLE_EDIT'


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
export function showHeaderSubmenu({ target }) {
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

// POSTS ORDER FILTER 

export function setOrderFilter(orderBy) {
  return {
    type: SET_ORDERFILTER,
    orderBy
  }
}

export function openOrderFilter({ target }) {
  return {
    type: OPEN_ORDERFILTER,
    target
  }
}

export function closeOrderFilter() {
  return {
    type: CLOSE_ORDERFILTER,
  }
}

// CATEGORIES MENU 

export function openFilter({ target }) {
  return {
    type: OPEN_FILTER,
    target
  }
}
export function closeFilter() {
  return {
    type: CLOSE_FILTER,
  }
}

// CATEGORIES MENU IN ADD POST DIALOGUE 
export function openDialogueCategories({ target }) {
  return {
    type: OPEN_DETAIL_CATEGORIES,
    target
  }
}
export function closeDialogueCategories() {
  return {
    type: CLOSE_DETAIL_CATEGORIES,
  }
}

export function updateNewPost({ newPost }) {
  return {
    type: UPDATE_NEW_POST,
    newPost
  }
}

export function toggleComments() {
  return {
    type: TOGLE_COMMENTS,
  }
}

export function updateNewComment({ newComment }) {
  return {
    type: UPDATE_NEW_COMMENT,
    newComment
  }
}

export function resetNewComment() {
  return {
    type: RESET_NEW_COMMENT
  }
}

export function toggleEditMode() {
  return {
    type: TOGLE_EDIT,
  }
}