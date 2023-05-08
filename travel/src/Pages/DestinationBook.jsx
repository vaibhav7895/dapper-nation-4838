import React from "react";
import styled from "styled-components";
import flightimage from "../image/p1.jpg";
import { MakeABooking } from "../Components/MakeABooking";
import { Details } from "../Components/Details";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const DestinationBook = () => {
   
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/payments")
  }
  return (
    <DIV>
      <h1 id="heading" style={{ paddingTop: "130px" }}>
         Booking
      </h1>

      <div style={{ marginLeft: "18vh", marginRight: "18vh" }}>
        <MakeABooking />
        <h2
          style={{
            textAlign: "left",
            fontSize: "30px",
            fontWeight: "600",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Passenger Information
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3.5fr 1.5fr",
            columnGap: "20px",
          }}
        >
          <form>
            <div id="Passengerinfo">
              <h2 className="heading">
                1.{" "}
                <span className="a">
                  Passengers Details: <span>Adult</span>
                </span>
              </h2>
              <Details />

              <h2 className="heading">
                1.{" "}
                <span className="a">
                  Passengers Details: <span>Children</span>
                </span>
              </h2>
              <Details />
            </div>
          </form>
          <div id="ticket">
            <h2 className="heading" style={{ textAlign: "center" }}>
              Flight Summary
            </h2>
            <Box
                    backgroundImage="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fE5pZ2h0JTIwbmVvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    height={{base:"250px",md:"400px"}}
                    m="1%"
                    borderRadius={"5%"}
                    justifyContent="center"
                    alignItems="center"
                    
                >
                <Box w="96%" m="auto" mt={{base:"85%",md:"80%"}} borderRadius="5%" bgColor="rgba(255, 255, 255, 0.300)" textAlign="left" >
                    <Text color="white" fontWeight="bold" fontSize={{base:"md",md:"xl"}}>
                    Light you Journey
                    </Text>
                    <Text color="white" fontWeight="bold" fontSize="sm">Ratings-⭐⭐⭐⭐</Text>
                    <Box display="flex" justifyContent="space-between">
                        <Text fontSize={{base:"sm",md:"xl"}} fontWeight="bold" color="black">Price:-$12000</Text>
                        <Button w="30%" height="25px" fontSize={{base:"sm",md:"xl"}} background={""} color="#fff" border="1px solid #1071DB" _hover={{ bg: "blue.500" }}>Explore</Button>
                    </Box>
                </Box>
                
                
                </Box>
          </div>
          
          <div>
            <h2
              style={{
                textAlign: "left",
                fontSize: "30px",
                fontWeight: "600",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Contact Information
            </h2>
            <form>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: "20px",
                }}
              >
                <h2 className="readables">Name</h2>
                <h2 className="readables">Surname</h2>
                <input type="text" className="inputs" />
                <input type="text" className="inputs" />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: "20px",
                }}
              >
                <h2 className="readables">Phone Number</h2>
                <h2 className="readables">Email</h2>
                <input type="number" className="inputs" placeholder="+91" />
                <input type="email" className="inputs" />
              </div>
            </form>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <button style={{ color: "black" }} className="btn">
            Back
          </button>
          <button onClick={handleClick} style={{ backgroundColor: "#1071db" }} className="btn">
            Next
          </button>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  #heading {
    background-image: url(${flightimage});
    width: 100%;
    height: 40vh;
    background-size: cover;
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    padding: 30px;
    color: white;
  }
  #Passengerinfo {
    padding: 20px;
  }
  form {
    border-radius: 10px;
    border: 2px solid #1071db;
    text-align: left;
    padding: 20px;
  }
  .readables {
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
  }
  .inputs:focus {
    outline: none;
  }
  .inputs {
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 15px;
    padding: 5px;
    font-weight: 600;
  }

  .heading {
    font-size: 20px;
    margin-top: 10px;
  }
  .a {
    font-weight: 700;
  }
  .a > span {
    font-weight: 400;
  }
  #ticket {
    /* border: 2px solid #1071db; */
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
  }
  .btn {
    color: white;
    padding: 10px;
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    border: 2px solid #1071db;
    margin-left: 10px;
  }
  .black {
    color: black;
  }
  .space {
    padding-left: 40px;
    /* padding-right: 30px; */
  }
  .medium {
    font-size: 20px;
  }
`;
