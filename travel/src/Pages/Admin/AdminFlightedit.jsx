import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'

const AdminFlightedit = () => {
  const [editdata,seteditdata]=useState(JSON.parse(localStorage.getItem("edit")))
   const [newdata,setnewdata]=useState({
    id:editdata.id ||"",
    City:editdata.City ||"",
    Country:editdata.Country || "",
    Duration:editdata.Duration ||"",
    Price:editdata.Price || "",
    Ratings:editdata.Ratings || "",
    images:editdata.images || ""
   })
  const handlechange=(e)=>{
    const {name,value}=e.target
    setnewdata((prev)=>{
      return {...prev,[name]:value}
    })
  }
  const handlepatch=()=>{
    axios.patch(`http://localhost:8080/Destinations/${newdata.id}`,newdata).then((res)=>{
      console.log("done")
    })
  }
  console.log(newdata)
  return (
    <Box>
      <FormControl >
      <FormLabel>ID</FormLabel>
        <Input disabled={true} placeholder='ID'value={editdata.id} name='id' onChange={handlechange}/>
      <FormLabel>City</FormLabel>
        <Input placeholder='City'value={editdata.City} name="City" onChange={handlechange}/>
        <FormLabel>Country</FormLabel>
        <Input placeholder='Country'value={editdata.Country} name='Country' onChange={handlechange}/>
        <FormLabel>Duration</FormLabel>
        <Input placeholder='Duration' value={editdata.Duration} name='Duration' onChange={handlechange}/>
        <FormLabel>Price</FormLabel>
        <Input placeholder='Price' value={editdata.Price} name='Price' onChange={handlechange}/>
        <FormLabel>Rating</FormLabel>
        <Input placeholder='Rating' value={editdata.Ratings} name="Ratings" onChange={handlechange}/>
        <FormLabel>Image</FormLabel>
        <Input placeholder='images' value={editdata.images} name="images" onChange={handlechange}/>
        <Button onClick={handlepatch}>PATCH</Button>
      </FormControl>
    </Box>
  )
}

export default AdminFlightedit