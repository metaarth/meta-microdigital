import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

const RakeshTourTravelsWebsite = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://microdigitall.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://microdigitall.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Rakesh Tour & Travels Website", "item": "https://microdigitall.com/blog/rakesh-tour-travels-website" }
      ]
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  const categories = [
    { name: "Web Development", count: 15 },
    { name: "Social Media", count: 22 },
    { name: "Travel & Tourism", count: 10 }
  ]

  const recentPosts = [
    { title: "Oliver Apparels Success Story", image: "/assets/images/blog-1.jpg", link: "/blog/oliver-apparels-success" },
    { title: "AS Reality Lead Generation", image: "/assets/images/blog-2.jpg", link: "/blog/as-reality-lead-generation" },
    { title: "Rakesh Tour & Travels Website", image: "/assets/images/blog-1.jpg", link: "/blog/rakesh-tour-travels-website" },
    { title: "Kresha Fashion Growth", image: "/assets/images/blog-2.jpg", link: "/blog/kresha-fashion-growth" }
  ]

  return (
    <>
      <PageHeader
        title="Rakesh Tour & Travels: Building Trust Through Professional Web Presence"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "Rakesh Tour & Travels Website" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="position-relative">
              <img className="img-fluid w-100" src="/assets/images/brandlogo/rakesh.jpg" alt="Rakesh Tour & Travels Website" />
              <div
                className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center"
                style={{ width: '80px', height: '80px', bottom: 0, left: 0 }}
              >
                <h6 className="text-uppercase mt-2 mb-n2">Nov</h6>
                <h1 className="m-0">10</h1>
              </div>
            </div>
            <div className="pt-4 pb-2">
              <div className="d-flex mb-3">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    style={{ width: '40px', height: '40px' }}
                    src="/assets/images/user.jpg"
                    alt="Meta-MicroDigital Author"
                  />
                  <a className="text-muted ml-2" href="#">
                    Meta-MicroDigital Team
                  </a>
                </div>
                <div className="d-flex align-items-center ml-4">
                  <i className="far fa-bookmark text-primary"></i>
                  <a className="text-muted ml-2" href="#">
                    Web Development
                  </a>
                </div>
              </div>
              <h2 className="font-weight-bold">How a Professional Website Transformed Rakesh Tour & Travels' Business</h2>
            </div>

            <div className="mb-5">
              <p className="lead">
                Rakesh Tour & Travels came to us needing a complete digital transformation. We delivered a fully functional 
                business website combined with comprehensive social media management, significantly improving customer trust 
                and increasing bookings.
              </p>

              <h3 className="mt-4 mb-3">The Challenge</h3>
              <p>
                In the travel and tourism industry, trust and credibility are everything. Rakesh Tour & Travels faced several challenges:
              </p>
              <ul>
                <li>No professional online presence to showcase services</li>
                <li>Limited customer trust due to lack of digital credibility</li>
                <li>Difficulty in reaching potential customers online</li>
                <li>No system for online bookings and inquiries</li>
                <li>Inconsistent brand presence across platforms</li>
              </ul>

              <h3 className="mt-4 mb-3">Our Comprehensive Solution</h3>
              <p>
                We provided a complete digital solution that addressed all their needs:
              </p>
              <ul>
                <li>
                  <strong>Professional Website Development:</strong> Created a fully functional, responsive website that 
                  showcased their tour packages, destinations, and services with an intuitive booking system and inquiry forms.
                </li>
                <li>
                  <strong>Social Media Management:</strong> Established and managed their presence across relevant social 
                  media platforms, sharing travel inspiration, customer testimonials, and special offers.
                </li>
                <li>
                  <strong>Brand Consistency:</strong> Ensured consistent branding across all digital touchpoints, building 
                  recognition and trust.
                </li>
                <li>
                  <strong>User Experience:</strong> Designed an easy-to-navigate website that made it simple for customers 
                  to explore packages and make inquiries.
                </li>
                <li>
                  <strong>SEO Optimization:</strong> Optimized the website to appear in search results when people look 
                  for travel services in their area.
                </li>
              </ul>

              <h3 className="mt-4 mb-3">The Impact</h3>
              <p>
                The results exceeded expectations:
              </p>
              <ul>
                <li>Significantly improved customer trust and credibility</li>
                <li>Increased online bookings and inquiries</li>
                <li>Professional brand image that stands out in the market</li>
                <li>Better customer engagement through social media</li>
                <li>Streamlined booking process that saves time for both business and customers</li>
                <li>24/7 online presence that works even when the office is closed</li>
              </ul>

              <div className="alert alert-info mt-4">
                <h5>
                  <i className="fas fa-quote-left mr-2"></i>Client Testimonial
                </h5>
                <p className="mb-0">
                  <em>"The website looks amazing and professional. Highly recommended. Our customers now trust us more, 
                  and we're getting more bookings than ever before. The social media presence has also helped us reach 
                  a wider audience."</em> - Rakesh, Owner, Rakesh Tour & Travels
                </p>
              </div>

              <div className="alert alert-primary mt-4">
                <h5>
                  <i className="fas fa-lightbulb mr-2"></i>Ready for Your Digital Transformation?
                </h5>
                <p className="mb-0">
                  A professional website and strong social media presence can transform your business. Let us help you 
                  build the digital foundation your business needs to succeed.
                </p>
                <Link to="/contact" className="btn btn-light btn-animated mt-3">
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="mb-5">
              <form action="">
                <div className="input-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Search articles..." />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent text-primary">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>

            <div className="mb-5">
              <h3 className="font-weight-bold mb-4">Categories</h3>
              <ul className="list-group">
                {categories.map((cat, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <a className="font-weight-semi-bold text-decoration-none" href="#">
                      <i className="fa fa-angle-right mr-2"></i>{cat.name}
                    </a>
                    <span className="badge badge-primary badge-pill">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-5">
              <h3 className="font-weight-bold mb-4">Recent Posts</h3>
              {recentPosts.map((post, index) => (
                <div key={index} className="d-flex mb-3">
                  <img
                    className="img-fluid"
                    src={post.image}
                    alt={post.title}
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <div className="d-flex align-items-center border border-left-0 px-3" style={{ height: '80px' }}>
                    <Link to={post.link} className="text-secondary font-weight-semi-bold">
                      {post.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="border p-4 mb-5 bg-primary text-white">
              <h4 className="font-weight-bold mb-3">Ready to Grow Your Business?</h4>
              <p className="mb-3">Let Meta-MicroDigital help you harness the power of digital marketing.</p>
              <Link to="/contact" className="btn btn-light btn-animated">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RakeshTourTravelsWebsite

