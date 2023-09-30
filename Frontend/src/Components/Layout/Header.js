import { useState } from "react";
import "./Header.css"
import { CgProfile } from "react-icons/cg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import DropDownList from './DropDownList'
import { useNavigate } from "react-router-dom";
export default function Header() {

 const [isDropdownVisible, setDropdownVisible] = useState(false);
 const [searcText, setSearchText]= useState("")




 const navigate =useNavigate()



 

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleSearch=()=>{
    
  }

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleProjectName=()=>{
    navigate("/")
  }

  const handleSearchProduct = (e) => {
    setSearchText(e.target.value)
    console.log(e.target.value)
   }
  const handleShoppingCart = () => {
    navigate("/Cart")
    }

  const handleProfile = () => {
   }
  return (
    <div className='header-main-container'>
      <div className="projectName">
        <h4 onClick={handleProjectName}>E-Commerce</h4>
      </div>


     <div className="Header_wrapper">
      <div className="searchProduct">
        <input type="text"   
         placeholder="Search products here"
         value={searcText}
         onChange={handleSearchProduct}



         
         /> 
         <button onClick={handleSearch}><BiSearchAlt2 /></button>

      </div>
      <div className="shoppingCart">
        <button onClick={handleShoppingCart}><AiOutlineShoppingCart /> </button>

      </div>
      <div className='profile'   onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
        <button onClick={handleProfile}><CgProfile /> </button>
        {isDropdownVisible && <DropDownList />}
      </div>
      </div>
    </div>
  )
}
