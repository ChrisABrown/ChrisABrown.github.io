import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_DELIVERY_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

export const cartReducer = (
  state = { cartItems: [], deliveryAddress: {} },
  action
) => {
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
            b.menuItem === existingItem.menuItem ? item : b
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
        cartItems: state.cartItems.filter((b) => b.menuItem !== action.payload),
      }
    case CART_SAVE_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: action.payload,
      }
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }
    default:
      return state
  }
}
