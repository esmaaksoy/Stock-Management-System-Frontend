import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'
import Dashboard from '../pages/Dashboard'

const AppRouter = () => {
  return (
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='stock' element={<PrivateRouter/>}>
        <Route path='' element={<Dashboard/>}/>
    </Route>
  </Routes>
  )
}

export default AppRouter