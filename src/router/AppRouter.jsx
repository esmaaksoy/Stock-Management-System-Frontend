import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import ScrollToTop from '../pages/ScroolToTop'

const AppRouter = () => {
  return (
    <>
    <ScrollToTop/>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='stock' element={<PrivateRouter/>}>
        <Route path='' element={<Dashboard/>}/>
    </Route>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </>
  )
}

export default AppRouter