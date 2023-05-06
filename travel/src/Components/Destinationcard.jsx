import React from 'react'
import {Box,
Image,
Flex,
Heading,
Text,Button, Grid,} from "@chakra-ui/react"

const Destinationcard = ({id,City,Country,Duration,Price,Ratings,images}) => {
    

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
                            <Grid w="96%" m="auto"   mt={{ base: "85%", md: "106%" }} borderRadius="5%" bgColor="rgba(255, 255, 255, 0.300)" textAlign="left" 
                            >
                                <Flex justifyContent={"space-between"}>
                                <Text color="white" fontWeight="bold" fontSize={{ base: "md", md: "xl" }}>{City} {Country}
                                    
                                    </Text>
                                    <Text color="white"  fontWeight="bold" fontSize="sm">{Ratings}</Text>
                                </Flex>
                                <Text ml={"0px"} color="white" fontWeight="bold" fontSize={{ base: "md", md: "xl" }}>{Duration}
                                    
                                    </Text>
                                <   Box display="flex" justifyContent="space-between">
                                    <Text fontSize={{ base: "sm", md: "xl" }} fontWeight="bold" color="black">${Price}</Text>
                                    <Button w="40%" height="25px" mr={"10px"} fontSize={{ base: "sm", md: "xl" }} background={""} color="#fff" border="1px solid #1071DB" _hover={{ bg: "blue.500" }}>Book Now</Button>
                                </Box>
                            </Grid>


                        </Box>
    
  )
}

export default Destinationcard