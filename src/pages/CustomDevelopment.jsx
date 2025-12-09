import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const CustomDevelopment = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Development Services",
      "description": "Professional custom development including APIs, integrations, automation, and scalable codebases",
      "provider": {
        "@type": "Organization",
        "name": "Meta-MicroDigital"
      },
      "serviceType": "Software Development",
      "areaServed": "Worldwide"
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <>
      <PageHeader
        title="Custom Development Services"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/service" },
          { label: "Custom Development" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-5">
              <img className="img-fluid w-100" src="/assets/images/blog-1.jpg" alt="Custom Development Services" />
              <h1 className="mt-4 mb-3">Professional Custom Development Solutions</h1>
              <p className="lead">
                Build scalable, maintainable applications with our expert custom development services. From APIs and
                integrations to automation solutions, we deliver robust codebases that grow with your business.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mb-4">Our Development Services</h2>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-code text-primary mb-3"></i>
                    <h4>API Development</h4>
                    <p>RESTful and GraphQL APIs that connect your systems and enable seamless data exchange between applications.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>RESTful API Design</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>GraphQL Implementation</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>API Documentation</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Authentication & Security</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-link text-primary mb-3"></i>
                    <h4>System Integrations</h4>
                    <p>Connect disparate systems and applications to create unified workflows and eliminate data silos.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Third-Party Integrations</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Database Synchronization</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Real-time Data Sync</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Legacy System Modernization</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-robot text-primary mb-3"></i>
                    <h4>Process Automation</h4>
                    <p>Streamline business processes with intelligent automation solutions that reduce manual work and improve efficiency.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Workflow Automation</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Data Processing Automation</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Task Scheduling</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Report Generation</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-database text-primary mb-3"></i>
                    <h4>Database Design</h4>
                    <p>Scalable database architectures that efficiently store, retrieve, and manage your business data.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Database Architecture</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Data Modeling</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Performance Optimization</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Data Migration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-info">
              <h5><i className="fas fa-code mr-2"></i>Ready to Build Your Solution?</h5>
              <p className="mb-3">Let's discuss your custom development needs and create a solution that scales with your business.</p>
              <Link to="/contact" className="btn btn-primary btn-animated">Get Started</Link>
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
                <Link to="/service/digital-marketing" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">Digital Marketing</h6>
                  <p className="mb-1">SEO, paid media, and social media marketing</p>
                </Link>
                <Link to="/service/growth-strategy" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">Growth Strategy</h6>
                  <p className="mb-1">KPIs, analytics, and experimentation</p>
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

export default CustomDevelopment
