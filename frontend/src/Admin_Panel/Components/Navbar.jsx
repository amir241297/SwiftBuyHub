import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {name}=useSelector((store)=>{
    return store
  })
  const first_alp=name.length>0 && name[0].toUpperCase() 
  // console.log(n)
  return (
    <div className='fixed top-5 w-full flex text-white h-14'>
      <div className='w-52 h-full rounded-2xl mr-44'>
        <img src={'/logo.png'} alt="" className='h-full w-3/4 m-auto'/>
      </div>
      <div className='font-bold text-2xl flex justify-around items-center w-2/4  rounded-3xl text-yellow-600 bg-black-russian mr-72'>
        <Link to='/adminHome'>Home</Link>
        <Link to='/adminAddProducts'>Add Product</Link>
        <Link to='/adminlogin'>Admin Login</Link>
      </div>
      <div className='w-12 flex justify-center items-center text-2xl font-bold mr-4 rounded-3xl bg-black-russian text-teal-500'><h1>{first_alp?first_alp:"?"}</h1></div>
    </div>
  )
}

export default Navbar