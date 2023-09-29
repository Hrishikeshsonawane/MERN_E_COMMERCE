import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card';

import "./AddProduct.css"



const AddProduct = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className='AddProduct_MainForm' >
        <Form >
          <div className="fields">
            <Form.Group className="mx-auto" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Product name" />
            </Form.Group>

            <Form.Group className="" controlId="formBasicPassword">
              <Form.Label>Add category</Form.Label>
              <Form.Control type="text" placeholder="add category" />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Company name</Form.Label>
            <Form.Control type="text" placeholder="conpany Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Price" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Add description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Add product Image</Form.Label>
            <Form.Control type="file" placeholder="" />
          </Form.Group>

          <div className="fields quantity-incdec">
            <button className='qty-btn' onClick={decrement}>
              -
            </button>
            <h4>{count}</h4>
            <button className='qty-btn' onClick={increment}>
              +
            </button>{' '}
          </div>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>

  )
}

export default AddProduct
