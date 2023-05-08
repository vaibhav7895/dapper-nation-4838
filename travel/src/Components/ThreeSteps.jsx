import React from "react";
import styled from "styled-components";
import myimage from "../image/3stepplane.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";

export const ThreeSteps = ({ name, one, two, three, data1, data2, data3 }) => {
  return (
    <DIV style={{ display: "flex", marginTop: "50px", marginBottom: "50px" }}>
      <div id="info">
        <h1>
          Quick <span style={{ color: "#1071db" }}>& Safe</span>
        </h1>
        <h2>
          Book Your {name} In{" "}
          <span style={{ color: "#1071db" }}>3 Easy Steps</span>{" "}
        </h2>
        <div id="steps">
          <div>
            <FontAwesomeIcon
              icon={faLaptop}
              style={{ color: "#1071db", fontSize: "30px", margin: "auto" }}
            />
            <div>
              <h3>{one}</h3>
              <h3>{data1}</h3>
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faTicket}
              style={{ color: "#1071db", fontSize: "30px", margin: "auto" }}
            />
            <div>
              <h3>{two}</h3>
              <h3>{data2}</h3>
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCity}
              style={{ color: "#1071db", fontSize: "30px", margin: "auto" }}
            />
            <div>
              <h3>{three}</h3>
              <h3>{data3}</h3>
            </div>
          </div>
        </div>
      </div>
      <div id="image">
        <img src={myimage} alt="" />
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  #info {
    text-align: left;
    width: 50%;
    /* border: 1px solid black; */
  }
  h1 {
    font-size: 50px;
    font-weight: bolder;
  }
  h2 {
    font-size: 30px;
    font-weight: bolder;
  }
  #steps > div {
    display: flex;
    gap: 10px;
    /* border: 1px solid black; */
  }
  #steps {
    padding: 10px;
  }
  #steps > div > div {
    text-align: justify;
    padding: 10px;
  }
  #steps > div > div > :nth-child(1) {
    font-size: 20px;
    font-weight: bolder;
  }
  #image {
    /* border: 1px solid black; */
    width: 50%;
    padding: 15px;
  }
`;
