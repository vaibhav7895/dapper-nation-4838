import {
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNIN_FAILURE,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNOUT,
  } from "./actiontypes";
  import axios from "axios"
  
  export const SignUpFunc = (payload) => (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    axios
      .post("https://travel-com.onrender.com/registeredUser", payload)
      .then((response) => {
        dispatch({ type: SIGNUP_SUCCESS});
        
      })
      .catch((e) => {
        dispatch({ type: SIGNUP_FAILURE });
        
      });
  };
  
  export const getdata = (dispatch) => {
    
    axios
    .get("https://travel-com.onrender.com/registeredUser").then((res)=>{
      
      dispatch({ type: SIGNIN_REQUEST, payload: res.data });
    }).catch(()=>{
      dispatch({ type: SIGNIN_FAILURE });
    })
    
    
  };

   export const loginFunction=(payload)=>(dispatch)=>{
    dispatch({type:SIGNIN_SUCCESS,payload:payload})
    console.log(payload)
   }
  

   export const  logout=(dispatch)=>{
    dispatch({type:SIGNOUT})
   }