import { PRODUCT_REQUEST_FAILURE, PRODUCT_REQUEST_PENDING, PRODUCT_REQUEST_SUCCESS, REQUEST_FAILURE, REQUEST_PENDING, REVIEWS_REQUEST_SUCCESS } from "./actionTypes"
import axios from "axios"

export const getProducts=(paramObj)=>(dispatch)=>{
 dispatch({type:REQUEST_PENDING})
 axios.get(`https://travel-com.onrender.com/Destinations?_limit=8`,paramObj).then((res)=>{
    let obj={
        data:res.data,
        total:res.headers.get("X-Total-Count")
    }
    dispatch({type:PRODUCT_REQUEST_SUCCESS,payload:obj})
    }).catch(()=>{
        dispatch({type:REQUEST_FAILURE})
    })
}

export const getReviews=(paramObj)=>(dispatch)=>{
    dispatch({type:REQUEST_PENDING})
    axios.get(`https://travel-com.onrender.com/reviews?_limit=8`,paramObj).then((res)=>{
       let obj={
           data:res.data,
           total:res.headers.get("X-Total-Count")
       }
       dispatch({type:REVIEWS_REQUEST_SUCCESS,payload:obj})
       }).catch(()=>{
           dispatch({type:REQUEST_FAILURE})
       })
   }