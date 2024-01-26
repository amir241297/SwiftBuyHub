import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { Home } from '../Home'
import { Login } from '../Login'
import { CreateProducts } from '../CreateProducts'
import { Register } from '../Register'
import { Update } from '../Update'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/adminHome' element={<Home />} />
                <Route path='/adminAddProducts' element={<CreateProducts />} />
                <Route path='/adminLogin' element={<Login />} />
                <Route path='/adminRegister' element={<Register />} />
                <Route path='/adminUpdate' element={<Update />} />
            </Routes>
        </div>
    )
}

export default AllRoutes