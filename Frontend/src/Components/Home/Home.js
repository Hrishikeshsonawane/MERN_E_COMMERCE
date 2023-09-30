import React from 'react'
import "./Home.css"

import Footer from "../Layout/Footer/Footer"
import Header from "../Layout/Header"
import Cart from '../Cart/Cart'
import MainProductPage from './HomeContent/MainProductPage'
import { Routes ,Route } from 'react-router-dom'
import ProductOverView from '../ProductOverView/ProductOverView'



export default function Home() {
  return (
   <>
   <Header />

   <Routes>
    <Route path={"/"} element={<MainProductPage />} ></Route>
    <Route path={"/Cart"} element={<Cart />}></Route>
    <Route path={"/ProductOverview"} element={<ProductOverView/>} ></Route>
    

   </Routes>
   
  
   <Footer/>
   </>
  )
}
