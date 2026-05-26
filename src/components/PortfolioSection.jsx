import { useState } from 'react'
import { socialPortfolioClients, websitePortfolioClients } from '../data/portfolio'
import {
  formatInstagramHandle,
  getInstagramProfileUrl,
  getReelPermalink,
  getWebsiteHostname,
} from '../utils/portfolioHelpers'

const TABS = {
  social: 'social',
  website: 'website',
}

const ReelPreview = ({ reel, clientName, index }) => {
  const permalink = getReelPermalink(reel.url)
  if (!permalink) return null

  return (
    <a
      href={permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="pf-reel-card"
      aria-label={`Watch ${clientName} reel ${index + 1} on Instagram`}
    >
      {reel.thumbnail ? (
        <img
          src={reel.thumbnail}
          alt={`${clientName} reel ${index + 1}`}
          className="pf-reel-card-img"
          loading="lazy"
        />
      ) : (
        <div className="pf-reel-card-fallback">
          <i className="fab fa-instagram" aria-hidden="true" />
        </div>
      )}
    </a>
  )
}

const PostPreview = ({ post, clientName, index }) => (
  <div className="pf-post-card">
    <img
      src={post.src}
      alt={post.title || `${clientName} post ${index + 1}`}
      className="pf-post-card-img"
      loading="lazy"
    />
  </div>
)

const WebsitePreview = ({ website, name }) => {
  const hostname = getWebsiteHostname(website)

  return (
    <div className="pf-site-preview">
      <div className="pf-site-chrome">
        <div className="pf-site-dots">
          <span /><span /><span />
        </div>
        <span className="pf-site-url">{hostname}</span>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="pf-site-ext"
          aria-label={`Open ${name}`}
        >
          <i className="fas fa-external-link-alt" />
        </a>
      </div>
      <div className="pf-site-frame">
        <iframe
          src={website}
          title={`${name} website preview`}
          className="pf-site-iframe"
          sandbox="allow-scripts allow-same-origin allow-popups"
          loading="lazy"
        />
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="pf-site-overlay"
          aria-label={`Visit ${name} website`}
        >
          <span className="pf-site-visit-btn">
            <i className="fas fa-external-link-alt mr-2" aria-hidden="true" />
            Visit Live Site
          </span>
        </a>
      </div>
    </div>
  )
}

const ClientAvatar = ({ name }) => {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return <div className="pf-client-avatar">{initials}</div>
}

const ClientHeader = ({ client, showInstagram = false }) => {
  const instagramProfileUrl = getInstagramProfileUrl(client)
  const handleLabel = formatInstagramHandle(client.instagramHandle)

  return (
    <header className="pf-client-header">
      <ClientAvatar name={client.name} />
      <div className="pf-client-info">
        <h3 className="pf-client-name">{client.name}</h3>
        {client.tagline && <p className="pf-client-tagline">{client.tagline}</p>}
      </div>
      {showInstagram && instagramProfileUrl && handleLabel && (
        <a
          href={instagramProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pf-ig-btn"
        >
          <i className="fab fa-instagram" aria-hidden="true" />
          {handleLabel}
        </a>
      )}
    </header>
  )
}

const SectionLabel = ({ icon, label, count }) => (
  <div className="pf-section-label">
    <i className={icon} aria-hidden="true" />
    <span>{label}</span>
    {count > 0 && <span className="pf-section-count">{count}</span>}
  </div>
)

const WebsiteTabContent = () => {
  const clients = websitePortfolioClients
  if (!clients.length) return <p className="text-center text-muted py-5">No website projects yet.</p>

  return (
    <div className="pf-list pf-list--grid">
      {clients.map((client) => (
        <article key={client.id} className="pf-card">
          <ClientHeader client={client} />
          <WebsitePreview website={client.website} name={client.name} />
          <div className="pf-card-actions">
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
        </article>
      ))}
    </div>
  )
}

const SocialTabContent = () => {
  const clients = socialPortfolioClients

  return (
    <div className="pf-list">
      {clients.map((client) => {
        const reels = client.reels?.filter((r) => r?.url?.trim()) ?? []
        const posts = client.posts?.filter((p) => p?.src) ?? []

        return (
          <article key={client.id} className="pf-card">
            <ClientHeader client={client} showInstagram />

            {posts.length > 0 && (
              <div className="pf-content-section">
                <SectionLabel icon="fas fa-th" label="Posts" count={posts.length} />
                <div className="pf-posts-grid">
                  {posts.map((post, i) => (
                    <PostPreview key={post.id} post={post} clientName={client.name} index={i} />
                  ))}
                </div>
              </div>
            )}

            {reels.length > 0 && (
              <div className="pf-content-section">
                <SectionLabel icon="fab fa-instagram" label="Reels" count={reels.length} />
                <div className="pf-reels-row">
                  {reels.map((reel, i) => (
                    <ReelPreview key={reel.id || reel.url} reel={reel} clientName={client.name} index={i} />
                  ))}
                </div>
              </div>
            )}
          </article>
        )
      })}
    </div>
  )
}

const PortfolioSection = ({ className = '', showHeader = true }) => {
  const [activeTab, setActiveTab] = useState(TABS.social)

  return (
    <section className={`pf-section ${className}`.trim()}>
      <div className="container-fluid px-4 px-md-5">
        {showHeader && (
          <div className="pf-hero text-center">
            <span className="pf-hero-badge">Our Work</span>
            <h2 className="pf-hero-title">Client Portfolio</h2>
            <p className="pf-hero-sub">
              Social media content and website projects — organized client by client.
            </p>
          </div>
        )}

        <div className="pf-tabs-wrap">
          <div className="pf-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === TABS.social}
              className={`pf-tab ${activeTab === TABS.social ? 'pf-tab--active' : ''}`}
              onClick={() => setActiveTab(TABS.social)}
            >
              <i className="fab fa-instagram" aria-hidden="true" />
              Social Media
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === TABS.website}
              className={`pf-tab ${activeTab === TABS.website ? 'pf-tab--active' : ''}`}
              onClick={() => setActiveTab(TABS.website)}
            >
              <i className="fas fa-globe" aria-hidden="true" />
              Website
            </button>
          </div>
        </div>

        <div className="pf-panel" role="tabpanel">
          {activeTab === TABS.website ? <WebsiteTabContent /> : <SocialTabContent />}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
