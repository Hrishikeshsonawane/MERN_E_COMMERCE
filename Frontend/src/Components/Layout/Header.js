import { useState } from "react";
import "./Header.css"
import { CgProfile } from "react-icons/cg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import DropDownList from './DropDownList'
export default function Header() {

 const [isDropdownVisible, setDropdownVisible] = useState(false);


  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };


  const handleSearchProduct = () => {
   }
  const handleShoppingCart = () => {
   }

  const handleProfile = () => {
   }
  return (
    <div className='header-main-container'>
      <div className="projectName">
        <h4>E-Commerce</h4>
      </div>


     <div className="Header_wrapper">
      <div className="searchProduct">
        <button onClick={handleSearchProduct}><BiSearchAlt2 /></button>
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
