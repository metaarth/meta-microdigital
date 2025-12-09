import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TestimonialCarousel from '../components/TestimonialCarousel'

const Services = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://microdigitall.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://microdigitall.com/service.html" }
      ]
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 className="display-4 page-header-title mb-3 mt-0 mt-lg-5">Services</h1>
        <div className="d-inline-flex page-header-breadcrumbs">
          <p className="m-0">
            <Link to="/" className="page-header-link">Home</Link>
          </p>
          <p className="m-0 px-2">/</p>
          <p className="m-0 page-header-text">Services</p>
        </div>
      </div>
      {/* Page Header End */}

      {/* Services Start */}
      <div className="container-fluid pt-5 pb-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 text-center mb-5">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">What we do</small>
              <h1 className="mt-2 mb-3">Integrated IT & Marketing Services</h1>
              <h4 className="font-weight-normal text-muted mb-4">
                Cloud & Dev, Websites, SEO, PPC, Social, Content, Analytics—aligned to your goals.
              </h4>
              <a href="#" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Discover More</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-5">
              <div className="d-flex">
                <i className="fa fa-3x fa-laptop-code text-primary mr-4"></i>
                <div className="d-flex flex-column">
                  <h4 className="font-weight-bold mb-3">Website Design</h4>
                  <p>Responsive, conversion‑focused websites with modern UX and performance best practices.</p>
                  <Link className="font-weight-semi-bold" to="/service/website-design">
                    Read More <i className="fa fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="d-flex">
                <i className="fa fa-3x fa-code text-primary mr-4"></i>
                <div className="d-flex flex-column">
                  <h4 className="font-weight-bold mb-3">Custom Development</h4>
                  <p>APIs, integrations, and automation with scalable, maintainable codebases.</p>
                  <Link className="font-weight-semi-bold" to="/service/custom-development">
                    Read More <i className="fa fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="d-flex">
                <i className="fa fa-3x fa-envelope-open-text text-primary mr-4"></i>
                <div className="d-flex flex-column">
                  <h4 className="font-weight-bold mb-3">Digital Marketing</h4>
                  <p>SEO, paid media, lifecycle and social to drive growth across the funnel.</p>
                  <Link className="font-weight-semi-bold" to="/service/digital-marketing">
                    Read More <i className="fa fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="d-flex">
                <i className="fa fa-3x fa-chart-line text-primary mr-4"></i>
                <div className="d-flex flex-column">
                  <h4 className="font-weight-bold mb-3">Growth Strategy</h4>
                  <p>KPIs, analytics, experimentation and roadmaps to maximize ROI.</p>
                  <Link className="font-weight-semi-bold" to="/service/growth-strategy">
                    Read More <i className="fa fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="d-flex">
                <i className="fa fa-3x fa-search text-primary mr-4"></i>
                <div className="d-flex flex-column">
                  <h4 className="font-weight-bold mb-3">SEO</h4>
                  <p>
                    Professional search engine optimization to improve your website's visibility and
                    drive organic traffic.
                  </p>
                  <Link className="font-weight-semi-bold" to="/service/seo">
                    Read More <i className="fa fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="d-flex">
                <i className="fa fa-3x fa-pen text-primary mr-4"></i>
                <div className="d-flex flex-column">
                  <h4 className="font-weight-bold mb-3">Content Writing</h4>
                  <p>
                    Professional content creation including blog posts, copywriting, and SEO-optimized
                    content that drives engagement.
                  </p>
                  <Link className="font-weight-semi-bold" to="/service/content-writing">
                    Read More <i className="fa fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Testimonial Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">What clients say</small>
              <h1 className="mt-2 mb-3">Clients Say About Our Services</h1>
              <h4 className="font-weight-normal text-muted mb-4">
                Hear from our clients about how our digital solutions helped them grow their brand,
                boost visibility, and scale their business online.
              </h4>
              <a href="#" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Submit Review</a>
            </div>
            <div className="col-lg-8 mb-5">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  )
}

export default Services

