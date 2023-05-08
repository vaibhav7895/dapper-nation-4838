import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const FourList = ({ h1, heading, allDivsArr }) => {
  const navigate=useNavigate()

  const handleClick=()=>{
    navigate("/flightBooking")
  }
  return (
    <DIV style={{ marginBottom: "30px" }}>
      <h1>
        {h1}
        {` `}
        <span style={{ color: "#1071DB" }}>{heading}</span>
      </h1>
      <h2
        style={{
          fontWeight: "800",
          color: "#1071DB",
          textAlign: "end",
        }}
      >
        View all --{`>`}
      </h2>
      <div id="cards">
        {/* mapping all data here */}
        {allDivsArr.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundImage: `url(${item.image})`,
                display: "flex",
                flexDirection: "column",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <h2 id="discount">{`Upto ${i + 1}0% Discount`}</h2>
              <div
                style={{
                  backdropFilter: "blur(30px)",
                  margin: "10px",
                  padding: "10px",
                  borderRadius: "15px",
                  textAlign: "left",
                  color: "white",
                  fontWeight: "bolder",
                  marginTop: "auto",
                }}
              >
                <h2 style={{ fontSize: "20px" }}>{item.name}</h2>
                <h2 style={{ color: "#0c264c" }}>Applicable on Base bank</h2>
                <h2
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Limited Offer{" "}
                  <span style={{ color: "gold" }}>{item.stars}</span>
                </h2>
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h2>
                    From{" "}
                    <span
                      style={{ fontSize: "20px", color: "#0c264c" }}
                    >{`$${item.price}`}</span>
                  </h2>
                  <button
                    id="findmorebtn"
                    style={{
                      border: "2px solid #1071db",
                      padding: "5px",
                      borderRadius: "20px",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                    onClick={handleClick}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  h1 {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: bolder;
    font-size: 50px;
    margin-top: 30px;
    text-align: left;
  }
  #cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
  }
  @media (max-width: 700px) {
    #cards {
      grid-template-columns: 1fr 1fr;
    }
  }
  #cards > div {
    /* border: 1px solid black; */
    height: 400px;
    border-radius: 20px;
    margin-top: 20px;
  }

  #cards > div:hover {
    cursor: pointer;
    border: 5px solid #1071db;
  }
  #discount {
    font-size: 15px;
    font-weight: bolder;
    background-color: #0c264c;
    color: white;
    padding: 5px;
    padding-left: 30px;
    text-align: left;
    margin-top: 30px;
    width: 70%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  #findmorebtn:hover {
    background-color: #1071db;
  }
`;
