import React, { useState } from 'react'
import "./Login.css"
import { json, useNavigate } from 'react-router-dom'
import { URL } from '../../constants/ApiUrlConstant'
import { LOGIN_POST, POST } from '../../constants/HttpMethods'


const Login = () => {

  const [loginData, setLoginData] = useState({
    "email": "",
    "password": ""

  });
  console.log('loginData', loginData)


const StaticUserData=[
{
  "email": "hrishisonawane@example.com",
  "password": "hrishisonawane@example.com",
   "role" : "Admin"

},
{ "email": "premkambale@example.com",
"password": "premkambale@example.com",
 "role" : "User"

},
]


 
  const handleLogin = () => {
     if(StaticUserData[0].email == loginData.email &&  StaticUserData[0].password  == loginData.password){

      alert("login successful")
      navigate("/")
     }
     else{
      alert("Please enter valid userName or password")
     }
      }



  const handleChange = (inputName, inputValue) => {
    setLoginData(prevFormData => ({
      ...prevFormData,
      [inputName]: inputValue
    }));
  }






  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/register')
  }
  return (
    <div className='login-main-container'>
      <div className="login-form-container">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input name="email"
            className='input-element'
            type="email"
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input name="password"
            className='input-element'
            type="password"
            onChange={e => handleChange(e.target.name, e.target.value)}

          />
        </div>
        <div className="login-btn">
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="info">
          <p>Don't have a account? <span onClick={() => handleNavigate()}>Sign In</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
