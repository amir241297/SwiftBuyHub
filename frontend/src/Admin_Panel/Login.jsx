import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="background-container">
      <img src={'/bg_image.png'} alt="bgimage" className="background-image" />
      {/* Your component content goes here */}
      <div className='relative z-1000 flex items-center justify-center h-full'>
        <form action="" className='border-2 w-1/4 m-auto h-96 p-8 gap-2 rounded-lg'>
          <h2 className='text-white font-semibold mb-5 text-left text-2xl'>Sign In</h2>
          <input required type="email" placeholder='Email' className='p-2 w-full rounded-lg'/>
          <input required type="password" placeholder='Password' className='p-2 w-full mt-5 mb-5 rounded-lg' />
          <Link to='/adminRegister'><p className='text-blue-600 text-left mb-5'>create an account?</p></Link>
          <input type="submit" value={'Continue'} className='p-2 bg-blue-600 w-3/4 rounded-lg text-xl font-semibold text-white'/>
        </form>
      </div>
    </div>
  );
}
