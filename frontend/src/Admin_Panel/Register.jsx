import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';


export const Register = () => {
  return (
    <div className="background-container">
      <img src={'/bg_image.png'} alt="bgimage" className="background-image" />
      {/* Your component content goes here */}
      <div className='relative z-1000 h-full flex items-center justify-center'>
        {/* <Navbar /> */}
        <form action="" className='border-2 w-1/4 h-96  p-8 gap-2 rounded-lg'>
          <h2 className='text-white font-semibold mb-5 text-left text-2xl'>Create Account</h2>
          <input required type="name" placeholder='Name' className='p-2 w-full rounded-lg '/>
          <input required type="email" placeholder='Email' className='p-2 w-full mt-5 rounded-lg' />
          <input required type="password" placeholder='Password' className='p-2 w-full mt-5 mb-5 rounded-lg' />
          <Link to='/adminLogin'><p className='text-blue-600 text-left mb-5'>login?</p></Link>
          <input type="submit" value={'Continue'} className='p-2 bg-blue-600 w-3/4 rounded-lg text-xl font-semibold text-white cursor-pointer hover:bg-white hover:text-blue-600' />
        </form>
      </div>
    </div>
  )
}
