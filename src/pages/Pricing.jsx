import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://microdigitall.com/" },
        { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://microdigitall.com/pricing.html" }
      ]
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 className="display-4 page-header-title mb-3 mt-0 mt-lg-5">Pricing Plans</h1>
        <div className="d-inline-flex page-header-breadcrumbs">
          <p className="m-0">
            <Link to="/" className="page-header-link">Home</Link>
          </p>
          <p className="m-0 px-2">/</p>
          <p className="m-0 page-header-text">Pricing</p>
        </div>
      </div>
      {/* Page Header End */}

      {/* Pricing Plan Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center mb-5">
              <small className="d-inline bg-primary text-white text-uppercase font-weight-bold px-1">Our Pricing</small>
              <h1 className="mt-2 mb-3">Flexible Packages for Every Business</h1>
              <h4 className="font-weight-normal text-muted mb-4">
                Choose the perfect plan for your business growth. All prices in Indian Rupees with
                transparent pricing and no hidden costs.
              </h4>
            </div>
          </div>

          {/* Digital Marketing Packages */}
          <div className="row mb-5">
            <div className="col-12 text-center mb-4">
              <h2 className="font-weight-bold text-primary">Digital Marketing Packages</h2>
              <p className="text-muted">
                Complete digital marketing solutions with social media, content creation, and model photography
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="pricing-card h-100">
                <div className="pricing-header bg-primary text-white text-center p-4">
                  <h3 className="mb-2">Starter</h3>
                  <div className="price-display">
                    <span className="currency">₹</span>
                    <span className="amount">25,000</span>
                    <span className="period">/month</span>
                  </div>
                </div>
                <div className="pricing-body p-4">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>15 Social Media Posts
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>10 Video Content
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Basic SEO Setup
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Monthly Analytics Report
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Email Support
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Content Calendar
                    </li>
                  </ul>
                  <Link to="/contact" className="btn btn-primary btn-block btn-animated">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="pricing-card h-100 featured">
                <div className="pricing-badge">Most Popular</div>
                <div className="pricing-header bg-primary text-white text-center p-4">
                  <h3 className="mb-2">Premium</h3>
                  <div className="price-display">
                    <span className="currency">₹</span>
                    <span className="amount">45,000</span>
                    <span className="period">/month</span>
                  </div>
                </div>
                <div className="pricing-body p-4">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>25 Social Media Posts
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>15 Video Content
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Model Photography (2 sessions)
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Google Ads Setup & Management
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Advanced SEO
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Bi-weekly Reports
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Priority Support
                    </li>
                  </ul>
                  <Link to="/contact" className="btn btn-primary btn-block btn-animated">
                    Choose Premium
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="pricing-card h-100">
                <div className="pricing-header bg-primary text-white text-center p-4">
                  <h3 className="mb-2">Enterprise</h3>
                  <div className="price-display">
                    <span className="currency">₹</span>
                    <span className="amount">75,000</span>
                    <span className="period">/month</span>
                  </div>
                </div>
                <div className="pricing-body p-4">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>40 Social Media Posts
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>25 Video Content
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Professional Model Photography
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Multi-platform Ad Management
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Complete SEO Strategy
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Weekly Reports
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check text-primary mr-2"></i>Dedicated Account Manager
                    </li>
                  </ul>
                  <Link to="/contact" className="btn btn-primary btn-block btn-animated">
                    Go Enterprise
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Package CTA */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="custom-package-cta p-5 bg-primary text-white rounded">
                <h3 className="mb-3">Need a Custom Package?</h3>
                <p className="mb-4">
                  We'll create a tailored solution that fits your specific business needs and budget.
                </p>
                <Link to="/contact" className="btn btn-light btn-lg btn-animated text-black font-weight-bold ">
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Plan End */}
    </>
  )
}

export default Pricing

