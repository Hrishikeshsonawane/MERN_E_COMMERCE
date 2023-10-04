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



    const handleLogin = () => {
        var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTFiYjZkMDVmMmZkNzY4OWY5ZWE4NjEiLCJhY2Nlc3NSb2xlIjoiQURNSU4iLCJpYXQiOjE2OTYzNDI4MjZ9.mfH-SCjcjpagXc4P8Arop7vxgHtpJP-_MempxUBmKHM"
        // const loginData = { /* Your login data object here */ };
      
        fetch("http://my-shope.onrender.com/users/all", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' :  "Bearer " + token
          },
        //   body: JSON.stringify(loginData),
          mode:'no-cors'

        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((responseData) => {
            console.log(responseData);
          })
          .catch((error) => {
            console.log(error.message);
          });
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