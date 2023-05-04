import React from "react";
import styled from "styled-components";

export const BookingBar = () => {
  return (
    <DIV>
      <div id="bookingDiv">
        <div id="dropDown">
          <select id="">
            <option value="1">Round Trip</option>
          </select>
          <select id="">
            <option value="1">Round Trip</option>
          </select>
          <select id="">
            <option value="1">Round Trip</option>
          </select>
        </div>
        <div id="bookingMid">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              // border: "1px solid black",
            }}
          >
            <div
              style={{
                display: "flex",
                border: "2px solid #1071DB",
                padding: "10px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              <h1>icon</h1>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Departure City</span>
                <select id="">
                  <option value="1">DEL, Delhi-India</option>
                </select>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "2px solid #1071DB",
                padding: "10px",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <h1>icon</h1>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Arrival City</span>
                <select id="">
                  <option value="1">DEL, Delhi-India</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                border: "2px solid #1071DB",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <h1>icon</h1>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Departure City</span>
                <select id="">
                  <option value="1">DEL, Delhi-India</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                border: "2px solid #1071DB",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <h1>icon</h1>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Departure City</span>
                <select id="">
                  <option value="1">DEL, Delhi-India</option>
                </select>
              </div>
            </div>
          </div>
          <div>search</div>
        </div>
        <div id="bookingLower">
          <div>
            <input
              type="checkbox"
              id="myCheckbox"
              style={{
                transform: "scale(1.5)",
                marginRight: "10px",
                color: "#1071DB",
                border: "2px solid #1071DB",
              }}
            />
            <span>Direct Flights</span>
          </div>
          <div>
            Looking for Specific Area{" "}
            <span style={{ color: "#1071DB" }}>-logo- Explore Map</span>
          </div>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  #dropDown {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60vh;
    margin: auto;
  }
  #dropDown > select {
    font-weight: 700;
  }
  #bookingDiv {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 1100px;
    margin: auto;
    padding: 30px;
    border-radius: 10px;
  }
  #bookingMid {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 2fr 0.5fr 0.5fr 50px;
    justify-content: space-around;
    column-gap: 10px;
  }
  #bookingLower {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    font-size: large;
    font-weight: 600;
  }
  select {
    font-weight: 600;
  }
`;
