import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' font-semibold text-xl flex justify-around items-center border-2 border-sky-500 h-14'>
      <Link to='/adminHome'>Home</Link>
      <Link to='/adminAddProducts'>Add Product</Link>
      <Link to='/adminlogin'>Admin Login</Link>
    </div>
  )
}

export default Navbar