import React, { useState } from 'react'
import "./SideBar.css"
import { BiSolidDashboard } from "react-icons/bi"
import { MdAddBusiness } from "react-icons/md"
import { TbTruckDelivery } from "react-icons/tb"
import { FaUsers } from "react-icons/fa"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';



export default function SideBar() {
 
  const navigate = useNavigate()
  return (
    <div className='SideBarContent' style={{ display: 'flex', height: '110vh',  overflow: 'scroll initial' ,"boxShadow":" rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px" }}>
  <CDBSidebar textColor="#000" backgroundColor="#fff"> 
    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
      <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
        Admin Panel
      </a>
    </CDBSidebarHeader>

    <CDBSidebarContent className="sidebar-content">
      <CDBSidebarMenu>
        <NavLink exact to="/Admin/" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/Admin/addProduct" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="table">Add Product</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/login" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
        </NavLink>
      </CDBSidebarMenu>
    </CDBSidebarContent>
  </CDBSidebar>
</div>

  )
}
