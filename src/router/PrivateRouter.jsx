import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrivateRouter = () => {
    const {user} = useSelector((state)=>state.auth)

  return (
user ? <>
<Navbar/>
<Outlet />
<Footer/>
</> : <Navigate to={"/"}/>
  )
}

export default PrivateRouter