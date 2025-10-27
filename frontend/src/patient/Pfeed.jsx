import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Psidenav from "../components/Psidenav";
import axios from "axios";

const Pfeed = () => {

  const[type, setType] = useState("");
  const[msg, setMsg] = useState("");

  const navigate = useNavigate()

  async function addfeed(e) {
    e.preventDefault();
    const feed = {uid:localStorage.getItem("patient"), utype:"patient", type , msg , status:"u"};
    const response = await axios.post("http://localhost:8000/api/feed",feed);
    if(response.data.msg == "Success"){
      window.alert("Thanks For Giving Feedback")
      setType("")
      setMsg("");
    }
    else{
      window.alert("Something went wrong")
      setMsg("")
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
          <h4 className="my-5 text-center">Feedback</h4>


            <div className="row my-4">
            <div className="col-md-8 mx-auto p-5">
              <form onSubmit={addfeed}  className="shadow-lg p-5 rounded-4">
                <h5>Add Feedback</h5>

                <br />
                <label
                  htmlFor=""
                  >
                  Select Type :
                </label>
                <select value={type} onChange={(e) => setType(e.target.value)} className="form-control rounded-pill px-3">
                  <option value="">--Select Type--</option>
                  <option value="feedback">Feedback</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="complain">Complain</option>
                  
                </select>
                <br />

                <label htmlFor="">Message :</label>
                <textarea
                  value={msg
                  } onChange={(e) => setMsg(e.target.value)}
                  className="form-control rounded-pill px-3"
                ></textarea>
                <br />
                <input
                  type="submit"
                  value={"Add feedback"}
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

export default Pfeed;
