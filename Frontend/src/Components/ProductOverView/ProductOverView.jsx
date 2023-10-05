import React,{useState} from 'react'
import "./ProductOverView.css"
 
const ProductOverView = () => {


  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  const product=
    {
        "_id": "6516587000d33970b386d563",
        "product_name": "Sample Product",
        "category": "fashion",
        "company_name": "Zara",
        "price": "50.00",
        "ratings": "5.5",
        "description": " This is a sample product description.",
        "quantity": 1
    }

  return (
        

<div className="overViewContainer">

  <div className="productImage">

    <img src="https://i.ibb.co/DRST11n/1.webp" alt="" />
  </div>
  <div className="productOverViewName">

    <span>{product?.product_name}</span>
    
    </div> 

    <div className="productOverViewPrice">
      <span>{product.price}</span>
    </div>

    <hr className='productOverViewLine'/>

    <div className="productOverviewDetails">
      <div>Details
       <span>Description-{product.description}</span>
       <span>Category-{product.category}</span>

      


      </div>

 </div>
 <div className="productOverViewCart">
  

 <div className="subcontent_Overview"> 
 <span className='subFieldsCart_overview'>Quantity
 <div className="fields quantity-incdec">
            <button className='qty-btn' onClick={decrement}>
              -
            </button>
            <h4>{count}</h4>
            <button className='qty-btn' onClick={increment}>
              +
            </button>{' '}
          </div>
</span>


      
<span className='subFieldsCart_overview'>Subtotal

    <h6>100 $</h6>
</span>

<button className='cartBuyBtn_Overview'> Buy now</button>
<button className='AddtoCartBtn'>Add to cart</button>
 



 

</div>


 </div>



    
</div>


  )
}

export default ProductOverView
