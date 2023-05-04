import { color } from "framer-motion";
import React from "react";
import styled from "styled-components";

export const FourList = ({ h1, heading, allDivsArr }) => {
  return (
    <DIV style={{ marginLeft: "18vh", marginRight: "18vh" }}>
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
            <div style={{ backgroundImage: `url(${item.image})` }}>
              <h2 id="discount">{`Upto ${i + 1}0% Discount`}</h2>
              <div
                style={{
                  backgroundColor: "white",
                  margin: "10px",
                  padding: "10px",
                  borderRadius: "15px",
                }}
              >
                <h2>{item.name}</h2>
                <h2>Applicable on Base bank</h2>
              </div>
              <div></div>
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
    font-size: 40px;
    margin-top: 30px;
    text-align: left;
  }
  #cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
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
`;
