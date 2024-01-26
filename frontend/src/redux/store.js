import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { adminReducer } from "./adminRedux/adminReducer";
import { thunk } from 'redux-thunk'


const rootReducer = combineReducers({

})

export const store = legacy_createStore(adminReducer, applyMiddleware(thunk))