import React from 'react'
import '../../App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from "../Home/Home"
import Login from "../Auth/Login"
import Profile from '../Profile/Profile';
import Orders from '../Orders/Orders';
import Admin from '../../Admin/Admin';
import DashBoard from '../../Admin/Dashboard/DashBoard';
import Cart from '../Cart/Cart';
import ProductOverView from '../ProductOverView/ProductOverView';
import Registeration from '../Auth/Registeration';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route extract path='/*' element={<Home />} />
        <Route extract path='/login' element={<Login />} />
        <Route extract path='/register' element={<Registeration />} />

        <Route extract path='Home/Profile' element={<Profile/>} />
        <Route extract path='Home/Orders' element={<Orders/>} />
        <Route extract path='/Admin/*' element={<Admin/>} />
        <Route extract path='Home/Cart' element={<Cart/>} />
        <Route extract path='Home/ProductOverview' element={<ProductOverView/>} />


      </Routes>
    </BrowserRouter>
  )
}
