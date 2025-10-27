import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Adsidenav from "../components/Adsidenav";
import axios from "axios";

const Addpatient = () => {
  const navigate = useNavigate();

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
      window.alert("Patient Added");
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

  function validation() {
    const data = localStorage.getItem("admin");
    if (data !== "admin@gmail.com") {
      navigate("/admin");
    }
  }

  useEffect(() => {
    validation();
  }, []);

  return (
    <>
      <div className="row" style={{ height: "8vh", background: "lightgrey" }}>
        <div className="col-4 my-auto">
          <h4>Admin Dashboard</h4>
        </div>
        <div className="col-2 pe-3 my-auto ms-auto text-end">
          <button
            onClick={() => {
              localStorage.removeItem("admin");
              validation();
            }}
            className="btn btn-sm btn-outline-danger"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="row p-4" style={{ height: "92vh", background: "grey" }}>
        <Adsidenav />
        <div
          className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg"
          style={{ overflow: "auto" }}
        >
          <h4 className="my-5 text-center">Add Patient</h4>


            <div className="row my-4">
                  <div className="col-md-8 mx-auto p-5 ">
                    <form  onSubmit={patientReg} className="p-5 rounded-4 shadow-lg  mx-auto">
                      <h4>Add Patient</h4>
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
                      <input type="submit" value="Add Patient" className="btn btn-primary form-control" />
                      
                    </form>
                  </div>
                </div>


        </div>
      </div>
    </>
  );
};

export default Addpatient;
