import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const DigitalMarketing = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing Services",
      "description": "Comprehensive digital marketing solutions including SEO, social media, model photography, and ad management",
      "provider": {
        "@type": "Organization",
        "name": "Meta-MicroDigital"
      },
      "serviceType": "Digital Marketing",
      "areaServed": "Worldwide"
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <>
      <PageHeader
        title="Digital Marketing Services"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/service" },
          { label: "Digital Marketing" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-5">
              <img className="img-fluid w-100" src="/assets/images/blog-2.jpg" alt="Digital Marketing Services" />
              <h1 className="mt-4 mb-3">Complete Digital Marketing Solutions</h1>
              <p className="lead">
                Drive growth with our comprehensive digital marketing services. From SEO and social media to model
                photography and ad management, we help businesses dominate their digital presence.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mb-4">Our Digital Marketing Services</h2>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-search text-primary mb-3"></i>
                    <h4>Search Engine Optimization (SEO)</h4>
                    <p>Comprehensive SEO strategies to improve your website's visibility and ranking on Google and other search engines.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Keyword Research & Analysis</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>On-Page SEO Optimization</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Technical SEO Audits</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Link Building Campaigns</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-ad text-primary mb-3"></i>
                    <h4>Paid Advertising Management</h4>
                    <p>Strategic paid media campaigns across Google Ads, Facebook, Instagram, and LinkedIn to drive targeted traffic and conversions.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Google Ads Management</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Facebook & Instagram Ads</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>LinkedIn Advertising</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Campaign Optimization</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-camera text-primary mb-3"></i>
                    <h4>Model Photography & Content Creation</h4>
                    <p>Professional photography services for models, products, and lifestyle content to enhance your brand's visual appeal.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Model Photography Sessions</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Product Photography</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Lifestyle Content Creation</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Video Content Production</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-share-alt text-primary mb-3"></i>
                    <h4>Social Media Management</h4>
                    <p>Complete social media management including content creation, posting, engagement, and community building.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Content Calendar Planning</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Daily Posting & Engagement</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Community Management</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Performance Analytics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-info">
              <h5><i className="fas fa-bullhorn mr-2"></i>Ready to Grow Your Digital Presence?</h5>
              <p className="mb-3">Let's create a comprehensive digital marketing strategy that drives real results for your business.</p>
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
                <Link to="/service/custom-development" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">Custom Development</h6>
                  <p className="mb-1">APIs, integrations, and automation solutions</p>
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

export default DigitalMarketing
