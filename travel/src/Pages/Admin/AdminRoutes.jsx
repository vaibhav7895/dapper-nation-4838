import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Explore from './Explore'
import Favourites from './Favourites'
import Settings from './Settings'
import Dashboard from './Adminhomepage'
import AdminAdd from './AdminAdd'
import HomePage from '../HomePage'
import About from './Explore'
import Edit from './Edit'
import { useSelector } from 'react-redux'

const AdminRoutes = () => {
  const id=useSelector((store)=>{
    return store.AdminReducer.id
  })
  return (
    <Routes>
       
       <Route path='/Dashboard' element={<Dashboard/>}/>
       <Route path="/" element={<HomePage/>}/>
        <Route path='/Add' element={<AdminAdd/>}/>
        <Route path={`/Edit/:${+id}`} element={<Edit/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Favourites' element={<Favourites/>}/>
        <Route path='/Settings' element={<Settings/>}/>
    </Routes>
  )
}

export default AdminRoutes