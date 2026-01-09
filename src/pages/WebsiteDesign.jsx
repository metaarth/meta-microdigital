import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Webdesign from '../Assets/Webimgs/webdesign.jpg'

const WebsiteDesign = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Website Design Services",
      "description": "Responsive, conversion-focused websites with modern UX and performance best practices",
      "provider": {
        "@type": "Organization",
        "name": "Meta-MicroDigital"
      },
      "serviceType": "Web Design",
      "areaServed": "Worldwide"
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <>
      <PageHeader
        title="Website Design Services"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/service" },
          { label: "Website Design" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-5">
              <img className="img-fluid w-100" src={Webdesign} alt="Website Design Services" />
              <h1 className="mt-4 mb-3">Professional Website Design Services</h1>
              <p className="lead">
                Transform your online presence with our responsive, conversion-focused website design services. We create
                modern, high-performing websites that drive results and deliver exceptional user experiences.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mb-4">What We Deliver</h2>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-mobile-alt text-primary mb-3"></i>
                    <h4>Responsive Design</h4>
                    <p>Mobile-first approach ensuring your website looks perfect on all devices - desktop, tablet, and mobile.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-tachometer-alt text-primary mb-3"></i>
                    <h4>Performance Optimization</h4>
                    <p>Lightning-fast loading times with optimized images, code, and server configurations for better SEO rankings.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-chart-line text-primary mb-3"></i>
                    <h4>Conversion Optimization</h4>
                    <p>Strategic design elements and user flows that maximize conversions and drive business growth.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-palette text-primary mb-3"></i>
                    <h4>Modern UX/UI Design</h4>
                    <p>Contemporary design trends with intuitive user interfaces that engage and retain visitors.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h2 className="mb-4">Key Features Included</h2>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fa fa-check text-primary mr-2"></i>Fully Responsive Design</li>
                    <li className="mb-2"><i className="fa fa-check text-primary mr-2"></i>Mobile-First Approach</li>
                    <li className="mb-2"><i className="fa fa-check text-primary mr-2"></i>Cross-Browser Compatibility</li>
                    <li className="mb-2"><i className="fa fa-check text-primary mr-2"></i>SEO-Optimized Structure</li>
                    <li className="mb-2"><i className="fa fa-check text-primary mr-2"></i>Fast Loading Times</li>
                    <li className="mb-2"><i className="fa fa-check text-primary mr-2"></i>Accessibility Compliance</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fa fa-check text-primary mr-2"></i>Modern UI/UX Design</li>
                    <li className="mb-2"><i className="fa fa-check text-primary mr-2"></i>Conversion Optimization</li>
                    <li className="mb-2"><i className="fa fa-check text-primary mr-2"></i>Content Management System</li>
                    <li className="mb-2"><i className="fa fa-check text-primary mr-2"></i>Analytics Integration</li>
                    <li className="mb-2"><i className="fa fa-check text-primary mr-2"></i>Security Implementation</li>
                    <li className="mb-2"><i className="fa fa-check text-primary mr-2"></i>Ongoing Support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="alert alert-info">
              <h5><i className="fas fa-lightbulb mr-2"></i>Ready to Get Started?</h5>
              <p className="mb-3">Let's discuss your website design project and create something amazing together.</p>
              <Link to="/contact" className="btn btn-primary btn-animated">Get Free Quote</Link>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="mb-5">
              <h3 className="font-weight-bold mb-4">Other Services</h3>
              <div className="list-group">
                <Link to="/service/custom-development" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">Custom Development</h6>
                  <p className="mb-1">APIs, integrations, and automation solutions</p>
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

            <div className="border p-4 mb-5 bg-primary text-white">
              <h4 className="font-weight-bold mb-3">Need a Custom Quote?</h4>
              <p className="mb-3">Get a personalized quote for your website design project.</p>
              <Link to="/contact" className="btn btn-light btn-animated">Request Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WebsiteDesign
