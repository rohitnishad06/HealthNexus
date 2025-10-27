import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  async function userlog(e) {
    e.preventDefault();
    const user = { email, password, role };
    console.log(user);
    if (user.role == "doctor") {
      const response = await axios.post(
        "http://localhost:8000/api/doctor/login",
        user
      );
      if (response.data.msg == "Success") {
        localStorage.setItem("doctor", response.data.id);
        setEmail("");
        setPassword("");
        setRole("");
        navigate("/ddash");
      } else {
        window.alert("Invalid Doctor credencials");
        setPassword("");
      }
    } else if (user.role == "patient") {
      const response = await axios.post(
        "http://localhost:8000/api/patient/login",
        user
      );
      if (response.data.msg == "Success") {
        localStorage.setItem("patient", response.data.id);
        setEmail("");
        setPassword("");
        setRole("");
        navigate("/pdash");
      } else {
        window.alert("Invalid Patient credencials");
        setPassword("");
      }
    } else {
      window.alert("Please select valid role ");
    }
    console.log(user);
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-8 mx-auto p-5 my-5">
          <form
            className="p-5 rounded-4 shadow-lg w-75 mx-auto"
            onSubmit={userlog}
          >
            <h4>Login Form</h4>
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
            <label htmlFor="">Enter Your Password :</label>
            <select
              className="form-control"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">--Select Role--</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
            <br />
            <input type="submit" className="btn btn-primary form-control" />
            <p className="text-center mt-3">
              Don’t have an account?{" "}
              <Link to="/reg" className="text-decoration-none">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
