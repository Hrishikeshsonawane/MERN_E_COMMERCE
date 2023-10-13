import React from 'react';
import './Admin.css';
import SideBar from '../Sidebar/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './Dashboard/DashBoard';
import Orders from '../Components/Orders/Orders';
import Users from './Users';
import AddProduct from './AddProduct/AddProduct';
import EditProduct from './EditProduct/EditProduct';


export default function Admin() {



    return (
        <div className="adminContainer">
            <div className="adminHeader">
                <h2>Admin Panel</h2>
            </div>
            <div className="adminMain">
                <>
                    <SideBar />
                </>
                <div className='adminSections'>
                    <Routes>
                        <Route exact path="/*" element={<DashBoard />} />
                        <Route exact path="/orders" element={<Orders />} />
                        <Route exact path="/users" element={<Users />} />
                        <Route exact path="/AddProduct" element={<AddProduct />} />
                        <Route exact path="/Admin/EditProduct" element={<EditProduct />} />

                    </Routes>
                </div>
            </div>



        </div>
    );
}
