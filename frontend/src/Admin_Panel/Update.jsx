import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { MdDelete } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { updateProductData } from '../redux/adminRedux/adminAction'



export const Update = () => {
    const { state } = useLocation()
    const [data, setData] = useState(state)
    const { brand, category, description, gender, price, url, _id } = data

    const dispatch = useDispatch()
    const selector = useSelector((store) => {
        return store
    })
    // console.log('selector',state)

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(data)
        dispatch(updateProductData(data))
        if (selector.isUpdated) { alert("Upated Successfull!") }
    }
    return (
        <div className='border border-black h-screen'>
            {/* <Navbar /> */}
            <div className='flex justify-around items-center w-full mt-24'>
                <div className='border border-teal-600 text-left p-5 text-white leading rounded-md bg-slate-950 w-1/3'>
                    <img src={url} alt="" className='h-80 w-full' />
                    <p className='font-bold mt-6'>{`Brand: ${brand}`}</p>
                    <p className='font-bold flex items-center text-green-400'><FaIndianRupeeSign />{`${price}`} </p>
                    <p>{`Category: ${category}`}</p>
                    <p>{`Gender: ${gender}`}</p>
                    <p className='leading-4 mt-2 mb-2'>{`Description: ${description}`}</p>
                    <p className='leading-4 mt-2 mb-2 text-yellow-300'>{`Product ID: ${_id}`}</p>

                </div>
                <div className='flex align-center justify-center w-2/5'>
                    <form action="" className='p-8 border border-teal-600 grid rounded-md w-full'>
                        <input type="text" required placeholder='URL' onChange={handleChange} name='url' value={url}
                            className='border mb-5 p-3 rounded-md' />
                        <input type="number" required placeholder='Price' onChange={handleChange} name='price' value={price}
                            className='border mb-5 p-3 rounded-md' />
                        <input type="text" required placeholder='Description' onChange={handleChange} name='description' value={description}
                            className='border mb-5 p-3 rounded-md' />
                        <input type="text" required placeholder='Brand' onChange={handleChange} name='brand' value={brand}
                            className='border mb-5 p-3 rounded-md' />
                        <input type="text" required placeholder='Category' onChange={handleChange} name='category' value={category}
                            className='border mb-5 p-3 rounded-md' />
                        <select id="" onChange={handleChange} name='gender' value={gender}
                            className='border mb-5 p-3 w-2/6 rounded-md'>
                            <option value="">Gender</option>
                            <option value="man">Man</option>
                            <option value="woman">Women</option>
                            <option value="kids">Kids</option>
                        </select>
                        <input type="submit" name="" id="" value={'Edit Product'} onClick={handleSubmit}
                            className='border mb-5 p-3 rounded-md font-bold text-xl text-white bg-teal-400 w-3/5 m-auto hover:cursor-pointer hover:bg-teal-600 hover:text-yellow-500' />
                    </form>
                </div>
            </div>

        </div>
    )
}
