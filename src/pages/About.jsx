import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../components/Counter'
import TeamCarousel from '../components/TeamCarousel'

const About = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://microdigitall.com/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://microdigitall.com/about.html" }
      ]
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 className="display-4 page-header-title mb-3 mt-0 mt-lg-5">About</h1>
        <div className="d-inline-flex page-header-breadcrumbs">
          <p className="m-0">
            <Link to="/" className="page-header-link">Home</Link>
          </p>
          <p className="m-0 px-2">/</p>
          <p className="m-0 page-header-text">About</p>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center pb-1">
            <div className="col-lg-5">
              <img className="img-thumbnail p-3" src="/assets/images/about.jpg" alt="About Meta-MicroDigital" />
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">Who We Are</small>
              <h1 className="mt-2 mb-4">Meta-MicroDigital: Where Strategy, Creativity & Technology Unite</h1>
              <p className="mb-4">
                Meta-MicroDigital is an IT and digital marketing company focused on building growth engines
                for modern businesses. We combine secure technology foundations with performance marketing
                to help brands acquire, convert, and retain customers more efficiently.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <h4 className="font-weight-bold">Our Mission</h4>
                  <p>
                    To empower businesses with high‑performing websites, data‑driven SEO, paid media,
                    and automation—delivered with complete transparency and measurable ROI.
                  </p>
                </div>
                <div className="col-md-6">
                  <h4 className="font-weight-bold">Our Vision</h4>
                  <p>
                    To be the most trusted partner for digital growth—known for reliability,
                    creativity, and results across India and beyond.
                  </p>
                </div>
              </div>
              <Link to="/service" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{ height: '120px' }}>
                <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                <div className="d-flex flex-column">
                  <h5 className="font-weight-bold">Our Office</h5>
                  <p className="m-0">T-02, A-44 VDS Tower Sec-02 Near Sector-15 Metro Station</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{ height: '120px' }}>
                <i className="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                <div className="d-flex flex-column">
                  <h5 className="font-weight-bold">Email Us</h5>
                  <p className="m-0">info@microdigitall.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{ height: '120px' }}>
                <i className="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                <div className="d-flex flex-column">
                  <h5 className="font-weight-bold">Call Us</h5>
                  <p className="m-0">+91 8318891438</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Features Start */}
      <div className="container-fluid pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">Why Choose Us</small>
              <h1 className="mt-2 mb-3">Results, Reliability, Transparency</h1>
              <h4 className="font-weight-normal text-muted mb-4">
                Certified experts, enterprise‑grade processes, and clear reporting—so you always know
                what's driving growth.
              </h4>
              <div className="list-inline mb-4">
                <p className="font-weight-semi-bold mb-2">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Certified Google & Facebook Partners
                </p>
                <p className="font-weight-semi-bold mb-2">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Transparent Reporting & Analytics
                </p>
                <p className="font-weight-semi-bold mb-2">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Custom Solutions for Every Business
                </p>
              </div>
              <Link to="/service" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">
                Learn More
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6 pb-1">
                  <div className="d-flex flex-column align-items-center border px-4 mb-4">
                    <Counter end={5} />
                    <h5 className="font-weight-bold mb-4">Years Experience</h5>
                  </div>
                </div>
                <div className="col-sm-6 pb-1">
                  <div className="d-flex flex-column align-items-center border px-4 mb-4">
                    <Counter end={15} />
                    <h5 className="font-weight-bold mb-4">Certified Experts</h5>
                  </div>
                </div>
                <div className="col-sm-6 pb-1">
                  <div className="d-flex flex-column align-items-center border px-4 mb-4">
                    <Counter end={150} />
                    <h5 className="font-weight-bold mb-4">Happy Clients</h5>
                  </div>
                </div>
                <div className="col-sm-6 pb-1">
                  <div className="d-flex flex-column align-items-center border px-4 mb-4">
                    <Counter end={300} />
                    <h5 className="font-weight-bold mb-4">Projects Delivered</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}

      {/* Team Start */}
      {/* <div className="container-fluid pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">Meet The Team</small>
              <h1 className="mt-2 mb-3">Meet Experts of Behind Work</h1>
              <h4 className="font-weight-normal text-muted mb-4">
                Our diverse team of certified professionals brings together technical expertise,
                creative vision, and strategic thinking.
              </h4>
              <a href="#" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Meet All Experts</a>
            </div>
            <div className="col-lg-8 mb-5">
              <TeamCarousel />
            </div>
          </div>
        </div>
      </div> */}
      {/* Team End */}
    </>
  )
}

export default About

