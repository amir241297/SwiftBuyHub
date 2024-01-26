import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import {useDispatch, useSelector} from 'react-redux'
import { getProductData } from '../redux/adminRedux/adminAction'
import Products from './Components/Products'

export const Home = () => {
    const dispatch=useDispatch()
    const {products,isDeleted}=useSelector((store)=>{ return store})

    // console.log("useSelector",products,isDeleted)

    useEffect(()=>{
        dispatch(getProductData)
    },[])
 
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-4 grid-row-10 gap-3 p-3 mt-20'>
                {
                    products.length>0?products.map((ele)=>{
                        return <Products key={ele._id} data={ele}/>
                    }):<h1>404</h1>
                }
            </div>
        </div>
    )
}
