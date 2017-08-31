import { GET_USER, DELETE_USER, UPDATE_USER } from '../actions/user'

const initialUserState = {
  userName: null,
  isHuman: null,
  password: null
}

function user(userState = initialUserState, action) {

  const { userName, isHuman, password } = action.user ? action.user : initialUserState

  switch (action.type) {
    case GET_USER:
      return {
          userName, isHuman, password
      }
    case UPDATE_USER:
      return {
          userName, isHuman, password
      }
    case DELETE_USER:
      return {
        initialUserState
      }
    default:
      return userState
  }
}

export default user;