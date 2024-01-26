import React, { useState } from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin } from '../redux/adminRedux/adminAction';

const initialState = {
  email: '',
  password: ''
}
export const Login = () => {
  const [login, setLogin] = useState(initialState)
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const {isAuth}=useSelector((state)=>{
    return state
  })

  if(isAuth){
    navigate("/adminHome")
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(adminLogin(login))
    console.log(login)
  }
  return (
    <div className="background-container">
      <img src={'/bg_image.png'} alt="bgimage" className="background-image" />
      {/* Your component content goes here */}
      <div className='relative z-1000 flex items-center justify-center h-full'>
        <form action="" className='border-2 border-teal-400 w-1/4 m-auto h-96 p-8 gap-2 rounded-lg'>
          <h2 className='text-teal-400 font-semibold mb-5 text-left text-2xl'>Sign In</h2>
          <input required type="email" placeholder='Email' name='email' onChange={handleChange}
            className='p-2 w-full rounded-lg' />
          <input required type="password" placeholder='Password' name='password' onChange={handleChange}
            className='p-2 w-full mt-5 mb-5 rounded-lg' />
          <Link to='/adminRegister'><p className='text-teal-400 text-left mb-5 hover:text-blue-600'>create an account?</p></Link>
          <input type="submit" value={'Continue'} onClick={handleSubmit}
            className='p-2 hover:bg-blue-600 w-3/4 rounded-lg text-xl font-semibold text-white hover:cursor-pointer bg-teal-400' />
        </form>
      </div>
    </div>
  );
}
