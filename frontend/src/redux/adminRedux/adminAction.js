import { ADMIN_REGISTER_SUCCESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./adminActionTypes"

const productRequestAction = () => {
    return { type: PRODUCT_REQUEST }
}

const productRequestFailure = () => {
    return { type: PRODUCT_FAILURE }
}

const getProductAction = (payload) => {
    return { type: GET_PRODUCT_SUCCESS, payload }
}

const postProductAction = (payload) => {
    return { type: POST_PRODUCT_SUCCESS, payload }
}

const patchProductAction = (payload) => {
    return { type: patchProductAction, payload }
}

const deleteProductAction = (payload) => {
    return { type: DELETE_PRODUCT_SUCCESS, payload }
}

const adminRegisterAction = (payload) => {
    return { type: ADMIN_REGISTER_SUCCESS, payload }
}