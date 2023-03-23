import { userLogin } from '../api/userFunctions'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../constants/userConstants'

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const res = await userLogin(username, password)
    console.log(res)

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
