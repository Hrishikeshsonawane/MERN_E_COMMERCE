import React from 'react'
import "./ProductOverView.css"
 
const ProductOverView = () => {


  const product={
    name:"Blue Huskey",
    price: "3000",
    id:"hrishi",
    images:[{url: "https://i.ibb.co/DRST11n/1.webp"}]
  }
  return (
        

<div className="overViewContainer">

  <div className="productImage">

    <img src="https://i.ibb.co/DRST11n/1.webp" alt="" />
  </div>
  <div className="productOverViewName">

    <span>{product?.name}</span>
    
    </div> 
    
</div>


  )
}

export default ProductOverView
