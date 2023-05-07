
import { useSelector } from 'react-redux';
import './App.css';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MainRoutes from './Pages/MainRoutes';
import Nav from './Components/Adminnavbar';
import AdminRoutes from './Pages/Admin/AdminRoutes';
import { BrowserRouter } from 'react-router-dom';
import SimpleSidebar from './Components/Sidebar';
import { Box } from '@chakra-ui/react';
import Login from './Pages/Login'
import Destination from './Pages/Destination';
function App() {
  const admin=useSelector((store)=>{
    return store.AdminReducer.admin
  })
  console.log(admin)
  return (
    <BrowserRouter>
    {!admin ? <div className="App">
      <Navbar />
      <MainRoutes />
      {/* <Destination/> */}
      <Footer />
    </div> : <div className="App" style={{display:"flex"}}>
    <SimpleSidebar style={{width:"20%"}}/>
    <Box  style={{width:"80%"}}>
    <Nav />
      <AdminRoutes />
    </Box>
     
    </div>}
    </BrowserRouter>
   
  
  );
}

export default App;
