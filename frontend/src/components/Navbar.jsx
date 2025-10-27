import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">Health Nexus</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/pdash">Patient Dash</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/ddash">Doctor Dash</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/admindash">Admin</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/login">Login/Register</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Navbar