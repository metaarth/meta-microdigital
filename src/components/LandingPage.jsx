import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Settings2,
  Target,
  TrendingUp,
  Clock,
  Headphones,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import '../styles/landing.css'

const brands = [
  'Oliver Apparels',
  '2d Cafe',
  'Gawri Ganga',
  'Kalaagri',
  'Meta Fit',
  'AG Fitness',
  'Kailash Electronics',
  'Kresha Fashion',
  'AS Real Estate',
  'Rakesh Tour & Travels',
  'Legaloids Law Firm',
  'Metaarth Capital',
]

const features = [
  { icon: Target, label: 'ROI Focused' },
  { icon: TrendingUp, label: 'Data Driven' },
  { icon: Clock, label: 'On-Time Delivery' },
  { icon: Headphones, label: 'Dedicated Support' },
]

const CampaignChart = () => (
  <svg viewBox="0 0 420 140" className="lp-chart-svg">
    <defs>
      <linearGradient id="lp-areaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="lp-lineGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path
      d="M0,120 C30,115 60,105 90,92 C120,80 150,70 180,58 C210,48 240,38 270,30 C300,24 330,18 360,14 L420,10 L420,140 L0,140Z"
      fill="url(#lp-areaGrad)"
    />
    <path
      d="M0,120 C30,115 60,105 90,92 C120,80 150,70 180,58 C210,48 240,38 270,30 C300,24 330,18 360,14 L420,10"
      fill="none"
      stroke="url(#lp-lineGrad)"
      strokeWidth="2.5"
    />
    <circle cx="270" cy="30" r="5" fill="#06b6d4" />
    <circle cx="270" cy="30" r="12" fill="#06b6d4" fillOpacity="0.15" />
    <text x="276" y="24" fill="#34d399" fontSize="8" fontWeight="600">↑28.5%</text>
  </svg>
)

const LandingPage = () => {
  return (
    <section className="lp">
      {/* Ambient glow */}
      <div className="lp-glow lp-glow--cyan" />
      <div className="lp-glow lp-glow--violet" />
      <div className="lp-glow lp-glow--blue" />

      {/* Hero */}
      <div className="lp-hero">
        {/* Left */}
        <div className="lp-left">
          <div className="lp-badge">
            <span className="lp-badge-dot" />
            Digital Growth Partner
          </div>

          <p className="lp-cursive">We grow brands!</p>

          <h1 className="lp-headline">
            Data-Driven Growth
            <br />
            for <span className="lp-headline-accent">Modern Brands</span>
            <br />
            &amp; Businesses
          </h1>

          <p className="lp-sub">
            We build powerful digital strategies, create stunning brands, and run
            high-performing campaigns that deliver real results.
          </p>

          <div className="lp-ctas">
            <Link to="/contact" className="lp-btn lp-btn--primary">
              Get Free Strategy Call
              <ArrowRight size={16} />
            </Link>
            <Link to="/service" className="lp-btn lp-btn--ghost">
              Explore Services
              <Settings2 size={16} />
            </Link>
          </div>

          <div className="lp-features">
            {features.map(({ icon: Icon, label }) => (
              <span key={label} className="lp-feature">
                <Icon size={14} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Dashboard */}
        <div className="lp-right">
          <div className="lp-dashboard">
            {/* Main card */}
            <div className="lp-glass lp-dash-main">
              <div className="lp-dash-header">
                <span className="lp-dash-title">Campaign Performance</span>
                <span className="lp-dash-period">This Month ▾</span>
              </div>
              <div>
                <p className="lp-dash-label">Total Revenue</p>
                <p className="lp-dash-value">₹ 48,76,560</p>
                <p className="lp-dash-change">↑ 28.5% vs last month</p>
              </div>
              <div className="lp-dash-chart">
                <CampaignChart />
                <div className="lp-dash-axis">
                  {[0, 5, 10, 15, 20, 25, 30].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile / tablet stats (replaces floating cards) */}
            <div className="lp-mobile-stats">
              <div className="lp-glass lp-stat-inner">
                <p className="lp-stat-label">ROAS</p>
                <p className="lp-stat-value lp-stat-value--cyan">5.76x</p>
              </div>
              <div className="lp-glass lp-stat-inner">
                <p className="lp-stat-label">Conversions</p>
                <p className="lp-stat-value lp-stat-value--white">3,672</p>
              </div>
              <div className="lp-glass lp-stat-inner">
                <p className="lp-stat-label">Meta Ads</p>
                <p className="lp-stat-value lp-stat-value--white">12</p>
              </div>
              <div className="lp-glass lp-stat-inner">
                <p className="lp-stat-label">Total Spend</p>
                <p className="lp-stat-value lp-stat-value--white">₹ 8.45L</p>
              </div>
            </div>

            {/* Meta Ads — floating left */}
            <div className="lp-float lp-float--meta">
              <div className="lp-glass lp-float-inner">
                <div className="lp-meta-row">
                  <div className="lp-meta-icon">∞</div>
                  <div>
                    <p className="lp-meta-label">Meta Ads</p>
                    <p className="lp-meta-sub">Active Campaigns</p>
                    <p className="lp-meta-val">12</p>
                    <p className="lp-meta-change">↑ 35%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ROAS — floating top right */}
            <div className="lp-float lp-float--roas">
              <div className="lp-glass lp-stat-inner">
                <p className="lp-stat-label">ROAS</p>
                <p className="lp-stat-value lp-stat-value--cyan">5.76x</p>
                <p className="lp-stat-change">↑ 18.2% vs last month</p>
              </div>
            </div>

            {/* Conversions — floating mid right */}
            <div className="lp-float lp-float--conv">
              <div className="lp-glass lp-stat-inner">
                <p className="lp-stat-label">Conversions</p>
                <p className="lp-stat-value lp-stat-value--white">3,672</p>
                <p className="lp-stat-change">↑ 32.4% vs last month</p>
              </div>
            </div>

            {/* Top Performing — floating bottom */}
            <div className="lp-float lp-float--table">
              <div className="lp-glass lp-float-inner">
                <p className="lp-table-title">Top Performing Campaigns</p>
                {[
                  { name: 'Brand Awareness', roas: '6.25x' },
                  { name: 'Lead Generation', roas: '5.40x' },
                  { name: 'Sales Conversion', roas: '7.80x' },
                ].map((c) => (
                  <div key={c.name} className="lp-table-row">
                    <span className="lp-table-name">
                      <span className="lp-table-dot" />
                      {c.name}
                    </span>
                    <span className="lp-table-roas">ROAS {c.roas}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Spend + donut — floating bottom right */}
            <div className="lp-float lp-float--spend">
              <div className="lp-glass lp-spend-row">
                <div>
                  <p className="lp-stat-label">Total Spend</p>
                  <p className="lp-stat-value lp-stat-value--white" style={{ fontSize: '1.1rem' }}>
                    ₹ 8,45,230
                  </p>
                  <p className="lp-stat-change">↓ 12.4% vs last month</p>
                </div>
                <div className="lp-donut-wrap">
                  <svg viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#1e293b" strokeWidth="3" />
                    <circle
                      cx="18" cy="18" r="15.5"
                      fill="none" stroke="url(#lp-donutGrad)" strokeWidth="3"
                      strokeDasharray="72 100" strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="lp-donutGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="lp-donut-label">72%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand strip */}
      <div className="lp-brands">
        <p className="lp-brands-label">Trusted by 150+ Brands</p>
        <div className="lp-marquee">
          <div className="lp-marquee-track">
            {[...brands, ...brands].map((brand, i) => {
              const [first, ...rest] = brand.split(' ')
              return (
                <span key={`${brand}-${i}`} className="lp-brand-item">
                  {first}
                  {rest.length > 0 && <span className="lp-brand-line2">{rest.join(' ')}</span>}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
