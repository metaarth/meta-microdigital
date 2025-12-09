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
      title: 'Data‑Driven Growth for Modern Brands',
      description: 'Transform your business with cutting-edge technology and strategic digital marketing solutions',
      link: '/about',
      linkText: 'Discover More'
    },
    {
      id: 2,
      image: '/assets/images/carousel-2.jpg',
      subtitle: 'Expert Team',
      title: 'Certified IT Experts & Marketers',
      description: 'Our certified professionals deliver exceptional results with proven expertise in technology and marketing',
      link: '/service',
      linkText: 'Our Services'
    },
    {
      id: 3,
      image: '/assets/images/carousel-3.jpg',
      subtitle: 'Proven Results',
      title: 'Proven ROI & Happy Clients',
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
      {/* Video Background */}
      <video 
        className="hero-video-bg"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/assets/bghero.mp4" type="video/mp4" />
      </video>
      
      <div id="header-carousel" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="hero-simple-slide">
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-10 col-xl-8 text-center">
                      {/* Subtitle */}
                      <div className="hero-simple-subtitle mb-3">
                        <span className="subtitle-text">{slide.subtitle}</span>
                      </div>
                      
                      {/* Title */}
                      <div className="hero-simple-title mb-4">
                        <h1 className="title-text">{slide.title}</h1>
                      </div>
                      
                      {/* Description */}
                      <div className="hero-simple-description mb-5">
                        <p className="description-text">{slide.description}</p>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="hero-simple-cta">
                        <Link
                          to={slide.link}
                          className="btn btn-simple-hero"
                        >
                          {slide.linkText}
                          <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Controls */}
        <button
          className="carousel-control-simple carousel-control-prev"
          type="button"
          onClick={goToPrevious}
        >
          <span className="carousel-control-icon" aria-hidden="true">
            <i className="fas fa-chevron-left"></i>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-simple carousel-control-next"
          type="button"
          onClick={goToNext}
        >
          <span className="carousel-control-icon" aria-hidden="true">
            <i className="fas fa-chevron-right"></i>
          </span>
          <span className="sr-only">Next</span>
        </button>
        
        {/* Carousel Indicators */}
        <div className="carousel-indicators-simple">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`indicator-simple ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel

