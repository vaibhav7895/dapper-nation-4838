import React from 'react'
import {Box, SimpleGrid,Image,Text} from "@chakra-ui/react"
function Footer() {
  return (
    <>
    <Box  w="99%"  m="auto" bg="#ffff">
        <Box w="80%"  bg="#ECEFF1" m="auto" >
             <SimpleGrid mt="2%" columns={{base:2, md:4}} spacing={10} >
                    <Box  w="100%" ml="10%">
                        <Box mt="13%" display="flex">
                        <Image mt="-4%" borderRadius={"50%"} w="25%" src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?w=2000" alt="Logo.png"/>
                        <Text  fontSize={{base:"md", md:"2xl"}}  fontWeight={"bolder"}>Outdoor Life</Text>
                        </Box>
                        
                        
                        <Text textAlign={{base:"center",md:"left"}} fontSize={{base:"sm", md:"xs"}}  fontWeight={"bolder"} color="grey">  UP TO 60% OFF: Savings based on MSRP.
                            Excludes Select New Arrivals, LITTLE PLANET® 
                            Sneak Peek, Treasure Box Licensed Styles, SKIP HOP®,Doorbusters
                            and Clearance.
                            Suggested Retail Price at which
                            we suggest our collections. We list an 
                            MSRP on our products.
                        </Text>
                        <Box w="50%" >
                <Image src="https://cdn.pixabay.com/photo/2020/06/30/14/37/facebook-5356593_1280.png"/>
            </Box>
                    </Box>
                    <Box w="50%"  ml="35%" textAlign={{base:"center",md:"left"}}>
                        <Text fontSize={{base:"md", md:"2xl"}}  fontWeight={"bolder"} mt="15%">Company</Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Home
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Destination
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Booking
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Review
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Contact Us
                        </Text>
                        
                    </Box>
                    <Box w="50%" ml="15%"  textAlign={{base:"center",md:"left"}} >



                        <Text fontSize={{base:"md", md:"2xl"}}  fontWeight={"bolder"}  mt="20%">More</Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Packages
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Blogs
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Support
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Our  Partners
                        </Text>
                    </Box>
                    <Box  w="80%" textAlign={{base:"center",md:"left"}}>
                        <Text m="auto" fontSize={{base:"md", md:"2xl"}}  fontWeight={"bolder"}  mt="10%">Contact Us</Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Email📧:- Track@Travels.com
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Location🔍:- Fentch View Local of road.
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Contact📞:- +100 200 300 400
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                        © 2023 Carter’s, Inc. All rights reserved.
                        </Text>
                        <Box mt="5%" w="100%">
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4epUzmqXCfdMAEKWEPvMjTFbAkyf8uECVUrO4qs4pBg&usqp=CAU&ec=48600113"/>
                        </Box>
                    </Box>
             </SimpleGrid>
             <Box color="#78909C" ></Box>
             <Box display="flex" justifyContent={"space-between"}>
             <Text color="grey" fontWeight={"bold"} fontSize={"xs"}>© 2023 Carter’s, Inc. All rights reserved.</Text>
             <Text color="grey" fontWeight={"bold"} fontSize={"xs"}>Google Ad Price Policy  Terms and Conditions  Privacy Statements</Text>
             </Box>
             
             

        </Box>
       
      
    </Box>
    {/*  */}
    </>
  )
}

export default Footer
