import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const initialState = {
  email: '',
  password: ''
}
const Login = () => {
  const [login, setLogin] = useState(initialState)
  const dispatch=useDispatch()

  const handleChange = (e) => {
    const {name, value} = e.target
    setLogin({ ...login, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(login)
    // dispatch()
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <form action="" className='border border-teal-600 h-96 w-1/4 grid leading-3 p-7 rounded-2xl'>
        <input type="email" placeholder='Email' required onChange={handleChange} name='email'
          className='border rounded-2xl p-2 h-10' />
        <input type="password" placeholder='Password' required onChange={handleChange} name='password'
          className='border rounded-2xl p-2 mt-5 mb-2 h-10' />
        <Link to={'/register'} className='text-teal-500 h-5 font-semibold w-auto'>create an account?</Link>
        <Link to={'/adminlogin'} className='text-blue-600 font-semibold w-auto'>admin?</Link>
        <input type="submit" value={"Sign in"} onClick={handleSubmit}
          className='rounded-2xl w-3/4 m-auto mb-5 mt-3 font-bold bg-sky-600 text-2xl text-white hover:cursor-pointer hover:border-2 border-sky-500 hover:text-sky-600 hover:bg-white' />

        <div className='mt-3 h-12 grid grid-cols-3 grid-rows-1 gap-5'>
          <div className='border border-gray-600 rounded-lg  flex justify-center items-center'>
            <Link><FaGithub className='text-3xl hover:cursor-pointer'/></Link>
          </div>
          <div className='border border-gray-600 rounded-lg flex justify-center items-center h-full'>
            <Link><FcGoogle className='text-3xl text-sky-600 hover:cursor-pointer'/></Link>
          </div>
          <div className='border border-gray-600 rounded-lg p-2 flex justify-center'>
            <Link><FaFacebook className='text-3xl text-sky-600 '/></Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login