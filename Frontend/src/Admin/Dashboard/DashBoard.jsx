import React, { useRef, useMemo, useState } from 'react'
import "./DashBoard.css"
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import EditProduct from '../EditProduct/EditProduct';
import { useNavigate } from 'react-router-dom';



const DashBoard = () => {

  const products = {
    "Sr_no": "1",
    "product_name": "Prescription Glasses",
    "category": "glassess",
    "company_name": "Warby Parker",
    "price": "$199.99",
    "ratings": "4.5",
    "description": "Customizable prescription glasses for clear vision",
    "image": "0000111100000111",
    "quantity": 2
  }

  const navigate = useNavigate;



  const handleEdit = () => {
    navigate("/EditProject")
  }

  const handleDelete = () => {
    alert("delete")
  }

  return (

    <>


      <div className="table-container">
        <div className="DashboardTitle">
          <Badge bg="info">Dashboard</Badge>

        </div>

        <Table responsive="md" scroll borderless bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Sr_no</th>
              <th>product_name</th>
              <th>category</th>
              <th>company_name</th>

              <th>price</th>

              <th>description</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{products?.Sr_no}</td>
              <td>{products?.product_name}</td>
              <td>{products?.category}</td>
              <td>{products?.company_name}</td>

              <td>{products?.price}</td>

              <td>{products?.description}</td>
              <td className='DashboardAction'>
                <button onClick={handleEdit}>
                  < MdModeEditOutline />
                </button>
                <button onClick={handleDelete}>
                  < MdDelete />
                </button>



              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default DashBoard
