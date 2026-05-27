import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LandingPage from '../components/LandingPage'
import Counter from '../components/Counter'
import TestimonialCarousel from '../components/TestimonialCarousel'
import '../styles/home.css'

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Meta MicroDigital",
      "url": "https://microdigitall.com/",
      "logo": "https://microdigitall.com/assets/images/logo.png",
      "sameAs": [
        "https://twitter.com/microdigitall",
        "https://www.linkedin.com/company/microdigitall"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8318891438",
        "contactType": "customer service"
      }
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  const services = [
    {
      icon: 'fa-laptop-code',
      title: 'Website Design',
      desc: 'Conversion‑focused, responsive websites engineered for speed, accessibility, and brand impact.',
      link: '/service/website-design',
    },
    {
      icon: 'fa-code',
      title: 'Custom Development',
      desc: 'Reliable front‑end and back‑end development, integrations, and automations that scale.',
      link: '/service/custom-development',
    },
    {
      icon: 'fa-envelope-open-text',
      title: 'Digital Marketing',
      desc: 'Full‑funnel strategy across SEO, paid media, email, and social to drive measurable growth.',
      link: '/service/digital-marketing',
    },
    {
      icon: 'fa-chart-line',
      title: 'Growth Strategy',
      desc: 'Roadmaps, analytics, and experimentation to optimize CAC, LTV, and overall ROI.',
      link: '/service/growth-strategy',
    },
  ]

  const stats = [
    { end: 5, label: 'Years Experience' },
    { end: 15, label: 'Certified Experts' },
    { end: 150, label: 'Happy Clients' },
    { end: 300, label: 'Projects Delivered' },
  ]

  const contactInfo = [
    { icon: 'fa-map-marker-alt', title: 'Our Office', text: 'T-02, A-44 VDS Tower Sec-02 Near Sector-15 Metro Station' },
    { icon: 'fa-envelope-open', title: 'Email Us', text: 'info@metamicrodigital.com' },
    { icon: 'fa-phone-alt', iconSet: 'fas', title: 'Call Us', text: '+91 8318891438' },
  ]

  return (
    <>
      <LandingPage />

      {/* About */}
      <section className="home-section container-fluid">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5">
              <img
                src="/assets/images/hero/home-about-team.jpg"
                alt="Professionals working in a bright, modern office"
                className="img-fluid home-about-image"
              />
            </div>
            <div className="col-12 col-lg-7 mt-4 mt-lg-0">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                Who We Are
              </small>
              <h2 className="mt-2 mb-4">Your Partner for IT & Digital Growth</h2>
              <p className="mb-4">
                Meta MicroDigital blends managed IT services with full‑funnel digital marketing to help
                businesses scale with confidence. From secure cloud infrastructure and websites that
                convert to SEO, paid media and content, we build reliable systems that attract,
                engage and retain customers.
              </p>
              <p className="mb-4">
                We specialize in creating seamless digital experiences that not only look great but perform
                exceptionally. Our comprehensive approach covers everything from cloud migration and network
                security to conversion-optimized web design, search engine optimization, social media management,
                and data-driven marketing campaigns.
              </p>
              <Link to="/about" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold btn-animated">
                Read More
              </Link>
            </div>
          </div>

          <div className="home-card-grid home-card-grid--3 mt-4">
            {contactInfo.map((item) => (
              <div key={item.title} className="home-info-card border">
                <i className={`${item.iconSet || 'fa'} fa-2x ${item.icon} text-primary`} aria-hidden="true" />
                <div>
                  <h5 className="font-weight-bold">{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="home-section container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 home-section-intro mb-4 mb-lg-0">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                What we do
              </small>
              <h2 className="mt-2 mb-3">End‑to‑End IT & Marketing Solutions</h2>
              <p className="text-muted mb-4">
                From infrastructure and web to SEO, PPC, and content—everything you need to acquire
                and retain customers.
              </p>
              <Link to="/service" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold btn-animated">
                Discover More
              </Link>
            </div>
            <div className="col-12 col-lg-8">
              <div className="home-card-grid">
                {services.map((s) => (
                  <div key={s.title} className="home-service-card service-card">
                    <i className={`fa fa-3x ${s.icon} text-primary pulse`} aria-hidden="true" />
                    <h4 className="font-weight-bold">{s.title}</h4>
                    <p>{s.desc}</p>
                    <Link className="font-weight-semi-bold" to={s.link}>
                      Read More <i className="fa fa-angle-double-right" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="home-section container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 home-section-intro mb-4 mb-lg-0">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                Why Choose Us
              </small>
              <h2 className="mt-2 mb-3">Why Choose Meta MicroDigital?</h2>
              <p className="text-muted mb-4">
                We combine technical expertise with creative innovation to deliver measurable results
                that drive your business forward.
              </p>
              <div className="mb-4">
                {[
                  'Certified Google & Facebook Partners',
                  'Transparent Reporting & Analytics',
                  '24/7 Technical Support',
                  'Custom Solutions for Every Business',
                  'Proven ROI & Growth Strategies',
                ].map((item) => (
                  <p key={item} className="font-weight-semi-bold mb-2">
                    <i className="fa fa-angle-right text-primary mr-2" />
                    {item}
                  </p>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold btn-animated">
                Learn More
              </Link>
            </div>
            <div className="col-12 col-lg-6">
              <div className="home-card-grid">
                {stats.map((s) => (
                  <div key={s.label} className="home-stat-card border">
                    <Counter end={s.end} />
                    <h5 className="font-weight-bold">{s.label}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="home-section container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 home-section-intro order-1 order-lg-2 mb-4 mb-lg-0">
              <small className="d-inline bg-primary text-white text-uppercase font-weight-bold px-1">
                Our Pricing Plan
              </small>
              <h2 className="mt-2 mb-3">Affordable Digital Marketing Packages</h2>
              <p className="text-muted mb-4">
                Choose the perfect plan for your business growth. All packages include professional
                support and transparent reporting.
              </p>
              <h5 className="font-weight-bold mb-4">Need A Custom Package?</h5>
              <Link to="/contact" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold btn-animated">
                Contact Now
              </Link>
            </div>
            <div className="col-12 col-lg-7 order-2 order-lg-1">
              <div className="home-pricing-grid">
                <div className="home-pricing-card">
                  <div className="home-pricing-head">
                    <h3>Starter</h3>
                    <h4 className="display-4 mb-0">
                      <small className="align-top" style={{ fontSize: '18px' }}>₹</small>
                      25,000
                      <small className="align-bottom" style={{ fontSize: '14px' }}>/mo</small>
                    </h4>
                  </div>
                  <div className="home-pricing-body border border-top-0">
                    <p>15 Social Media Posts</p>
                    <p>10 Video Content</p>
                    <p>Basic SEO Setup</p>
                    <p>Monthly Analytics Report</p>
                    <Link to="/contact" className="btn btn-primary btn-animated">Order Now</Link>
                  </div>
                </div>
                <div className="home-pricing-card">
                  <div className="home-pricing-head">
                    <h3>Premium</h3>
                    <h4 className="display-4 mb-0">
                      <small className="align-top" style={{ fontSize: '18px' }}>₹</small>
                      45,000
                      <small className="align-bottom" style={{ fontSize: '14px' }}>/mo</small>
                    </h4>
                  </div>
                  <div className="home-pricing-body border border-top-0">
                    <p>25 Social Media Posts</p>
                    <p>15 Video Content</p>
                    <p>Model Photography (2 sessions)</p>
                    <p>Google Ads Management</p>
                    <Link to="/contact" className="btn btn-primary btn-animated">Order Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-section container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 home-section-intro mb-4 mb-lg-0">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                What clients say
              </small>
              <h2 className="mt-2 mb-3">Clients Say About Our Services</h2>
              <p className="text-muted mb-4">
                Hear from our clients about how our digital solutions helped them grow their brand,
                boost visibility, and scale their business online.
              </p>
              <Link to="/contact" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">
                Submit Review
              </Link>
            </div>
            <div className="col-12 col-lg-8 home-testimonial-wrap">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
