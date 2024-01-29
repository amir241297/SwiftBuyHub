import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const initialState = {
  name: '',
  email: '',
  password: ''
}

const Register = () => {
  const [register, setRegister] = useState(initialState)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setRegister({ ...register, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch()
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <form action="" className='border-2 border-teal-600 h-96 w-1/4 grid leading-3 p-7 rounded-2xl'>
        <input type="text" placeholder='Name' required onChange={handleChange} name='name'
          className='border rounded-2xl p-2 h-10 mb-5' />
        <input type="text" placeholder='Email' required onChange={handleChange} name='email'
          className='border rounded-2xl p-2 h-10' />
        <input type="text" placeholder='Password' required onChange={handleChange} name='password'
          className='border rounded-2xl p-2 mt-5 mb-2 h-10' />
        <p>have an account <Link to={'/login'} className='text-teal-500 h-5 font-semibold'>login?</Link></p>

        <input type="submit" value={"Register"} onClick={handleSubmit}
          className='rounded-2xl w-3/4 m-auto mb-5 mt-3 font-bold bg-sky-600 text-2xl text-white hover:cursor-pointer hover:border-2 border-sky-500 hover:text-sky-600 hover:bg-white' />


      </form>
    </div>
  )
}

export default Register