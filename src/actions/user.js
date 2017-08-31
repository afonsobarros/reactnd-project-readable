export const GET_USER = 'GET_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'

export function getUser() {
  return {
    type: GET_USER,
  }
}

export function updateUser( user ) {
  return {
    type: UPDATE_USER,
    user
  }
}

export function deleteUser() {
  return {
    type: DELETE_USER,
  }
}
