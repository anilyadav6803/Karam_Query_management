import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import aboutBanner from '../component/img/KARAM-Volunteers-Supporting-Education.jpg'
import Slider from '../component/Slider'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Slider/>

      {/* About Section */}
      <div className='row my-5'>
        <div className='col-md-6 ms-auto'>
          <h4>KARAM: Leading Occupational Safety Solutions</h4>
          <p>KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified 
            products conforming to multiple national and international standards and exporting our safety solutions 
            to over 100 nations.
          </p>
          <p>KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified 
            products conforming to multiple national and international standards and exporting our safety solutions 
            to over 100 nations.
          </p>
        </div>
        <div className='col-sm-4 me-auto my-auto'>
          <img src={aboutBanner} className='w-100 shadow-lg rounded-pill' alt="About KARAM" />
        </div>
      </div>

      {/* Society Section */}
      <div className='row my-5'>
        <div className='col-sm-4'>
          <img src="https://www.karam.in/sites/default/files/styles/370_187/public/2024-07/Koshika-Foundation-01.jpg?itok=RP35j6_X" className='w-100 shadow-lg rounded-pill' alt="Koshika Foundation" />
        </div>
        <div className='col-md-6'>
          <h4>Society</h4>
          <p>KARAM is a leading global occupational safety brand with a vast portfolio of over 3,500 certified 
            products conforming to multiple national and international standards and exporting our safety solutions 
            to over 100 nations.
          </p>
          <p>KARAM is a leading global occupational safety brand with a vast portfolio of over 3,500 certified 
            products conforming to multiple national and international standards and exporting our safety solutions 
            to over 100 nations.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero bg-dark text-light d-flex align-items-center justify-content-center text-center vh-100">
        <div className="container">
          <h1 className="display-4">Innovative Industrial Solutions</h1>
          <p className="lead">Empowering industries with cutting-edge technology and expertise.</p>
          <a href="#services" className="btn btn-primary btn-lg mt-4">Our Services</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5 text-center bg-light">
        <div className="container">
          <h2 className="pb-3">Why Choose Us</h2>
          <div className="row">
            <div className="col-md-4">
              <i className="fas fa-hard-hat fa-3x text-primary mb-3"></i>
              <h4>Expert Team</h4>
              <p>Our team consists of highly trained professionals with decades of experience in industrial engineering and operations.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-cogs fa-3x text-primary mb-3"></i>
              <h4>Advanced Technology</h4>
              <p>We implement the latest industrial technologies to improve efficiency, safety, and productivity.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-briefcase fa-3x text-primary mb-3"></i>
              <h4>Proven Results</h4>
              <p>Our clients see consistent improvement in their operations through our practical, innovative solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services py-5 text-center">
        <div className="container">
          <h2 className="pb-3">Our Industrial Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow">
                <img src="https://www.karam.in/sites/default/files/styles/465_330/public/2023-06/after-sale-service-home_1.png?itok=D-Wa98rC" className="card-img-top" alt="Manufacturing" />
                <div className="card-body">
                  <h5 className="card-title">Manufacturing Solutions</h5>
                  <p className="card-text">We offer tailored manufacturing solutions that streamline production lines and improve efficiency.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src="https://www.karam.in/sites/default/files/styles/465_330/public/2023-05/training-consultancy-img-01.jpg?itok=VNwOFq8X" className="card-img-top" alt="Logistics" />
                <div className="card-body">
                  <h5 className="card-title">Industrial Logistics</h5>
                  <p className="card-text">Optimizing your logistics chain to reduce cost and delivery time without compromising on quality.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src="https://www.karam.in/sites/default/files/styles/465_330/public/2023-06/demo-van-karam_0.jpg?itok=msgtQDfv" className="card-img-top" alt="Safety and Compliance" />
                <div className="card-body">
                  <h5 className="card-title">Safety and Compliance</h5>
                  <p className="card-text">Ensuring all operations meet regulatory standards and maintain the highest safety protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta py-5 bg-dark text-light text-center">
        <div className="container">
          <h2 className="pb-3">Ready to Transform Your Industry?</h2>
          <p>Contact us today to learn how we can help your business grow and thrive in the competitive industrial landscape.</p>
          {/* Full-Width Get in Touch Button */}
          <div className="d-grid gap-2">
            <a href="#contact" className="btn btn-primary btn-lg mt-3">Get in Touch</a>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default Home
