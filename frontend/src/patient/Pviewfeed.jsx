import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Psidenav from "../components/Psidenav";
import axios from "axios";

const Pviewfeed = () => {

  const[feedback,setFeedback] = useState([]);

  const navigate = useNavigate();

  async function getfeed() {
    const response = await axios.get(`http://localhost:8000/api/feed/u/${localStorage.getItem("patient")}`)
    console.log(response)
    if (response.data.msg == "Success") {
      setFeedback(response.data.value);
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
    getfeed();
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
          <h4 className="my-5 text-center">View Feedback</h4>

             <div className="row">
            <div className="col-md-8 p-5 rounnded shadow-lg mx-auto table-responsive">
              <table className="table table-dark">
                <thead className="bg-dark">
                  <tr>
                    <th>S.no</th>
                    <th>Feed Type</th>
                    <th>Message</th>
                    <th>Delete</th>  
                  </tr>
                 
                </thead>
                <tbody>
                  {
                    feedback.map((f,i)=>(
                      <tr>
                      <td>{i+1}</td>
                      <td>{f.type}</td>
                      <td>{f.msg}</td>
                      <td>Delete</td>
                      
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

export default Pviewfeed;
