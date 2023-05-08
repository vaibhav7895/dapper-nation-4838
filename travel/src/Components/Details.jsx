import React from "react";
import styled from "styled-components";

export const Details = () => {
  return (
    <DIV style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div id="maininfo">
        <h2 className="readables">Gender</h2>
        <h2 className="readables">Title</h2>
        <h2 className="readables">Name</h2>
        <h2 className="readables">Surname</h2>
        <select className="inputs">
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <select className="inputs">
          <option value="">Select</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
        </select>
        <input type="text" className="inputs" />
        <input type="text" className="inputs" />
      </div>

      <h2 className="readables">Date Of Birth</h2>
      <div id="dob">
        <select className="inputs">
          <option value="1">Day</option>
          <option value="2">3</option>
          <option value="3">3</option>
          <option value="4">5</option>
          <option value="5">5</option>
        </select>
        <select className="inputs">
          <option value="">Month</option>
          <option value="2">3</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select className="inputs">
          <option value="1">Year</option>
          <option value="2">3</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <h2 className="readables">Nationality</h2>
      <select className="inputs" style={{ width: "200px" }}>
        <option value="">Select</option>
        <option value="Indian">India</option>
        <option value="American">America</option>
        <option value="British">British</option>
        <option value="Australian">Australian</option>
        <option value="Canadian">Canadian</option>
      </select>
      <h2 className="readables">Other Services</h2>
      <select
        style={{ width: "300px", marginBottom: "20px" }}
        className="inputs"
      >
        <option value="">Select</option>
      </select>
    </DIV>
  );
};

const DIV = styled.div`
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
