import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer'
import {
  menuItemListReducer,
  menuItemDetailsReducer,
} from './reducers/menuItemReducer'

const reducer = combineReducers({
  menuItemList: menuItemListReducer,
  menuItemDetails: menuItemDetailsReducer,
  cart: cartReducer,
})
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
