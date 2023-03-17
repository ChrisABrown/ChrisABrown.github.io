import {
  MENU_ITEM_LIST_FAIL,
  MENU_ITEM_LIST_REQUEST,
  MENU_ITEM_LIST_SUCCESS,
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
