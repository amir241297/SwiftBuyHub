import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsBrightnessHigh } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import { useDispatch } from "react-redux"
import { setThemeMode } from '../../redux/userRedux/userAction';
// moon--> false
export const Navbar = () => {
  const [theme, setTheme] = useState(<BsBrightnessHigh />)
  const [toggle, setToggle] = useState(false)
  const [text_color, setTextColor] = useState('')
  const [bgColor, setBgColor] = useState('')
  const dispatch = useDispatch()

  const toggleTheme = () => {
    setToggle(!toggle);
    setTheme(toggle ? <BsBrightnessHigh /> : <IoMoon />);
    dispatch(setThemeMode(toggle))
    // console.log(toggle)
  };

  if(toggle){

  }else{

  }

  // useEffect(()=>{

  // },[toggle])


  return (
    <div className='flex h-20 border-2 border-red-500 fixed top-0 w-full z-1000  bg-gray-500 text-white
    sm:
    md:
    lg:
    2xl:
    '>
      <div className='border w-1/5 '>
        <img src={'/logo.png'} alt="companylogo" className='h-full 
        2xl:ml-7 
        ' />
      </div>
      <div className='w-3/5 font-bold text-2xl'>
        <nav className='border flex justify-between items-center h-full'>

          <NavLink to='/' className='px-4 py-2 hover:bg-teal-500 transition duration-300 rounded-full'>
            Home
          </NavLink>

          <NavLink to='/products' className='px-4 py-2 hover:bg-teal-600 transition duration-300 rounded-full'>
            Products
          </NavLink>

          <NavLink to='/cart' className='px-4 py-2 hover:bg-teal-600 transition duration-300 rounded-full'>
            Cart
          </NavLink>

          <NavLink to='/login' className='px-4 py-2 hover:bg-teal-600 transition duration-300 rounded-full'>
            Login
          </NavLink>

        </nav>
      </div>
      <div className='border w-1/5 flex items-center justify-evenly'>
        <button onClick={toggleTheme} className='text-2xl'>
          {theme}
        </button>
        <div className='border h-11 w-10 rounded-full'>
          <img src={'/profile_image.jpg'} alt="profile image" className='h-full w-full rounded-full' />
        </div>
      </div>
    </div>

  );
};
