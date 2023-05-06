import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { loginadmin } from '../Redux/AdminReducer/action'
import { SIGNIN_SUCCESS_ADMIN } from '../Redux/AdminReducer/actiontype'

const Adminlogin = () => {
    const [email,setEmail]=useState("")
     const [password,setPassword]=useState("")
     const dispatch=useDispatch()
     const navigate=useNavigate()
     const handleemail=(e)=>{
       setEmail(e.target.value)
        
     }
     const handlepass=(e)=>{
        setPassword(e.target.value)
         
      }
      console.log(email)
      console.log(password)
      const handlesubmit=(e)=>{
           e.preventDefault()
           if(email=="admin@gmail.com" && password=="admin"){
            console.log("yes")
                dispatch({type:SIGNIN_SUCCESS_ADMIN})
             Navigate("/admin")
                setEmail("")
                setPassword("")
           }else{
            alert("wrong details")
           }
          
      }
    return (
        <div>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" placeholder='email' value={email} name='email' onChange={handleemail}/>
                <input type="text" placeholder='password' name='password' value={password} onChange={handlepass}/>
                <button type='submit'>Login As Admin</button>
            </form>
        </div>
    )
}

export default Adminlogin