import React from "react";
import styled from "styled-components";
import phone from "../image/iphone.png";

export const Download = () => {
  return (
    <DIV style={{ marginBottom: "50px" }} >
      <div id="main" >
        <img id="phone" src={phone} alt="" />
        <div id="info">
          <h1 style={{ fontSize: "70px",paddingTop:"20px" }}>DOWNLOAD</h1>
          <h1 style={{ fontSize: "25px" }}>Our Mobile App</h1>
          <h3 style={{ fontSize: "15px" }}>
            this app allows travellers to find adventure & book interesting &
            exiciting tours with ease.
          </h3>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <img
                src="https://res4.nbstatic.in/static/images/google-play-badges.svg"
                alt=""
                width={"300px"}
                
              />
              <img
                src="https://res4.nbstatic.in/static/images/app-store.svg"
                alt=""
              />
            </div>
            <img
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px",
              }}

              

              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohXMmn4t3aKSiNr6fl-vcE53wLrp1Cb6JSQ&usqp=CAU"
              alt=""
            />
          </div>
          <h3 >WWW.OutdoorLife.com</h3>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  #phone {

    width: 25%;
    margin-left: 50px;
    /* border: 1px solid white; */

  }
  #main {
    background-color: #1071db;
    padding: 40px;
    border-radius: 35px;
    display: flex;
    gap: 30px;
    width:80%;
    margin:auto
  }
  #info {
    color: white;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
    /* border: 1px solid white; */
    padding-left: 100px;
    padding-right: 150px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }


  

  @media screen and (max-width: 480px) {
    #main {
      flex-direction: column;
      align-items: center;
      border: 1px solid white;
    }
  }

`;
