import React from "react";
import s1 from "../component/img/home-slide.jpg";
import s2 from "../component/img/home-slide-02_02.jpg";
import s3 from "../component/img/home-slide-042028129.jpg";
import s4 from "../component/img/home-slide-02_0.jpg";

const Slider = () => {
  return (
    <div className="row bg-dark text-light p-3">
      {/* Text Section */}
      <div className="col-lg-4 col-md-12 hero-text mb-4 mb-md-0">
        <h1>
          Saving <span className="highlight">millions of lives globally</span>
        </h1>
        <p>KARAM is a leading global PPE & Fall Protection solutions brand.</p>
        <button className="btn btn-danger">Learn More</button>

        <div className="action-buttons mt-4">
          <button className="btn btn-danger mx-2">
            <i className="fas fa-shopping-cart"></i> Karam Online product
          </button>
          <button className="btn btn-dark mx-2">
            <i className="fas fa-newspaper"></i> News & Events
          </button>
        </div>
      </div>

      {/* Slider Section */}
      <div className="col-lg-6 col-md-12 d-flex justify-content-center mb-4 mb-md-0">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={s1} className="d-block w-100" alt="Slide 1" />
              <div className="s bg-danger text-center rounded w-50 position-absolute">
                Practical Work 1
              </div>
            </div>
            <div className="carousel-item">
              <img src={s2} className="d-block w-100" alt="Slide 2" />
              <div className="s bg-danger text-center rounded w-50 position-absolute">
                Practical Work 2
              </div>
            </div>
            <div className="carousel-item">
              <img src={s3} className="d-block w-100" alt="Slide 3" />
              <div className="s bg-danger text-center rounded w-50 position-absolute">
                Practical Work 3
              </div>
            </div>
            <div className="carousel-item">
              <img src={s4} className="d-block w-100" alt="Slide 4" />
              <div className="s bg-danger text-center rounded w-50 position-absolute">
                Practical Work 4
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div className="col-lg-2 col-md-12 d-flex justify-content-center align-items-center flex-column mb-4 mb-md-0">
        <p className="fa-brands fs-4 fa-facebook border p-3 rounded-circle mb-2"></p>
        <p className="fa-brands fs-4 fa-instagram border p-3 rounded-circle mb-2"></p>
        <p className="fa-brands fs-4 fa-youtube border p-3 rounded-circle mb-2"></p>
        <p className="fa-brands fs-4 fa-twitter border p-3 rounded-circle mb-2"></p>
      </div>
    </div>
  );
};

export default Slider;
