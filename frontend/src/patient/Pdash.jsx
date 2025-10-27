import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Psidenav from "../components/Psidenav";
import axios from "axios";

const PDash = () => {

    const [stats, setStats] = useState();
  const navigate = useNavigate();

    async function getall() {
    const response = await axios.get(`http://localhost:8000/api/patient/stats/${localStorage.getItem("patient")}`);
    console.log(response);
    if (response.data.msg == "Success") {
      setStats(response.data.value);
    }
  }

  function validation() {
    const data = localStorage.getItem("patient");
    if (data == null) {
      navigate("/login");
    }
  }

  useEffect(() => {
    validation();
    getall();
  }, []);

  return (
    <>
      <div className="row" style={{ height: "8vh", background: "lightgrey" }}>
        <div className="col-4 my-auto">
          <h4>Patient Dashboard</h4>
        </div>
        <div className="col-2 pe-3 my-auto ms-auto text-end">
          <button
            onClick={() => {
              localStorage.removeItem("patient");
              validation();
            }}
            className="btn btn-sm btn-outline-danger"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="row p-4" style={{ height: "92vh", background: "grey" }}>
        <Psidenav/>
        <div
          className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg"
          style={{ overflow: "auto" }}
        >
          <h4 className="my-5 text-center">Dashboard</h4>


            <div className="row ">
            <div className="col-md-11 mx-auto py-5 ">

              <div className="row row-cols-1 row-cols-md-4 g-4 ">
                <div className="col">
                  <div className="card h-100 text-dark border-dark">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.f}</h5>
                      <p className="card-text">Feedback</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-dark border-dark">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.c}</h5>
                      <p className="card-text">Complain</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-info border-info">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.s}</h5>
                      <p className="card-text">Suggestion</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-warning border-warning">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.a}</h5>
                      <p className="card-text">Appointment</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-success border-success">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.pena}</h5>
                      <p className="card-text">Pending Appointment</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-success border-success">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.cona}</h5>
                      <p className="card-text">Confirmed Appointment</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-danger border-danger">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.coma}</h5>
                      <p className="card-text">Completed Appointment</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-primary border-primary" >
                    <div className="card-body">
                      <h5 className="card-title">{stats?.cana}</h5>
                      <p className="card-text">Cancelled Appointment</p>
                    </div>
                  </div>  
                </div>
                
              </div>

            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default PDash;
