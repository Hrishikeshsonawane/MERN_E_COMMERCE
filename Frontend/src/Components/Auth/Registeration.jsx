import React, { useEffect, useState } from 'react'
import "./Registration.css"
// import { check, feild } from './Validation'
const Registeration = () => {

  const [user,setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: '', 
    mobileNo: "",
    // "role":"ADMIN"
  })

  console.log("user",user)








  useEffect(()=>{
    console.log("user",user);
  },[user])

  // const handleInput = (e) => {
  //   const {name,value} = e.target

  //   setUser({...user,[name]: check(value,`${name}`)})
  // }

  const handleSignup = () => {
    // if(user.name.fieldValue!='' && user.name.isValidField &&  user.email.fieldValue!='' &&  user.email.isValidField && user.password.fieldValue!='' && user.password.isValidField && user.cpassword.fieldValue!='' && user.cpassword.isValidField)
    // {       
    //    console.log({user});
    // }
    // else{
    //   alert("Invalid data")
    // }
  }


  const handleChange = (inputName, inputValue) => {
    setUser(prevFormData => ({
        ...prevFormData,
        [inputName]: inputValue
    }));
}

  return (
    <div className='main_container'>
      <div className='form_container'>
          <div className='input_container'>
          <label for='name' className='input_label'>Name</label>
          <input name='name' className='input_box' type='text' value={user?.name?.fieldValue}  
          
          onChange={e => handleChange(e.target.name, e.target.value)}
          ></input>
          {!user.name.isValidField && <span style={{color:"red",fontSize:25}}>{user.name.errorField}</span>}

          </div>
          <div className='input_container'>
          <label for='email' className='input_label'>Email</label>
          <input name='email' className='input_box' type='email' value={user?.email?.fieldValue} 
           onChange={e => handleChange(e.target.name, e.target.value)}
></input>
          {!user.email.isValidField && <span style={{color:"red",fontSize:25}}>{user.email.errorField}</span>}

          </div>
          <div className='input_container'>
          <label for='password' className='input_label'>Password</label>
          <input name='password' className='input_box' type='password' value={user?.password?.fieldValue} 
                        onChange={e => handleChange(e.target.name, e.target.value)}
                        ></input>
          {!user.password.isValidField && <span style={{color:"red",fontSize:25}}>{user.password.errorField}</span>}

          </div>
          <div className='input_container'>
          <label for='cpassword' className='input_label'>Confirm Password</label>
          <input name='cpassword' className='input_box' type='password' value={user?.cpassword?.fieldValue} 
                                  onChange={e => handleChange(e.target.name, e.target.value)}
                                  ></input>
          {!user.cpassword.isValidField && <span style={{color:"red",fontSize:25}}>{user.cpassword.errorField}</span>}

          </div>
          <div className='btn_container'>
            <button className='signup_btn' onClick={handleSignup}>Sign Up</button>      
          </div>
      </div>
    </div>
  )
}

export default Registeration