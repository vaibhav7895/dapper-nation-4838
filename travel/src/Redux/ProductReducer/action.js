import { PRODUCT_REQUEST_FAILURE, PRODUCT_REQUEST_PENDING, PRODUCT_REQUEST_SUCCESS } from "./actionTypes"
import axios from "axios"

export const getProducts=(paramObj)=>(dispatch)=>{
 dispatch({type:PRODUCT_REQUEST_PENDING})
 axios.get(`http://localhost:8080/Destinations?_limit=8`,paramObj).then((res)=>{
    let obj={
        data:res.data,
        total:res.headers.get("X-Total-Count")
    }
    dispatch({type:PRODUCT_REQUEST_SUCCESS,payload:obj})
    }).catch(()=>{
        dispatch({type:PRODUCT_REQUEST_FAILURE})
    })
}