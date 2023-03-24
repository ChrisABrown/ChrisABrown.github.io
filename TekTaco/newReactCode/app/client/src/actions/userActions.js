import { userLogin, userRegister } from '../api/userFunctions'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const res = await userLogin(username, password)

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
      const res = await userRegister(firstName, lastName, email, password)

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
