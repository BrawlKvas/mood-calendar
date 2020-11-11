import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from "redux"

import authReducer from "./authReducer"

const store = createStore(
  combineReducers({
    auth: authReducer
  }),
  applyMiddleware(thunk)
)

export default store

window.store = store