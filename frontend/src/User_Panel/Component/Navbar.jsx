import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsBrightnessHigh } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import { useDispatch } from "react-redux"
import { setThemeMode } from '../../redux/userRedux/userAction';
import { MdShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

// moon--> false
export const Navbar = () => {
  const [theme, setTheme] = useState(<BsBrightnessHigh />)
  const [toggle, setToggle] = useState(false)
  const [text_color, setTextColor] = useState('white')
  const [bgColor, setBgColor] = useState('')
  const dispatch = useDispatch()

  const toggleTheme = () => {
    setToggle(!toggle);
    setTheme(toggle ? <BsBrightnessHigh /> : <IoMoon />);
    dispatch(setThemeMode(toggle))
    // console.log(toggle)
  };

  // if (toggle) {

  // } else {

  // }

  useEffect(() => {
    setBgColor()
    setTextColor()
  }, [toggle])


  return (
    <div className='flex h-16 fixed top-0 w-full z-10  bg-gray-900 text-white overflow-hidden
    sm:border-2 sm:border-red-500
    md:border-2 md:border-green-500
    lg:border-2 lg:border-yellow-500
    xl:border-2 2xl:border-blue-500
    '>
      <div className='w-1/5'>
        <NavLink to='/' >
          <img src={'/logo.png'} alt="companylogo" className='h-full 2xl:ml-7 ml-3 
        ' />
        </NavLink>
      </div>
      <div className='w-3/5
      sm:border-2 sm:border-red-500 sm:font-semibold
      md:border-2 md:border-green-500 md:text-teal
      lg:border-2 lg:border-yellow-500 
      xl:border-2 2xl:border-blue-500 xl:font-bold text-md'
      >
        <nav className='flex justify-between items-center h-full'>

          <div className='bg-gray-300 flex border border-none w-2/4 rounded-3xl h-3/5  hover:border-none text-gray-900' >
            <input
              type="search"
              placeholder="Search"
              className="bg-gray-300 border border-none pl-2 focus:border-transparent w-10/12 h-full text-sm ml-4"
            />

            <div className='w-10 flex items-center justify-center'>

              <IoIosSearch className='text-xl cursor-pointer' />
            </div>

          </div>

          {/* <NavLink to='/products' className='px-4 py-2 hover:bg-teal-600 transition duration-300 rounded-full'>
            Products
          </NavLink> */}
          <NavLink to='/login' className='px-4 py-2 hover:bg-teal-600 transition duration-300 rounded-full'>
            Login
          </NavLink>

          <NavLink to='/cart' className='px-4 py-2 hover:bg-teal-600 transition duration-300 rounded-full flex items-center'>
            <MdShoppingCart />
            <p className='ml-1'>Cart</p>
          </NavLink>


        </nav>
      </div>
      <div className='w-1/5 flex items-center justify-evenly'>
        <button onClick={toggleTheme} className='text-2xl px-4 py-2 hover:bg-teal-600 transition duration-300 rounded-full'>
          {theme}
        </button>
        {/* <div className='h-11 w-10 rounded-full'>
          <img src={'/profile_image.jpg'} alt="profile image" className='h-full w-full rounded-full' />
        </div> */}
      </div>
    </div>

  );
};
