import { useState } from "react";
import "./Header.css"
import { CgProfile } from "react-icons/cg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import DropDownList from './DropDownList'
import { useNavigate } from "react-router-dom";
import searchEmoji from "../../Sources/searchEmoji.gif"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Header() {

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [searcText, setSearchText] = useState("")

  const [searchClicked, SetsearchClicked] = useState(true)


  const navigate = useNavigate()





  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleSearch = () => {
    SetsearchClicked(!searchClicked);
  }

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleProjectName = () => {
    navigate("/")
  }

  const handleSearchProduct = (e) => {
    setSearchText(e.target.value)
    console.log(e.target.value)
  }
  const handleShoppingCart = () => {
    navigate("Home/Cart")
  }
   
  const handleAdmin=()=>{
    navigate("/Admin/*")
  }

  const handleProfile=()=>{
    navigate("Home/Profile")

  }

  const handleOrders=()=>{
    navigate("Home/Orders")
  }
   

  const handleLogout=()=>{
    navigate("/login")
  }


  return (
    <div className='header-main-container'>
      {/* <div className="projectName">
        <h4 onClick={handleProjectName}>E-Commerce</h4>
      </div>


      <div className="Header_wrapper">
        <div className="searchProduct"
          style={{
            width: searchClicked ? "46px" : "35vw",
            height: searchClicked ? "46px" : "46px",
            borderRadius: searchClicked ? "50%" : "10px",
            display: searchClicked ? "flex" : "",
            justifyContent: searchClicked ? "right" : "right",
            alignItems: searchClicked ? "center" : "",
            border: searchClicked ? "none" : " none",
            boxShadow: searchClicked ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "0px 2px 4px rgba(0, 0, 0, 0.2)",
            borderRadius: searchClicked ? "50%" : " 10px",
            overflow: searchClicked ? " hidden" : "hidden"
          }}
        >
          <img src={searchEmoji} className={searchClicked ?  "hided-emoji" : "emoji"} style={{
            width:"30px",
            height:"30px"
          }}/>
          <input type="text"
            placeholder="Search products here"
            value={searcText}
            onChange={handleSearchProduct}
            style={{
              display: searchClicked == true ? "none" : "block",

            }}
          />
          <button onClick={handleSearch}><BiSearchAlt2 /></button>

        </div>
        <div className="shoppingCart">
          <button onClick={handleShoppingCart}><AiOutlineShoppingCart /> </button>

        </div>
        <div className='profile' onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <button onClick={handleProfile}><CgProfile /> </button>
          {isDropdownVisible && <DropDownList />}
        </div>
      </div>
      
        <Route extract path='/*' element={<Home />} />
        <Route extract path='/login' element={<Login />} />
        <Route extract path='/register' element={<Registeration />} />

        <Route extract path='Home/Profile' element={<Profile/>} />
        <Route extract path='Home/Orders' element={<Orders/>} />
        <Route extract path='/Admin/*' element={<Admin/>} />
        <Route extract path='Home/Cart' element={<Cart/>} />
        <Route extract path='Home/ProductOverview' element={<ProductOverView/>} />
      
      
      
      */}

      <Navbar expand="lg" className="bg-body-tertiary">
        
        <Container>
          <Navbar.Brand href="#home">E_commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="headerContent">

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link" onClick={handleShoppingCart}>Cart</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleAdmin} href="#action/3.1">Admin</NavDropdown.Item>
                <NavDropdown.Item onClick={handleProfile} href="#action/3.2">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleOrders} href="#action/3.3">Orders</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout} href="#action/3.4">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div >
  )
}
