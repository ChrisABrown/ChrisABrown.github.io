import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import {
  menuItemListReducer,
  menuItemDetailsReducer,
} from './reducers/menuItemReducer'

const reducer = combineReducers({
  menuItemList: menuItemListReducer,
  menuItemDetails: menuItemDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
