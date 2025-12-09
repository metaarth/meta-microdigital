import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

const ASRealityLeadGeneration = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://microdigitall.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://microdigitall.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AS Reality Lead Generation", "item": "https://microdigitall.com/blog/as-reality-lead-generation" }
      ]
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  const categories = [
    { name: "Lead Generation", count: 20 },
    { name: "Real Estate", count: 12 },
    { name: "Meta Ads", count: 18 }
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
        title="AS Reality: Transforming Lead Generation in Real Estate"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "AS Reality Lead Generation" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="position-relative">
              <img className="img-fluid w-100" src="/assets/images/brandlogo/As.jpg" alt="AS Reality Lead Generation" />
              <div
                className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center"
                style={{ width: '80px', height: '80px', bottom: 0, left: 0 }}
              >
                <h6 className="text-uppercase mt-2 mb-n2">Nov</h6>
                <h1 className="m-0">12</h1>
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
                    Real Estate
                  </a>
                </div>
              </div>
              <h2 className="font-weight-bold">How AS Reality Boosted Sales with High-Quality Lead Generation</h2>
            </div>

            <div className="mb-5">
              <p className="lead">
                AS Reality, a real estate business owned by Sushant Pawar, needed a reliable system to generate high-quality 
                leads and improve their sales pipeline. Through strategic social media management, targeted Meta Ads campaigns, 
                and proven lead generation strategies, we helped them achieve remarkable results.
              </p>

              <h3 className="mt-4 mb-3">The Challenge</h3>
              <p>
                Real estate is a highly competitive industry where quality leads are crucial for success. AS Reality faced several challenges:
              </p>
              <ul>
                <li>Low inquiry rates and poor lead quality</li>
                <li>Ineffective traditional marketing methods</li>
                <li>Need for consistent lead flow to maintain sales pipeline</li>
                <li>Limited online presence and brand visibility</li>
              </ul>

              <h3 className="mt-4 mb-3">Our Strategy</h3>
              <p>
                We developed a comprehensive digital marketing approach specifically tailored for real estate:
              </p>
              <ul>
                <li>
                  <strong>Social Media Management:</strong> Created engaging content showcasing properties, market insights, 
                  and success stories to build trust and authority in the real estate market.
                </li>
                <li>
                  <strong>Meta Ads Campaigns:</strong> Designed highly targeted Facebook and Instagram ad campaigns that 
                  reached potential property buyers and investors in specific geographic locations and demographics.
                </li>
                <li>
                  <strong>Lead Generation System:</strong> Implemented a sophisticated lead capture and nurturing system 
                  that qualified prospects and moved them through the sales funnel effectively.
                </li>
                <li>
                  <strong>Content Marketing:</strong> Produced valuable content about property investment, market trends, 
                  and buying guides that attracted serious buyers.
                </li>
              </ul>

              <h3 className="mt-4 mb-3">The Results</h3>
              <p>
                The impact was immediate and significant:
              </p>
              <ul>
                <li>Dramatic improvement in inquiry rates with high-quality, qualified leads</li>
                <li>Significant boost in sales pipeline with more serious prospects</li>
                <li>Improved conversion rates from leads to actual sales</li>
                <li>Enhanced brand reputation and trust in the real estate market</li>
                <li>Consistent flow of leads that maintained steady business growth</li>
              </ul>

              <div className="alert alert-info mt-4">
                <h5>
                  <i className="fas fa-quote-left mr-2"></i>Client Testimonial
                </h5>
                <p className="mb-0">
                  <em>"The lead quality was excellent. It truly boosted our conversions. We now have a steady stream of 
                  qualified leads that actually convert into sales. Meta-MicroDigital's approach to real estate marketing is 
                  exactly what we needed."</em> - Sushant Pawar, Owner, AS Reality
                </p>
              </div>

              <div className="alert alert-primary mt-4">
                <h5>
                  <i className="fas fa-lightbulb mr-2"></i>Ready to Transform Your Lead Generation?
                </h5>
                <p className="mb-0">
                  Whether you're in real estate or any other industry, quality lead generation is key to business growth. 
                  Let us help you build a system that delivers results.
                </p>
                <Link to="/contact" className="btn btn-light btn-animated mt-3">
                  Get Free Consultation
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

export default ASRealityLeadGeneration

