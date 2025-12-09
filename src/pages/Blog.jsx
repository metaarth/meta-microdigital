import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const Blog = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://microdigitall.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://microdigitall.com/blog" }
      ]
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "How Oliver Apparels Built a Strong Online Presence from Scratch",
      excerpt: "Discover how Oliver Apparels established a strong online presence with social media setup, Meta Ads, and business generation. Their visibility and customer inquiries grew significantly.",
      image: "/assets/images/brandlogo/oliver.jpg",
      date: { month: "Nov", day: 15 },
      author: "Meta-MicroDigital Team",
      category: "Case Study",
      link: "/blog/oliver-apparels-success"
    },
    {
      id: 2,
      title: "How AS Reality Boosted Sales with High-Quality Lead Generation",
      excerpt: "Learn how AS Reality improved their inquiry rate and sales pipeline drastically through strategic social media management, Meta Ads, and proven lead generation strategies.",
      image: "/assets/images/brandlogo/As.jpg",
      date: { month: "Nov", day: 12 },
      author: "Meta-MicroDigital Team",
      category: "Real Estate",
      link: "/blog/as-reality-lead-generation"
    },
    {
      id: 3,
      title: "How a Professional Website Transformed Rakesh Tour & Travels' Business",
      excerpt: "See how a fully functional business website combined with social media management improved customer trust and increased bookings for Rakesh Tour & Travels.",
      image: "/assets/images/brandlogo/rakesh.jpg",
      date: { month: "Nov", day: 10 },
      author: "Meta-MicroDigital Team",
      category: "Web Development",
      link: "/blog/rakesh-tour-travels-website"
    },
    {
      id: 4,
      title: "How Kresha Fashion Achieved Remarkable Growth with Digital Marketing",
      excerpt: "Explore how multiple Meta Ads campaigns and strategic social media branding helped Kresha Fashion gain more visibility, customers, and online recognition.",
      image: "/assets/images/brandlogo/kresha.jpg",
      date: { month: "Nov", day: 8 },
      author: "Meta-MicroDigital Team",
      category: "Fashion Marketing",
      link: "/blog/kresha-fashion-growth"
    }
  ]

  const categories = [
    { name: "Digital Marketing", count: 25 },
    { name: "SEO", count: 18 },
    { name: "Social Media", count: 22 },
    { name: "Web Development", count: 15 },
    { name: "Analytics", count: 12 }
  ]

  const recentPosts = blogPosts.slice(0, 4)

  return (
    <>
      <PageHeader
        title="Blog"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {blogPosts.map((post) => (
                <div key={post.id} className={post.id <= 2 ? "col-md-12 mb-3" : "col-md-6 mb-3"}>
                  <Link to={post.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div className="position-relative">
                      <img className="img-fluid w-100" src={post.image} alt={post.title} />
                      <div
                        className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center"
                        style={{ width: '80px', height: '80px', bottom: 0, left: 0 }}
                      >
                        <h6 className="text-uppercase mt-2 mb-n2">{post.date.month}</h6>
                        <h1 className="m-0">{post.date.day}</h1>
                      </div>
                    </div>
                    <div className="border border-top-0 mb-3 blog-card" style={{ padding: '30px' }}>
                      <div className="d-flex mb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded-circle"
                            style={{ width: '40px', height: '40px' }}
                            src="/assets/images/user.jpg"
                            alt={post.author}
                          />
                          <span className="text-muted ml-2">
                            {post.author}
                          </span>
                        </div>
                        <div className="d-flex align-items-center ml-4">
                          <i className="far fa-bookmark text-primary"></i>
                          <span className="text-muted ml-2">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <h4 className="font-weight-bold">
                        {post.title}
                      </h4>
                      <p className="mt-3">{post.excerpt}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
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
              {recentPosts.map((post) => (
                <div key={post.id} className="d-flex mb-3">
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

export default Blog
