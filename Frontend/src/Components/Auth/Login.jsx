import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/register')
    }
    return (
        <div className='login-main-container'>
            <div className="login-form-container">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input name="email" className='input-element' type="email" style={{}} />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input name="password" className='input-element' type="password" />
                </div>
                <div className="login-btn">
                    <button>Login</button>
                </div>
                <div className="info">
                    <p>Don't have a account? <span onClick={() => handleNavigate()}>Sign In</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login