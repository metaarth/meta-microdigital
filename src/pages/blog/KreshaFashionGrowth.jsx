import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

const KreshaFashionGrowth = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://microdigitall.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://microdigitall.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Kresha Fashion Growth", "item": "https://microdigitall.com/blog/kresha-fashion-growth" }
      ]
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  const categories = [
    { name: "Digital Marketing", count: 25 },
    { name: "Fashion & Retail", count: 14 },
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
        title="Kresha Fashion: Driving Growth Through Strategic Digital Marketing"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "Kresha Fashion Growth" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="position-relative">
              <img className="img-fluid w-100" src="/assets/images/brandlogo/kresha.jpg" alt="Kresha Fashion Growth" />
              <div
                className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center"
                style={{ width: '80px', height: '80px', bottom: 0, left: 0 }}
              >
                <h6 className="text-uppercase mt-2 mb-n2">Nov</h6>
                <h1 className="m-0">8</h1>
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
                    Fashion Marketing
                  </a>
                </div>
              </div>
              <h2 className="font-weight-bold">How Kresha Fashion Achieved Remarkable Growth with Digital Marketing</h2>
            </div>

            <div className="mb-5">
              <p className="lead">
                Kresha Fashion, owned by Udipti Gupta, experienced significant growth through our comprehensive digital 
                marketing strategy. Multiple Meta Ads campaigns combined with strategic social media branding helped them 
                gain more visibility, attract new customers, and build strong online recognition.
              </p>

              <h3 className="mt-4 mb-3">The Challenge</h3>
              <p>
                In the competitive fashion industry, standing out and reaching the right audience is crucial. Kresha Fashion faced:
              </p>
              <ul>
                <li>Limited brand visibility in a crowded market</li>
                <li>Need to reach fashion-conscious customers online</li>
                <li>Struggling to compete with established fashion brands</li>
                <li>Inconsistent online presence and branding</li>
                <li>Low customer engagement and online sales</li>
              </ul>

              <h3 className="mt-4 mb-3">Our Strategic Approach</h3>
              <p>
                We developed a multi-faceted digital marketing strategy:
              </p>
              <ul>
                <li>
                  <strong>Multiple Meta Ads Campaigns:</strong> Created and managed various targeted advertising campaigns 
                  on Facebook and Instagram, each designed for specific goals - brand awareness, product launches, sales 
                  promotions, and customer retention.
                </li>
                <li>
                  <strong>Social Media Branding:</strong> Established a consistent, premium brand identity across all 
                  social media platforms with high-quality visuals, engaging content, and a clear brand voice.
                </li>
                <li>
                  <strong>Content Strategy:</strong> Developed a content calendar featuring fashion trends, styling tips, 
                  behind-the-scenes content, and customer showcases that resonated with their target audience.
                </li>
                <li>
                  <strong>Audience Targeting:</strong> Used advanced targeting techniques to reach fashion enthusiasts, 
                  style-conscious individuals, and potential customers based on interests, behaviors, and demographics.
                </li>
                <li>
                  <strong>Retargeting Campaigns:</strong> Implemented retargeting strategies to re-engage visitors who 
                  showed interest but didn't make a purchase.
                </li>
              </ul>

              <h3 className="mt-4 mb-3">The Results</h3>
              <p>
                The impact was transformative:
              </p>
              <ul>
                <li>Significantly increased brand visibility across digital platforms</li>
                <li>Substantial growth in customer base and online recognition</li>
                <li>Improved online sales and customer engagement</li>
                <li>Established Kresha Fashion as a recognizable brand in the fashion market</li>
                <li>Consistent growth in followers and brand advocates</li>
                <li>Better return on advertising investment with optimized campaigns</li>
              </ul>

              <div className="alert alert-info mt-4">
                <h5>
                  <i className="fas fa-quote-left mr-2"></i>Client Testimonial
                </h5>
                <p className="mb-0">
                  <em>"Our online sales increased after consistent marketing. Great results! The multiple campaigns helped 
                  us reach different segments of our target audience, and the brand recognition we've gained is incredible. 
                  Meta-MicroDigital really understands fashion marketing."</em> - Udipti Gupta, Owner, Kresha Fashion
                </p>
              </div>

              <div className="alert alert-primary mt-4">
                <h5>
                  <i className="fas fa-lightbulb mr-2"></i>Ready to Grow Your Fashion Brand?
                </h5>
                <p className="mb-0">
                  The fashion industry is highly competitive, but with the right digital marketing strategy, your brand 
                  can stand out and thrive. Let us help you achieve similar growth.
                </p>
                <Link to="/contact" className="btn btn-light btn-animated mt-3">
                  Start Your Growth Journey
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

export default KreshaFashionGrowth

