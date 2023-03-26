import AuthService from '../services/auth.service'
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/userConstants'

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const res = await AuthService.userLogin(username, password)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res,
    })

    localStorage.setItem('userInfo', JSON.stringify(res))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
}

export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST })
      const res = await AuthService.userRegister(
        firstName,
        lastName,
        email,
        password
      )

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res,
      })

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res,
      })

      localStorage.setItem('userInfo', JSON.stringify(res))
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const getUserDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const res = await AuthService.userDetails(`${userInfo.username}`).then(
      (res) => {
        if (res.username === `${userInfo.username}`) {
          return res
        }
      }
    )

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: res,
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const updateUserProfile = (username, user) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST })

    const res = await AuthService.newUserDetails(username, user).then((res) => {
      console.log(res)

      return res
    })

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: res,
    })
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    })
  }
}
