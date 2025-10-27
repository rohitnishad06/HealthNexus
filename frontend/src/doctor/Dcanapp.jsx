import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dsidenav from "../components/Dsidenav";
import axios from "axios";

const Dcanapp = () => {

  const[appointment,setAppointment] = useState([]);
  const navigate = useNavigate();

  async function getapp() {
    const response = await axios.get(`http://localhost:8000/api/app/d/${localStorage.getItem('doctor')}`)
    if(response.data.msg == 'Success'){
      const alldata = response.data.value;
      const newdata = alldata.filter((d) => {
        return d.status == 'cancelled'
      })
      setAppointment(newdata);
    }
  }

  function validation() {
    const data = localStorage.getItem("doctor");
    console.log(data)
    if (data == null) {
      navigate("/login");
    }
  }

  useEffect(() => {
    validation();
    getapp();
  }, []);

  return (
    <>
      <div className="row" style={{ height: "8vh", background: "lightgrey" }}>
        <div className="col-4 my-auto">
          <h4>Doctor Dashboard</h4>
        </div>
        <div className="col-2 pe-3 my-auto ms-auto text-end">
          <button
            onClick={() => {
              localStorage.removeItem("doctor");
              validation();
            }}
            className="btn btn-sm btn-outline-danger"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="row p-4" style={{ height: "92vh", background: "grey" }}>
        <Dsidenav/>
        <div
          className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg"
          style={{ overflow: "auto" }}
        >
          <h4 className="my-5 text-center">Cancelled Appointment</h4>


             <div className="row">
            <div className="col-md-8 p-5 rounnded shadow-lg mx-auto table-responsive">
              <table className="table table-dark">
                <thead className="bg-dark">
                  <tr>
                    <th>S.no</th>
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

export default Dcanapp;
