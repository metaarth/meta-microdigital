import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsOpen(false)
        setIsDropdownOpen(false)
      }
    }
    const handleClickOutside = (e) => {
      if (isDropdownOpen && !e.target.closest('.dropdown')) {
        setIsDropdownOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isDropdownOpen])

  return (
    <div className="container-fluid nav-bar p-0">
      <div className="container-lg p-0">
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
          <Link to="/" className="navbar-brand">
            <img 
              src="/assets/images/3.png" 
              alt="Meta-MicroDigital Logo"
            />
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`}>
            <div className="navbar-nav mx-auto py-0">
              <Link
                to="/"
                className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/service"
                className={`nav-item nav-link ${isActive('/service') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className={`nav-item nav-link ${isActive('/pricing') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <div className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsDropdownOpen(!isDropdownOpen)
                  }}
                >
                  Blogs
                </a>
                <div className={`dropdown-menu border-0 rounded-0 m-0 ${isDropdownOpen ? 'show' : ''}`}>
                  <Link 
                    to="/blog/oliver-apparels-success" 
                    className="dropdown-item" 
                    onClick={() => {
                      setIsOpen(false)
                      setIsDropdownOpen(false)
                    }}
                  >
                    Oliver Apparels Success
                  </Link>
                  <Link 
                    to="/blog/as-reality-lead-generation" 
                    className="dropdown-item" 
                    onClick={() => {
                      setIsOpen(false)
                      setIsDropdownOpen(false)
                    }}
                  >
                    AS Reality Lead Generation
                  </Link>
                  <Link 
                    to="/blog/rakesh-tour-travels-website" 
                    className="dropdown-item" 
                    onClick={() => {
                      setIsOpen(false)
                      setIsDropdownOpen(false)
                    }}
                  >
                    Rakesh Tour & Travels
                  </Link>
                  <Link 
                    to="/blog/kresha-fashion-growth" 
                    className="dropdown-item" 
                    onClick={() => {
                      setIsOpen(false)
                      setIsDropdownOpen(false)
                    }}
                  >
                    Kresha Fashion Growth
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
