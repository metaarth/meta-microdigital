import { useEffect, useState } from 'react'
import { socialPortfolioClients, websitePortfolioClients } from '../data/portfolio'
import {
  formatInstagramHandle,
  getInstagramProfileUrl,
  getReelEmbedUrl,
  getReelPermalink,
  getWebsiteHostname,
} from '../utils/portfolioHelpers'

const TABS = {
  website: 'website',
  social: 'social',
}

const ReelPreview = ({ reel, clientName, index }) => {
  const permalink = getReelPermalink(reel.url)
  const embedUrl = getReelEmbedUrl(reel.url)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 5000)
    return () => window.clearTimeout(timer)
  }, [embedUrl])

  if (!permalink || !embedUrl) return null

  return (
    <a
      href={permalink}
      target="_blank"
      rel="noopener noreferrer"
      className={`portfolio-reel-card ${ready ? 'portfolio-reel-card--ready' : ''}`}
      aria-label={`Watch ${clientName} reel ${index + 1} on Instagram`}
    >
      <div className="portfolio-reel-embed-wrap" aria-hidden="true">
        {!ready && <div className="portfolio-reel-card-loading" />}
        <iframe
          src={embedUrl}
          title={reel.title || `${clientName} reel ${index + 1}`}
          className="portfolio-reel-iframe"
          loading="lazy"
          tabIndex={-1}
          onLoad={() => setReady(true)}
        />
      </div>

      <div className="portfolio-reel-card-shade" aria-hidden="true" />

      <span className="portfolio-reel-badge">
        <i className="fab fa-instagram" aria-hidden="true" />
        REEL
      </span>

      <div className="portfolio-reel-play-wrap">
        <span className="portfolio-reel-play-btn" aria-hidden="true">
          <i className="fas fa-play" />
        </span>
        <span className="portfolio-reel-watch-text">Watch on Instagram</span>
      </div>
    </a>
  )
}

const WebsitePreview = ({ website, name }) => {
  const hostname = getWebsiteHostname(website)

  return (
    <div className="portfolio-website-preview">
      <div className="portfolio-browser-chrome">
        <span className="portfolio-browser-dot" />
        <span className="portfolio-browser-dot" />
        <span className="portfolio-browser-dot" />
        <span className="portfolio-browser-url">{hostname}</span>
      </div>
      <div className="portfolio-website-frame">
        <iframe
          src={website}
          title={`${name} website preview`}
          className="portfolio-website-iframe"
          sandbox="allow-scripts allow-same-origin allow-popups"
          loading="lazy"
        />
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-website-overlay-link"
          aria-label={`Visit ${name} website`}
        >
          <span className="portfolio-visit-badge">
            <i className="fas fa-external-link-alt mr-2" aria-hidden="true" />
            Visit live site
          </span>
        </a>
      </div>
    </div>
  )
}

const ClientHeader = ({ client, showInstagram = false }) => {
  const instagramProfileUrl = getInstagramProfileUrl(client)
  const handleLabel = formatInstagramHandle(client.instagramHandle)

  return (
    <header className="portfolio-client-header">
      <div className="portfolio-client-header-main">
        <h3 className="portfolio-client-name">{client.name}</h3>
        {client.tagline && <p className="portfolio-client-tagline text-muted mb-0">{client.tagline}</p>}
      </div>
      {showInstagram && instagramProfileUrl && handleLabel && (
        <a
          href={instagramProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-client-instagram btn btn-outline-instagram"
        >
          <i className="fab fa-instagram mr-2" aria-hidden="true" />
          {handleLabel}
        </a>
      )}
      {showInstagram && !instagramProfileUrl && !client.reels?.length && (
        <span className="text-muted small">Instagram handle coming soon</span>
      )}
    </header>
  )
}

const ClientBlock = ({ children, isLast }) => (
  <article className={`portfolio-client-block ${!isLast ? 'portfolio-client-block-divider' : ''}`}>
    {children}
  </article>
)

const WebsiteTabContent = () => {
  const clients = websitePortfolioClients

  if (clients.length === 0) {
    return <p className="text-center text-muted">No website projects yet.</p>
  }

  return (
    <div className="portfolio-clients-list">
      {clients.map((client, index) => (
        <ClientBlock key={client.id} isLast={index === clients.length - 1}>
          <ClientHeader client={client} />
          <div className="portfolio-client-content">
            <WebsitePreview website={client.website} name={client.name} />
            <div className="portfolio-client-actions mt-3">
              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-animated"
              >
                <i className="fas fa-globe mr-2" aria-hidden="true" />
                Visit {getWebsiteHostname(client.website)}
              </a>
            </div>
          </div>
        </ClientBlock>
      ))}
    </div>
  )
}

const SocialTabContent = () => {
  const clients = socialPortfolioClients

  return (
    <div className="portfolio-clients-list">
      {clients.map((client, index) => {
        const reels = client.reels.filter((r) => r?.url?.trim())

        return (
          <ClientBlock key={client.id} isLast={index === clients.length - 1}>
            <ClientHeader client={client} showInstagram />
            <div className="portfolio-client-content">
              <h4 className="portfolio-subsection-title">
                <i className="fab fa-instagram mr-2" aria-hidden="true" />
                Related reels
                <span className="portfolio-reel-count">{reels.length}</span>
              </h4>
              <div className="portfolio-reels-scroll-wrap">
                <div className="portfolio-reels-scroll">
                  {reels.map((reel, reelIndex) => (
                    <ReelPreview
                      key={reel.id || reel.url}
                      reel={reel}
                      clientName={client.name}
                      index={reelIndex}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ClientBlock>
        )
      })}
    </div>
  )
}

const PortfolioSection = ({ className = '', showHeader = true }) => {
  const [activeTab, setActiveTab] = useState(TABS.social)

  return (
    <section className={`container-fluid pt-4 pb-3 portfolio-section ${className}`.trim()}>
      <div className="container">
        {showHeader && (
          <div className="row mb-4">
            <div className="col-lg-8 mx-auto text-center">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                Our Work
              </small>
              <h2 className="mt-2 mb-3">Client Portfolio</h2>
              <p className="text-muted mb-0">
                Browse by website projects or social media reels — organized client by client.
              </p>
            </div>
          </div>
        )}

        <ul className="nav nav-tabs portfolio-tabs justify-content-center mb-5" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === TABS.social}
              className={`nav-link ${activeTab === TABS.social ? 'active' : ''}`}
              onClick={() => setActiveTab(TABS.social)}
            >
              <i className="fab fa-instagram mr-2" aria-hidden="true" />
              Social Media
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === TABS.website}
              className={`nav-link ${activeTab === TABS.website ? 'active' : ''}`}
              onClick={() => setActiveTab(TABS.website)}
            >
              <i className="fas fa-globe mr-2" aria-hidden="true" />
              Website
            </button>
          </li>
        </ul>

        <div className="portfolio-tab-panel" role="tabpanel">
          {activeTab === TABS.website ? <WebsiteTabContent /> : <SocialTabContent />}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
