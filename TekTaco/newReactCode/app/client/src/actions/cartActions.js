import { fetchMenuItemBySku } from '../api/menuItemFunctions'
import { CART_ADD_ITEM } from '../constants/cartConstants'

export const addToCart = (sku, quantity) => async (dispatch, getState) => {
  const res = await fetchMenuItemBySku(sku)
  const result = res.response.data.data

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      item: result.sku,
      name: result.name,
      image: result.image,
      price: result.price,
      inStock: result.inStock,
      quantity,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
