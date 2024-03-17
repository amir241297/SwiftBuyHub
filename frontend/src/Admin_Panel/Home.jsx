import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getProductData } from '../redux/adminRedux/adminAction'
import Products from './Components/Products'
import '../Loader.css'

export const Home = () => {
    const dispatch = useDispatch()
    const { products, isLoading, isError } = useSelector((store) => { return store.adminReducer })
    // console.log("useSelector",isLoading,isError,products)

    useEffect(() => {
        dispatch(getProductData)
    }, [])
    
    return isLoading ?(
        <div className='w-full h-96 mt-24 flex items-center justify-center'><div class="loader"></div> </div>
    ) : isError?(
        <h1> Something went wrong!</h1>
    ):(
        <div className='grid grid-cols-4 grid-row-10 gap-3 p-3 mt-20'>
            {
                products.length > 0 && products.map((ele) => {
                    return <Products key={ele._id} data={ele} />
                }) 
            }
        </div>
    )
    // : 
}
