import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Adsidenav from "../components/Adsidenav";
import axios from "axios";

const Viewappointment = () => {

  const[appointment,setAppointment] = useState([]);
  const[type,setType] = useState("completed")

  const navigate = useNavigate();


    async function getapp(type) {
    const response = await axios.get(`http://localhost:8000/api/app`)
    if(response.data.msg == 'Success'){
      const alldata = response.data.value;
      const newdata = alldata.filter((d) => {
        return d.status == type;
      })
      setAppointment(newdata);
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
    getapp("completed");
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
          <h4 className="my-5 text-center">View Appointment</h4>


            <div className="row">
            <div className="col-md-8 p-5 rounnded shadow-lg mx-auto table-responsive">

            <div className="my-3  d-flex justify-content-around">
            <button onClick={() => {
              setType("completed");
              getapp("completed")
            }} className={`btn btn-sm ${type=="completed"?"btn-success":"btn-outline-success"}`}>Completed</button>
            <button onClick={() => {
              setType("confirmed");
              getapp("confirmed")
            }} className={`btn btn-sm ${type=="confirmed"?"btn-success":"btn-outline-warning"}`}>Confirmed</button>
            <button onClick={() => {
              setType("pending");
              getapp("pending")
            }} className={`btn btn-sm ${type=="pending"?"btn-success":"btn-outline-primary"}`}>Pending</button>
            <button onClick={() => {
              setType("cancelled");
              getapp("cancelled")
            }} className={`btn btn-sm ${type=="cancelled"?"btn-success":"btn-outline-danger"}`}>Cancelled</button>
            </div>

              <table className="table table-dark">
                <thead className="bg-dark">
                  <tr>
                    <th>S.no</th>
                    <th>Doctor Name</th>  
                    <th>Patient Name</th>  
                    <th>Slot</th>  
                    <th>Date</th>  
                    <th>Desc</th>  
                    <th>Status</th>
                   
                    
                  </tr>
                 
                </thead>
                <tbody>
                  {
                    appointment.map((app,i) => (
                      <tr>
                      <td>{i+1}</td>
                      <td>{app.did.name}</td>
                      <td>{app.pid.name}</td>
                      <td>{app.slot}</td>
                      <td>{app.date}</td>
                      <td>{app.desc}</td>
                      <td>{app.status}</td>
                      
                    </tr>
                    ))
                  }
                    
                  
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Viewappointment;
