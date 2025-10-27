
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import findDoc from "../assets/finddoc.jpg";
import myAppoint from "../assets/MyApp.jpg";
import medicin from "../assets/Medic.jpg";
import Speciliti from "../assets/speci.webp";
import bloodcancer from "../assets/BloodCancer.webp";
import headache from "../assets/headache.avif";
import covid from "../assets/covid.jpg";
import Bcancer from "../assets/Bcancer.jpeg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.jpg";
import w1 from "../assets/w1.jpg";

function Home() {
  const navigate = useNavigate();

  const specialities = [
    { icon: "🎗️", title: "Cancer Centre" },
    { icon: "❤️", title: "Heart & Vascular Institute" },
    { icon: "🧬", title: "Institute For Digestive & Liver Diseases" },
    {
      icon: "🦴",
      title:
        "Institute For Bone, Joint Replacement, Orthopedics Spine & Sports Medicine",
    },
    { icon: "🧪", title: "Centre For Bone Marrow Transplant" },
    { icon: "🧠", title: "Centre For Neurosciences" },
    { icon: "🩺", title: "Centre For Renal Sciences & Kidney Transplant" },
    { icon: "🌬️", title: "Centre For Chest & Respiratory Diseases" },
  ];

  function bookApp() {
    navigate("/preqapp");
  }

  return (
    <>
      {/* Hero Section */}
      <header className="bg-light text-center py-2">
        <div className="container">
          <h1 className="display-4">Welcome to Health Nexus</h1>
          <p className="lead">Manage your health easily and securely</p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-success" onClick={bookApp}>
              Book an Appointment
            </button>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center">
            {[
              { title: "Find a Doctor", logo: findDoc },
              { title: "My Appointments", logo: myAppoint },
              { title: "Medicine", logo: medicin },
            ].map((item, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card shadow h-100 p-4 border-0 rounded-4">
                  <div className="mb-3">
                    <img
                      src={item.logo}
                      alt={item.title}
                      style={{ width: "120px", height: "90px" }}
                    />
                  </div>
                  <h5 className="fw-bold">{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialities */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Left Column - Specialities */}
            <div className="col-md-7">
              <h2 className="fw-bold mb-4">Specialities & Procedures</h2>

              <div className="row mt-4">
                {specialities.map((item, index) => (
                  <div
                    key={index}
                    className="col-md-6 mb-3 d-flex align-items-start"
                  >
                    <span className="me-2 fs-5">{item.icon}</span>
                    <p className="mb-0">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="col-md-5 text-center">
              <img
                style={{ height: "300px", width: "300px" }}
                src={Speciliti}
                alt="Hospital Illustration"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-4">Our Facilities</h3>
          <div className="row text-center">
            {[
              { name: "Emergency", icon: "🚑" },
              { name: "Pediatrics", icon: "🧸" },
              { name: "Neurology", icon: "🧠" },
              { name: "Gynecology", icon: "👩‍⚕" },
              { name: "Oncology", icon: "🎗" },
              { name: "Urology", icon: "💧" },
              { name: "Orthopedic", icon: "🦴" },
              { name: "Cardiology", icon: "❤" },
            ].map((facility, idx) => (
              <div key={idx} className="col-md-3 mb-4">
                <div className="p-3 border shadow-sm rounded facility-card">
                  <span style={{ fontSize: "24px" }}>{facility.icon}</span>
                  <p className="mb-0">{facility.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-light py-5 bg-primary">
        <div className="container">
          <h3 className="text-center fw-bold mb-5">What Our Patients Say</h3>
          <div className="row g-4">
            {[
              {
                name: "Prabhakar Singh",
                feedback:
                  "I, Prabhakar Singh, 24, was diagnosed with a large 10L left ovarian cyst. (Dr.) Sunil Kumar Chawla handled my case with great care and professionalism.",
                date: "17/09/2025",
                image: p1,
                rating: 5,
              },
              {
                name: "Ajit Singh Chopra",
                feedback:
                  "Need a consultation regarding your health? I'm always ready to provide you professional health consulting at an affordable price.",
                date: "27/09/2025",
                image: p2,
                rating: 5,
              },
              {
                name: "Rishabh Pant",
                feedback:
                  "Need a consultation regarding your healthcare or diagnosis? I'm always ready to provide you with professional healthcare consulting at an affordable price.",
                date: "27/09/2025",
                image: p3,
                rating: 5,
              },
              {
                name: "Nabarun Das",
                feedback:
                  "My experience under the care of Dr. Sushil Sharma has been nothing short of extraordinary. As a Senior Consultant in Orthopedics and Joint Replacement Surgery, Dr. Sharma's expertise is unmatched. His thorough evaluation and personalized.",
                date: "31/08/2025",
                image: w1,
                rating: 5,
              },
            ].map((t, i) => (
              <div key={i} className="col-md-6">
                <div className="card p-4 shadow-sm h-100">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">{t.name}</h6>
                      <small className="text-muted">Posted on: {t.date}</small>
                    </div>
                  </div>
                  <p className="mb-2">{t.feedback}</p>
                  <div className="text-warning">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-4">Do You Have Questions?</h3>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How to book an appointment?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  You can call us or book online via our prtal.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Are reports available online?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Yes, reports are shared via patient login.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Which insurance do you accept?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  We accept Niva-Bupa, Nexus health Insurance, and Others.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Blogs */}
      <section className="bg-light py-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-4">Health Blogs</h3>
          <div className="row g-4">
            {[
              {
                title: "Understanding Blood Cancer",
                desc: "Know symptoms, treatment, and prevention.",
                image: bloodcancer,
              },
              {
                title: "Migraine Symptoms",
                desc: "How to prevent and manage frequent headaches.",
                image: headache,
              },
              {
                title: "Covid-19 Variants",
                desc: "Latest on virus mutations and vaccines.",
                image: covid,
              },
              {
                title: "Heart Health Tips",
                desc: "Daily habits to keep your heart strong and healthy.",
                image: Bcancer,
              },
            ].map((b, i) => (
              <div key={i} className="col-md-3 col-sm-6">
                <div className="card h-100 shadow-sm border-0">
                  {b.image && (
                    <img
                      src={b.image}
                      alt={b.title}
                      className="card-img-top"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{b.title}</h5>
                    <p className="card-text">{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
