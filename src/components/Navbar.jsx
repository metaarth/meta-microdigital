import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isDropdownOpen])

  return (
    <div className={`dn-wrap ${scrolled ? 'dn-wrap--scrolled' : ''}`}>
      <div className="dn-inner">
        <nav className="dn-nav">
          {/* Logo */}
          <Link to="/" className="dn-logo">
            <img
              src="/assets/images/logo.png"
              alt="Meta MicroDigital Logo"
            />
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            className="dn-toggler"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`dn-toggler-bar ${isOpen ? 'dn-toggler-bar--open' : ''}`} />
          </button>

          {/* Nav links */}
          <div className={`dn-links ${isOpen ? 'dn-links--open' : ''}`}>
            <div className="dn-menu">
              <Link
                to="/"
                className={`dn-link ${isActive('/') ? 'dn-link--active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`dn-link ${isActive('/about') ? 'dn-link--active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/service"
                className={`dn-link ${isActive('/service') ? 'dn-link--active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className={`dn-link ${isActive('/portfolio') ? 'dn-link--active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/pricing"
                className={`dn-link ${isActive('/pricing') ? 'dn-link--active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <div className={`dn-dropdown ${isDropdownOpen ? 'dn-dropdown--open' : ''}`}>
                <a
                  href="#"
                  className="dn-link dn-link--dropdown"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsDropdownOpen(!isDropdownOpen)
                  }}
                >
                  Blogs <span className="dn-caret">▾</span>
                </a>
                <div className={`dn-dropdown-menu ${isDropdownOpen ? 'dn-dropdown-menu--open' : ''}`}>
                  <Link to="/blog/oliver-apparels-success" className="dn-dropdown-item" onClick={() => { setIsOpen(false); setIsDropdownOpen(false) }}>
                    Oliver Apparels Success
                  </Link>
                  <Link to="/blog/as-reality-lead-generation" className="dn-dropdown-item" onClick={() => { setIsOpen(false); setIsDropdownOpen(false) }}>
                    AS Reality Lead Generation
                  </Link>
                  <Link to="/blog/rakesh-tour-travels-website" className="dn-dropdown-item" onClick={() => { setIsOpen(false); setIsDropdownOpen(false) }}>
                    Rakesh Tour & Travels
                  </Link>
                  <Link to="/blog/kresha-fashion-growth" className="dn-dropdown-item" onClick={() => { setIsOpen(false); setIsDropdownOpen(false) }}>
                    Kresha Fashion Growth
                  </Link>
                  <Link to="/blog/gawri-ganga-spiritual-brand" className="dn-dropdown-item" onClick={() => { setIsOpen(false); setIsDropdownOpen(false) }}>
                    Gawri Ganga Spiritual Brand
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                className={`dn-link ${isActive('/contact') ? 'dn-link--active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
            <Link to="/contact" className="dn-cta" onClick={() => setIsOpen(false)}>
              Book a Call
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
