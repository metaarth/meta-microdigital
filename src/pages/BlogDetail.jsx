import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const BlogDetail = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://microdigitall.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://microdigitall.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "The Power of Digital Marketing", "item": "https://microdigitall.com/blog/digital-marketing-power" }
      ]
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  const categories = [
    { name: "Digital Marketing", count: 25 },
    { name: "SEO", count: 18 },
    { name: "Social Media", count: 22 },
    { name: "Web Development", count: 15 },
    { name: "Analytics", count: 12 }
  ]

  const recentPosts = [
    { title: "The Power of Digital Marketing", image: "/assets/images/blog-1.jpg", link: "/blog/digital-marketing-power" },
    { title: "Complete SEO Guide for 2024", image: "/assets/images/blog-2.jpg", link: "/blog/seo-guide-2024" },
    { title: "Social Media Strategy That Works", image: "/assets/images/blog-1.jpg", link: "/blog/social-media-strategy" },
    { title: "Modern Web Development Trends", image: "/assets/images/blog-2.jpg", link: "/blog/web-development-trends" }
  ]

  return (
    <>
      <PageHeader
        title="Blog Detail"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "Detail" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="position-relative">
              <img className="img-fluid w-100" src="/assets/images/blog-1.jpg" alt="Digital Marketing Power" />
              <div
                className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center"
                style={{ width: '80px', height: '80px', bottom: 0, left: 0 }}
              >
                <h6 className="text-uppercase mt-2 mb-n2">Oct</h6>
                <h1 className="m-0">14</h1>
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
                    Digital Marketing
                  </a>
                </div>
              </div>
              <h2 className="font-weight-bold">The Power of Digital Marketing: How It Transforms Businesses and Creates Celebrities</h2>
            </div>

            <div className="mb-5">
              <p className="lead">
                In today's digital age, the power of digital marketing cannot be overstated. It has revolutionized how
                businesses operate, how brands connect with their audiences, and most remarkably, how ordinary people
                can become celebrities overnight.
              </p>

              <h3 className="mt-4 mb-3">The Digital Marketing Revolution</h3>
              <p>
                Digital marketing has transformed the business landscape in ways that were unimaginable just two decades
                ago. From small startups to multinational corporations, every business now has the potential to reach a
                global audience with the right digital strategy.
              </p>

              <p>The key components of effective digital marketing include:</p>
              <ul>
                <li>
                  <strong>Search Engine Optimization (SEO):</strong> Making your content discoverable on Google and
                  other search engines
                </li>
                <li>
                  <strong>Social Media Marketing:</strong> Building communities and engaging with customers on platforms
                  like Facebook, Instagram, Twitter, and LinkedIn
                </li>
                <li>
                  <strong>Content Marketing:</strong> Creating valuable, relevant content that attracts and retains
                  customers
                </li>
                <li>
                  <strong>Email Marketing:</strong> Nurturing leads and maintaining customer relationships
                </li>
                <li>
                  <strong>Pay-Per-Click (PPC) Advertising:</strong> Driving targeted traffic through paid search and
                  social media ads
                </li>
                <li>
                  <strong>Analytics and Data-Driven Decisions:</strong> Measuring performance and optimizing campaigns
                </li>
              </ul>

              <h3 className="mt-4 mb-3">How Social Media Makes Ordinary People Celebrities</h3>
              <p>
                The democratization of fame through social media is one of the most fascinating aspects of digital
                marketing. Platforms like TikTok, Instagram, YouTube, and Twitter have created opportunities for anyone
                with talent, creativity, or a unique perspective to build massive followings.
              </p>

              <h3 className="mt-4 mb-3">The SEO Advantage</h3>
              <p>Search Engine Optimization (SEO) is the backbone of digital visibility. When done correctly, SEO can:</p>
              <ul>
                <li>Increase organic traffic by 200-300%</li>
                <li>Build brand authority and trust</li>
                <li>Generate high-quality leads</li>
                <li>Provide long-term, sustainable growth</li>
                <li>Outperform paid advertising in terms of ROI</li>
              </ul>

              <div className="alert alert-info mt-4">
                <h5>
                  <i className="fas fa-lightbulb mr-2"></i>Ready to Transform Your Business?
                </h5>
                <p className="mb-0">
                  At Meta-MicroDigital, we help businesses harness the full power of digital marketing. From SEO and social
                  media to website development and analytics, we provide the expertise and tools you need to succeed
                  online.
                </p>
                <Link to="/contact" className="btn btn-primary btn-animated mt-3">
                  Get Started Today
                </Link>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="font-weight-bold mb-4">3 Comments</h3>
              <div className="media mb-4">
                <img
                  src="/assets/images/user.jpg"
                  alt="Image"
                  className="img-fluid mr-3 mt-1"
                  style={{ width: '45px' }}
                />
                <div className="media-body">
                  <h6>
                    Sarah Johnson <small><i>15 Oct 2024 at 2:30pm</i></small>
                  </h6>
                  <p>
                    This article perfectly captures how digital marketing has changed everything! Our small business saw
                    a 400% increase in leads after implementing the strategies you mentioned.
                  </p>
                  <button className="btn btn-sm btn-light font-weight-semi-bold">Reply</button>
                </div>
              </div>
              <div className="media mb-4">
                <img
                  src="/assets/images/user.jpg"
                  alt="Image"
                  className="img-fluid mr-3 mt-1"
                  style={{ width: '45px' }}
                />
                <div className="media-body">
                  <h6>
                    Mike Chen <small><i>14 Oct 2024 at 5:45pm</i></small>
                  </h6>
                  <p>
                    Great insights on the celebrity aspect of social media. I've seen so many people build successful
                    businesses just through Instagram and TikTok.
                  </p>
                  <button className="btn btn-sm btn-light font-weight-semi-bold">Reply</button>
                </div>
              </div>
            </div>

            <div className="border p-5">
              <h3 className="font-weight-bold mb-4">Leave a comment</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input type="url" className="form-control" id="website" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" cols="30" rows="5" className="form-control" required></textarea>
                </div>
                <div className="form-group mb-0">
                  <input type="submit" value="Leave Comment" className="btn btn-primary font-weight-semi-bold py-2 px-3 btn-animated" />
                </div>
              </form>
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

            <div className="mb-5">
              <h3 className="font-weight-bold mb-4">Popular Tags</h3>
              <div className="d-flex flex-wrap m-n1">
                {['Digital Marketing', 'SEO', 'Social Media', 'Web Design', 'Analytics', 'Growth'].map((tag) => (
                  <a key={tag} href="#" className="btn btn-outline-primary m-1">
                    {tag}
                  </a>
                ))}
              </div>
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

export default BlogDetail
