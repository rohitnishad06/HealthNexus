import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Adsidenav from "../components/Adsidenav";
import axios from "axios";

const Viewpatient = () => {

  const [pat, setpat] = useState([]);

  const navigate = useNavigate();

  const getPat = async () => {
    const response = await axios.get("http://localhost:8000/api/patient");
    if (response.data.msg == "Success") {
      setpat(response.data.value);
    }
  };

  const deletePat = async(id) => {
    const response = await axios.delete(`http://localhost:8000/api/patient/${id}`)
    console.log(response)
    if(response.data.msg == "Success"){
      window.alert("delete Success")
      getPat();
    }else{
      window.alert("something went Worng")
      getPat();
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
    getPat();
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
          <h4 className="my-5 text-center">View Patient</h4>


            <div className="row">
            <div className="col-md-8 p-5 rounnded shadow-lg mx-auto table-responsive">
              <table className="table table-dark">
                <thead className="bg-dark">
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th colSpan={2}>Action</th>
                </thead>
                <tbody>
                  {pat?.map((p, i) => (
                    <tr>
                      <td>{i+1}</td>
                      <td>{p.name}</td>
                      <td>{p.email}</td>
                      <td>{p.number}</td>
                      <td>{p.age}</td>
                      <td>{p.gender}</td>
                      <td ><button className="bg-warning" onClick={() => editDoc(p._id)}>Edit</button></td>
                      <td ><button className="bg-danger" onClick={() => deletePat(p._id)}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default Viewpatient;
