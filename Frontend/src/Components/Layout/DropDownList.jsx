import React from 'react'
import { useNavigate } from "react-router-dom";
import Profile from '../Profile/Profile';



export default function DropDownList() {
    const navigate = useNavigate();

  const handleAdmin=()=>{
    navigate("/Admin")
  }

    const handleProfile=()=>{
  navigate("/Profile")
      }


      const handleOrders=()=>{
        navigate("/Orders")
      }

      const handleLogOut=()=>{
        alert("logout")
      }
 



  return (
    <div className='dropDownCont'>

<div className="dropdown-menu">
      <ul>
        <li onClick={handleAdmin}>Admin</li>
        <li onClick={handleProfile}>Profile</li>
        <li onClick={handleOrders}>Orders</li>
        <li onClick={handleLogOut}>Logout</li>
      </ul>
    </div>

    </div>
  )
}
