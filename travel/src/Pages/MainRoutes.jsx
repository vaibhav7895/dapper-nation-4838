

import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from './HomePage'
import Adminhomepage from './Admin/Adminhomepage'
import { Text } from '@chakra-ui/react'
import Destination from './Destination'
import Reviews from './Reviews'
import Login from './Login'
import Signup from './SignUp'
import { DestinationBook } from "./DestinationBook";
import Contact from "./Contact"
import { Payments } from "./Payments";
import { FlightCompany } from "./FlightCompany";
import  {FlightBooking}  from "./FlightBooking";
import { PassangerInfo } from "./PassangerInfo";
const MainRoutes = () => {
  return (
    <Routes>

      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/destinations' element={<Destination/>} />
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/booking' element={<DestinationBook/>}/>
      <Route path='/payments' element={<Payments/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/flightCompany' element={<FlightBooking/>}/>
      <Route path='/flightBooking' element={<FlightCompany/>}/>
      <Route path='/passengerInfo' element={<PassangerInfo/>}/>
      <Route path="*" element={<Text>404 Page Not Found</Text>} />
      

     
    </Routes>
  );
};

export default MainRoutes;
