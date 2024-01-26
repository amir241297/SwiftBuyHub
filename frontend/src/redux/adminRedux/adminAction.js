import { ADMIN_LOGIN_SUCCESS, ADMIN_REGISTER_SUCCESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, UPDATE_DATA_REQUEST } from "./adminActionTypes"
import axios from 'axios'

const productRequestAction = () => {
    return { type: PRODUCT_REQUEST }
}

const productRequestFailure = () => {
    return { type: PRODUCT_FAILURE }
} 

const getProductAction = (payload) => {
    return { type: GET_PRODUCT_SUCCESS, payload }
}

const postProductAction = () => {
    return { type: POST_PRODUCT_SUCCESS }
}

const updateProductRequestAction = (payload) => {
    return { type: UPDATE_DATA_REQUEST, payload }
}

const deleteProductRequestAction = () => {
    return { type: DELETE_PRODUCT_SUCCESS }
}

const adminRegisterAction = (payload) => {
    return { type: ADMIN_REGISTER_SUCCESS, payload }
}

const adminLoginAction = (payload) => {
    return { type: ADMIN_LOGIN_SUCCESS, payload }
}



// logics for products

export const addProductDataToDB = (payload) => (dispatch) => {
    // login for sending data to db

    dispatch(productRequestAction())
    axios.post('http://localhost:8080/admin/add', payload)
        .then((res) => {
            // console.log(res)
            dispatch(postProductAction())
        })
        .catch((err) => {
            // console.log(err)
            dispatch(productRequestFailure())
        })

}

export const deleteProductData = (_id) => (dispatch) => {
    // logic fo deleting product
    dispatch(productRequestAction())
    axios.delete(`http://localhost:8080/admin/delete/${_id}`)
        .then((res) => {
            console.log(res)
            dispatch(deleteProductRequestAction())
        })
        .catch((err) => {
            console.log(err)
            dispatch(productRequestFailure())
        })
}



export const updateProductData = (data_obj) => (dispatch) => {
    // logic for update products
    const { brand, category, description, gender, price, url, _id } = data_obj
    const obj = { brand, category, description, gender, price, url }

    dispatch(productRequestAction())
    axios.patch(`http://localhost:8080/admin/update/${_id}`, obj)
        .then((res) => {
            console.log(res)
            dispatch(updateProductRequestAction())
        })
        .catch((err) => {
            console.log(err)
            dispatch(productRequestFailure())
        })
}

export const getProductData = (dispatch) => {
    // logic for get products data
    dispatch(productRequestAction())
    axios.get('http://localhost:8080/admin')
        .then((res) => {
            dispatch(getProductAction(res.data))
            // console.log(res.data)
        })
        .catch((err) => {
            dispatch(productRequestAction())
            // console.log(err)
        })
}

export const adminLogin = (props) => (dispatch) => {
    // send details and aafter authnetication pass token.
    axios.post(`http://localhost:8080/admin/login`,props)
    .then((res)=>{
        const token=res.data.token
        const details=res.data.details.name
        dispatch(adminLoginAction({token,details}))
    })
    .catch((err)=>{
        console.log(err)
    })
}
export const adminRegister = (props) => (dispatch) => {
    // send Details after success send respose.

    axios.post(`http://localhost:8080/admin/register`,props)
    .then((res)=>{
        console.log(res)
        dispatch(adminRegisterAction())
    })
    .catch((err)=>{
        console.log(err)
    })
}