import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import Counter from '../components/Counter'
import TeamCarousel from '../components/TeamCarousel'
import TestimonialCarousel from '../components/TestimonialCarousel'

const Home = () => {
  useEffect(() => {
    // Structured Data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Meta-MicroDigital",
      "url": "https://microdigitall.com/",
      "logo": "https://microdigitall.com/assets/images/logo.png",
      "sameAs": [
        "https://twitter.com/microdigitall",
        "https://www.linkedin.com/company/microdigitall"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8318891438",
        "contactType": "customer service"
      }
    })
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <>
      <HeroCarousel />

      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center pb-1">
            <div className="col-lg-5">
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                Who We Are
              </small>
              <h1 className="mt-2 mb-4">Your Partner for IT & Digital Growth</h1>
              <p className="mb-4">
                Meta-MicroDigital blends managed IT services with full‑funnel digital marketing to help
                businesses scale with confidence. From secure cloud infrastructure and websites that
                convert to SEO, paid media and content, we build reliable systems that attract,
                engage and retain customers.
              </p>
              <Link to="/about" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold btn-animated">
                Read More
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

      {/* Services Start */}
      <div className="container-fluid pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                What we do
              </small>
              <h1 className="mt-2 mb-3">End‑to‑End IT & Marketing Solutions</h1>
              <h4 className="font-weight-normal text-muted mb-4">
                From infrastructure and web to SEO, PPC, and content—everything you need to acquire
                and retain customers.
              </h4>
              <Link to="/service" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold btn-animated">
                Discover More
              </Link>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <div className="d-flex service-card p-3">
                    <i className="fa fa-3x fa-laptop-code text-primary mr-4 pulse"></i>
                    <div className="d-flex flex-column">
                      <h4 className="font-weight-bold mb-3">Website Design</h4>
                      <p>
                        Conversion‑focused, responsive websites engineered for speed, accessibility,
                        and brand impact.
                      </p>
                      <Link className="font-weight-semi-bold" to="/service/website-design">
                        Read More <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="d-flex service-card p-3">
                    <i className="fa fa-3x fa-code text-primary mr-4 pulse"></i>
                    <div className="d-flex flex-column">
                      <h4 className="font-weight-bold mb-3">Custom Development</h4>
                      <p>
                        Reliable front‑end and back‑end development, integrations, and automations
                        that scale.
                      </p>
                      <Link className="font-weight-semi-bold" to="/service/custom-development">
                        Read More <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="d-flex service-card p-3">
                    <i className="fa fa-3x fa-envelope-open-text text-primary mr-4 pulse"></i>
                    <div className="d-flex flex-column">
                      <h4 className="font-weight-bold mb-3">Digital Marketing</h4>
                      <p>
                        Full‑funnel strategy across SEO, paid media, email, and social to drive
                        measurable growth.
                      </p>
                      <Link className="font-weight-semi-bold" to="/service/digital-marketing">
                        Read More <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="d-flex service-card p-3">
                    <i className="fa fa-3x fa-chart-line text-primary mr-4 pulse"></i>
                    <div className="d-flex flex-column">
                      <h4 className="font-weight-bold mb-3">Growth Strategy</h4>
                      <p>
                        Roadmaps, analytics, and experimentation to optimize CAC, LTV, and overall
                        ROI.
                      </p>
                      <Link className="font-weight-semi-bold" to="/service/growth-strategy">
                        Read More <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Features Start */}
      <div className="container-fluid pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                Why Choose Us
              </small>
              <h1 className="mt-2 mb-3">Why Choose Meta-MicroDigital?</h1>
              <h4 className="font-weight-normal text-muted mb-4">
                We combine technical expertise with creative innovation to deliver measurable results
                that drive your business forward.
              </h4>
              <div className="list-inline mb-4">
                <p className="font-weight-semi-bold mb-2">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Certified Google & Facebook Partners
                </p>
                <p className="font-weight-semi-bold mb-2">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Transparent Reporting & Analytics
                </p>
                <p className="font-weight-semi-bold mb-2">
                  <i className="fa fa-angle-right text-primary mr-2"></i>24/7 Technical Support
                </p>
                <p className="font-weight-semi-bold mb-2">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Custom Solutions for Every Business
                </p>
                <p className="font-weight-semi-bold mb-2">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Proven ROI & Growth Strategies
                </p>
              </div>
              <Link to="/about" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold btn-animated">
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
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                Meet The Team
              </small>
              <h1 className="mt-2 mb-3">Meet Our Expert Team</h1>
              <h4 className="font-weight-normal text-muted mb-4">
                Our diverse team of certified professionals brings together technical expertise,
                creative vision, and strategic thinking to deliver exceptional results for your
                business.
              </h4>
              <Link to="/about" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold btn-animated">
                Meet All Experts
              </Link>
            </div>
            <div className="col-lg-8 mb-5">
              <TeamCarousel />
            </div>
          </div>
        </div>
      </div> */}
      {/* Team End */}

      {/* Pricing Plan Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <div className="d-flex flex-column align-items-center justify-content-center bg-primary p-4">
                    <h3>Starter</h3>
                    <h1 className="display-4 mb-0">
                      <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>
                        ₹
                      </small>
                      25,000
                      <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>
                        / Month
                      </small>
                    </h1>
                  </div>
                  <div className="border border-top-0 d-flex flex-column align-items-center py-4">
                    <p>15 Social Media Posts</p>
                    <p>10 Video Content</p>
                    <p>Basic SEO Setup</p>
                    <p>Monthly Analytics Report</p>
                    <Link
                      to="/contact"
                      className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold my-2 btn-animated"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="d-flex flex-column align-items-center justify-content-center bg-primary p-4">
                    <h3>Premium</h3>
                    <h1 className="display-4 mb-0">
                      <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>
                        ₹
                      </small>
                      45,000
                      <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>
                        / Month
                      </small>
                    </h1>
                  </div>
                  <div className="border border-top-0 d-flex flex-column align-items-center py-4">
                    <p>25 Social Media Posts</p>
                    <p>15 Video Content</p>
                    <p>Model Photography (2 sessions)</p>
                    <p>Google Ads Management</p>
                    <Link
                      to="/contact"
                      className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold my-2 btn-animated"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mb-5">
              <small className="d-inline bg-primary text-white text-uppercase font-weight-bold px-1">
                Our Pricing Plan
              </small>
              <h1 className="mt-2 mb-3">Affordable Digital Marketing Packages</h1>
              <h4 className="font-weight-normal text-muted mb-4">
                Choose the perfect plan for your business growth. All packages include professional
                support and transparent reporting.
              </h4>
              <h5 className="font-weight-bold mb-4">Need A Custom Package?</h5>
              <Link to="/contact" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold btn-animated">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Plan End */}

      {/* Testimonial Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                What clients say
              </small>
              <h1 className="mt-2 mb-3">Clients Say About Our Services</h1>
              <h4 className="font-weight-normal text-muted mb-4">
                Hear from our clients about how our digital solutions helped them grow their brand,
                boost visibility, and scale their business online.
              </h4>
              <a href="#" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">
                Submit Review
              </a>
            </div>
            <div className="col-lg-8 mb-5">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Blog Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center">
            <small className="bg-primary text-white text-uppercase font-weight-bold text-center px-1">
              Our Blog
            </small>
            <h1 className="mt-2 mb-5">Latest From Blog</h1>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <img className="img-fluid w-100" src="/assets/images/blog-1.jpg" alt="Digital Marketing Trends 2024" />
                <div
                  className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center"
                  style={{ width: '80px', height: '80px', bottom: 0, left: 0 }}
                >
                  <h6 className="text-uppercase mt-2 mb-n2">Dec</h6>
                  <h1 className="m-0">15</h1>
                </div>
              </div>
              <div className="border border-top-0" style={{ padding: '30px' }}>
                <div className="d-flex mb-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      style={{ width: '40px', height: '40px' }}
                      src="/assets/images/user.jpg"
                      alt="Rajesh Kumar"
                    />
                    <a className="text-muted ml-2" href="#">
                      Rajesh Kumar
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary"></i>
                    <a className="text-muted ml-2" href="#">
                      Digital Marketing
                    </a>
                  </div>
                </div>
                <Link className="h5 font-weight-bold" to="/blog/digital-marketing-trends-2024">
                  Top Digital Marketing Trends That Will Dominate 2024
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <img className="img-fluid w-100" src="/assets/images/blog-2.jpg" alt="SEO Best Practices" />
                <div
                  className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center"
                  style={{ width: '80px', height: '80px', bottom: 0, left: 0 }}
                >
                  <h6 className="text-uppercase mt-2 mb-n2">Dec</h6>
                  <h1 className="m-0">08</h1>
                </div>
              </div>
              <div className="border border-top-0" style={{ padding: '30px' }}>
                <div className="d-flex mb-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      style={{ width: '40px', height: '40px' }}
                      src="/assets/images/user.jpg"
                      alt="Priya Sharma"
                    />
                    <a className="text-muted ml-2" href="#">
                      Priya Sharma
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary"></i>
                    <a className="text-muted ml-2" href="#">
                      SEO
                    </a>
                  </div>
                </div>
                <Link className="h5 font-weight-bold" to="/blog/seo-strategies-2024">
                  Essential SEO Strategies for Small Businesses in 2024
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
    </>
  )
}

export default Home

