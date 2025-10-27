import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Adsidenav from "../components/Adsidenav";
import axios from "axios";

const Adddoctor = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [exp, setExp] = useState("");
  const [quali, setQuali] = useState("");
  const [speci, setSpeci] = useState("");
  const [address, setAddress] = useState("");

  async function docreg(e) {
    e.preventDefault();
    const doc = {
      name,
      email,
      mobile,
      password,
      gender,
      exp,
      quali,
      speci,
      address,
    };
    const response = await axios.post("http://localhost:8000/api/doctor", doc);
    console.log(response);
    if (response.data.msg == "Success") {
      window.alert("register Success");
      setName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setGender("");
      setExp("");
      setQuali("");
      setSpeci("");
      setAddress("");
    } else {
      window.alert("Something went wrong");
      setPassword("");
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
          <h4 className="my-5 text-center">Add Doctor</h4>

          <div className="row my-4">
            <div className="col-md-8 mx-auto p-5">
              <form onSubmit={docreg} className="shadow-lg p-5 rounded-4">
                <h5>Add Doctor</h5>
                <br />
                <label htmlFor="">Enter Name : </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control rounded-pill px-3"
                />
                <br />
                <label htmlFor="">Enter Mobile : </label>
                <input
                  type="number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="form-control rounded-pill px-3"
                />
                <br />
                <label htmlFor="">Enter Email : </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control rounded-pill px-3"
                />
                <br />
                <label htmlFor="">Enter Password : </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control rounded-pill px-3"
                />
                <br />
                <label
                  htmlFor=""
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  Select Gender :{" "}
                </label>
                <select className="form-control rounded-pill px-3">
                  <option value="">--Select Gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <br />
                <label htmlFor="">Qualification :</label>
                <input
                  type="text"
                  value={quali}
                  onChange={(e) => setQuali(e.target.value)}
                  className="form-control rounded-pill px-3"
                />
                <br />
                <label htmlFor="">Experience :</label>
                <input
                  type="text"
                  value={exp}
                  onChange={(e) => setExp(e.target.value)}
                  className="form-control rounded-pill px-3"
                />
                <br />
                <label htmlFor="">Speciality :</label>
                <input
                  type="text"
                  value={speci}
                  onChange={(e) => setSpeci(e.target.value)}
                  className="form-control rounded-pill px-3"
                />
                <br />
                <label htmlFor="">Address :</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control rounded-pill px-3"
                ></textarea>
                <br />
                <input
                  type="submit"
                  value={"Add Doctor"}
                  className="form-control btn btn-primary"
                />
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Adddoctor;
