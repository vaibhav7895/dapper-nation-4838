import React, { useEffect } from 'react'
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
const Destination = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const { destinations, isLoading, isError, total } = useSelector((store) => {
    return store.ProductReducer;
  });
 
  let Obj = {
    params: {
      category: searchParams.getAll("category"),
      _page: searchParams.get("page"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(Obj));
    console.log(total);
  }, [location.search]);
  
  
  

  return (
    <Container maxW={"95%"}>
      <Box>
        <Heading lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
          marginTop={"100px"}
        >Destinations
        </Heading>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              marginTop={"100px"}
              marginLeft={"70px"}
            >Popular Destinations</Heading>
          </Box>
          <Box border={"1px solid red"}
            marginRight={"100px"}
            marginTop={"110px"}
          >
            <Select placeholder='Select option' fontSize={"xl"}>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
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
    </Container>

  )
}

export default Destination