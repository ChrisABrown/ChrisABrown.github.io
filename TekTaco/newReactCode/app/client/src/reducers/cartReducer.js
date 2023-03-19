import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existingItem = state.cartItems.find(
        (b) => b.menuItem === item.menuItem
      )

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((b) =>
            b.menuItem === item.menuItem ? item : b
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((menuItem) => menuItem.sku !== action.payload),
      }
    default:
      return state
  }
}
