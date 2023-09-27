import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"



const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size:window.innerWidth < 600 ? 20 :25,
    value: 2.5,
    isHalf: true

}
export default function Product({product}) {
    return (

        <Link className='productCard' to={Product.id}>

            <img src={product?.images[0]?.url} alt={product.name} />
            <div>
                <ReactStars {...options} /> 
                <span>256 Reviews</span>
                <span>{product.price}</span>
            </div>
        </Link>
    )
}