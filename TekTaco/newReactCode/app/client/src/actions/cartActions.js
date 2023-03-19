import { fetchMenuItemBySku } from '../api/menuItemFunctions'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const addToCart = (sku, quantity) => async (dispatch, getState) => {
  const res = await fetchMenuItemBySku(sku)
  const result = res.response.data.data

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      menuItem: result.sku,
      name: result.name,
      image: result.image,
      price: result.price,
      inStock: result.inStock,
      quantity,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (sku) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: sku,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
