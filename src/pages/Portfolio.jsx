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

      <div className="container pb-2">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-2">
            <p className="lead text-muted mb-0">
              Each client is listed with their website or social work. Switch tabs to view live site
              previews or Instagram reel previews, client by client.
            </p>
          </div>
        </div>
      </div>

      <PortfolioSection showHeader={false} className="pt-3" />

      <div className="container pb-5">
        <div className="alert alert-info text-center mb-0">
          <h5 className="mb-2">Want a site like these?</h5>
          <p className="mb-3">Tell us about your project and we will help you grow online.</p>
          <Link to="/contact" className="btn btn-primary btn-animated">
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  )
}

export default Portfolio
