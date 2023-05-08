import React, { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Grid,
  useToast,
  Flex,
  Select,
  Spinner,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/ProductReducer/action';
import Destinationcard from '../Components/Destinationcard';
import { useLocation, useSearchParams } from 'react-router-dom';
import Pagination from '../Filter/Pagination';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { useRef } from 'react';
import { Download } from '../Components/Download';
const Destination = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const [order,setOrder]=useState("")
  

  const { destinations, isLoading, isError, total } = useSelector((store) => {
    return store.ProductReducer;
  });
  const handleSort = (e) => {
    setOrder(e.target.value);
  };
  let Obj = {
    params: {
      
      _page: searchParams.get("page"),
      _sort: searchParams.get("order") && "Price",
      _order: searchParams.get("order"),
    },
  };
 useEffect(()=>{
  let params={
    order
   }
   
   setSearchParams(params)
 },[order])
  useEffect(() => {
    
    dispatch(getProducts(Obj));
    
  }, [location.search]);
  
  
  

  return (
    
    <Container maxW={"100%"}>
      
      <Box>
        <Heading lineHeight={1.1}
          textAlign={"center"}
          fontWeight= "bold"
          fontSize={{ base: "3xl", md:"5xl", lg: "5xl" }}
          
          backgroundImage={"https://i.pinimg.com/originals/3b/fd/13/3bfd131d661215be9eb16819c8e8b34d.jpg"}
          height={"300px"}
          backgroundPosition="center"
          backgroundSize="cover"
        ><Text paddingTop={"100px"}>Destinations</Text>
        </Heading>
        <Flex justifyContent={"space-between"}>
          <Box>
          <Text marginTop={"100px"} marginLeft={"90px"} textAlign={"center"} fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
                    Popular <Text as="span" color="#1071DB">Destination</Text>
                </Text>
          </Box>
          <Box 
            marginRight={"150px"}
            marginTop={"110px"}
          >
            <Select placeholder='Select' fontSize={"xl"}  onChange={handleSort} color={"#1071DB"} border={"3px solid #1071DB "}>
              <option value='asc'>Price:low to high</option>
              <option value='desc'>Price:High to low</option>
              
            </Select>
          </Box>
        </Flex>
        {isLoading ? (
        <Box
          textAlign={"center"}
          width={"100%"}
          height={"400px"}
          paddingTop="150px"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : isError ? (
        "Something went wrong"
      ) : (
        <Grid
          width={"80%"}
          margin={"auto"}
          marginTop={"100px"}
          justifyContent="space-between"
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          }}
          columnGap="40px"
        >
          {destinations.length > 0 &&
            destinations.map((el) => {
              return <Destinationcard key={el.id} {...el} id={el.id} type={"men"} />;
            })}
        </Grid>
      )}

      </Box>
      <Pagination/>
      <Download/>
     
    </Container>

  )
}

export default Destination