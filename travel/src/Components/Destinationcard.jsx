import React from 'react'
import {Box,
Image,
Flex,
Heading,
Text,Button,} from "@chakra-ui/react"

const Destinationcard = ({id,City,Country,Duration,Price,Ratings,images}) => {
  return (
    <Box>
      <Image src={images} width={"300px"} borderRadius={"10px"}/>
      <Box>
        <Text>{Country}{City}</Text>
        <Text>{Duration}</Text>
        <Text>{Price}</Text>
        <Text>{Ratings}</Text>
      </Box>
      
    </Box>
    
  )
}

export default Destinationcard