import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef(null)

  const slides = [
    {
      id: 1,
      image: '/assets/images/carousel-1.jpg',
      subtitle: 'IT & Digital Marketing',
      title: 'Data‑Driven Growth for Modern Brands and Businesses',
      description: 'Transform your business with cutting-edge technology and strategic digital marketing solutions',
      link: '/about',
      linkText: 'Discover More'
    },
    {
      id: 2,
      image: '/assets/images/carousel-2.jpg',
      subtitle: 'Expert Team',
      title: 'Certified IT Experts & Digital Marketing Professionals',
      description: 'Our certified professionals deliver exceptional results with proven expertise in technology and marketing',
      link: '/service',
      linkText: 'Our Services'
    },
    {
      id: 3,
      image: '/assets/images/carousel-3.jpg',
      subtitle: 'Proven Results',
      title: 'Proven ROI & Happy Clients Worldwide',
      description: 'Join hundreds of satisfied clients who have achieved remarkable growth with our solutions',
      link: '/contact',
      linkText: 'Get Started'
    }
  ]

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [slides.length])

  const goToSlide = (index) => {
    setActiveIndex(index)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  const goToPrevious = () => {
    goToSlide((activeIndex - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    goToSlide((activeIndex + 1) % slides.length)
  }

  return (
    <div className="container-fluid p-0 mb-5 hero-simple">
      <div id="header-carousel" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="hero-simple-slide">
                <div className="container">
                  <div className="row align-items-center justify-content-evenly">
                    {/* Left Side - Carousel Content */}
                    <div className="col-lg-6">
                      {/* Subtitle */}
                      <div className="hero-simple-subtitle mb-3 text-center">
                        <span className="subtitle-text">{slide.subtitle}</span>
                      </div>
                      
                      {/* Title */}
                      <div className="hero-simple-title mb-4 text-center">
                        <h1 className="title-text text-center">{slide.title}</h1>
                      </div>
                      
                      {/* Description */}
                      <div className="hero-simple-description mb-4 text-center">
                        <p className="description-text text-center">{slide.description}</p>
                      </div>
                      
                      {/* CTA Button - Under Description */}
                      <div className="hero-simple-cta text-center">
                        <Link
                          to={slide.link}
                          className="btn btn-simple-hero"
                        >
                          {slide.linkText}
                          <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Right Side - Hero Image */}
                    <div className="col-lg-6">
                      <div className="hero-image-wrapper">
                        <img 
                          src="/assets/images/Webimg/herogurl.png" 
                          alt="Hero" 
                          className="img-fluid hero-gurl-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel

