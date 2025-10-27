import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Adsidenav from "../components/Adsidenav";
import axios from "axios";

const AdminDash = () => {
  const [stats, setStats] = useState();

  const navigate = useNavigate();

  async function getall() {
    const response = await axios.get("http://localhost:8000/api/admin/stats");
    console.log(response);
    if (response.data.msg == "Success") {
      setStats(response.data.value);
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
    getall();
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
          <h4 className="my-5 text-center">Dashboard</h4>

          <div className="row ">
            <div className="col-md-11 mx-auto py-5 ">

              <div className="row row-cols-1 row-cols-md-4 g-4 ">
                <div className="col">
                  <div className="card h-100 text-dark border-dark">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.d}</h5>
                      <p className="card-text">Doctors</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-dark border-dark">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.p}</h5>
                      <p className="card-text">Patients</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-info border-info">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.a}</h5>
                      <p className="card-text">Appointment</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-warning border-warning">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.pena}</h5>
                      <p className="card-text">Pending Appointment</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-success border-success">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.f}</h5>
                      <p className="card-text">Feedback</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-success border-success">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.s}</h5>
                      <p className="card-text">Suggestion</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-danger border-danger">
                    <div className="card-body">
                      <h5 className="card-title">{stats?.c}</h5>
                      <p className="card-text">Complains</p>
                    </div>
                  </div>  
                </div>
                <div className="col">
                  <div className="card h-100 text-primary border-primary" >
                    <div className="card-body">
                      <h5 className="card-title">{stats?.n}</h5>
                      <p className="card-text">News</p>
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

export default AdminDash;
