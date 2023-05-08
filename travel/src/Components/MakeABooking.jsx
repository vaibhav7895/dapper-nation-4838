import React from "react";
import styled from "styled-components";

export const MakeABooking = () => {
  return (
    <DIV>
      <h1 id="head">
        Make A <span style={{ color: "#1071db" }}>Booking</span>
      </h1>
    </DIV>
  );
};

const DIV = styled.div`
  #head {
    text-align: left;
    font-size: 60px;
    font-weight: 700;
    margin-top: 50px;
  }
`;
