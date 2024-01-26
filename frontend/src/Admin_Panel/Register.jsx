import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css';
import { useDispatch, useSelector } from 'react-redux'
import { adminRegister } from '../redux/adminRedux/adminAction';

const initialState = {
  name: '',
  email: '',
  password: ''
}

export const Register = () => {
  const [register, setRegister] = useState(initialState)
  const dispatch = useDispatch()
  const {isRegister}=useSelector((store)=>{
    return store
  })
  const navigate=useNavigate()
  if(isRegister){
    navigate('/adminLogin')
  }

  const handleChange = (e) => { 
    const { name, value } = e.target
    // console.log(value)
    setRegister({ ...register, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(register)
    dispatch(adminRegister(register))
  }

  return (
    <div className="background-container">
      <img src={'/bg_image.png'} alt="bgimage" className="background-image" />
      {/* Your component content goes here */}
      <div className='relative z-1000 h-full flex items-center justify-center'>
        {/* <Navbar /> */}
        <form action="" className='border-2 border-teal-400 w-1/4 h-96  p-8 gap-2 rounded-lg'>
          <h2 className='text-teal-400 font-semibold mb-5 text-left text-2xl'>Create Account</h2>
          <input required type="name" placeholder='Name' onChange={handleChange} name='name'
            className='p-2 w-full rounded-lg ' />
          <input required type="email" placeholder='Email' onChange={handleChange} name='email'
            className='p-2 w-full mt-5 rounded-lg' />
          <input required type="password" placeholder='Password' onChange={handleChange} name='password'
            className='p-2 w-full mt-5 mb-5 rounded-lg' />
          <p className='text-teal-400 text-left mb-5'>Have an account? <Link to='/adminLogin' className='text-blue-400 '>login</Link></p>
          <input type="submit" value={'Continue'} onClick={handleSubmit}
            className='p-2 hover:bg-blue-600 w-3/4 rounded-lg text-xl font-semibold text-white hover:cursor-pointer bg-teal-400' />
        </form>
      </div>
    </div>
  )
}
