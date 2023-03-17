import {
  MENU_ITEM_LIST_REQUEST,
  MENU_ITEM_LIST_SUCCESS,
  MENU_ITEM_LIST_FAIL,
} from '../constants/menuItemConstants'
import { URL } from '../api/menuItemFunctions'
import axios from 'axios'

export const listMenuItems = () => async (dispatch) => {
  try {
    dispatch({ type: MENU_ITEM_LIST_REQUEST })
    const res = await axios.get(`${URL}`)
    dispatch({
      type: MENU_ITEM_LIST_SUCCESS,
      payload: res.data.data,
    })
  } catch (error) {
    dispatch({
      type: MENU_ITEM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
