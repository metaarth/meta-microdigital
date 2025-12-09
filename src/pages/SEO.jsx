import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const SEO = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SEO Services",
      "description": "Professional search engine optimization services to improve website rankings and drive organic traffic",
      "provider": {
        "@type": "Organization",
        "name": "Meta-MicroDigital"
      },
      "serviceType": "Search Engine Optimization",
      "areaServed": "Worldwide"
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <>
      <PageHeader
        title="SEO Services"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/service" },
          { label: "SEO Services" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-5">
              <img className="img-fluid w-100" src="/assets/images/blog-2.jpg" alt="SEO Services" />
              <h1 className="mt-4 mb-3">Professional SEO Services</h1>
              <p className="lead">
                Dominate search engine results with our comprehensive SEO services. We help businesses improve their
                organic visibility, drive targeted traffic, and increase conversions through proven search engine
                optimization strategies.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mb-4">Our SEO Services</h2>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-search text-primary mb-3"></i>
                    <h4>Keyword Research & Analysis</h4>
                    <p>Comprehensive keyword research to identify high-value, low-competition keywords that drive qualified traffic to your website.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Competitor Analysis</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Long-tail Keyword Research</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Search Volume Analysis</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Keyword Difficulty Assessment</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-cogs text-primary mb-3"></i>
                    <h4>Technical SEO</h4>
                    <p>Optimize your website's technical foundation for better search engine crawling, indexing, and ranking performance.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Site Speed Optimization</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Mobile Responsiveness</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Schema Markup Implementation</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>XML Sitemap Creation</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-edit text-primary mb-3"></i>
                    <h4>On-Page SEO</h4>
                    <p>Optimize individual pages for target keywords to improve their ranking potential and user experience.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Title Tag Optimization</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Meta Description Writing</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Header Tag Optimization</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Content Optimization</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-link text-primary mb-3"></i>
                    <h4>Link Building</h4>
                    <p>Strategic link building campaigns to improve domain authority and search engine rankings.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Quality Backlink Acquisition</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Guest Posting</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Directory Submissions</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Broken Link Building</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-info">
              <h5><i className="fas fa-search mr-2"></i>Ready to Improve Your Rankings?</h5>
              <p className="mb-3">Let's develop an SEO strategy that drives organic traffic and grows your business.</p>
              <Link to="/contact" className="btn btn-primary btn-animated">Get Free SEO Audit</Link>
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
                <Link to="/service/growth-strategy" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">Growth Strategy</h6>
                  <p className="mb-1">KPIs, analytics, and experimentation</p>
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

export default SEO
