import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About KARAM</h5>
            <p>
              KARAM is a global leader in occupational safety, providing certified products and safety solutions to over 100 nations.
              With a focus on innovation and quality, we ensure safety in the most demanding industrial environments.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#services" className="text-light">Services</a></li>
              <li><a href="#products" className="text-light">Products</a></li>
              <li><a href="#about" className="text-light">About Us</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
              <li><a href="#careers" className="text-light">Careers</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p><i className="fas fa-map-marker-alt"></i> 123 Industrial Park, Global City, NY 10001</p>
            <p><i className="fas fa-phone"></i> +1 800 123 456</p>
            <p><i className="fas fa-envelope"></i> info@karam.com</p>

            {/* Social Media Links */}
            <div className="mt-3">
              <a href="https://facebook.com" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" className="text-light me-3"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="text-light me-3"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" className="text-light"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          <p className="mb-0">&copy; 2024 KARAM Safety Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
