import DataService from '../services/data.service'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_DELIVERY_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

export const addToCart = (sku, quantity) => async (dispatch, getState) => {
  const res = await DataService.fetchMenuItemBySku(sku)
  const result = res

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

export const saveDeliveryAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_DELIVERY_ADDRESS,
    payload: data,
  })

  localStorage.setItem('deliveryAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
