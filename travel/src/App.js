import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./Pages/HomePage"


import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import Nav from "./Components/Adminnavbar";
import AdminRoutes from "./Pages/Admin/AdminRoutes";
import { BrowserRouter } from "react-router-dom";
import SimpleSidebar from "./Components/Sidebar";
import { Box } from "@chakra-ui/react";
import { FlightBooking } from "./Pages/FlightBooking";
import { FlightCompany } from "./Pages/FlightCompany";
import { PassangerInfo } from "./Pages/PassangerInfo";



function App() {
  // const admin = useSelector((store) => {
  //   return store.AdminReducer.admin;
  // });
  // console.log(admin);
  return (


    // <BrowserRouter>
    //   {!admin ? (
    //     <div className="App">
    //       <Navbar />
    //       <MainRoutes />
    //       <Footer />
    //     </div>
    //   ) : (
    //     <div className="App" style={{ display: "flex" }}>
    //       <SimpleSidebar style={{ width: "20%" }} />
    //       <Box style={{ width: "80%" }}>
    //         <Nav />
    //         <AdminRoutes />
    //       </Box>
    //     </div>
    //   )}

    // </BrowserRouter>
    <>
      <HomePage/>
    </>


  );
}

export default App;
