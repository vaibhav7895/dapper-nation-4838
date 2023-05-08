import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Edit = () => {
    const id=useSelector((store)=>{
        return store.AdminReducer.id
      })
  return (
    <Box>
         <FormControl >
         <FormLabel>ID</FormLabel>
       <Input placeholder='id' name="id"/>
     <FormLabel>City</FormLabel>
       <Input placeholder='City' name="City"/>
       <FormLabel>Country</FormLabel>
       <Input placeholder='Country' name='Country'/>
       <FormLabel>Duration</FormLabel>
       <Input placeholder='Duration'  name='Duration'/>
       <FormLabel>Price</FormLabel>
       <Input placeholder='Price'  name='Price'/>
       <FormLabel>Rating</FormLabel>
       <Input placeholder='Rating'  name="Ratings"/>
       <FormLabel>Image</FormLabel>
       <Input placeholder='images'  name="images"/>
       <Button style={{backgroundColor:"teal",marginTop:"20px"}} >POST</Button>
     </FormControl>
    </Box>
  )
}

export default Edit