import { ADMIN_LOGIN_SUCCESS, ADMIN_REGISTER_SUCCESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, UPDATE_DATA_REQUEST } from "./adminActionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    isUpdated: false,
    isDeleted: false,
    isRegister: false,
    name: '',
    isLogin: false,
    products: [],
    token: '',
    isAuth: false
}

export const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_REQUEST: return ({ ...state, isLoading: true })
        case PRODUCT_FAILURE: return ({ ...state, isError: true, isLoading:false })
        case GET_PRODUCT_SUCCESS: return ({ ...state, isLoading: false, isError: false, products: payload })
        case UPDATE_DATA_REQUEST: return ({ ...state, isUpdated: true, isLoading: false, isError: false })
        case DELETE_PRODUCT_SUCCESS: return ({ ...state, isDeleted: true, isLoading: false, isError: false })
        case ADMIN_LOGIN_SUCCESS: return ({ ...state, isLogin: true, token: payload.token, name: payload.details, isAuth: true })
        case ADMIN_REGISTER_SUCCESS: return ({ ...state, isRegister: true })
        default: return state
    }
}