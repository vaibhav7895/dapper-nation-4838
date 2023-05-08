import React from 'react'

import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Adminhomepage from './Admin/Adminhomepage'
import { Text } from '@chakra-ui/react'
import Destination from './Destination'
import Reviews from './Reviews'
import Login from './Login'
import Signup from './SignUp'


const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/destinations' element={<Destination/>} />
      <Route path='/reviews' element={<Reviews/>}/>
      {/* <Route path='/contact' element={<Contact/>}/> */}
     <Route path="*" element={<Text>404 Page Not Found</Text>}/>
     
    </Routes>

  )
}

export default MainRoutes