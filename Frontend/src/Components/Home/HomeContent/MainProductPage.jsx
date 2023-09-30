import React from 'react'
import "./MainProductPage.css"
import {BsMouse} from "react-icons/bs"
import Product from '../Product'
import MetaData from '../../Layout/MetaData'
import { useNavigate } from 'react-router-dom'

const MainProductPage = () => {

    const product={
        name:"Blue Huskey",
        price: "3000",
        id:"hrishi",
        images:[{url: "https://i.ibb.co/DRST11n/1.webp"}]
      }

    const navigate =useNavigate()
       

      const handleProductOverview=()=>{
        navigate("/ProductOverview")
      }
  return (
    <>
    <MetaData title="Homepage is working" />
   <div className="banner">
    <p>Welcome to E-Commerse</p>
    <h1>Find amazing products below</h1>
    <a href="#container">
        <button>
            scroll <BsMouse />
        </button>
    </a>
   </div>
   <h2 className="homeHeading">Featured Products</h2>
   <div onClick={handleProductOverview} className="container" id='container'>
   <Product product={product} />
   <Product product={product} />

   <Product product={product} />

   <Product product={product} />

   <Product product={product} />

   <Product product={product} />

   <Product product={product} />

   <Product product={product} />


   </div>

   </>
  )
}

export default MainProductPage
