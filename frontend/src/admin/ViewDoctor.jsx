import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Adsidenav from "../components/Adsidenav";
import { useState } from "react";
import axios from "axios";

const Viewdoctor = () => {
  const navigate = useNavigate();

  const [doc, setDoc] = useState([]);

  const getDoc = async () => {
    const response = await axios.get("http://localhost:8000/api/doctor");
    if (response.data.msg == "Success") {
      setDoc(response.data.value);
    }
  };

  const deleteDoc = async(id) => {
    const response = await axios.delete(`http://localhost:8000/api/doctor/${id}`)
    if(response.data.msg == "Success"){
      window.alert("delete Success")
      getDoc();
    }else{
      window.alert("something went Worng")
      getDoc();
    }
  }

  const editDoc = (id) => {
    localStorage.setItem("edit",id)
    navigate('/viewDoctor/edit')
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
          <h4 className="my-5 text-center">View Doctor</h4>

          <div className="row">
            <div className="col-md-8 p-5 rounnded shadow-lg mx-auto table-responsive">
              <table className="table table-dark">
                <thead className="bg-dark">
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Qualification</th>
                  <th>Experience</th>
                  <th>Speciality</th>
                  <th colSpan={2}>Action</th>
                </thead>
                <tbody>
                  {doc?.map((d, i) => (
                    <tr>
                      <td>{i+1}</td>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.mobile}</td>
                      <td>{d.quali}</td>
                      <td>{d.exp}</td>
                      <td>{d.speci}</td>
                      <td ><button className="bg-warning" onClick={() => editDoc(d._id)}>Edit</button></td>
                      <td ><button className="bg-danger" onClick={() => deleteDoc(d._id)}>Delete</button></td>
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

export default Viewdoctor;
