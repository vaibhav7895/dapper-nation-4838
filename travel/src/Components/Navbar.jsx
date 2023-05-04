import React, { useState } from 'react'
import { Link } from "react-router-dom"
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBorderNone, faCircleChevronDown, faEnvelope, faHeart, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [show, setShow] = useState(false)
  const [inputshow,setinputshow]=useState(true)
  const handledropdown = () => {
    setShow(!show)
  }
  return (
    <>
      <DIV className='navbar' show={show} setshow={setShow}>
        <img width={"5%"} height={"100%"} style={{ borderRadius: "50%" }} src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?w=2000" className='logo' alt="" />
        {/* <h3 className='logo'>Logo</h3> */}
        <div >
        <input width="100px" style={{color:"teal",borderRadius:"20px",borderColor:"teal"}} className='inputbox' type="text" />
        </div>
       
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link>
            <li className='home'>Home</li>
          </Link>
          <Link>
            <li className='about'>Destinations</li>
          </Link>
          <Link>
            <li className='contact'>Booking<FontAwesomeIcon onClick={handledropdown} icon={faCircleChevronDown} /></li>
          </Link>


          <Link>
            <li className='login'>Reviews</li>
          </Link>
          <Link>
            <li className='contact1'>Contact</li>
          </Link>
          <Link>
            <li className='admin'>Admin</li>
          </Link>
          <Link>
            <li className='like'>
              <FontAwesomeIcon icon={faHeart} />
            </li>
          </Link>
          <Link>
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
      {
        show && <select className='select' name="" id="" style={{ color: "white", position: "relative", backgroundColor: "teal" ,height:"auto",width:"100px",marginLeft:"60px"}}>
           <option value="">Select</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      }

    </>
  )
}

export default Navbar

const DIV = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 84px;
   background-color: teal;
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
    background-color: #005469;
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
    background-color: #00828c;
    border: none;
    outline: none;
    top:15px;
    right: 25px;
   }
  }
`