import React from 'react'
import {BsMouse} from "react-icons/bs"
import "./Home.css"
import Product from './Product'
import MetaData from '../Layout/MetaData'



const product={
  name:"Blue Huskey",
  price: "3000",
  id:"hrishi",
  images:[{url: "https://i.ibb.co/DRST11n/1.webp"}]
}
export default function Home() {
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
   <div className="container" id='container'>
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
