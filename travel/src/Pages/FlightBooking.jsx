import React from "react";
import styled from "styled-components";
import { BookingBar } from "../Components/BookingBar";
import { FourList } from "../Components/FourList";
import { ThreeSteps } from "../Components/ThreeSteps";
import { Download } from "../Components/Download";
import flightimage from "../image/p1.jpg";
import { useNavigate } from "react-router-dom";

export const FlightBooking = () => {
  const navigate=useNavigate()

  const handleClick=()=>{
    navigate("/passengerinfo")
  }
  // making a object for international flights data to pass it to FourList component
  const international = {
    h1: "Top",
    heading: "International Airlines",
    allDivsArr: [
      {
        image:
          "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202202/indigo-copy-sixteen_nine-sixteen_nine.jpeg?size=948:533",
        price: 30,
        name: "Indigo",
      },
      {
        image:
          "https://www.businessinsider.in/thumb/msid-70579618,width-700,resizemode-4,imgsize-94560/These-are-the-biggest-airplanes-in-the-world-today-including-one-that-can-carry-as-many-as-850-passengers.jpg",
        price: 40,
        name: "Qatar",
      },
      {
        image:
          "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2ludGVybmF0aW9uYWwtZnVlbC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
        price: 70,
        name: "Lufthansa",
      },
      {
        image:
          "https://media.gettyimages.com/id/458254159/photo/air-india-boeing-777-300er.jpg?s=1024x1024&w=gi&k=20&c=K6P36NmM9lsPp85TlTJ8mt1QpqQ4SH0PnGAutmeXyZE=",
        price: 85,
        name: "Air India",
      },
    ],
  };

  const FightDeals = {
    h1: "Top",
    heading: "Flight Deals",
    allDivsArr: [
      {
        image:
          "https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&w=1000&q=80",
        price: 30,
        name: "India To New York",
        stars: "★★★★★",
      },
      {
        image:
          "https://pyt-blogs.imgix.net/2020/08/eva-dang-EXdXLrZXS9Q-unsplash-1-scaled.jpg?auto=format&fit=crop&h=400&ixlib=php-3.3.0&w=1500&wpsize=gridlove-cover",
        price: 40,
        name: "India To London",
        stars: "★★★★★",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdHJhbGlhJTIwY2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
        price: 70,
        name: "India To Australia",
        stars: "★★★★★",
      },
      {
        image:
          "https://t4.ftcdn.net/jpg/00/64/87/97/360_F_64879724_J1FYFb1lpzrWcYrO8KX6G9nMhY4MsJa2.jpg",
        price: 85,
        name: "India To Dubai",
        stars: "★★★★★",
      },
    ],
  };

  const threestepsdata = {
    name: "Flights",
    one: "Select Your Flight",
    two: "Get Multiple Fare Deals",
    three: "Customize Book",
    data1:
      " offers a hassle-free holiday wherein all your travel needs are taken care of. Be it your accommodation in comfortable hotels, convenient transfers.",

    data2:
      " specific preferences, if any, on hotels, kind of holiday, etc. and MakeMyTrip offers you an extensive list of holiday packages to choose from. Pick any package that meets your needs.",
    data3:
      " You can choose to book your tour packages offline by dropping a query or chatting with our travel experts for immediate support. ",
  };

  return (
    <DIV>
      <h1 id="heading" style={{ paddingTop: "130px" }}>
        Flight Booking
      </h1>
      <div  id="MainDiv" style={{ marginLeft: "18vh", marginRight: "18vh" }}>
        {/* heading */}
        {/* booking bar */}
        <BookingBar />
        {/* flight details */}
        <FourList   {...international} />
        <FourList onClick={handleClick}{...FightDeals} />
        <ThreeSteps {...threestepsdata} />
        <Download />
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  #MainDiv {
    font-family: "Poppins", sans-serif;
    font-family: "Roboto", sans-serif;
    /* border: 1px solid red; */
  }
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
    /* border: 1px solid black; */
  }
`;
