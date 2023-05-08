import React from "react";
import styled from "styled-components";
import planeicon from "../image/duration.jpg";
import { json, useNavigate } from "react-router-dom";

export const ResultsCard = ({ data }) => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/passengerInfo")
    
  }

  return (
    <DIV
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <h2 id="head">{data.length} Search Result</h2>
      {data.map((item, i) => {
        return (
          <div key={i} id="card">
            <img id="logos" src={item.image} alt="" />
            <div id="mid">
              <div id="starttime">
                <div>
                  <h2 style={{ color: "gray" }}>Friday</h2>
                  <h2 style={{ fontSize: "20px", color: "grey" }}>
                    <span style={{ fontWeight: "600", color: "black" }}>
                      {item.start}{" "}
                    </span>
                    AM
                  </h2>
                  <h2 style={{ fontWeight: "600" }}>ISB</h2>
                </div>
                <div>
                  <h2 style={{ fontSize: "10px", textAlign: "center" }}>
                    Duration{" "}
                    <span style={{ fontWeight: "600" }}>{item.duration}</span>
                  </h2>
                  <img style={{ width: "150px" }} src={planeicon} alt="" />
                  <h2 style={{ fontSize: "10px", textAlign: "center" }}>
                    Direct
                  </h2>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button className="options">Flight Details</button>
                <button className="options">Fare info</button>
                <button className="options">Refund</button>
              </div>
            </div>
            <div id="endtime">
              <div>
                <h2 style={{ color: "gray" }}>Friday</h2>
                <h2 style={{ fontSize: "20px", color: "grey" }}>
                  <span style={{ fontWeight: "600", color: "black" }}>
                    {item.end}{" "}
                  </span>
                  AM
                </h2>
                <h2 style={{ fontWeight: "600" }}>LHR</h2>
              </div>
              <div>
                <h2 style={{ color: "gray" }}>Return</h2>
                <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
                  Monday,September 26,2022
                </h2>
              </div>
            </div>
            <div id="finalPrice">
              <button
                className="options"
                style={{ fontSize: "15px", fontWeight: "600", width: "150px" }}
              >
                Business Class
              </button>
              <div>
                <h3>From</h3>
                <h1 style={{ fontSize: "25px", fontWeight: "700" }}>
                  PKR {item.price}
                </h1>
              </div>
              <button
                style={{
                  backgroundColor: "#1071db",
                  color: "white",
                  borderRadius: "30px",
                  fontSize: "small",
                  padding: "5px 20px 5px 20px",
                  fontWeight: "600",
                  width: "120px",
                }}
                onClick={handleClick()}
                
              >
                Book Now
              </button>
            </div>
          </div>
        );
      })}
    </DIV>
  );
};

const DIV = styled.div`
  #head {
    text-align: left;
    font-size: 20px;
    font-weight: 700;
  }
  #logos {
    /* border: 1px solid black;/ */
    width: 100px;
    padding: 10px;
    margin: auto;
  }
  #card {
    display: grid;
    grid-template-columns: 0.5fr 2fr 2fr 1.2fr;
    border: 3px solid #1071db;
    border-radius: 15px;
    padding: 20px;
  }
  #starttime {
    /* border: 1px solid black; */
    text-align: left;
    display: flex;
    justify-content: space-between;
  }
  #mid {
    /* border: 1px solid black; */
    border-left: 2px solid #1071db;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
  }
  .options {
    /* border: 1px solid #1071db; */
    background-color: #bcdcff;
    color: #1071db;
    border-radius: 30px;
    font-size: small;
    padding: 5px 20px 5px 20px;
    font-weight: 700;
  }
  .options:hover {
    border: none;
  }
  #endtime {
    /* border: 1px solid black; */
    text-align: left;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  #finalPrice {
    /* border: 1px solid black; */
    border-left: 3px dashed #1071db;
    text-align: left;
    padding-left: 40px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    /* gap: 5px; */
    justify-content: space-between;
  }
`;
