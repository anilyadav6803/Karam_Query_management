import React from "react";
import Navbar from "../component/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        className="inner-img"
        role="img"
        style={{
          backgroundImage:
            'url("https://www.karam.in/sites/default/files/2023-04/contact-banner.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 banner-height d-flex align-items-center">
              <div className="inner-banner-content text-white">
                <ol className="breadcrumb"></ol>
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reach out to us Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Reach out to us</h2>
        <p className="text-center">
          Connect with KARAM and let us help you achieve workplace safety.
        </p>
        <p className="text-center">
          Toll Free No: <a href="tel:18001037085">1800-103-7085</a> <br />
          Write to us: <a href="mailto:karam@karam.in">karam@karam.in</a>
        </p>
      </div>

      {/* Map and Office Information */}
      <div className="container">
        <div className="row">
          {/* Map Section */}
          <div className="col-md-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279914607!2d-74.25986425137385!3d40.69714940022665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21a32b3685d96e2f!2sCorporate%20Office!5e0!3m2!1sen!2sin!4v1626114484932!5m2!1sen!2sin"
              width="100%"
              height="400px"
              allowFullScreen=""
              loading="lazy"
              title="Corporate Office Map"
            ></iframe>
          </div>

          {/* Office Details */}
          <div className="col-md-4">
            <h4>Corporate Office</h4>
            <p>
              D-95, Sector - 2, Noida, Uttar Pradesh - 201301 <br />
              Toll Free No: <a href="tel:18001037085">1800-103-7085</a> <br />
              Phone: +91 120 4734400 <br />
              Email: <a href="mailto:karam@karam.in">karam@karam.in</a>
            </p>
            <h4>Ahmedabad Regional Office</h4>
            <p>
              501-502, Earth Arise, Nr. YMCA Club, SG Highway, Ahmedabad -
              380051 Gujarat, India <br />
              Phone: +91 79 40303465 <br />
              Email: <a href="mailto:karam@karam.in">karam@karam.in</a>
            </p>
            <h4>Bangalore Regional Office</h4>
            <p>
              Solus, Unit No: 5th, 5th Floor, No: 2 1st Cross, J.C Road,
              Bangalore - 560 027 Karnataka, India <br />
              Phone: +91 080 42678000 <br />
              Email: <a href="mailto:karam@karam.in">karam@karam.in</a>
            </p>
          </div>
        </div>
      </div>

      {/* General Inquiry Section */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <h5>General Enquiry</h5>
           
            <a href="/general-enquiry">
  <i className="fas fa-question-circle fa-3x" style={{ color: 'black' }}></i>
</a>

            
          </div>
          <div className="col-md-4">
            <h5>Complaint</h5>
            <a href="/complaint">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/complaint.png"
                alt="Complaint"
              />
            </a>
          </div>
          <div className="col-md-4">
            <h5>Feedback</h5>
            <a href="/feedback">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/feedback.png"
                alt="Feedback"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>KARAM Corporate Office</h5>
              <p>
                D-95, Sector - 2, Noida, Uttar Pradesh - 201301 <br />
                Phone: +91 120 4734400 <br />
                Toll Free No:{" "}
                <a href="tel:18001037085" className="text-white">
                  1800-103-7085
                </a>{" "}
                <br />
                Email:{" "}
                <a href="mailto:karam@karam.in" className="text-white">
                  karam@karam.in
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/press-coverage" className="text-white">
                    Press Coverage
                  </a>
                </li>
                <li>
                  <a href="/news-events" className="text-white">
                    News & Events
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4  gap-3">
              <h5>Follow Us</h5>
              <ul className="list-unstyled d-flex gap-3 ">
                <li>
                  <a href="https://facebook.com" className="text-white mr-3">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" className="text-white mr-3">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" className="text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            &copy; 2024, All rights reserved by KARAM Safety Pvt. Ltd.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
