import React, { useContext } from 'react'

const AdminPrivateRoute = ({children}) => {
    const state=useContext()
    console.log(state)
  return (
    <div>AdminPrivateRoute</div>
  )
}

export default AdminPrivateRoute