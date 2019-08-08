import * as types from '../constants/user'


// Sign in Actions

export const loginSuccess = (payload) => ({
  type: types.USER_LOGIN_SUC,
  data:payload
})

export const loginFail = () => ({
  type: types.USER_LOGIN_FAI
})

export const loginRequest = () => ({
  type: types.USER_LOGIN_REQ
})

export const logoutSuccess = () => ({
  type: types.USER_LOGOUT_SUC
})

export const logoutFail = () => ({
  type: types.USER_LOGOUT_FAI
})

export const logoutRequest = () => ({
  type: types.USER_LOGOUT_REQ
})



export const fbLogin = (data) => {
  return async dispatch => {
    try {
      dispatch(loginRequest())
      dispatch(loginSuccess(data))
    } catch (e) {
      dispatch(loginFail())
    }
  }
}

export const logout = () => {
  return async dispatch => {
    try {
      dispatch(logoutRequest())
      dispatch(logoutSuccess())
    } catch (e) {
      dispatch(logoutFail())
    }
  }
}