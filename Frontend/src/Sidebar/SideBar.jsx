import React,{useState} from 'react'
import "./SideBar.css"
import { BiSolidDashboard } from "react-icons/bi"
import { MdAddBusiness } from "react-icons/md"
import { TbTruckDelivery } from "react-icons/tb"
import { FaUsers } from "react-icons/fa"
import { NavLink, useLocation, useNavigate } from "react-router-dom";



export default function SideBar() {
    const [toggleClass2, setToggleClass2] = useState(false);
    const [toggleClass, setToggleClass] = useState(false);



    const navigate = useNavigate()
    return (
        <div className='sideBarContainer'>

            {/* <div className="dashboard">
       <button><BiSolidDashboard /></button> 
      </div>

      <div className="addProduct">
        <button><MdAddBusiness /></button>
      </div>
      <div className="orders">
        <button><TbTruckDelivery /></button>
      </div>

      <div className="users">
        <button><FaUsers/></button>
      </div> */}
     

        <div className="nav-list">

            <li className=  "links"onClick={() => navigate("/Admin/")}><BiSolidDashboard />
            <span>Dashboard</span>
            </li>
            <li className=  "links"onClick={() => navigate("/Admin/addProduct")}><MdAddBusiness />
            <span>Add Product</span>
 </li>

            <li className="links" onClick={() => navigate("/Admin/orders")}><TbTruckDelivery />
            <span>Orders</span>

             </li>

            <li className="links" onClick={() => navigate("/Admin/users")}> <FaUsers/>
            <span>Users</span>
            </li>
            </div>
        </div>
    )
}
