import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer";
import {rootReducer} from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk))