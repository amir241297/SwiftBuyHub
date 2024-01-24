import { applyMiddleware, legacy_createStore } from "redux";
import { adminReducer } from "./adminReducer";

export const store=legacy_createStore(adminReducer,applyMiddleware)