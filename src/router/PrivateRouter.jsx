import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const PrivateRouter = () => {
    // const {user} = useSelector((state)=>state.auth)
    const user = true
  return (
user ? <>
<Navbar/>
<Outlet />
</> : <Navigate to={"/"}/>
  )
}

export default PrivateRouter