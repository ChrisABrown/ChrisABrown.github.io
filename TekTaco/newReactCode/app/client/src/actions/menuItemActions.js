import {
  MENU_ITEM_LIST_REQUEST,
  MENU_ITEM_LIST_SUCCESS,
  MENU_ITEM_LIST_FAIL,
  MENU_ITEM_DETAILS_FAIL,
  MENU_ITEM_DETAILS_REQUEST,
  MENU_ITEM_DETAILS_SUCCESS,
} from '../constants/menuItemConstants'
import DataService from '../services/data.service'

export const listMenuItems = () => async (dispatch) => {
  try {
    dispatch({ type: MENU_ITEM_LIST_REQUEST })
    const res = await DataService.fetchMenuItems()
    dispatch({
      type: MENU_ITEM_LIST_SUCCESS,
      payload: res,
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
    const res = await DataService.fetchMenuItemBySku(sku)
    console.log(res)
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
