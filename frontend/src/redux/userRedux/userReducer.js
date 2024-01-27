import React from 'react'
import { SET_DAY_MODE, SET_MODE, SET_NIGHT_MODE } from './userActionTypes'

const initialState = {
    mode: "light",
    isLoading: "",
    isError: "",
    isAuth: "",
    products: []
}

const userReducer = (state = initialState, { type, payload }) => {
    // console.log(payload)
    switch (type) {
        case SET_MODE: return ({ ...state, mode: payload ? "light" : "dark" })
        default: return { ...state }
    }
}

export default userReducer