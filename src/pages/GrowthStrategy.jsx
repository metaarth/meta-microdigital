import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const GrowthStrategy = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Growth Strategy Services",
      "description": "Professional growth strategy services including KPIs, analytics, experimentation, and roadmaps to maximize ROI",
      "provider": {
        "@type": "Organization",
        "name": "Meta-MicroDigital"
      },
      "serviceType": "Business Strategy",
      "areaServed": "Worldwide"
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <>
      <PageHeader
        title="Growth Strategy Services"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/service" },
          { label: "Growth Strategy" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-5">
              <img className="img-fluid w-100" src="/assets/images/blog-1.jpg" alt="Growth Strategy Services" />
              <h1 className="mt-4 mb-3">Strategic Growth Planning & Analytics</h1>
              <p className="lead">
                Accelerate your business growth with data-driven strategies, comprehensive analytics, and systematic
                experimentation. We help you identify opportunities, optimize performance, and maximize ROI through proven
                growth methodologies.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mb-4">Our Growth Strategy Services</h2>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-chart-line text-primary mb-3"></i>
                    <h4>KPI Development & Tracking</h4>
                    <p>Define and implement key performance indicators that align with your business objectives and drive measurable growth.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Custom KPI Dashboard Creation</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Real-time Performance Monitoring</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Goal Setting & Benchmarking</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Performance Reporting</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-chart-bar text-primary mb-3"></i>
                    <h4>Advanced Analytics</h4>
                    <p>Comprehensive data analysis to uncover insights, identify trends, and make informed business decisions.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Customer Behavior Analysis</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Conversion Funnel Analysis</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Revenue Attribution Modeling</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Predictive Analytics</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-flask text-primary mb-3"></i>
                    <h4>A/B Testing & Experimentation</h4>
                    <p>Systematic testing and optimization to continuously improve performance and identify winning strategies.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Test Design & Planning</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Statistical Analysis</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Conversion Rate Optimization</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Multivariate Testing</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-route text-primary mb-3"></i>
                    <h4>Growth Roadmaps</h4>
                    <p>Strategic planning and roadmaps that outline clear paths to achieve your growth objectives.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Strategic Planning</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Milestone Definition</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Resource Allocation</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Timeline Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-info">
              <h5><i className="fas fa-rocket mr-2"></i>Ready to Accelerate Your Growth?</h5>
              <p className="mb-3">Let's develop a comprehensive growth strategy that drives measurable results for your business.</p>
              <Link to="/contact" className="btn btn-primary btn-animated">Get Growth Strategy</Link>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="mb-5">
              <h3 className="font-weight-bold mb-4">Other Services</h3>
              <div className="list-group">
                <Link to="/service/website-design" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">Website Design</h6>
                  <p className="mb-1">Responsive, conversion-focused websites</p>
                </Link>
                <Link to="/service/custom-development" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">Custom Development</h6>
                  <p className="mb-1">APIs, integrations, and automation solutions</p>
                </Link>
                <Link to="/service/digital-marketing" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">Digital Marketing</h6>
                  <p className="mb-1">SEO, paid media, and social media marketing</p>
                </Link>
                <Link to="/service/seo" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">SEO Services</h6>
                  <p className="mb-1">Search engine optimization and ranking</p>
                </Link>
                <Link to="/service/content-writing" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">Content Writing</h6>
                  <p className="mb-1">Professional content creation and copywriting</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GrowthStrategy
