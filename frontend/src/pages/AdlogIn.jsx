import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const AdlogIn = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  async function adlog(e){
    e.preventDefault();
    const admin = {email,password};
    const response = await axios.post("http://localhost:8000/api/admin/login",admin);
    if(response.data.msg === "Success"){
      localStorage.setItem("admin","admin@gmail.com")
      setEmail("");
      setPassword("");
      navigate('/admindash');
    }else{
      window.alert("something went wrong");
      setPassword("");
    }

  }

  return (
    <div>
      <div className="row">
        <div className="col-md-8 mx-auto p-5 my-5">
            <form className='p-5 rounded-4 shadow-lg w-75 mx-auto' onSubmit={adlog}>
                <h4>Admin Login Form</h4>
                <br />
                <label htmlFor="">Enter Your Email :</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' />
                <br />
                <label htmlFor="">Enter Your Password :</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
                <br />
                <input type="submit" className='btn btn-primary form-control' />
            </form>
        </div>
      </div>
    </div>
  )
}

export default AdlogIn