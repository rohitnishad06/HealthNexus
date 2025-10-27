import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Reg = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [altnumber, setAltnumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [bloodgrp, setBloodgrp] = useState("");
  const [address, setAddress] = useState("");

  async function patientReg(e) {
    e.preventDefault();
    const patient = {name,number,altnumber,email,password,gender,age,bloodgrp,address}
    const response = await axios.post("http://localhost:8000/api/patient",patient)
    if (response.data.msg == "Success") {
      window.alert("Registration Success");
      setName("")
      setNumber("")
      setAltnumber("")
      setEmail("")
      setPassword("")
      setGender("")
      setAge("")
      setBloodgrp("")
      setAddress("")
    } else {
      window.alert("something went wrong")
      setPassword("")
    }
  }

  return (
    <div className="row">
      <div className="col-md-8 mx-auto p-5 my-5">
        <form  onSubmit={patientReg} className="p-5 rounded-4 shadow-lg w-75 mx-auto">
          <h4>Patient Registration Form</h4>
          <br />
          <label htmlFor="">Enter Your Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
          <br />
          <label htmlFor="">Enter Your Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <br />
          <label htmlFor="">Enter Your Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
          <br />
          <label htmlFor="">Enter Your Number :</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="form-control"
          />
          <br />
          <label htmlFor="">Enter Your Alternate Number :</label>
          <input
            type="number"
            value={altnumber}
            onChange={(e) => setAltnumber(e.target.value)}
            className="form-control"
          />
          <br />
          <label htmlFor="">Enter Your Age :</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="form-control"
          />
          <br />
          <label
                  htmlFor=""
                >
                  Select Gender :{" "}
                </label>
                <select 
                  value={gender}
                  onChange={(e) => setGender(e.target.value)} className="form-control">
                  <option value="">--Select Gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <br />
          <label
                  htmlFor=""
                  value={bloodgrp}
                  onChange={(e) => setBloodgrp(e.target.value)}
                >
                  Select Blood Group :{" "}
                </label>
                <select className="form-control">
                  <option value="">--Select Blood Group--</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                <br />
                <label htmlFor="">Address :</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                ></textarea>
          <br />
          <input type="submit" value="Register" className="btn btn-primary form-control" />
          <p className="text-center mt-3">
             I have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
              
          </p>
        </form>
      </div>
    </div>
  );
};

export default Reg;
