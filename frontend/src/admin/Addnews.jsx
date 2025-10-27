import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Adsidenav from "../components/Adsidenav";
import axios from "axios";

const Addnews = () => {

  const[title,setTitle] = useState('')
  const[desc,setDesc] = useState("")
  const[news,setNews] = useState([]);

  const navigate = useNavigate();


  async function addnews(e) {
    e.preventDefault();
    const news = {title,desc}
    const response = await axios.post("http://localhost:8000/api/news",news)
    if (response.data.msg == "Success") {
      window.alert("News Addes Success")
      setTitle("");
      setDesc("")
      getnews();
    }
  }

  async function getnews() {
    const response = await axios.get("http://localhost:8000/api/news");
    if(response.data.msg == "Success"){
      setNews(response.data.value)
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
    getnews();
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
          <h4 className="my-5 text-center">Add News</h4>

             <div className="row my-4">
            <div className="col-md-8 mx-auto p-5">
              <form onSubmit={addnews} className="shadow-lg p-5 rounded-4">
                <h5>Add News</h5>
                <br />
                <label htmlFor="">Enter Title : </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control rounded-pill px-3"
                />
                <br />
                <label htmlFor="">Description :</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="form-control rounded-pill px-3"
                ></textarea>
                <br />
                <input
                  type="submit"
                  value={"Add News"}
                  className="form-control btn btn-primary"
                />
              </form>
            </div>
            </div>


            <div className="row">
              <div className="col-md-10 mx-auto my-5 p-5 shadow-lg">
                <h5>View News</h5>
                <br />

                <div class="accordion" id="accordionExample">

                  {
                    news.map((n) =>(
                      <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {n.title}
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    {n.desc}
                  </div>
                </div>
              </div>
                    ))
                  }
              
            </div>


              </div>
            </div>
            


        </div>
      </div>
    </>
  );
};

export default Addnews;
