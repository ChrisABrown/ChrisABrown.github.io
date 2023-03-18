import {
  MENU_ITEM_LIST_FAIL,
  MENU_ITEM_LIST_REQUEST,
  MENU_ITEM_LIST_SUCCESS,
  MENU_ITEM_DETAILS_FAIL,
  MENU_ITEM_DETAILS_REQUEST,
  MENU_ITEM_DETAILS_SUCCESS,
} from '../constants/menuItemConstants'

export const menuItemListReducer = (state = { menuItems: [] }, action) => {
  switch (action.type) {
    case MENU_ITEM_LIST_REQUEST:
      return { loading: true, menuItems: [] }
    case MENU_ITEM_LIST_SUCCESS:
      return { loading: false, menuItems: action.payload }
    case MENU_ITEM_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const menuItemDetailsReducer = (
  state = { menuItem: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case MENU_ITEM_DETAILS_REQUEST:
      return { loading: true, ...state }
    case MENU_ITEM_DETAILS_SUCCESS:
      return { loading: false, menuItem: action.payload }
    case MENU_ITEM_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
