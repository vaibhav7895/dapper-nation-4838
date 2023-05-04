import React from 'react'
import { Route, Routes } from 'react-router-dom'
i
const MainRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage />}/>
   </Routes>
  )
}

export default MainRoutes