import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { Home } from '../Home'
import { Login } from '../Login'
import { CreateProducts } from '../CreateProducts'
import { Register } from '../Register'
import { Update } from '../Update'
import AdminPrivateRoute from './AdminPrivateRoute'

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/adminHome' element={<Home />} />
                <Route path='/adminAddProducts' element={
                    <AdminPrivateRoute >
                        <CreateProducts />
                    </AdminPrivateRoute>
                } />
                <Route path='/adminUpdate' element={<AdminPrivateRoute ><Update /></AdminPrivateRoute>} />
                <Route path='/adminLogin' element={<Login />} />
                <Route path='/adminRegister' element={<Register />} />
                <Route path='*' element={<h1>404 Invalid Page!</h1>} />


                <Route path=''/>
            </Routes>
        </div>
    )
}
export default AllRoutes