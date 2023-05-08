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
import { getProducts, getReviews } from '../Redux/ProductReducer/action';
import Destinationcard from '../Components/Destinationcard';
import { useLocation, useSearchParams } from 'react-router-dom';
import Pagination from '../Filter/Pagination';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { useRef } from 'react';
import { Download } from '../Components/Download';
import ReviewCard from '../Components/ReviewCard';
const Reviews = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const [order,setOrder]=useState("")
  

  const { reviews, isLoading, isError, total } = useSelector((store) => {
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
    
    dispatch(getReviews(Obj));
    
  }, [location.search]);
  
  
  

  return (
    
    <Container maxW={"100%"}>
      
      <Box>
        <Heading lineHeight={1.1}
          textAlign={"center"}
          fontWeight= "bold"
          fontSize={{ base: "3xl", md:"5xl", lg: "5xl" }}
          
          backgroundImage={"https://images.unsplash.com/photo-1531097517181-3de20fd3f05c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
          height={"300px"}  
          backgroundPosition="center"
          backgroundSize="cover"
        ><Text paddingTop={"100px"}>Reviews</Text>
        </Heading>
        <Flex justifyContent={"space-between"}>
          <Box>
          <Text  marginTop={"100px"} marginLeft={"90px"} textAlign={"center"} fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" >
                    Reviews 
                </Text>
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
          {reviews.length > 0 &&
            reviews.map((el) => {
              return <ReviewCard key={el.id} {...el} id={el.id} type={"men"} />;
            })}
        </Grid>
      )}

      </Box>
      <Pagination/>
      <Download/>
     
    </Container>

  )
}

export default Reviews