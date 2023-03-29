import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers'
import {
  menuItemDetailsReducer,
  menuItemListReducer,
} from './reducers/menuItemReducers'
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers'
import { orderCreateReducer } from './reducers/orderReducers'

const reducer = combineReducers({
  menuItemList: menuItemListReducer,
  menuItemDetails: menuItemDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
})
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const deliveryAddressFromStorage = localStorage.getItem('deliveryAddress')
  ? JSON.parse(localStorage.getItem('deliveryAddress'))
  : {}

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    deliveryAddress: deliveryAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
