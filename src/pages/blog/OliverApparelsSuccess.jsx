import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

const OliverApparelsSuccess = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://microdigitall.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://microdigitall.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Oliver Apparels Success", "item": "https://microdigitall.com/blog/oliver-apparels-success" }
      ]
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  const categories = [
    { name: "Digital Marketing", count: 25 },
    { name: "Social Media", count: 22 },
    { name: "E-commerce", count: 15 }
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
        title="Oliver Apparels Success Story"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "Oliver Apparels Success" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="position-relative">
              <img className="img-fluid w-100" src="/assets/images/brandlogo/oliver.jpg" alt="Oliver Apparels Success" />
              <div
                className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center"
                style={{ width: '80px', height: '80px', bottom: 0, left: 0 }}
              >
                <h6 className="text-uppercase mt-2 mb-n2">Nov</h6>
                <h1 className="m-0">15</h1>
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
                    Case Study
                  </a>
                </div>
              </div>
              <h2 className="font-weight-bold">How Oliver Apparels Built a Strong Online Presence from Scratch</h2>
            </div>

            <div className="mb-5">
              <p className="lead">
                Oliver Apparels, a clothing brand owned by Rakesh Middha, came to Meta-MicroDigital with a vision to establish 
                a strong online presence. Starting from zero, we helped them build their brand online through strategic social 
                media setup, Meta Ads campaigns, and comprehensive business generation strategies.
              </p>

              <h3 className="mt-4 mb-3">The Challenge</h3>
              <p>
                When Oliver Apparels approached us, they had minimal online presence. As a clothing brand in a competitive market, 
                they needed to:
              </p>
              <ul>
                <li>Establish brand identity on social media platforms</li>
                <li>Generate quality leads and customer inquiries</li>
                <li>Increase brand visibility in the digital space</li>
                <li>Build trust and credibility with potential customers</li>
              </ul>

              <h3 className="mt-4 mb-3">Our Solution</h3>
              <p>
                We implemented a comprehensive digital marketing strategy that included:
              </p>
              <ul>
                <li>
                  <strong>Social Media Setup & Management:</strong> Created and optimized profiles across Facebook, Instagram, 
                  and other relevant platforms with consistent branding and engaging content.
                </li>
                <li>
                  <strong>Meta Ads Campaigns:</strong> Developed targeted advertising campaigns to reach the right audience, 
                  showcasing Oliver Apparels' unique clothing collections and brand story.
                </li>
                <li>
                  <strong>Business Generation:</strong> Implemented lead generation strategies that connected the brand with 
                  potential customers actively looking for quality clothing options.
                </li>
                <li>
                  <strong>Content Strategy:</strong> Created visually appealing content that highlighted product quality, 
                  style, and brand values.
                </li>
              </ul>

              <h3 className="mt-4 mb-3">The Results</h3>
              <p>
                Within a few months of implementing our strategies, Oliver Apparels experienced significant growth:
              </p>
              <ul>
                <li>Substantial increase in brand visibility across social media platforms</li>
                <li>Significant growth in customer inquiries and engagement</li>
                <li>Improved brand recognition in the clothing market</li>
                <li>Established a strong foundation for long-term online success</li>
              </ul>

              <div className="alert alert-info mt-4">
                <h5>
                  <i className="fas fa-quote-left mr-2"></i>Client Testimonial
                </h5>
                <p className="mb-0">
                  <em>"Great team! They helped us build our brand online from scratch. The visibility and customer inquiries 
                  grew significantly, and we're very happy with the results."</em> - Rakesh Middha, Owner, Oliver Apparels
                </p>
              </div>

              <div className="alert alert-primary mt-4">
                <h5>
                  <i className="fas fa-lightbulb mr-2"></i>Ready to Build Your Online Presence?
                </h5>
                <p className="mb-0">
                  Like Oliver Apparels, your business can also establish a strong online presence and grow your customer base. 
                  Let Meta-MicroDigital help you achieve similar results.
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

export default OliverApparelsSuccess

