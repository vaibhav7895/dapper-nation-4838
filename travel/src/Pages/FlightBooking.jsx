import React from "react";
import styled from "styled-components";
import { BookingBar } from "../Components/BookingBar";
import { FourList } from "../Components/FourList";

export const FlightBooking = () => {
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
  return (
    <DIV>
      <div id="MainDiv">
        {/* heading */}
        <h1 id="heading">Flight Booking</h1>
        {/* booking bar */}
        <BookingBar />
        {/* flight details */}
        <FourList {...international} />
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
    text-align: center;
    font-size: 50px;
    font-weight: 900;
    padding: 30px;
  }
`;
