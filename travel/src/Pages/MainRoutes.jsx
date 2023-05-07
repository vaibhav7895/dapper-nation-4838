import React from 'react'
import HomePage from "./HomePage"
import {Routes,Route} from "react-router-dom"
const MainRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
   </Routes>
  )
}

export default MainRoutes