import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const ContentWriting = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Content Writing Services",
      "description": "Professional content writing services including SEO-optimized content, copywriting, and marketing copy",
      "provider": {
        "@type": "Organization",
        "name": "Meta-MicroDigital"
      },
      "serviceType": "Content Creation",
      "areaServed": "Worldwide"
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <>
      <PageHeader
        title="Content Writing Services"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/service" },
          { label: "Content Writing" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-5">
              <img className="img-fluid w-100" src="/assets/images/blog-2.jpg" alt="Content Writing Services" />
              <h1 className="mt-4 mb-3">Professional Content Writing Services</h1>
              <p className="lead">
                Engage your audience and drive conversions with our expert content writing services. From SEO-optimized
                blog posts to compelling marketing copy, we create content that resonates with your target audience and
                achieves your business goals.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="mb-4">Our Content Writing Services</h2>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-blog text-primary mb-3"></i>
                    <h4>Blog Writing & Articles</h4>
                    <p>Engaging, SEO-optimized blog posts and articles that establish thought leadership and drive organic traffic.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>SEO-Optimized Blog Posts</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Industry Articles</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>How-To Guides</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Case Studies</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-edit text-primary mb-3"></i>
                    <h4>Copywriting</h4>
                    <p>Compelling copy that converts visitors into customers through persuasive writing and clear value propositions.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Sales Copy</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Landing Page Copy</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Email Marketing Copy</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Ad Copy</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-search text-primary mb-3"></i>
                    <h4>SEO Content</h4>
                    <p>Content strategically crafted to rank high in search engines while providing value to your audience.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Keyword Research</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Content Optimization</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Meta Descriptions</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Title Tag Optimization</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="service-card p-4 h-100">
                    <i className="fa fa-3x fa-share-alt text-primary mb-3"></i>
                    <h4>Social Media Content</h4>
                    <p>Engaging social media posts and captions that build brand awareness and drive engagement across all platforms.</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="fa fa-check text-primary mr-2"></i>Facebook Posts</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Instagram Captions</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>LinkedIn Articles</li>
                      <li><i className="fa fa-check text-primary mr-2"></i>Twitter Content</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-info">
              <h5><i className="fas fa-pen-fancy mr-2"></i>Ready to Create Compelling Content?</h5>
              <p className="mb-3">Let's create content that engages your audience and drives real business results.</p>
              <Link to="/contact" className="btn btn-primary btn-animated">Start Writing Project</Link>
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
                  <p className="mb-1">SEO, social media, and paid advertising</p>
                </Link>
                <Link to="/service/seo" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">SEO Services</h6>
                  <p className="mb-1">Search engine optimization and ranking</p>
                </Link>
                <Link to="/service/growth-strategy" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">Growth Strategy</h6>
                  <p className="mb-1">KPIs, analytics, and experimentation</p>
                </Link>
              </div>
            </div>

            <div className="border p-4 mb-5 bg-primary text-white">
              <h4 className="font-weight-bold mb-3">Free Content Audit</h4>
              <p className="mb-3">Get a comprehensive analysis of your current content performance and opportunities.</p>
              <Link to="/contact" className="btn btn-light btn-animated">Get Free Audit</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentWriting
