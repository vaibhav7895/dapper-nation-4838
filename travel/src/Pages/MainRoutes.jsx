
import React from "react";
import { Routes, Route } from "react-router-dom";
import FlightBooking from "./FlightBooking";
const MainRoutes = () => {
  return <div></div>;

import React from 'react'

import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Adminhomepage from './Admin/Adminhomepage'
import { Text } from '@chakra-ui/react'



const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
     <Route path="*" element={<Text>404 Page Not Found</Text>}/>
    </Routes>

  )
}


export default MainRoutes;
