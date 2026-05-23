/**
 * Social tab: socialPortfolioClients only
 * Website tab: websitePortfolioClients only
 * (Gawri Ganga appears on both — site + reels)
 */

export const socialPortfolioClients = [
  {
    id: 'oliverapparels',
    name: 'Oliver Apparels',
    tagline: 'Chandni Chowk, Delhi',
    instagramHandle: '',
    instagramUrl: '',
    reels: [
      { id: 'oa-1', url: 'https://www.instagram.com/reels/DYobc3mTSIv/' },
      { id: 'oa-2', url: 'https://www.instagram.com/reels/DYHdU2Rzgkr/' },
      { id: 'oa-3', url: 'https://www.instagram.com/reels/DYUhh-ezROv/' },
      { id: 'oa-4', url: 'https://www.instagram.com/reels/DXJzkqrEw8H/' },
    ],
  },
  {
    id: '2dcafe',
    name: '2d Cafe',
    tagline: 'Lucknow',
    instagramHandle: '',
    instagramUrl: '',
    reels: [
      { id: '2d-1', url: 'https://www.instagram.com/reels/DYi3GYNp8vp/' },
      { id: '2d-2', url: 'https://www.instagram.com/reels/DVA9riOgXLI/' },
    ],
  },
  {
    id: 'gawriganga',
    name: 'Gawri Ganga',
    tagline: 'Authentic Rudraksha & spiritual wellness',
    instagramHandle: '',
    instagramUrl: '',
    reels: [
      { id: 'gg-1', url: 'https://www.instagram.com/reels/DYXFPTBjkY4/' },
      { id: 'gg-2', url: 'https://www.instagram.com/reels/DX1SfsEzex-/' },
      { id: 'gg-3', url: 'https://www.instagram.com/reels/DYg6rdhmkTW/' },
      { id: 'gg-4', url: 'https://www.instagram.com/reels/DYPF4V0gOkC/' },
    ],
  },
  {
    id: 'kalaagri',
    name: 'Kalaagri',
    tagline: 'Delhi',
    instagramHandle: '',
    instagramUrl: '',
    reels: [
      { id: 'ka-1', url: 'https://www.instagram.com/reels/DYMm8ppAdIG/' },
      { id: 'ka-2', url: 'https://www.instagram.com/reels/DXjYynFkTtu/' },
      { id: 'ka-3', url: 'https://www.instagram.com/reels/DWqZs9dD3SH/' },
      { id: 'ka-4', url: 'https://www.instagram.com/reels/DWOWNfOj8Rd/' },
    ],
  },
  {
    id: 'metafit',
    name: 'Meta Fit',
    tagline: 'Lucknow',
    instagramHandle: '',
    instagramUrl: '',
    reels: [
      { id: 'mf-1', url: 'https://www.instagram.com/reels/DXGkqUlDGc0/' },
      { id: 'mf-2', url: 'https://www.instagram.com/reels/DUaUCqJjJWH/' },
      { id: 'mf-3', url: 'https://www.instagram.com/reels/DUTA3IvDI_5/' },
      { id: 'mf-4', url: 'https://www.instagram.com/reels/DWOXP1zjJKC/' },
    ],
  },
]

export const websitePortfolioClients = [
  {
    id: 'legaloids',
    name: 'Legaloids Law Firm',
    tagline: 'Professional legal services',
    website: 'https://legaloids.com/',
  },
  {
    id: 'gawriganga',
    name: 'Gawri Ganga',
    tagline: 'Authentic Rudraksha & spiritual wellness',
    website: 'https://www.gawriganga.com/',
  },
  {
    id: 'metaarth',
    name: 'Metaarth Capital',
    tagline: 'Smart investment strategies',
    website: 'https://www.metaarth.com/',
  },
]

/** @deprecated use socialPortfolioClients / websitePortfolioClients */
export const portfolioClients = [...socialPortfolioClients, ...websitePortfolioClients]
export const portfolioItems = portfolioClients
