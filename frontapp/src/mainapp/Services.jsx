import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Services = () => {
  return (
    <div>
     <Navbar/>
      {/* Hero Section with Large Image */}
      <section
        className="hero text-light text-center py-5"
        style={{
          backgroundImage: `url('https://www.karam.in/sites/default/files/2023-03/service-banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
     
        <div className="container">
          <div className="row">
            <div className="col-lg-12 banner-height">
              <div className="inner-banner-content">
                <ol className="breadcrumb">
                  <li>
                    <a href="/" className="text-light">Home</a>
                  </li>
                  <li className="active"></li>
                </ol>
                <h1 className="display-4">Our Industrial Services</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="services-intro py-5">
        <div className="container">
          <h2 className="text-center pb-4">Empowering Industries with Cutting-Edge Solutions</h2>
          <p className="lead text-center">
            At Karam, we specialize in providing comprehensive industrial services designed to optimize 
            your processes, enhance efficiency, and ensure safety compliance. With our extensive experience, 
            advanced technology, and commitment to excellence, we support businesses across various industries 
            to meet their operational goals effectively.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-5 bg-light">
        <div className="container">
          <h2 className="text-center pb-4">Comprehensive Industrial Solutions</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <img
                  src="https://www.karam.in/sites/default/files/styles/465_330/public/2023-05/training-consultancy-img-01.jpg?itok=VNwOFq8X"
                  alt="Manufacturing Solutions"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Manufacturing Optimization</h5>
                  <p className="card-text">
                    We offer customized solutions that help streamline your manufacturing processes, reduce costs, 
                    and enhance efficiency, ensuring the highest levels of productivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <img
                  src="https://www.karam.in/sites/default/files/styles/465_330/public/2023-06/demo-van-karam_0.jpg?itok=msgtQDfv"
                  alt="Logistics"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Industrial Logistics</h5>
                  <p className="card-text">
                    Our logistics solutions ensure smooth and timely delivery, helping you maintain supply chain 
                    integrity while reducing costs and ensuring timely operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <img
                  src="https://www.karam.in/sites/default/files/styles/543_418/public/2023-06/after-sale-service-home_2.jpg?itok=acNIEnN3"
                  alt="Safety and Compliance"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Safety and Compliance</h5>
                  <p className="card-text">
                    We ensure your operations meet all industry safety standards and regulatory compliance, with 
                    comprehensive audits and safety training to safeguard your workforce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta bg-dark text-light text-center py-5">
        <div className="container">
          <h2>Ready to Take Your Industry to the Next Level?</h2>
          <p>Contact us for customized industrial solutions that improve efficiency, safety, and profitability.</p>
          <a href="#contact" className="btn btn-primary btn-lg mt-3">Get In Touch</a>
        </div>
      </section>
      <Footer/>
    </div>

  );
};

export default Services;
