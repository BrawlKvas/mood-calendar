import authReducer from "./authReducer";

const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({ authReducer });

const store = createStore(reducers);

export default store;