import React from "react";
import styled from "styled-components";
import flightimage from "../image/p1.jpg";
import { MakeABooking } from "../Components/MakeABooking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import debitcard from "../image/debitcard.png";
import Blueplane from "../image/blueplane.png";
import { useNavigate } from "react-router-dom";
import { useControllableState, useToast } from "@chakra-ui/react";

export const Payments = () => {
  const navigate=useNavigate()
  const toast=useToast()
  const handleClick=()=>{
    navigate("/booking")
  }
  const handlebutton=()=>{
    setTimeout(()=>{
      navigate("/")
    },1000)
    
    toast({
      title: `Payment Successful`,
      status: "success",
      duration: 1500,
      position: "top",
      isClosable: true,
    });;
  }
  return (
    <DIV>
      <h1 id="heading" style={{ paddingTop: "130px" }}>
        Flight Booking
      </h1>
      <div
        style={{ marginLeft: "18vh", marginRight: "18vh", textAlign: "left" }}
      >
        <MakeABooking />
        <h1 style={{ fontSize: "40px", fontWeight: "600" }}>Payment</h1>
        <div id="main">
          <div>
            <div id="paymentMode">
              <h1 style={{ fontSize: "30px", fontWeight: "600" }}>
                Payment Method
              </h1>
              <div id="paymentImages">
                <FontAwesomeIcon
                  className="paymentIcon"
                  icon={faCreditCard}
                  style={{
                    color: "#487edb",
                    border: "3px solid gray",
                    width: "100px",
                    height: "100px",
                    border: "3px solid #1071db",
                  }}
                />
                <div className="paymentIcon">
                  <img
                    src="https://image3.mouthshut.com/images/imagesp/925881212s.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: "20px",
                }}
              >
                <h2 className="readables black">Passengers</h2>
                <h2 className="readables black">Passengers</h2>
                <div
                  className="inputs"
                  style={{ display: "grid", gridTemplateColumns: "4fr 1fr" }}
                >
                  <input type="number" placeholder="Eg:-81747968164986489" />
                  <img
                    style={{ width: "180px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7J3RCeNfJYDsLoQvrFswRT1EUPjVjYzwIw&usqp=CAU"
                    alt=""
                  />
                </div>
                <input type="text" className="inputs" placeholder="Eg:-Ravi" />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  columnGap: "20px",
                  marginBottom: "20px",
                }}
              >
                <h2 className="readables black">Expiry</h2>
                <h2 className="readables black">CVV</h2>
                <h2 className="readables black">Country</h2>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Eg:-06/2022"
                />
                <input type="text" className="inputs" placeholder="Eg:-123" />
                <input type="text" className="inputs" placeholder="Eg:-India" />
              </div>
            </div>
            <h2
              style={{
                fontSize: "15px",
                marginTop: "20px",
                fontWeight: "600",
                color: "gray",
              }}
            >
              By confirming payment you are improving our{" "}
              <span style={{ color: "#3f8de3" }}>terms & conditions</span> and
              acknowledging our <br />
              <span style={{ color: "#3f8de3" }}>privacy policy </span>your
              payment information and test information will remain confidential
            </h2>
            <button style={{ color: "black" }} onClick={handleClick} className="btn">
              Back
            </button>
          </div>
          <div id="card">
            <h1
              style={{ textAlign: "center", fontSize: "30px", color: "white" }}
            >
              Summary
            </h1>
            <img style={{ padding: "30px" }} src={debitcard} alt="" />
            <div
              id="cardDetails"
              style={{
                borderBottom: "2px dashed white",
                display: "grid",
                gridTemplateColumns: ".2fr 1fr .2fr",
                paddingLeft: "30px",
                paddingRight: "30px",
                columnGap: "20px",
                paddingBottom: "20px",
              }}
            >
              <div>
                <h2 className="large white">ISL</h2>
                <h3 className="black">India</h3>
              </div>
              <div>
                <img style={{ width: "200px" }} src={Blueplane} alt="" />
              </div>

              <div>
                <h2 className="large white">Lon</h2>
                <h3 className="black">Uk</h3>
              </div>
            </div>
            <div
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1fr",
                  columnGap: "20px",
                }}
              >
                <h2 className="white">Passengers</h2>
                <h2 className="white">Airline</h2>
                <h3 className="medium black">5 Passengers</h3>
                <h3 className="medium black">Emarites</h3>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1fr",
                  columnGap: "20px",
                }}
              >
                <h2 className="white">Flight Class</h2>
                <h2 className="white">Business Class</h2>
                <h3 className="medium black">Flight</h3>
                <h3 className="medium black">A 037</h3>
              </div>
            </div>
            <button
              id="btn"
              style={{
                backgroundColor: "white",
                marginLeft: "30px",
                marginRight: "30px",
                fontSize: "20px",
                fontWeight: "600",
                padding: "10px",
                borderRadius: "30px",
                marginBottom: "20px",
              }}
              onClick={handlebutton}
            >
              Confirm Payment
            </button>
          </div>
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
  #main {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 3.5fr 1.5fr;
    grid-gap: 50px;
  }
  #card {
    background-color: #3f8de3;
    border: 4px solid #3f8de3;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
  }
  #paymentMode {
    border: 4px solid #1071db;
    /* height: 50vh; */
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  #paymentImages {
    display: flex;
    gap: 20px;
  }
  #paymentImages img {
    width: 100px;
  }
  .paymentIcon {
    border: 2px solid gray;
    padding: 20px;
    border-radius: 15px;
  }
  .readables {
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
  }
  .inputs {
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 15px;
    padding: 5px;
    font-weight: 700;
    padding-left: 20px;
    height: 40px;
    :focus {
      outline: none;
    }
  }
  input {
    :focus {
      outline: none;
    }
    font-weight: 700;
    font-size: 15px;
  }

  .black {
    color: black;
    font-weight: 600;
  }
  .btn {
    color: white;
    padding: 10px;
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    border: 2px solid #1071db;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .large {
    font-size: 30px;
    color: white;
  }
  .white {
    color: white;
    font-weight: 600;
  }
  .medium {
    font-size: 25px;
  }
`;
