import React from 'react'
import Navbar from './Components/Navbar'

export const CreateProducts = () => {
  // url,price,description,brand,gender,category
  return (
    <div className='border-2 border-green-900 h-screen'>
      <Navbar />
      <div className='flex align-center justify-center border-emerald-500'>
        <form action="" className='mt-12 p-8 border border-yellow-500 w-2/6 grid rounded-md'>
          <input type="text" required placeholder='URL' className='border mb-5 p-3 rounded-md' />
          <input type="number" required placeholder='Price' className='border mb-5 p-3 rounded-md'/>
          <input type="text" required placeholder='Description' className='border mb-5 p-3 rounded-md'/>
          <input type="text" required placeholder='Brand' className='border mb-5 p-3 rounded-md'/>
          <select name="" id="" className='border mb-5 p-3 w-2/6 rounded-md'>
            <option value="">Category</option>
            <option value="man">Man</option>
            <option value="woman">Women</option>
            <option value="kids">Kids</option>
          </select>
          <input type="submit" name="" id="" value={'Add Product'} className='border mb-5 p-3 rounded-md font-semibold text-xl'/>
        </form>
      </div>
    </div>
  )
}
