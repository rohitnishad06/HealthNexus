import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Psidenav from "../components/Psidenav";
import axios from 'axios';

const Preqapp = () => {

  const[doctors, setDoctors] = useState([]);
  const[spe, setSpe] = useState("")
  const[fdoc, setFdoc] = useState([]);
  const[did,setDid] = useState("");
  const[pid,setPid] = useState("");
  const[date,setDate] = useState("");
  const[slot,setSlot] = useState("");
  const[desc,setDesc] = useState("");
  
  const navigate = useNavigate();

  async function reqapp(e) {
    e.preventDefault();
    const appdata = {did,pid,date,slot,desc}
    const response = await axios.post("http://localhost:8000/api/app",appdata)
    if (response.data.msg == "Success") {
      window.alert("Appointmnet request has sent ")
      setSpe("")
      setDid("")
      setSlot("")
      setDate("")
      setDesc("")
    } else {
      window.alert("something went wrong")
      setSlot("")
      setDate("")
      setDesc("")
    }
  }

  async function getDoc() {
    const response = await axios.get("http://localhost:8000/api/doctor")
    if (response.data.msg=="Success") {
      setDoctors(response.data.value)
      setFdoc(response.data.value)
    } 
  }

  function filterDoc(e) {
      setSpe(e.target.value);
      console.log(e.target.value);
      const doc = doctors.filter((d) => {
        return d.speci == e.target.value;
      })
      setFdoc(doc)
    }

  function validation() {
    const data = localStorage.getItem("patient");
    if (data == null) {
      navigate("/login");
    }
    else{
      setPid(data)
    }
  }

  useEffect(() => {
    validation();
    getDoc();
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
          <h4 className="my-5 text-center"> Request Appointment</h4>

            <div className="row my-4">
            <div className="col-md-8 mx-auto p-5">
              <form onSubmit={reqapp} className="shadow-lg p-5 rounded-4">
                <h5>Appointment</h5>

                <br />
                <label
                  htmlFor=""
                  >
                  Select Speciality :{" "}
                </label>
                <select onChange={filterDoc} className="form-control rounded-pill px-3">
                  <option value="">--Select Speciality--</option>
                
                    <option value="neurologist">Neurologist</option>
                    <option value="cardiologist">Cardiologist</option>
                    <option value="orthopedic">Orthopedic</option>
                  
                </select>
                <br />
                <label
                  htmlFor=""
                  >
                  Select Doctor :{" "}
                </label>
                <select className="form-control rounded-pill px-3" value={did} onChange={(e) => setDid(e.target.value)}>
                  <option value="">--Select Doctor--</option>
                 
                  {
                   fdoc.map((d,i) => (
                    <option value={d._id}> Dr. {d.name} / {d.speci}</option>
                    
                   ))
                  }
                  
                </select>
                <br />
                <label htmlFor="">Enter Date : </label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="form-control rounded-pill px-3"
                />
                <br />
                <label
                  htmlFor=""
                  >
                  Select Slot :{" "}
                </label>
                <select className="form-control rounded-pill px-3" value={slot} onChange={(e) => setSlot(e.target.value)}>
                  <option value="">--Select Slot--</option>
                  <option value="morning">Morning (9am - 1pm)</option>
                  <option value="aftrenoon">Afternoon (1pm - 4pm)</option>
                  <option value="evening">Evening (4pm - 8pm)</option>
                </select>
                <br />
                <label htmlFor="">Describe Your Problem :</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="form-control rounded-pill px-3"
                ></textarea>
                <br />
                <input
                  type="submit"
                  value={"Request Appointment"}
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

export default Preqapp;
