import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isActive = (path) => location.pathname === path
  const logoSrc = theme === 'light' ? '/assets/images/3.png' : '/assets/images/logo.png'

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsOpen(false)
      }
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className={`dn-wrap ${scrolled ? 'dn-wrap--scrolled' : ''}`}>
      <div className="dn-inner">
        <nav className={`dn-nav ${theme === 'light' ? 'dn-nav--brand' : ''}`}>
          {/* Logo */}
          <Link to="/" className="dn-logo">
            <img
              src={logoSrc}
              alt="Meta MicroDigital Logo"
              className={theme === 'light' ? 'dn-logo-img--light' : 'dn-logo-img--dark'}
            />
          </Link>

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

          <button
            type="button"
            className="dn-theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="dn-toggler"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`dn-toggler-bar ${isOpen ? 'dn-toggler-bar--open' : ''}`} />
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
