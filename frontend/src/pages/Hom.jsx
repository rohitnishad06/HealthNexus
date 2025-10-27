import React from "react";
import { Link } from "react-router-dom";

const Hom = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="#">
          Health Nexus
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/patient">
                Patient Dash
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctor">
                Doctor Dash
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin Dash
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login/Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className="jumbotron text-center bg-info text-white">
        <h1 className="display-4">Welcome to Health Nexus</h1>
        <p className="lead">Manage your health easily and securely</p>
        <a href="#" className="btn btn-primary m-2">
          Find a Doctor
        </a>
        <a href="#" className="btn btn-success m-2">
          Book Appointment
        </a>
      </section>

      <div className="container my-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Check Symptoms</h5>
                <p className="card-text">Access expert tools and recommendations.</p>
                <a href="#" className="btn btn-info">
                  Go
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">My Appointments</h5>
                <p className="card-text">View and manage all appointments here.</p>
                <a href="#" className="btn btn-info">
                  Go
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Health Articles</h5>
                <p className="card-text">Learn about health, wellness, and news.</p>
                <a href="#" className="btn btn-info">
                  Go
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Book an Appointment</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="form-group col-md-6">
              <input type="date" className="form-control" />
            </div>
          </div>
          <input type="text" className="form-control mb-3" placeholder="Reason" />
          <button type="submit" className="btn btn-primary btn-block">
            Book Now
          </button>
        </form>
      </div>

      <footer className="bg-dark text-white text-center py-3">
        <small>&copy; 2025 Health Nexus. All rights reserved. | Privacy Policy</small>
      </footer>
    </div>
  );
};

export default Hom;
