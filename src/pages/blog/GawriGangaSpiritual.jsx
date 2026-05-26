import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

import gg1 from '../../Assets/ClientContent/GawriGanga/post/gg1.png'
import gg2 from '../../Assets/ClientContent/GawriGanga/post/gg2.png'
import gg3 from '../../Assets/ClientContent/GawriGanga/post/gg3.png'
import gg4 from '../../Assets/ClientContent/GawriGanga/post/gg4.png'
import reel1 from '../../Assets/ClientContent/GawriGanga/Reels/1.webp'
import reel2 from '../../Assets/ClientContent/GawriGanga/Reels/2.webp'
import reel3 from '../../Assets/ClientContent/GawriGanga/Reels/3.webp'
import reel4 from '../../Assets/ClientContent/GawriGanga/Reels/4.webp'

const GawriGangaSpiritual = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://microdigitall.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://microdigitall.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Gawri Ganga Spiritual Brand", "item": "https://microdigitall.com/blog/gawri-ganga-spiritual-brand" }
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
        title="Gawri Ganga — Spiritual Wellness Brand"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "Gawri Ganga Spiritual Brand" }
        ]}
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="position-relative">
              <img className="img-fluid w-100" src="/assets/images/brandlogo/gawriganga.png" alt="Gawri Ganga Spiritual Brand" />
              <div
                className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center"
                style={{ width: '80px', height: '80px', bottom: 0, left: 0 }}
              >
                <h6 className="text-uppercase mt-2 mb-n2">May</h6>
                <h1 className="m-0">26</h1>
              </div>
            </div>
            <div className="pt-4 pb-2">
              <div className="d-flex mb-3">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    style={{ width: '40px', height: '40px' }}
                    src="/assets/images/user.jpg"
                    alt="Meta MicroDigital Author"
                  />
                  <a className="text-muted ml-2" href="#">
                    Meta MicroDigital Team
                  </a>
                </div>
                <div className="d-flex align-items-center ml-4">
                  <i className="far fa-bookmark text-primary"></i>
                  <a className="text-muted ml-2" href="#">
                    Case Study
                  </a>
                </div>
              </div>
              <h2 className="font-weight-bold">How Gawri Ganga Built a Trusted Spiritual Wellness Brand Online</h2>
            </div>

            <div className="mb-5">
              <p className="lead">
                Gawri Ganga is an authentic Rudraksha and spiritual wellness brand based in India, offering lab-verified Rudraksha beads,
                handcrafted malas, and signature aura sprays. With a mission rooted in devotion and authenticity, they partnered with
                Meta MicroDigital to establish a powerful digital presence — spanning a full e-commerce website, Instagram branding,
                YouTube content, and targeted social media campaigns.
              </p>

              <h3 className="mt-4 mb-3">The Brand</h3>
              <p>
                Gawri Ganga stands apart in the spiritual products market by emphasizing quality, certification, and genuine sourcing.
                Every Rudraksha bead is lab-verified and ethically sourced, backed by proper quality checks before dispatch. Their product
                range includes:
              </p>
              <ul>
                <li><strong>Rudraksha Beads & Malas:</strong> Handpicked beads presented in elegant packaging, suitable for daily practice, gifting, and spiritual rituals.</li>
                <li><strong>Rashi-based Rudraksha:</strong> Customers can find the Rudraksha that aligns with their zodiac sign for personalized spiritual benefits.</li>
                <li><strong>Aura Sprays:</strong> A unique product line including Amrat Bindu (Lavender), Chakra Balance (Gurhal/Hibiscus), Maitri (Lavender), and Shuddhi (Mogra & Kewda) — designed for meditation, yoga, and creating calm environments.</li>
                <li><strong>Purpose-driven Collections:</strong> Products curated by intention — Wealth, Love, Health, Luck, Protection, Peace, Courage, and Balance.</li>
              </ul>

              <h3 className="mt-4 mb-3">Instagram Posts — A Glimpse of the Feed</h3>
              <div className="row mb-4">
                <div className="col-6 col-md-3 mb-3">
                  <img src={gg1} alt="Gawri Ganga Instagram post 1" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <img src={gg2} alt="Gawri Ganga Instagram post 2" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <img src={gg3} alt="Gawri Ganga Instagram post 3" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <img src={gg4} alt="Gawri Ganga Instagram post 4" className="img-fluid rounded shadow-sm" />
                </div>
              </div>

              <h3 className="mt-4 mb-3">The Challenge</h3>
              <p>
                Despite having exceptional products and deep spiritual expertise, Gawri Ganga faced the challenge of reaching
                devotees and wellness seekers in a crowded online space. They needed to:
              </p>
              <ul>
                <li>Build a professional, trustworthy e-commerce website that reflected the brand's spiritual authenticity</li>
                <li>Establish a strong social media presence on Instagram (<a href="https://www.instagram.com/gawriganga.in/" target="_blank" rel="noopener noreferrer">@gawriganga.in</a>) and YouTube</li>
                <li>Educate customers about Rudraksha benefits, care, and proper usage</li>
                <li>Create a seamless shopping experience with COD, fast dispatch, and secure payments</li>
                <li>Build trust through certification, quality testing, and transparent sourcing</li>
              </ul>

              <h3 className="mt-4 mb-3">Our Solution</h3>
              <p>
                Meta MicroDigital implemented a comprehensive digital strategy tailored to the spiritual wellness niche:
              </p>
              <ul>
                <li>
                  <strong>Website Design & Development:</strong> Built <a href="https://www.gawriganga.com/" target="_blank" rel="noopener noreferrer">gawriganga.com</a> — a
                  fully responsive e-commerce platform with product categories by purpose and Rashi, elegant product showcases,
                  a detailed FAQ section, and integrated Google Reviews for social proof.
                </li>
                <li>
                  <strong>Instagram Strategy:</strong> Developed a content plan with visually rich Reels and Posts featuring Rudraksha
                  close-ups, spiritual tips, product showcases, and customer stories. The feed is crafted to inspire trust and devotion.
                </li>
                <li>
                  <strong>YouTube Presence:</strong> Set up a YouTube channel for podcasts and longer conversations about Rudraksha,
                  devotion, and the stories behind the brand — building deeper connections with the audience.
                </li>
                <li>
                  <strong>Content & Blog:</strong> Created a journal section with articles on rituals, care guides, japa practices,
                  and everyday sadhana — positioning Gawri Ganga as a thought leader in the spiritual wellness space.
                </li>
                <li>
                  <strong>Trust & Credibility:</strong> Highlighted lab verification, ethical sourcing, and certification badges
                  prominently across the website to reassure customers of product authenticity.
                </li>
              </ul>

              <h3 className="mt-4 mb-3">Key Features of the Website</h3>
              <ul>
                <li><strong>Shop by Purpose:</strong> Customers can browse products based on their intention — whether it's attracting wealth, finding peace, or boosting courage.</li>
                <li><strong>Discover by Rashi:</strong> A unique zodiac-based product finder that recommends the right Rudraksha for each zodiac sign.</li>
                <li><strong>Aura Spray Collection:</strong> Dedicated showcase for the signature spray line with detailed descriptions of each fragrance and its benefits.</li>
                <li><strong>Google Reviews Integration:</strong> QR code-based review collection to build social proof and customer confidence.</li>
                <li><strong>COD & Secure Payments:</strong> Cash on Delivery availability across India with secure online payment options.</li>
              </ul>

              <h3 className="mt-4 mb-3">Reels That Connect with the Audience</h3>
              <div className="row mb-4">
                <div className="col-6 col-md-3 mb-3">
                  <img src={reel1} alt="Gawri Ganga Reel 1" className="img-fluid rounded shadow-sm" style={{ aspectRatio: '9/16', objectFit: 'cover', width: '100%' }} />
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <img src={reel2} alt="Gawri Ganga Reel 2" className="img-fluid rounded shadow-sm" style={{ aspectRatio: '9/16', objectFit: 'cover', width: '100%' }} />
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <img src={reel3} alt="Gawri Ganga Reel 3" className="img-fluid rounded shadow-sm" style={{ aspectRatio: '9/16', objectFit: 'cover', width: '100%' }} />
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <img src={reel4} alt="Gawri Ganga Reel 4" className="img-fluid rounded shadow-sm" style={{ aspectRatio: '9/16', objectFit: 'cover', width: '100%' }} />
                </div>
              </div>

              <h3 className="mt-4 mb-3">The Results</h3>
              <p>
                Since launching the digital strategy, Gawri Ganga has seen impressive growth:
              </p>
              <ul>
                <li>A professional, conversion-optimized e-commerce website trusted by Shiv devotees nationwide</li>
                <li>Growing Instagram community with high-engagement Reels and a consistent posting rhythm</li>
                <li>Increased customer inquiries and direct orders through the website</li>
                <li>Strong brand positioning as an authentic, quality-first spiritual wellness brand</li>
                <li>Positive Google reviews reinforcing trust and customer satisfaction</li>
              </ul>

              <div className="alert alert-info mt-4">
                <h5>
                  <i className="fas fa-om mr-2"></i>About Gawri Ganga
                </h5>
                <p className="mb-0">
                  <em>"Quality tested & spiritually sanctified. Trusted by Shiv devotees nationwide. Energized for positivity & protection."</em>
                  — Gawri Ganga promises authentic, ethically sourced spiritual products backed by lab verification and proper certification.
                </p>
              </div>

              <div className="alert alert-primary mt-4">
                <h5>
                  <i className="fas fa-lightbulb mr-2"></i>Want to Build Your Spiritual or E-commerce Brand Online?
                </h5>
                <p className="mb-0">
                  Like Gawri Ganga, your brand can reach devotees and customers across India with a professional website, engaging social
                  media presence, and a digital strategy built for trust and growth. Let Meta MicroDigital bring your vision to life.
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
              <p className="mb-3">Let Meta MicroDigital help you harness the power of digital marketing.</p>
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

export default GawriGangaSpiritual
