import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer-modern">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="container">
            <div className="row">
              {/* Company Info with Logo */}
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <div className="footer-brand-section">
                  <Link to="/" className="footer-logo-link">
                    <img 
                      src="/assets/images/2.png" 
                      alt="Meta-MicroDigital Logo" 
                      className="footer-logo-modern"
                    />
                  </Link>
                  <p className="footer-description">
                    Transforming businesses through innovative IT solutions and data-driven digital marketing strategies.
                  </p>
                  <div className="footer-social-links">
                    <a 
                      className="social-link" 
                      href="https://twitter.com/microdigitall"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a 
                      className="social-link" 
                      href="https://facebook.com/microdigitall"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a 
                      className="social-link" 
                      href="https://linkedin.com/company/microdigitall"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a 
                      className="social-link" 
                      href="https://instagram.com/microdigitall"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                <div className="footer-links-section">
                  <h5 className="footer-heading">Quick Links</h5>
                  <ul className="footer-links-list">
                    <li>
                      <Link to="/" className="footer-link">
                        <i className="fas fa-chevron-right"></i>
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="footer-link">
                        <i className="fas fa-chevron-right"></i>
                        <span>About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service" className="footer-link">
                        <i className="fas fa-chevron-right"></i>
                        <span>Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing" className="footer-link">
                        <i className="fas fa-chevron-right"></i>
                        <span>Pricing</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="footer-link">
                        <i className="fas fa-chevron-right"></i>
                        <span>Contact Us</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Services */}
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="footer-links-section">
                  <h5 className="footer-heading">Our Services</h5>
                  <ul className="footer-links-list">
                    <li>
                      <Link to="/service" className="footer-link">
                        <i className="fas fa-chevron-right"></i>
                        <span>Web Development</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service" className="footer-link">
                        <i className="fas fa-chevron-right"></i>
                        <span>Digital Marketing</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service" className="footer-link">
                        <i className="fas fa-chevron-right"></i>
                        <span>SEO Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service" className="footer-link">
                        <i className="fas fa-chevron-right"></i>
                        <span>IT Solutions</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service" className="footer-link">
                        <i className="fas fa-chevron-right"></i>
                        <span>Consulting</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-contact-section">
                  <h5 className="footer-heading">Get In Touch</h5>
                  <p className="footer-contact-intro">
                    Ready to transform your business with digital marketing?
                  </p>
                  <ul className="footer-contact-list">
                    <li className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-info">
                        <span>T-02, A-44 VDS Tower Sec-02<br />Near Sector-15 Metro Station</span>
                      </div>
                    </li>
                    <li className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="contact-info">
                        <a href="tel:+917905682443">+91 7905682443<br/>+91 6396558439</a>
                      </div>
                    </li>
                    <li className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="contact-info">
                        <a href="mailto:info@microdigitall.com">info@microdigitall.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-left">
                <p className="footer-copyright mb-0">
                  &copy; {new Date().getFullYear()} <Link to="/" className="footer-brand-name">Meta-MicroDigital</Link>. All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-right mt-3 mt-md-0">
                <div className="footer-bottom-links">
                  <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
                  <span className="footer-separator">|</span>
                  <Link to="/terms-and-conditions" className="footer-bottom-link">Terms & Conditions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="footer-decoration">
          <div className="footer-wave"></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
