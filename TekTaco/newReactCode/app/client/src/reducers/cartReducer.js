export const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, cart: [...state.cart, action.payload] }
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((menuItem) => menuItem.sku !== action.payload),
      }
    default:
      return state
  }
}
