import React from 'react';
import Navbar from '../component/Navbar';

const Careers = () => {
  return (
    <div>
    <Navbar/>
      {/* Hero Section */}
      <section
        className="hero text-light text-center py-5"
        style={{
          backgroundImage: `url('https://www.karam.in/sites/default/files/2023-03/career-banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="container text-dark">
          <h1>Careers at Karam</h1>
          <p>Join our team of professionals dedicated to occupational safety and excellence.</p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Join Us</h2>
          <div className="row">
            <div className="col-md-6">
              <p>
                Karam was founded on the principle of saving lives through superior occupational safety solutions. We are dedicated to providing a work environment that fosters growth, innovation, and safety.
              </p>
              <p>
                Our team of 4000+ professionals works tirelessly to impact the global safety standards positively. If you are passionate about making a difference, we would love for you to join us.
              </p>
            </div>
            <div className="col-md-6">
              {/* Embed a Video */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/your-video-id"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">What Our Employees Say</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card p-3 shadow-sm">
                <p>
                  "KARAM values work-life balance, recognizing that happy employees are productive employees. They prioritize the well-being of their employees, creating a healthy and sustainable work culture."
                </p>
                <div className="d-flex align-items-center">
                  <img src="https://www.karam.in/sites/default/files/styles/thumbnail/public/2023-04/career-comments-02.jpg?itok=g5fCtjRl" alt="Sharul Saxena" className="rounded-circle me-2" />
                  <div>
                    <strong>Sharul Saxena</strong>
                    <p>International Sales</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card p-3 shadow-sm">
                <p>
                  "KARAM adds a personal touch to everything they do. From personalized safety gear to one-on-one coaching, they go above and beyond to make employees feel valued and cared for, creating a sense of community and loyalty."
                </p>
                <div className="d-flex align-items-center">
                  <img src="https://www.karam.in/sites/default/files/styles/thumbnail/public/2023-04/career-comments-01.jpg?itok=JGRmEfEc" alt="Rahul Jaiswal" className="rounded-circle me-2" />
                  <div>
                    <strong>Rahul Jaiswal</strong>
                    <p>Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Culture at Karam</h2>
          <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="row">
  <div className="col-2">
    <img
      src="https://www.karam.in/sites/default/files/styles/500_372/public/2023-04/emp-gallery-09.jpg?itok=tLfvtVNk"
      className="d-block w-100"
      alt="Culture Slide 1"
    />
  </div>
  <div className="col-2">
    <img
      src="https://www.karam.in/sites/default/files/styles/500_372/public/2023-05/emp-gallery-2.jpg?itok=fi6F0dgX"
      className="d-block w-100"
      alt="Culture Slide 2"
    />
  </div>
  <div className="col-2">
    <img
      src="https://www.karam.in/sites/default/files/styles/500_372/public/2023-05/emp-gallery-3.jpg?itok=a3OXZJFN"
      className="d-block w-100"
      alt="Culture Slide 3"
    />
  </div>
  <div className="col-2">
    <img
      src="https://www.karam.in/sites/default/files/styles/500_372/public/2023-05/emp-gallery-4.jpg?itok=zCZU3AQ7"
      className="d-block w-100"
      alt="Culture Slide 4"
    />
  </div>
  <div className="col-2">
    <img
      src="https://www.karam.in/sites/default/files/styles/500_372/public/2023-05/emp-gallery-5.jpg?itok=bXWcxZBb"
      className="d-block w-100"
      alt="Culture Slide 5"
    />
  </div>
  <div className="col-2">
    <img
      src="https://www.karam.in/sites/default/files/styles/500_372/public/2023-05/emp-gallery-6.jpg?itok=2C9IwSY5"
      className="d-block w-100"
      alt="Culture Slide 6"
    />
  </div>
</div>

              <div className="carousel-item">
                <img src="https://www.karam.in/sites/default/files/styles/500_372/public/2023-05/emp-gallery-2.jpg?itok=fi6F0dgX" className="d-block " alt="Culture Slide 2" />
              </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/1200x400" className="d-block w-100" alt="Culture Slide 3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Career Interest Form */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Career Interest Submission Form</h2>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Applied for the Post of *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Candidate Name *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Email ID *</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Contact No. *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Current Org. Name *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Current Location *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Total Experience *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Expected Salary (CTC) *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-12 mb-3">
                <label>Attach Resume *</label>
                <input type="file" className="form-control" required />
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="captcha" required />
                  <label className="form-check-label" htmlFor="captcha">
                    I'm not a robot
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Apply Now</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2024 Karam. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="/" className="text-light me-3">Privacy Policy</a>
              <a href="/" className="text-light">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Careers;
