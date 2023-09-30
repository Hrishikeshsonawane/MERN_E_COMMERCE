import React, { useState } from 'react'
import "./Cart.css"
import { MdDelete } from "react-icons/md"

const Cart = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleProductDelete=()=>{
        alert("product delete hai bhai")
    }

    const productDetails = {
        "Sr_no": "1",
        "product_name": "Alen Walker",
        "category": "glassess",
        "company_name": "Warby Parker",
        "price": "$199.99",
        "ratings": "4.5",
        "description": "Customizable prescription glasses for clear vision",
        "image": "0000111100000111",
        "quantity": 2

    }

    return (
        <>


            <div className="cartContainer">

                <div className="cartOrders">
                    <h4>Cart Orders</h4>
                    <div className="cartItemList">
                        <li className='cartItem'>
                        <input type="checkbox" name="" id="" />

                            <img src="https://picsum.photos/id/237/100/100" className='ImageCart' alt="" />
                            <span className='ProductName'>{productDetails.product_name}</span>
                            <div className='productQauntity'>
                            <div className="fields quantity-incdec">
                                <button className='qty-btn' onClick={decrement}>
                                    -
                                </button>
                                <h4>{count}</h4>
                                <button className='qty-btn' onClick={increment}>
                                    +
                                </button>{' '}
                            </div>    
                            </div>                       
                             <span className='productPrice'>{productDetails.price}</span>



                            <button onClick={handleProductDelete} className='Deleteproduct'><MdDelete /></button>
                            <hr className='CartLine' />
                        </li>
                    </div>



                </div>



                <div className="cartSummery">

                    <div className="subcontent">

                        <h4>Shopping summary</h4>

                        <span className='subFieldsCart'>Subtotal

                            <h6>100 $</h6>
                        </span>
                        <span className='subFieldsCart'>Tax
                            <h6>10 $</h6>
                        </span>

                        <span className='subFieldsCart'>Shipping
                            <h6>1 %</h6>
                        </span>

                        <hr style={{ border: "1px solid black" }} />
                        <div className="cartTotal">
                            <span>Total
                                <h6>111 $</h6>
                            </span>
                        </div>
                        <button >Buy Now</button>

                    </div>
                </div>




            </div>
        </>

    )
}

export default Cart
