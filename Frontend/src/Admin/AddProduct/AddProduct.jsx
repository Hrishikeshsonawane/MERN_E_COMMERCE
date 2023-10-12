import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import Badge from 'react-bootstrap/esm/Badge';
import InputGroup from 'react-bootstrap/InputGroup';


import "./AddProduct.css"



const AddProduct = () => {
  const [quantity, setQuantity] = useState(1); // Initial quantity

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };
  return (

    <div className="addProductPage">
      <div className="AddproductTitle">
        <Badge bg="info">Add Product</Badge>

      </div>
      <Form className='form-container'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Add category </Form.Label>
        <Form.Control type="email" placeholder="name@.com" />
      </Form.Group> */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Company name</Form.Label>
          <Form.Control type="email" placeholder="Enter company name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label> Price</Form.Label>
          <Form.Control type="email" placeholder="Enter price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Description</Form.Label>
          <Form.Control type="email" placeholder="Enter description" />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Multiple files input example</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>

        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <div className="d-flex align-items-center width-21vh">
            <Button variant="outline-secondary" onClick={decrementQuantity}>
              -
            </Button>
            <Form.Control
              type="number"
              value={quantity}
              readOnly
              className="text-center"
            />
            <Button variant="outline-secondary" onClick={incrementQuantity}>
              +
            </Button>
          </div>
        </Form.Group>

        <div className="buttonAddProduct">

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>

      </Form>
    </div>
  )
}

export default AddProduct
