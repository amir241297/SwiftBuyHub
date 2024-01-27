import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { adminReducer } from "./adminRedux/adminReducer";
import  userReducer  from "./userRedux/userReducer"
import { thunk } from 'redux-thunk'


const rootReducer = combineReducers({
    adminReducer,
    userReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))