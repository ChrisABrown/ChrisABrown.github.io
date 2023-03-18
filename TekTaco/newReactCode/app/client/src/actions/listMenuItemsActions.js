import {
  MENU_ITEM_LIST_REQUEST,
  MENU_ITEM_LIST_SUCCESS,
  MENU_ITEM_LIST_FAIL,
  MENU_ITEM_DETAILS_FAIL,
  MENU_ITEM_DETAILS_REQUEST,
  MENU_ITEM_DETAILS_SUCCESS,
} from '../constants/menuItemConstants'
import { fetchMenuItemBySku, fetchMenuItems } from '../api/menuItemFunctions'

export const listMenuItems = () => async (dispatch) => {
  try {
    dispatch({ type: MENU_ITEM_LIST_REQUEST })
    const res = await fetchMenuItems()
    dispatch({
      type: MENU_ITEM_LIST_SUCCESS,
      payload: res.data.data,
    })
  } catch (error) {
    dispatch({
      type: MENU_ITEM_LIST_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listMenuItemDetails = (sku) => async (dispatch) => {
  try {
    dispatch({ type: MENU_ITEM_DETAILS_REQUEST })
    const res = await fetchMenuItemBySku(sku)
    dispatch({
      type: MENU_ITEM_DETAILS_SUCCESS,
      payload: res,
    })
  } catch (error) {
    dispatch({
      type: MENU_ITEM_DETAILS_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    })
  }
}
