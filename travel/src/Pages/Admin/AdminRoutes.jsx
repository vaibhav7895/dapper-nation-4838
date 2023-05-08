import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Explore from './Explore'
import Favourites from './Favourites'
import Settings from './Settings'
import Dashboard from './Adminhomepage'
import AdminAdd from './AdminAdd'
import HomePage from '../HomePage'
import About from './Explore'

const AdminRoutes = () => {
  return (
    <Routes>
       
       <Route path='/Dashboard' element={<Dashboard/>}/>
       <Route path="/" element={<HomePage/>}/>
        <Route path='/Add' element={<AdminAdd/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Favourites' element={<Favourites/>}/>
        <Route path='/Settings' element={<Settings/>}/>
    </Routes>
  )
}

export default AdminRoutes