import React from 'react'
import {Box,Image,Square,SimpleGrid,Center,GridItem,Grid,Text,Container,Flex,Heading,Button} from "@chakra-ui/react";
function HomePage() {
  return (
    <>
      <Container   maxW={"98%"} >

        <Text  fontSize={{base:"3xl",md:"5xl"}} fontWeight="bold">
        Popular <Text as="span" color="#1071DB">Destination</Text>
        </Text>
        <Box>
        <Text fontSize={{base:"sm",md:"md"}} color="grey" fontWeight={{base:"bolder", md:"bold"}} >Explore travels and discover the most popular destinations around the world.</Text>
        
        </Box>
        <Box w={{base:"100%",md:"80%"}} h="100%" pt="3%" m="auto">
            <Box display="flex"   w="100%">
                <Box position="relative" m="auto" w={{base:"50%",md:"50%"}}>
                    <Image borderRadius={{base:"8%",md:"5%"}} h={{base:"200px",md:"500px"}} src="https://images.unsplash.com/photo-1679401938866-ac2fc3f9f468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHRvdXJpc3QlMjBwbGFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="img"/>
                    <Text position="absolute" top="90%" left={{base:"20%",md:"15%"}} transform="translate(-50%, -50%)" color="white"  fontWeight="bold" textDecoration="underline" fontSize={{base:"2xl", md:"3xl"}}> Ukiyo
                    </Text></Box>
                    
                <Box position="relative" m="auto"  w={{base:"23%",md:"23%"}}>
                    <Image borderRadius={{base:"8%",md:"5%"}} h={{base:"200px",md:"500px"}} src="https://media.istockphoto.com/id/1471503216/photo/mardin-dara-ancient-city-mesopotamia-mardin-turkey-dara-ancient-city-one-of-the-most.jpg?b=1&s=170667a&w=0&k=20&c=F8deNgdF0onytMueyDB6Q88ObYaxQZtksr34qTq22-E=" alt=""/>
                    <Text position="absolute" top="90%" left={{base:"30%",md:"20%"}} transform="translate(-50%, -50%)" color="white"  fontWeight="bold" textDecoration="underline" fontSize={{base:"2xl", md:"3xl"}}> Thar
                    </Text></Box>
                <Box position="relative" m="auto" w={{base:"23%",md:"23%"}}>
                    <Image borderRadius={{base:"8%",md:"5%"}} h={{base:"200px",md:"500px"}} src="https://media.istockphoto.com/id/1383383546/photo/arc-de-triomphe-illuminated-by-the-morning-light.jpg?b=1&s=170667a&w=0&k=20&c=QdVMpa-SFLYExFTlbJnHw2ACeeXfYMYJE6duOXeUO_8=" alt=""/>
                    <Text position="absolute" top="90%" left={{base:"30%",md:"20%"}} transform="translate(-50%, -50%)" color="white"  fontWeight="bold" textDecoration="underline" fontSize={{base:"2xl", md:"3xl"}}> Spain
                    </Text></Box>
            </Box>
            

            
             <Box display="flex" mt="2%"   w="100%">
                <Box position="relative" m="auto"  w={{base:"23%",md:"24%"}}>
                    <Image borderRadius={{base:"8%",md:"5%"}} h={{base:"200px",md:"500px"}} src="https://media.istockphoto.com/id/1364745633/photo/rear-view-of-a-woman-with-a-hat-while-shes-admiring-an-ancient-temple-in-sicily.jpg?b=1&s=170667a&w=0&k=20&c=P3K0L6x7siEDuHS7LbI92g2yodCENvrTd3hSkeiMmZg=" alt=""/>
                    <Text position="absolute" top="90%" left={{base:"30%",md:"20%"}} transform="translate(-50%, -50%)" color="white"  fontWeight="bold" textDecoration="underline" fontSize={{base:"2xl", md:"3xl"}}> USA
                    </Text></Box>
                <Box position="relative" m="auto" w={{base:"23%",md:"24%"}}>
                    <Image borderRadius={{base:"8%",md:"5%"}} h={{base:"200px",md:"500px"}} src="https://media.istockphoto.com/id/1324189687/photo/arc-de-triomphe-from-the-sky-paris.jpg?b=1&s=170667a&w=0&k=20&c=njR3Id6dAMM5XtTUdxTov4yWfTAjVn6w10YucDfeUJY=" alt=""/>
                    <Text position="absolute" top="90%" left={{base:"30%",md:"20%"}} transform="translate(-50%, -50%)" color="white" fontWeight="bold" textDecoration="underline" fontSize={{base:"2xl", md:"3xl"}}> UAE
                    </Text></Box>
                <Box position="relative" m="auto" w={{base:"46%",md:"47.5%"}}>
                    <Image borderRadius={{base:"8%",md:"5%"}} h={{base:"200px",md:"500px"}} src="https://media.istockphoto.com/id/547499548/photo/big-ben-and-westminster-bridge-at-sunset.jpg?b=1&s=170667a&w=0&k=20&c=cTM51AKuVmpYZLY7AuF3Z7Ore86Cj3ODkSh0p58u7Cs=" alt="img"/>
                    <Text position="absolute" top="90%" left={{base:"30%",md:"20%"}} transform="translate(-50%, -50%)" color="white" textDecoration="underline" fontWeight="bold" fontSize={{base:"2xl", md:"3xl"}}> Turkey
                    </Text></Box>
            </Box>
        </Box>

{/* -----------------------------------------------------------------------------OUR TRIP PART STARTS HERE --------------------------------------------------------------------------------------------------- */}

        <Text pt="2%" fontSize={{base:"3xl",md:"5xl"}} fontWeight="bold">
        Our <Text as="span" color="#1071DB">Trip Packages</Text>
        </Text>
        <Box>
        <Text fontSize={{base:"sm",md:"md"}} color="grey" fontWeight={{base:"bolder", md:"bold"}} >Escape the ordinary and embark on an unforgettable adventure with us.</Text>
        
        </Box>
        
        <Box pt="2%" w={{base:"100%",md:"82%"}} m="auto" >
            <SimpleGrid columns={{base:2, md:4}}>
            
                <Box
                    backgroundImage="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fE5pZ2h0JTIwbmVvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    height={{base:"250px",md:"400px"}}
                    m="1%"
                    borderRadius={"5%"}
                    justifyContent="center"
                    alignItems="center"
                >
                <Box w="96%" m="auto" mt={{base:"85%",md:"120%"}} borderRadius="5%" bgColor="rgba(255, 255, 255, 0.300)" textAlign="left" >
                    <Text color="white" fontWeight="bold" fontSize={{base:"md",md:"xl"}}>
                    Light you Journey
                    </Text>
                    <Text color="white" fontWeight="bold" fontSize="sm">Ratings-⭐⭐⭐⭐</Text>
                    <Box display="flex" justifyContent="space-between">
                        <Text fontSize={{base:"sm",md:"xl"}} fontWeight="bold" color="black">Price:-$605.00</Text>
                        <Button w="30%" height="25px" fontSize={{base:"sm",md:"xl"}} background={""} color="#fff" border="1px solid #1071DB" _hover={{ bg: "blue.500" }}>Explore</Button>
                    </Box>
                </Box>
                
                
                </Box>


                <Box 
                     backgroundImage="https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRvdXJpc3QlMjBCdWlsZGluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                     backgroundPosition="center"
                     backgroundSize="cover"
                     height={{base:"250px",md:"400px"}}
                     m="1%"
                     borderRadius={"5%"}
                     justifyContent="center"
                     alignItems="center"
                >
                <Box w="96%" m="auto" mt={{base:"85%",md:"120%"}} borderRadius="5%" bgColor="rgba(255, 255, 255, 0.300)" textAlign="left" >
                    <Text color="white" fontWeight="bold" fontSize={{base:"md",md:"xl"}}>
                    Try Tredetional
                    </Text>
                    <Text color="white" fontWeight="bold" fontSize="sm">Ratings-⭐⭐⭐</Text>
                    <Box display="flex" justifyContent="space-between">
                        <Text fontSize={{base:"sm",md:"xl"}} fontWeight="bold" color="black">Price:-$200.01</Text>
                        <Button w="30%" height="25px" fontSize={{base:"sm",md:"xl"}} background={""} color="#fff" border="1px solid #1071DB" _hover={{ bg: "blue.500" }}>Explore</Button>
                    </Box>
                </Box>

                </Box>
                <Box 
                     backgroundImage="https://images.unsplash.com/photo-1536521249703-db8e8cadcc8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHRvdXJpc3QlMjBCdWlsZGluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                     backgroundPosition="center"
                     backgroundSize="cover"
                     height={{base:"250px",md:"400px"}}
                     m="1%"
                     borderRadius={"5%"}
                     justifyContent="center"
                     alignItems="center"
                >
                <Box w="96%" m="auto" mt={{base:"85%",md:"120%"}} borderRadius="5%" bgColor="rgba(255, 255, 255, 0.300)" textAlign="left" >
                    <Text color="white" fontWeight="bold" fontSize={{base:"md",md:"xl"}}>
                    Travels Special
                    </Text>
                    <Text color="white" fontWeight="bold" fontSize="sm">Ratings-⭐⭐⭐⭐⭐</Text>
                    <Box display="flex" justifyContent="space-between">
                        <Text fontSize={{base:"sm",md:"xl"}} fontWeight="bold" color="black">Price:-$749.00</Text>
                        <Button w="30%" fontSize={{base:"sm",md:"xl"}} height="25px" background={""} color="#fff" border="1px solid #1071DB" _hover={{ bg: "blue.500" }}>Explore</Button>
                    </Box>
                </Box>

                </Box>
                <Box 
                     backgroundImage="https://media.istockphoto.com/id/1457561994/photo/unrecognisable-people-looking-the-fountain-performance.jpg?b=1&s=170667a&w=0&k=20&c=-No5kvKAwWpV_0usk2Nn_0CdS6MdrbojwKb9MUnOXyE="
                     backgroundPosition="center"
                     backgroundSize="cover"
                     height={{base:"250px",md:"400px"}}
                     m="1%"
                     borderRadius={"5%"}
                     justifyContent="center"
                     alignItems="center"
                >
                <Box w="96%" m="auto" mt={{base:"85%",md:"120%"}} borderRadius="5%" bgColor="rgba(255, 255, 255, 0.300)" textAlign="left" >
                    <Text color="white" fontWeight="bold" fontSize={{base:"md",md:"xl"}}>
                    City of peace
                    </Text>
                    <Text color="white" fontWeight="bold" fontSize="sm">Ratings-⭐⭐⭐⭐</Text>
                    <Box display="flex" justifyContent="space-between">
                        <Text fontSize={{base:"sm",md:"xl"}} fontWeight="bold" color="black">Price:-$999.00</Text>
                        <Button w="30%" fontSize={{base:"sm",md:"xl"}} height="25px" background={""} color="#fff" border="1px solid #1071DB" _hover={{ bg: "blue.500" }}>Explore</Button>
                    </Box>
                </Box>

                </Box>
            </SimpleGrid>
        </Box>


      </Container>


    <Container maxW="100%" mt="4%" >
        <Box
            backgroundImage="https://media.istockphoto.com/id/1254871777/photo/modern-minimalist-family-villa.jpg?b=1&s=170667a&w=0&k=20&c=IxPTdXDjk8jRTV44--CB_0J5CH3e0ZVN84CdM8BvGD0="
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            height={{base:"250px",md:"400px"}}
        >
        <Box w='80%' p="5.5%" >
            <Text fontSize={{base:"sm",md:"2xl"}} textAlign="left" color="white">Southern Sea</Text>
            <Text textAlign="left" fontSize={{base:"3xl",md:"5xl"}} color="white">3 Night Oasis Hotel</Text>
            <Text textAlign="left" fontSize={{base:"sm",md:"2xl"}} color="white">Welcome to Travels, the ultimate destination for travelers seeking adventure and exploration!</Text>
            <Box pt={{base:"7%",md:"5%"}}>
                <Button textAlign="left" display="block" bg="blue.500" color="white"  fontSize={{base:"sm",md:"xl"}} height="25px">View this Offer</Button>
                <Text textAlign="right" fontSize={{base:"sm",md:"2xl"}} color="white" >Starting from $1020</Text>
            </Box>
            </Box>
        </Box>
    </Container>

{/* WHY CHOOSE US PART STARTING FROM HERE_______________________-----------------------------------------_________________________________________---------------------------------------------____________________________________________________------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>WHY CHOOSE US PART STARTING FROM HERE */}


    <Container maxW="80%" pt="5%" >
        <SimpleGrid columns={{base:1, md:2}} >

            <Box  m={{base:"auto",md:"auto"}} w="80%" height={{base:"250px" ,md:"500px"}}>
                <Image w="100%" height={{base:"250px" ,md:"400px"}} src="https://media.istockphoto.com/id/618431030/photo/3d-business-travel-concept.jpg?s=612x612&w=0&k=20&c=koBQ9JHIW1okP15gzsM8hk8bQXVtxKiJcT9Cwd9hFvg="/>

            </Box>

            <Box w="100%" height="">
                <Text  fontSize={{base:"3xl",md:"5xl"}} fontWeight="bold">
                    Why Choose<Text as="span" color="#1071DB">Us?</Text>
                </Text>
                <Box display="flex" w="90%"  m='auto' justifyContent={"space-between"}  height="50px">
                    <Box w="30%" bgColor="#BCDCFF" borderRadius={"5%"}>
                        <Text fontWeight={"bold"} fontSize={{base:"md",md:"xl"}}>😊 3300+</Text>
                        <Text fontWeight={"bold"} color="grey" fontSize={{base:"sm",md:"sm"}}>Customers</Text>
                    </Box>
                    <Box w="30%" bgColor="#BCDCFF" borderRadius={"5%"}>
                        <Text fontWeight={"bold"} fontSize={{base:"md",md:"xl"}}>🏁 70+</Text>
                        <Text fontWeight={"bold"} color="grey" fontSize={{base:"sm",md:"sm"}}>Destination</Text>
                    </Box>
                    <Box w="30%" bgColor="#BCDCFF" borderRadius={"5%"}>
                        <Text fontWeight={"bold"}  fontSize={{base:"md",md:"xl"}}>⭐ 4.7</Text>
                        <Text fontWeight={"bold"} color="grey" fontSize={{base:"sm",md:"sm"}}>338k reviews</Text>
                    </Box>
                </Box>

                <Box mt="5%" w="100%"  height="350px">
                    
                    <Box display='flex' m="auto"  >
                        <Box w="15%" m="auto" h="110px" >
                            <Image borderRadius={"50%"}  h={{base:"60px",md:"80px"}} src="https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNhcnR0b24lMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                            
                        </Box>
                        <Box w="80%">
                            <Text textAlign={"left"} fontWeight={"bold"} fontSize={{base:"xl",md:"2xl"}}>Hotel Booking</Text>
                            <Text color="grey" fontSize={{base:"xs"}} fontWeight={"bold"} textAlign={"left"} >Welcome to Travels, your home away from home! We're committed to providing you with the best possible experience during your stay,whether you're traveling for business or pleasure. </Text>
                            <Text>
                                
                            </Text>
                        </Box>
                    </Box>

                   

                    <Box display='flex' m="auto"  h="">
                        <Box w="15%" m="auto" h="110px" >
                            <Image borderRadius={"50%"}  h={{base:"60px",md:"80px"}} src="https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8VmVoaWNsZSUyMHNlcnZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                            
                        </Box>
                        <Box  w="80%">
                            <Text textAlign={"left"} fontWeight={"bold"} fontSize={{base:"xl",md:"2xl"}}>Vehicle Services</Text>
                            <Text color="grey" fontSize={{base:"xs"}} fontWeight={"bold"} textAlign={"left"} >

                                Welcome to Travels, your premier destination for top-quality vehicles services!

                                At Travels, we're committed to providing our customers with the best possible experience.</Text>
                        </Box>
                    </Box>




                    <Box display='flex' m="auto" h="">
                        <Box w="15%" m="auto" h="110px" >
                            <Image borderRadius={"50%"}  h={{base:"60px",md:"80px"}} src="https://media.istockphoto.com/id/1252748149/photo/cartoon-airplane.jpg?s=612x612&w=0&k=20&c=knbEDdr79P5gHsHo1QCokjfrvIuUhuKVPR1PaLN-Iwo="/>
                            
                        </Box>
                        <Box  w="80%">
                            <Text textAlign={"left"} fontWeight={"bold"} fontSize={{base:"xl",md:"2xl"}}>Flights Booking</Text>
                            <Text color="grey" fontSize={{base:"xs"}} fontWeight={"bold"} textAlign={"left"} >Welcome to Travels, your one-stop shop for booking flights to destinations all around the world!

                                Our easy-to-use booking system makes it simple to find the perfect flight for your travel needs.  </Text>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </SimpleGrid>
    </Container>


    {/* Download our <Mobile App Section Sharts HERE--------------------------------------------------------------Download our <Mobile App Section Sharts HERE--------------------------------------------------------------Download our <Mobile App Section Sharts HERE--------------------------------------------------------------Download our <Mobile App Section Sharts HERE-------------------------------------------------------------- */}

        <Container mt={{base:"15%",md:"5%"}} maxW={{base:"90%",md:"80%"}}>
            <Box display="flex" borderRadius={"2%"} backgroundColor="#1071DB"  h={{base:"400px",md:"600px"}}>
                
                    <Box w="35%" m={{base:"auto"}}  >

                        <Image borderRadius={"2%"} height={{base:"250px",md:"600px"}}  src="https://images.unsplash.com/photo-1611791484670-ce19b801d192?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxQaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                    </Box>
                
                   
                        <Box w="65%">
                            <Text color="#fff" fontWeight={"bold"} fontSize={{base:"5xl" ,md:"6xl"}}>
                                Download
                            </Text>
                            <Text color="#fff" fontWeight={"bold"} fontSize={{base:"xl" ,md:"2xl"}}>
                               Our Mobile App
                            </Text>
                            <Text color="#fff"   fontSize={{base:"xs" ,md:"sm"}}>
                            We offer a wide selection of apps to choose from, including popular social media apps, entertainment apps,  reliable, and easy to use.
                            </Text>

                            <Box w="100%" mt="2%" >
                                <Image w="40%" m="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEdHqL1QVzS2zDc5lSt3JT9Tj2ZEuA9N8MCLJ1A7xTg&usqp=CAU&ec=48600113"/>
                            </Box>
                            <Box mt="4%">
                                <Image m="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nevWmK-q0BBvAFyIiOYSvAyGLZqRDHwJX7mAOrdRXg&usqp=CAU&ec=48600113"/>
                            </Box>
                        </Box>
            </Box>

        </Container>



        {/* BLOG PART STARTING FROM HERE-------------------------------------------------------------------------------------- BLOG PART STARTING FROM HERE-------------------------------------------------------------------------------------- BLOG PART STARTING FROM HERE-------------------------------------------------------------------------------------- BLOG PART STARTING FROM HERE-------------------------------------------------------------------------------------- BLOG PART STARTING FROM HERE-------------------------------------------------------------------------------------- */}
        
        

        
        <Box w="90%" m="auto" display="flex" justifyContent="space-between">
            <Text fontWeight="bold" fontSize={{base:"4xl",md:"5xl"}}>Blogs</Text>
            <Text mt="2%" color="#1071DB" fontWeight="bold" fontSize={{base:"sm",md:"xl"}}>View All --</Text>
        </Box>
        <Container maxW="85%">
        <Box pt="2%" w={{base:"100%",md:"85%"}} m="auto" >
            <SimpleGrid columns={{base:2, md:4}}>
            
                <Box
                    backgroundImage="https://images.unsplash.com/photo-1682685796467-89a6f149f07a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    height={{base:"250px",md:"400px"}}
                    m="1%"
                    borderRadius={"5%"}
                    justifyContent="center"
                    alignItems="center"
                >
                <Box w="96%" m="auto" mt={{base:"85%",md:"120%"}} borderRadius="5%" bgColor="rgba(255, 255, 255, 0.300)" textAlign="left" >
                    <Text color="white" fontWeight="bold" fontSize={{base:"md",md:"xl"}}>
                    Northen Light
                    </Text>
                    <Text color="white" fontWeight="bold" fontSize="xs">The layout of the travel blog merely serves to emphasize the atmospheric   <Text fontSize={{base:"xs",md:"xs"}} fontWeight="bold" color="#0C264C">Read More...</Text></Text>
                   
                        <Text fontSize="xs" color="white">Like🤍            Comments💭</Text>
                       
                  
                </Box>
                
                
                </Box>


                <Box 
                     backgroundImage="https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRvdXJpc3QlMjBCdWlsZGluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                     backgroundPosition="center"
                     backgroundSize="cover"
                     height={{base:"250px",md:"400px"}}
                     m="1%"
                     borderRadius={"5%"}
                     justifyContent="center"
                     alignItems="center"
                >
                <Box w="96%" m="auto" mt={{base:"85%",md:"120%"}} borderRadius="5%" bgColor="rgba(255, 255, 255, 0.300)" textAlign="left" >
                    <Text color="white" fontWeight="bold" fontSize={{base:"md",md:"xl"}}>
                    Brander Gate
                    </Text>
                    <Text color="white" fontWeight="bold" fontSize="xs">This is all good for beginners but grow, most bloggers forgot design<Text fontSize={{base:"xs",md:"xs"}} fontWeight="bold" color="#0C264C">Read More...</Text></Text>
                   
                    <Text fontSize="xs" color="white">Like❤            Comments💭</Text>
                        
                   
                </Box>

                </Box>
                <Box 
                     backgroundImage="https://images.unsplash.com/photo-1676970685903-94e3a62a181d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fFRvdXJpc3QlMjBwbGFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                     backgroundPosition="center"
                     backgroundSize="cover"
                     height={{base:"250px",md:"400px"}}
                     m="1%"
                     borderRadius={"5%"}
                     justifyContent="center"
                     alignItems="center"
                >
                <Box w="96%" m="auto" mt={{base:"85%",md:"120%"}} borderRadius="5%" bgColor="rgba(255, 255, 255, 0.300)" textAlign="left" >
                    <Text color="white" fontWeight="bold" fontSize={{base:"md",md:"xl"}}>
                    Aus Beauty
                    </Text>
                    <Text color="white" fontWeight="bold" fontSize="xs">Travel blogs nowadays starting look all generic off<Text fontSize={{base:"xs",md:"xs"}} fontWeight="bold" color="#0C264C">Read More...</Text></Text>
                    
                    <Text fontSize="xs" color="white">Like🤍           Comments💭</Text>
                        
                   
                </Box>

                </Box>
                <Box 
                     backgroundImage="https://images.unsplash.com/photo-1649617395675-0a167b27223d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fFRvdXJpc3QlMjBwbGFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                     backgroundPosition="center"
                     backgroundSize="cover"
                     height={{base:"250px",md:"400px"}}
                     m="1%"
                     borderRadius={"5%"}
                     justifyContent="center"
                     alignItems="center"
                >
                <Box w="96%" m="auto" mt={{base:"85%",md:"120%"}} borderRadius="5%" bgColor="rgba(255, 255, 255, 0.300)" textAlign="left" >
                    <Text color="white" fontWeight="bold" fontSize={{base:"md",md:"xl"}}>
                    Surai Channel
                    </Text>
                    <Text color="white" fontWeight="bold" fontSize="xs">Did you know that you can startblog for as low as 3 USD per month? <Text fontSize={{base:"xs",md:"xs"}} fontWeight="bold" color="#0C264C">Read More...</Text></Text>
                  
                    <Text fontSize="xs" color="white">Like❤            Comments💭</Text>
                        
                    
                </Box>

                </Box>
            </SimpleGrid>
        </Box>


        </Container>

{/* Follow US On INstagram PArt Starts Here------------------------------------------------------------------------------- Follow US On INstagram PArt Starts Here------------------------------------------------------------------------------- Follow US On INstagram PArt Starts Here------------------------------------------------------------------------------- Follow US On INstagram PArt Starts Here------------------------------------------------------------------------------- Follow US On INstagram PArt Starts Here------------------------------------------------------------------------------- */}



        <Container mt="8%" maxW={{base:"90%",md:"85%"}} >
                <Text textAlign={"left"} fontSize={{base:"3xl",md:"5xl"}} fontWeight="bold">
                    Follow Us <Text as="span" color="#1071DB">On Instagram</Text>
                </Text>
                <Box display="flex" justifyContent={"space-between"}>
                <Text textAlign={"left"} color="grey" fontSize={{base:"xs",md:"sm"}}>
                    Our official Instagram account is the perfect place to catch a glimpse behind-the-scenes.
                </Text>
                <Text color="#1071DB" fontWeight="bold"  fontSize={{base:"sm",md:"sm"}}>View All--</Text>
                </Box>
                <SimpleGrid mt="3%" columns={{base:2, md:4}}>
                    
                        <Box m="2%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}} >
                            <Image borderRadius="5%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}} src="https://plus.unsplash.com/premium_photo-1663011082727-15235d691976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        </Box>
                        <Box m="2%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}}>
                            <Image borderRadius="5%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}} src="https://images.unsplash.com/photo-1520483601560-389dff434fdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYWNoJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                        </Box>
                        <Box m="2%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}}>
                            <Image borderRadius="5%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}} src="https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        </Box>
                        <Box m="2%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}}>
                            <Image borderRadius="5%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}}src="https://images.unsplash.com/photo-1584704876450-0eb3fd5a2f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                        </Box>


                        <Box m="2%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}}>
                            <Image borderRadius="5%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}} src="https://images.unsplash.com/photo-1618338279109-d470da3999ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcG9zdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                        </Box>
                        <Box m="2%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}}>
                            <Image borderRadius="5%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}} src="https://media.istockphoto.com/id/1288271580/photo/social-media-and-digital-online-concept-woman-using-smartphone.jpg?b=1&s=170667a&w=0&k=20&c=iknpSLP2cHCMTvk_y77JBSunErsEzD-ZMUMKHwkFBNY="/>
                        </Box>
                        <Box m="2%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}}>
                            <Image borderRadius="5%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}} src="https://images.unsplash.com/photo-1608725131946-c73a151f2f8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3RhZ3JhbSUyMHBvc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        </Box>
                        <Box m="2%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}}>
                            <Image borderRadius="5%" w={{base:"160px" ,md:"270px"}} height={{base:"240px" ,md:"400px"}} src="https://images.unsplash.com/photo-1584900524480-87624a1ba59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYWNoJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                        </Box>
                   
                </SimpleGrid>
        </Container>











    </>
  )
}

export default HomePage


