import React, { useState } from "react";
import styled from "styled-components";
import flightimage from "../image/p1.jpg";
import { MakeABooking } from "../Components/MakeABooking";
import { Details } from "../Components/Details";
import { useNavigate } from "react-router-dom";

export const PassangerInfo = () => {
  const data = JSON.parse(localStorage.getItem("price")) || {};
  const [local, setlocal] = useState({})
  const [gender, setgender] = useState("")
  const [title, settitle] = useState("")
  const [name, setname] = useState("")
  const [surname, setsurname] = useState("")
  const [day, setday] = useState("")
  const [month, setmonth] = useState("")
  const [year, setyear] = useState("")
  const [country, setcountry] = useState("")
  const [name1, setname1] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [number, setnumber] = useState("")
  console.log(data);
  const navigate = useNavigate()
  const handleClick = () => {
    let obj = {
      gender,
      title,
      name,
      surname,
      day,
      month,
      year,
      country,
      name1,
      lastname,
      email,
      number
    }
    for (let key in obj) {
      if (obj[key] === "") {
        alert("Please fill all the Details")
        return
      }
    }
    alert("Proceed To payment")
    navigate("/payments")
  }
  return (
    <DIV>
      <div style={{ marginLeft: "18vh", marginRight: "18vh" }}>
        <MakeABooking />
        <h2
          style={{
            textAlign: "left",
            fontSize: "30px",
            fontWeight: "600",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Passenger Information
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3.5fr 1.5fr",
            columnGap: "20px",
          }}
        >
          <form>
            <div id="Passengerinfo">
              <h2 className="heading">
                1.{" "}
                <span className="a">
                  Passengers Details: <span>Adult</span>
                </span>
              </h2>
              {/* <Details /> */}
              {/*  */}
              <BOX style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div id="maininfo" >
                  <div style={{display:"flex"}}>
                    <h2 className="readables">Gender</h2>
                    <h2 className="readables">Title</h2>
                    <h2 className="readables">Name</h2>
                    <h2 className="readables">Surname</h2>
                  </div>

                  <select className="inputs" value={gender} onChange={(e) => setgender(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <select className="inputs" value={title} onChange={(e) => settitle(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                  </select>
                  <input type="text" className="inputs" value={name} onChange={(e) => setname(e.target.value)} />
                  <input type="text" className="inputs" value={surname} onChange={(e) => setsurname(e.target.value)} />
                </div>

                <h2 className="readables">Date Of Birth</h2>
                <div id="dob">
                  <select className="inputs" value={day} onChange={(e) => setday(e.target.value)}>
                    <option value="1">Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <select className="inputs" value={month} onChange={(e) => setmonth(e.target.value)}>
                    <option value="">Month</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <select className="inputs" value={year} onChange={(e) => setyear(e.target.value)}>
                    <option value="1">Year</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                </div>
                <h2 className="readables">Nationality</h2>
                <select className="inputs" style={{ width: "200px" }} value={country} onChange={(e) => setcountry(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Indian">India</option>
                  <option value="American">America</option>
                  <option value="British">British</option>
                  <option value="Australian">Australian</option>
                  <option value="Canadian">Canadian</option>
                </select>
                {/* <h2 className="readables">Other Services</h2>
      <select
        style={{ width: "300px", marginBottom: "20px" }}
        className="inputs"
      >
        <option value="">Select</option>
      </select> */}
              </BOX>

              {/*  */}

              <h2 className="heading">
                1.{" "}
                <span className="a">
                  Passengers Details: <span>Children</span>
                </span>
              </h2>
              <Details />
            </div>
          </form>
          <div id="ticket">
            <h2 className="heading" style={{ textAlign: "center" }}>
              Flight Summary
            </h2>
            <div
              className="space"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom: "1px solid white",
                paddingBottom: "10px",
              }}
            >
              <h2 className="readables black">From</h2>
              <h1></h1>
              <h2 className="readables black">To</h2>
              <h1 style={{ fontSize: "30px" }}>IsI</h1>
              <h1 style={{ color: "black" }}>✈</h1>
              <h1 style={{ fontSize: "30px" }}>LHR</h1>
              <h2 className="readables white">Amsterdam</h2>
              <h2 className="readables white">London</h2>
            </div>
            <div
              className="space"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom: "2px dashed white",
                paddingBottom: "10px",
              }}
            >
              <h2 className="readables black">Date</h2>
              <h2 className="readables black">Bording Time</h2>
              <h1 className="medium">26 Oct,2022</h1>
              <h1 className="medium">07:40</h1>
              <h2 className="readables white">Friday</h2>
            </div>
            <div
              className="space"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom: "2px dashed white",
                paddingBottom: "10px",
              }}
            >
              <h2 className="readables black">Return Date</h2>
              <h2 className="readables black">Bording Time</h2>
              <h1 className="medium">26 Nov,2022</h1>
              <h1 className="medium">09:00</h1>
              <h2 className="readables white">Monday</h2>
            </div>

            <div
              className="space"
              style={{
                borderBottom: "2px dashed white",
                paddingBottom: "10px",
              }}
            >
              <h2 className="readables black">Passengers</h2>
              <h1 className="medium">3 Adult,2 Children</h1>
            </div>
            <div
              className="space"
              style={{
                borderBottom: "2px dashed white",
                paddingBottom: "10px",
              }}
            >
              <h2 className="readables black">Class</h2>
              <h1 className="medium">Business Class</h1>
            </div>
            <div
              className="space"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                paddingBottom: "10px",
              }}
            >
              <h2 className="readables black">Flight</h2>
              <img
                style={{ width: "100px", lineHeight: "0" }}
                src={data.image}
                alt=""
              />
              <h2 className="readables black">Gate</h2>
              <h1 className="medium">A 0137</h1>
              <h1></h1>
              <h1 className="medium">47</h1>
              <div>
                <h2 className="readables black">Seat</h2>
                <h1 className="medium">24 A</h1>
              </div>
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              <img
                style={{ width: "100%", height: "50px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvXp_P2Hn8pQ6ryDKsvYI2v9mGZvFqc16vcbjiA2yeG62MWJwfbEMiiLQpWkeYFZWSA0&usqp=CAU"
                alt=""
              />
            </div>
          </div>

          <div>
            <h2
              style={{
                textAlign: "left",
                fontSize: "30px",
                fontWeight: "600",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Contact Information
            </h2>
            <form>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: "20px",
                }}
              >
                <h2 className="readables">Name</h2>
                <h2 className="readables">Surname</h2>
                <input type="text" className="inputs" value={name1} onChange={(e) => setname1(e.target.value)} />
                <input type="text" className="inputs" value={lastname} onChange={(e) => setlastname(e.target.value)} />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: "20px",
                }}
              >
                <h2 className="readables">Phone Number</h2>
                <h2 className="readables">Email</h2>
                <input type="number" className="inputs" placeholder="+91" value={number} onChange={(e) => setnumber(e.target.value)} />
                <input type="email" className="inputs" value={email} onChange={(e) => setemail(e.target.value)} />
              </div>
            </form>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <button style={{ color: "black" }} className="btn">
            Back
          </button>
          <button onClick={handleClick} style={{ backgroundColor: "#1071db" }} className="btn">
            Next
          </button>
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
  #Passengerinfo {
    padding: 20px;
  }
  form {
    border-radius: 10px;
    border: 2px solid #1071db;
    text-align: left;
    padding: 20px;
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
    font-weight: 600;
  }
  .black {
    color: black;
  }
  .inputs:focus {
    outline: none;
  }

  .heading {
    font-size: 20px;
    margin-top: 10px;
  }
  .a {
    font-weight: 700;
  }
  .a > span {
    font-weight: 400;
  }
  #ticket {
    /* border: 2px solid #1071db; */
    border-radius: 10px;
    background-color: #3f8de3;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
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
  }
  .space {
    padding-left: 40px;
    /* padding-right: 30px; */
  }
  .medium {
    font-size: 20px;
  }
`;


const BOX = styled.div`
  #maininfo {
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr 1.5fr;
    column-gap: 15px;
  }
  .inputs {
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 15px;
    padding: 5px;
    font-weight: 600;
  }
  select {
    color: gray;
  }
  .inputs:focus {
    outline: none;
  }
  .readables {
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
  }
  #dob {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 15px;
  }
`;