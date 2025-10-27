import React from 'react'
import { Link } from 'react-router-dom'

const Adsidenav = () => {
  return (
    <>
    <div className="col-2 h-100 pe-5" style={{overflow:"auto"}}>
          <div className="row h-100 bg-light rounded-4 pt-5">
            <ul type="none">
              <li>
                <Link to={'/admindash'} className="nav-link bg-white py-2 ps-3 rounded-start my-2">Dashboard</Link>
                <Link to={'/adddoctor'} className="nav-link bg-white py-2 ps-3 rounded-start my-2">Add Doctor</Link>
                <Link to={'/viewDoctor'} className="nav-link bg-white py-2 ps-3 rounded-start my-2">View Doctor</Link>
                <Link to={'/addpatient'} className="nav-link bg-white py-2 ps-3 rounded-start my-2">Add Patient</Link>
                <Link to={'/viewpatient'} className="nav-link bg-white py-2 ps-3 rounded-start my-2">View Patient</Link>
                <Link to={'/viewappointment'} className="nav-link bg-white py-2 ps-3 rounded-start my-2">View Appointment</Link>
                <Link to={'/viewfeedback'} className="nav-link bg-white py-2 ps-3 rounded-start my-2">View Feedback</Link>
                <Link to={'/addnews'} className="nav-link bg-white py-2 ps-3 rounded-start my-2">Add News</Link>
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Adsidenav