import { Avatar, Box, Grid, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

const ReviewCard = ({first_name,last_name,Ratings,Description}) => {
  return (
    <Box  w="90%" borderRadius="5%" m="auto" h={{base:"250px",md:"350px"}} backgroundColor="#ffff" border="1px solid white" >
                    <Grid boxShadow={"2xl"} height={"300px"} border={"3px solid #1071DB"} borderRadius={"10px"}>
                    <Wrap >
                        <WrapItem>
                        <Image border={"1px solid red"} marginLeft={"30px"}mt={"30px"} justifyItems={"center"} borderRadius={"50%"} width={"50px"}name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                        </WrapItem>
                    </Wrap>
                    <Box w="80%" m="auto" >

                        <Text fontSize={{base:"md",md:"xl"}} color="black" fontWeight="bold" textAlign={"left"}>{first_name} {last_name}</Text>
                        <Text textAlign={"left"}>{Ratings}</Text>
                        <Text fontSize={{base:"10px",md:"xs"}} color="grey" fontWeight="bold" textAlign={"left"}>
                        {Description}
                        </Text>
                    </Box>
                    </Grid>
                    </Box>
  )
}

export default ReviewCard