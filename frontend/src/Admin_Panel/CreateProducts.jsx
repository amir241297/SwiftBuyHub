import React, { startTransition, useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { addProductDataToDB } from '../redux/adminRedux/adminAction'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

const initialState = {
  url: '',
  price: '',
  description: '',
  brand: '',
  gender: '',
  category: ''
}

export const CreateProducts = () => {
  // url,price,description,brand,gender,category
  const [productData, setProductData] = useState(initialState)
  const dispatch = useDispatch()


  const handleChange = (event) => {
    const { name, value } = event.target
    // console.log(name, value)
    setProductData({ ...productData, [name]: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addProductDataToDB(productData))
    setProductData(initialState)
  }


  return (
    <div className='border border-black h-screen'>
      <Navbar />
      <div className='flex align-center justify-center border-emerald-500 mt-24'>
        <form action="" className='p-8 border border-teal-500 w-2/6 grid rounded-md'>
          <input type="text" required placeholder='URL' onChange={handleChange} name='url'
            className='border mb-5 p-3 rounded-md' />
          <input type="number" required placeholder='Price' onChange={handleChange} name='price'
            className='border mb-5 p-3 rounded-md' />
          <input type="text" required placeholder='Description' onChange={handleChange} name='description'
            className='border mb-5 p-3 rounded-md' />
          <input type="text" required placeholder='Brand' onChange={handleChange} name='brand'
            className='border mb-5 p-3 rounded-md' />
          <input type="text" required placeholder='Category' onChange={handleChange} name='category'
            className='border mb-5 p-3 rounded-md' />
          <select id="" onChange={handleChange} name='gender'
            className='border mb-5 p-3 w-2/6 rounded-md'>
            <option value="">Gender</option>
            <option value="man">Man</option>
            <option value="woman">Women</option>
            <option value="kids">Kids</option>
          </select>
          <input type="submit" name="" id="" value={'Add Product'} onClick={handleSubmit}
            className='border border-teal-400 mb-5 p-3 rounded-md font-bold text-xl hover:cursor-pointer w-3/5 m-auto hover:bg-teal-400 hover:text-white text-teal-400'/>
        </form>
      </div>
    </div>
  )
}
