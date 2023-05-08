import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBorderNone, faCircleChevronDown, faEnvelope, faHeart, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/button'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Divider } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { useDispatch } from 'react-redux'
import { SIGNIN_SUCCESS_ADMIN } from '../Redux/AdminReducer/actiontype'
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile, setIsMobile] = useState(false)
  const [show, setShow] = useState(false)
  const [inputshow, setinputshow] = useState(true)
  const handledropdown = () => {
    setShow(!show)
  }
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleemail=(e)=>{
    setEmail(e.target.value)
     
  }
  const handlepass=(e)=>{
     setPassword(e.target.value)
      
   }
  
   const handlesubmit=(e)=>{
        e.preventDefault()
        if(email=="admin@gmail.com" && password=="admin"){
         console.log("yes")
             dispatch({type:SIGNIN_SUCCESS_ADMIN})
          navigate("/Dashboard")
             setEmail("")
             setPassword("")
        }else{
         alert("wrong details")
        }
       
   }
  return (
    <>
      <DIV className='navbar' show={show} setshow={setShow}>
        <img width={"5%"} height={"100%"} style={{ borderRadius: "50%" }} src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?w=2000" className='logo' alt="" />
        {/* <h3 className='logo'>Logo</h3> */}
        <div >
          <input width="100px" style={{ color: "#1071DB", borderRadius: "20px", borderColor: "teal" }} className='inputbox' type="text" />
        </div>

        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to={"/"}>
            <li className='home'>Home</li>
          </Link>
          <Link to={"/destinations"}>
            <li className='about'>Destinations</li>
          </Link>
          
          <Link to={"/flightCompany"}>
            <li className='like'>
             Flights Booking
            </li>
          </Link>

          <Link to={"/reviews"}>
            <li className='login'>Reviews</li>
          </Link>
          <Link to={"/contact"}>
            <li className='contact1'>Contact</li>
          </Link>
          <Box style={{marginTop:"6px"}}>
          <Button  className='btn' onClick={onOpen} style={{backgroundColor:"#1071db",color:"white",fontSize:"20px"}}>
            {/* <li className='admin'>Admin</li> */}
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader style={{margin:"auto",color:"teal"}}>Login As Admin</ModalHeader>
                <ModalCloseButton />
                <Box>
                  <Input type="text" placeholder="email"  style={{marginTop:"10px"}} value={email} name='email' onChange={handleemail}/>
                 
                  <Input type="text" placeholder="password" style={{marginTop:"10px"}} name='password' value={password} onChange={handlepass}/>
                  
                 <Box style={{margin:"auto",height:"auto",width:"155px",marginTop:"30px"}}>
                     <Button style={{backgroundColor:"teal"}}  onClick={handlesubmit}>Login As Admin</Button>
                 </Box>
                  
                </Box>
                <ModalBody pb={6}>
                  {/* <lorem count={2} /> */}
                </ModalBody>

                <ModalFooter>
                  
                </ModalFooter>
              </ModalContent>
            </Modal>
            Admin
          </Button>
          </Box>
          
          <Link to={"/signup"}>
            <li className='user'>
              <FontAwesomeIcon icon={faUser} />
            </li>
          </Link>
        </ul>
        <button className='mobile-menu-icon'
          onClick={() => setIsMobile(!isMobile)}
        >
          {
            isMobile ? <FontAwesomeIcon icon={faXmark} size="lg" /> : <FontAwesomeIcon icon={faBars} />
          }
        </button>
      </DIV>
     
    </>
  )
}

export default Navbar

const DIV = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 84px;
   background-color: #1071db;
   color:white;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   .logo{
    font-size: 30px;
   }
   .select{
    display:${({ show }) => show ? "block" : "none"}
   }

   .nav-links{
    display: flex;
    justify-content: flex-end;
    list-style: none;
    width: 75%;
   }

   .home,.about,.contact,.login,.contact1,.like,.user,.admin{
    text-decoration: none;
    color:white;
    font-size: 20px;
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;

   }
   .mobile-menu-icon{
    display: none;
   }
  @media screen and (max-width:1156px){
    .logo{
      display: flex;
      position:absolute;
      top:15px;
      left: 35px;
    }
    .btn{
      background-color: #1071db;
    }
   .nav-links{
    display: none;
   }
     .select{
      display: block;
     }
   .nav-links-mobile{
    position: absolute;
    display: block;
    list-style: none;
    background-color: #1071db;
    left: 0;
    top: 75px;
    transition: all 0.5s ease-out;
    width: 100%;
   }
   .inputbox{
    display: none;
   }
   .home,.about,.contact,.login,.contact1,.like,.user,.admin{
    color:white;
    text-align: center;
    padding: 32px;
    width: 100%;
    transition: all 0.5s ease;
   }
   .mobile-menu-icon{
    display: block;
    position: absolute;
    font-size: 30px;
    color:white;
    background-color: #1071db;
    border: none;
    outline: none;
    top:15px;
    right: 25px;
   }
  }
`