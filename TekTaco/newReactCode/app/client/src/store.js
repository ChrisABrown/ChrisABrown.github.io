import { createStore, combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { menuItemListReducer } from './reducers/menuItemReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  menuItemList: menuItemListReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
