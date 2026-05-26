import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import PortfolioSection from '../components/PortfolioSection'

const Portfolio = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Portfolio | Meta MicroDigital',
      description:
        'Website and social media portfolio — live client sites with Instagram reels and profile links.',
      provider: {
        '@type': 'Organization',
        name: 'Meta MicroDigital',
      },
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <>
      <PageHeader
        title="Portfolio"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Portfolio' },
        ]}
      />

      <PortfolioSection showHeader={false} />

      <div className="container pb-5">
        <div className="pf-cta text-center">
          <h4 className="pf-cta-title">Want results like these?</h4>
          <p className="pf-cta-text">
            Let us build your brand's online presence — websites, social media, and everything in between.
          </p>
          <Link to="/contact" className="btn btn-primary btn-animated">
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  )
}

export default Portfolio
