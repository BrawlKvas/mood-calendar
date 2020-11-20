import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from "redux"

import authReducer from "./authReducer"
import calendarReducer from './calendarReducer'

const store = createStore(
  combineReducers({
    auth: authReducer,
    calendar: calendarReducer
  }),
  applyMiddleware(thunk)
)

export default store

window.store = store // DEV