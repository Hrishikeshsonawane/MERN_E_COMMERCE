import { useState } from "react";
import "./Header.css"
import { CgProfile } from "react-icons/cg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import DropDownList from './DropDownList'
import { useNavigate } from "react-router-dom";
import searchEmoji from "../../Sources/searchEmoji.gif"
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
    </div >
  )
}
