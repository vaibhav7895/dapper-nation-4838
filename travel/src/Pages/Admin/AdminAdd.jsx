import { Alert, Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'
const init={
  City:"",
  Country:"",
  Duration:"",
  Price:"",
  Ratings:"",
  images:""
}
const AdminAdd = () => {
  const [add,setadd]=useState(init)
   const handlechange=(e)=>{
    const {value,name}=e.target
    setadd((prev)=>{
      return {...prev,[name]:value}
    })
   }
   const handlepost=()=>{
    const newdata=add
    axios.post(`https://travel-com.onrender.com/Destinations`,newdata).then((res)=>{
       console.log("post succesfull")
       alert("POST Successfull")
       setadd(init)
    })
   }
 
  return (
    <Box>
      <FormControl >
     
      <FormLabel>City</FormLabel>
        <Input placeholder='City' name="City" value={add.City} onChange={handlechange}/>
        <FormLabel>Country</FormLabel>
        <Input placeholder='Country' name='Country'value={add.Country} onChange={handlechange}/>
        <FormLabel>Duration</FormLabel>
        <Input placeholder='Duration'  name='Duration'value={add.Duration} onChange={handlechange}/>
        <FormLabel>Price</FormLabel>
        <Input placeholder='Price'  name='Price'value={add.Price} onChange={handlechange}/>
        <FormLabel>Rating</FormLabel>
        <Input placeholder='Rating'  name="Ratings"value={add.Ratings} onChange={handlechange}/>
        <FormLabel>Image</FormLabel>
        <Input placeholder='images'  name="images"value={add.images} onChange={handlechange}/>
        <Button style={{backgroundColor:"teal",marginTop:"20px"}} onClick={handlepost}>POST</Button>
      </FormControl>
    </Box>
  )
}

export default AdminAdd