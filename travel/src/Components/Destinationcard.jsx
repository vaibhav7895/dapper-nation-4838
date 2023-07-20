import React, { useEffect } from 'react'
import {Box,
Image,
Flex,
Heading,
Text,Button, Grid, useToast,} from "@chakra-ui/react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Destinationcard = ({id,City,Country,Duration,Price,Ratings,images}) => {
    let auth = useSelector((store) => store.AuthReducer.isAuth);
    
    const navigate=useNavigate()
    const toast = useToast();
  let el = {
    id,
    City,
    Country,
    Duration,
    Price,
    Ratings,
    images,
    
  };
  let handleClick = (id) => {
    axios
      .post(`https://travel-com.onrender.com/Cart`, el)
      .then((res) => {
        toast({
          title: "Added to cart",
          description: "You can checkout from Cart",
          status: "success",
          position: "top",
          duration: 1000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
      navigate("/booking")
  };
  return (
    <Box
                            backgroundImage={images}
                            backgroundPosition="center"
                            backgroundSize="cover"
                            marginTop={"auto"}
                            height={{ base: "250px", md: "400px" }}
                            m="1%"
                            borderRadius={"5%"}
                            // justifyContent="center"
                            // alignItems="center"
                        >
                            <Grid w="96%" m="auto"   mt={{ base: "60%", md: "106%" }} borderRadius="5%" bgColor="rgba(255, 255, 255, 0.300)" textAlign="left" 
                            >
                                <Flex justifyContent={"space-between"}>
                                <Text color="white" fontWeight="bold" fontSize={{ base: "md", md: "xl" }}>{City} {Country}
                                    
                                    </Text>
                                    <Text color="white"  fontWeight="bold" fontSize="sm">{Ratings}
                                    </Text>

                                </Flex>
                                <Text ml={"0px"} color="white" fontWeight="bold" fontSize={{ base: "md", md: "xl" }}>{Duration}
                                    
                                    </Text>
                                <   Box display="flex" justifyContent="space-between">
                                    <Text fontSize={{ base: "sm", md: "xl" }} fontWeight="bold" color="black">${Price}</Text>
                                    {auth ?<Button onClick={handleClick} w="40%" height="25px" mr={"10px"} fontSize={{ base: "sm", md: "xl" }} background={""} color="#fff" border="1px solid #1071DB" _hover={{ bg: "blue.500" }}>Book Now</Button>:
                                    
                                    <Link to="/login" >
                                    <Button w="70%" height="25px" mr={"10px"} fontSize={{ base: "sm", md: "xl" }} background={""} color="#fff" border="1px solid #1071DB" _hover={{ bg: "blue.500" }}>Book Now</Button> </Link>}
                                </Box>
                            </Grid>


                        </Box>
    
  )
}

export default Destinationcard