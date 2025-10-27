import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Adsidenav from "../components/Adsidenav";
import { useState } from "react";
import axios from "axios";

const EditDoc = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [exp, setExp] = useState("");
  const [quali, setQuali] = useState("");
  const [speci, setSpeci] = useState("");
  const [doc,setDoc] = useState({});

  const getDoc = async () => {
    const id = localStorage.getItem('edit');
    const response = await axios.get(`http://localhost:8000/api/doctor/${id}`);
    setDoc(response.data.value);
    setName(response.data.value.name);
    setEmail(response.data.value.email);
    setMobile(response.data.value.mobile);
    setExp(response.data.value.exp);
    setQuali(response.data.value.quali);
    setSpeci(response.data.value.speci);
  };

  const updateDoc = async(e) => {
    e.preventDefault();
    const doc = {name,email,mobile,exp,quali,speci};
    const id = localStorage.getItem('edit');
    const response = await axios.put(`http://localhost:8000/api/doctor/${id}`,doc)
      if (response.data.msg == 'Success') {
        window.alert("update success")
        navigate('/viewDoctor')
      }else{
        window.alert("something went wrong")
        navigate('/viewDoctor')
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
    getDoc();
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
          <h4 className="my-5 text-center">Edit Doctor</h4>

          <div className="row my-4">
            <div className="col-md-8 mx-auto p-5">
              <form onSubmit={updateDoc}className="shadow-lg p-5 rounded-4">
                <h5>Edit Doctor</h5>
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
                <input
                  type="submit"
                  value={"Edit Doctor"}
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

export default EditDoc;
