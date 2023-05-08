import React from "react";
import { MakeABooking } from "../Components/MakeABooking";
import styled from "styled-components";
import flightimage from "../image/p1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBadgeCheck } from "@fortawesome/free-solid-svg-icons";
// import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

// Avoid  this page

export const PlaneTicket = () => {
  return (
    <DIV>
      <h1 id="heading" style={{ paddingTop: "130px" }}>
        Flight Booking
      </h1>
      <div style={{ marginLeft: "18vh", marginRight: "18vh" }}>
        <MakeABooking />
        <div>
          {/* <FontAwesomeIcon icon={faBadgeCheck} style={{ color: "#3fde5f" }} /> */}
          <FontAwesomeIcon
            icon="fa-solid fa-badge-check"
            style={{ color: "#3fde5f" }}
          />
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
`;
