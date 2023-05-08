import React from "react";
import styled from "styled-components";
import { MakeABooking } from "../Components/MakeABooking";
import { ResultsCard } from "../Components/ResultsCard";
import flightimage from "../image/p1.jpg";
import { useNavigate } from "react-router-dom";

export const FlightCompany = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/flightBooking")
  }
  const arr = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/225px-Emirates_logo.svg.png",
      name: "Emarites",
      price: "150,000",
      duration: "5h 30m",
      start: "07:40",
      end: "08:47",
    },
    {
      image:
        "https://w0.peakpx.com/wallpaper/884/939/HD-wallpaper-lufthansa-airlines-america-aviation-bird-brand-logo-white-yellow.jpg",
      name: "Lufthansa",
      price: "180,000",
      duration: "4h 30m",
      start: "05:45",
      end: "07:15",
    },
    {
      image:
        "https://1000logos.net/wp-content/uploads/2020/03/Qatar-Airways-Logo-1024x640.png",
      name: "Qatar Airways",
      price: "140,000",
      duration: "5h 15m",
      start: "03:30",
      end: "04:45",
    },
    {
      image:
        "https://1000logos.net/wp-content/uploads/2016/10/British-Airways-Logo-1024x640.png",
      name: "British Airways",
      price: "150,000",
      duration: "5h 30m",
      start: "04:30",
      end: "06:00",
    },
  ];
  return (
    <DIV>
      <h1 id="heading" style={{ paddingTop: "130px" }}>
        Flight Booking
      </h1>
      <div onClick={handleClick}style={{ marginLeft: "18vh", marginRight: "18vh" }}>
        <MakeABooking />
        <ResultsCard data={arr} />
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
`;
