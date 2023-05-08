import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Explore from './Explore'
import Favourites from './Favourites'
import Settings from './Settings'
import Dashboard from './Adminhomepage'
import AdminAdd from './AdminAdd'

const AdminRoutes = () => {
  return (
    <Routes>
       
       <Route path='/Dashboard' element={<Dashboard/>}/>
       
        <Route path='/Add' element={<AdminAdd/>}/>
        <Route path='/Explore' element={<Explore/>}/>\
        <Route path='/Favourites' element={<Favourites/>}/>
        <Route path='/Settings' element={<Settings/>}/>
    </Routes>
  )
}

export default AdminRoutes