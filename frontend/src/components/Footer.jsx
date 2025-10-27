import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-primary text-white pt-5 pb-3">
        <div className="container">
          <div className="row">
            {/* Column 1: About Us */}
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">About Us</h6>
              <ul className="list-unstyled small">
                <li>About Us</li>
                <li>Acadmics</li>
                <li>Awards</li>
                <li>Community Services</li>
                <li>Blogs</li>
                <li>Brochures</li>
                <li>Feedback</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>

            {/* Column 2: Centres of Excellence */}
            <div className="col-md-3">
              <h6 className="fw-bold mb-3">Centres of Excellence</h6>
              <ul className="list-unstyled small">
                <li>Cancer Centre</li>
                <li>Bone Marrow Transplant</li>
                <li>Heart & Vascular Institute</li>
                <li>Digestive & Liver Diseases</li>
                <li>Neurosciences</li>
                <li>Renal Sciences & Kidney Transplant</li>
                <li>Orthopaedics & Sports Medicine</li>
                <li>Chest & Respiratory Diseases</li>
                <li>Plastic & Cosmetic Surgery</li>
                <li>Child Health</li>
                <li>Women Health</li>
                <li>Critical Care</li>
              </ul>
            </div>

            {/* Column 3: Specialities */}
            <div className="col-md-3">
              <h6 className="fw-bold mb-3">Specialities</h6>
              <ul className="list-unstyled small">
                <li>Oncology</li>
                <li>Cardiology</li>
                <li>Neurology</li>
                <li>Haematology</li>
                <li>Orthopaedics</li>
                <li>Nephrology</li>
                <li>Gastroenterology</li>
                <li>General Surgery</li>
                <li>Gynecology</li>
                <li>ENT</li>
                <li>Internal Medicine</li>
                <li>Transplants</li>
              </ul>
            </div>

            {/* Column 4: Find a Doctor */}
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Find a Doctor</h6>
              <ul className="list-unstyled small">
                <li>Orthopaedic in Delhi</li>
                <li>Cardiologist in Delhi</li>
                <li>Neurologist in Delhi</li>
                <li>Gynecologist in Delhi</li>
                <li>Urologist in Delhi</li>
                <li>Oncologist in Delhi</li>
                <li>ENT Specialist</li>
              </ul>
            </div>

            {/* Column 5: Quick Links */}
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled small">
                <li>Patient Portal</li>
                <li>Contact Us</li>
                <li>Find Your Doctor</li>
                <li>Patient Stories</li>
                <li>Online Payment</li>
                <li>Compliance</li>
                <li>News</li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="text-center mt-4">
            <h6 className="fw-bold">Follow Us</h6>
            <div className="d-flex justify-content-center gap-3 fs-5">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>

          <p className="text-center small mt-3 mb-0">
            © Health Name Super Specialty Hospital, 2025 | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
