import React from 'react'
import { Link } from 'react-router-dom'
import { MdCurrencyRupee } from "react-icons/md";

const Accessories = () => {
  return (
    <div className='border-2 border-red-600 w-full grid grid-cols-4 gap-7 p-5 bg-slate-000 absolute top-96' style={{ height: '400px' }}>
      <div className='border border-black h-full p-4 bg-white'>
        <div className='mb-2'>
          <h1 className='font-bold text-xl'>Revamp your home in style</h1>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 h-5/6 border border-red-600' >
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Cushion covers, bedsheets & more</p>
          </Link>
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Figurines, vanes and more</p>
          </Link>
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Home storage</p>
          </Link>
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Lighting solution</p>
          </Link>

        </div>
        <Link className='text-teal-500 text-sm font-semibold'>Explore all</Link>
      </div>

      <div className='border border-black h-full p-4 bg-white'>
        <div className='mb-2'>
          <h1 className='font-bold text-xl'>Appliances for your home | up to 55% off</h1>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 h-5/6 border border-red-600' >
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Cushion covers, bedsheets & more</p>
          </Link>
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Figurines, vanes and more</p>
          </Link>
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Home storage</p>
          </Link>
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Lighting solution</p>
          </Link>

        </div>
        <Link className='text-teal-500 text-sm font-semibold'>Explore all</Link>
      </div>

      <div className='border border-black h-full p-4 bg-white'>
        <div className='mb-2'>
          <h1 className='font-bold text-xl flex '> Starting <span className="border border-red-600 mt-1"><MdCurrencyRupee/></span>99 | SwiftBuyHub Brands & more </h1>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 h-5/6 border border-red-600' >
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Cushion covers, bedsheets & more</p>
          </Link>
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Figurines, vanes and more</p>
          </Link>
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Home storage</p>
          </Link>
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Lighting solution</p>
          </Link>

        </div>
        <Link className='text-teal-500 text-sm font-semibold'>Explore all</Link>
      </div>

      <div className='border border-black h-full p-4 bg-white'>
        <div className='mb-2'>
          <h1 className='font-bold text-xl'>Revamp your home in style</h1>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 h-5/6 border border-red-600' >
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Cushion covers, bedsheets & more</p>
          </Link>
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Figurines, vanes and more</p>
          </Link>
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Home storage</p>
          </Link>
          <Link to={"/"}>
            <div className='border border-black h-3/4'>
              <img className='h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg" alt="" />
            </div>
            <p className='text-xs font-semibold'>Lighting solution</p>
          </Link>

        </div>
        <Link className='text-teal-500 text-sm font-semibold'>Explore all</Link>
      </div>
    </div>
  )
}

export default Accessories