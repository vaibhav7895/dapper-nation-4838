import React from 'react'
import {Box, SimpleGrid,Image,Text,Container, Heading} from "@chakra-ui/react"
function Footer() {
  return (
    <>
     <Container maxW={"100%"}  >
        
        {/* <Image w="100%"  height={{base:"300px", md:"450px"}}  src="https://i.ytimg.com/vi/82K3--P3Lng/maxresdefault.jpg"></Image> */}
        {/* <Text fontSize="4xl" w={{base:"50%",md:"100%"}} h={{base:"350px",md:"450px"}} backgroundImage={"https://i.ytimg.com/vi/82K3--P3Lng/maxresdefault.jpg"} fontWeight="bold">Subscribe To Our Newsletter</Text>     */}

    </Container> 



        <Container maxW={"98%"}   bg="#ECEFF1" m="auto" >
            <Container maxW={"container.l"}>
             <SimpleGrid mt="2%" columns={{base:2, md:4}} spacing={10} >
                    <Box  w="100%" ml={{base:"0%",md:"10%"}}>
                        <Box mt={{base:"0%",md:"13%"}} display="flex">
                        <Image mt={{base:"0%",md:"-10%"}} borderRadius={"50%"} w="25%" src="data:image/jpeg;base64,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" alt="Logo.png"/>
                        <Text  fontSize={{base:"md", md:"2xl"}} mt={{base:"0%",md:"-4%"}}  fontWeight={"bolder"}>Outdoor Life</Text>
                        </Box>
                        
                        
                        <Text fontFamily="poppins"  textAlign={{base:"center",md:"left"}} fontSize={{base:"sm", md:"xs"}}  fontWeight={"bolder"} color="grey">  UP TO 60% OFF: Savings based on MSRP.
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
                    <Box w="50%"  ml={{base:"15%",md:"35%"}} textAlign={{base:"center",md:"left"}}>
                        <Text fontSize={{base:"md", md:"2xl"}}  fontWeight={"bolder"} mt={{base:"0%",md:"15%"}}>Company</Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt="5%">
                            Home
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                            Destination
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                            Booking
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                            Review
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                            Contact Us
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                        veniam
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                        ipsum 
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                        Lorem 
                        </Text>
                        
                    </Box>
                    <Box w="50%" ml="15%"  textAlign={{base:"center",md:"left"}} >



                        <Text fontSize={{base:"md", md:"2xl"}}  fontWeight={"bolder"}  mt={{base:"0%",md:"17%"}}>More</Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                            Packages
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                            Blogs
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                            Support
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                            Our  Partners
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                        commodo 
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                        ullamco
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                        adipiscing 
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                        nostrud
                        </Text>
                    </Box>
                    <Box  w="80%" textAlign={{base:"center",md:"left"}}>
                        <Text m="auto" fontSize={{base:"md", md:"2xl"}}  fontWeight={"bolder"}  mt={{base:"0%",md:"10%"}}>Contact Us</Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                            Email📧:- Track@Travels.com
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                            Location🔍:- Fentch View Local of road.
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
                            Contact📞:- +100 200 300 400
                        </Text>
                        <Text color="grey" fontSize={{base:"sm", md:"xs"}} fontWeight={"bold"} mt={{base:"0%",md:"5%"}}>
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
             
             </Container> 

        </Container>
       
      
    {/* </Box> */}
    {/*  */}
    </>
  )
}

export default Footer
