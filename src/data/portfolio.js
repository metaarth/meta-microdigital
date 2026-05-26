/**
 * Portfolio — social + website clients.
 * Each social client can have posts[] and reels[] with local thumbnail images.
 */

import olp1 from '../Assets/ClientContent/oliver/Posts/Ol1.jpeg'
import olp2 from '../Assets/ClientContent/oliver/Posts/Ol2.jpeg'
import olp3 from '../Assets/ClientContent/oliver/Posts/Ol3.jpeg'
import olp4 from '../Assets/ClientContent/oliver/Posts/Ol4.jpeg'
import ol1 from '../Assets/ClientContent/oliver/reels/ol1.jpeg'
import ol2 from '../Assets/ClientContent/oliver/reels/ol2.jpeg'
import ol3 from '../Assets/ClientContent/oliver/reels/ol3.jpeg'
import ol4 from '../Assets/ClientContent/oliver/reels/ol4.jpeg'

import gg1 from '../Assets/ClientContent/GawriGanga/post/gg1.png'
import gg2 from '../Assets/ClientContent/GawriGanga/post/gg2.png'
import gg3 from '../Assets/ClientContent/GawriGanga/post/gg3.png'
import gg4 from '../Assets/ClientContent/GawriGanga/post/gg4.png'
import ggr1 from '../Assets/ClientContent/GawriGanga/Reels/1.webp'
import ggr2 from '../Assets/ClientContent/GawriGanga/Reels/2.webp'
import ggr3 from '../Assets/ClientContent/GawriGanga/Reels/3.webp'
import ggr4 from '../Assets/ClientContent/GawriGanga/Reels/4.webp'

import kgp1 from '../Assets/ClientContent/Kalaagari/Posts/Ke1.jpeg'
import kgp2 from '../Assets/ClientContent/Kalaagari/Posts/Ke2.jpeg'
import kgp3 from '../Assets/ClientContent/Kalaagari/Posts/Ke3.jpeg'
import kgp4 from '../Assets/ClientContent/Kalaagari/Posts/Ke4.jpeg'
import kgr1 from '../Assets/ClientContent/Kalaagari/Reels/kgr1.jpeg'
import kgr2 from '../Assets/ClientContent/Kalaagari/Reels/kgr2.jpeg'
import kgr3 from '../Assets/ClientContent/Kalaagari/Reels/kgr3.jpeg'
import kgr4 from '../Assets/ClientContent/Kalaagari/Reels/kgr4.jpeg'

import mfr1 from '../Assets/ClientContent/Metafit/Reels/metafit1.jpeg'
import mfr2 from '../Assets/ClientContent/Metafit/Reels/metafit2.jpeg'
import mfr3 from '../Assets/ClientContent/Metafit/Reels/metafit3.jpeg'
import mfr4 from '../Assets/ClientContent/Metafit/Reels/metafit4.jpeg'

import cafe1 from '../Assets/ClientContent/2D-Cafe/Reels/2d1.jpeg'
import cafe2 from '../Assets/ClientContent/2D-Cafe/Reels/2d2.jpeg'

import mf1 from '../Assets/ClientContent/Metafit/Posts/mf1.png'
import mf2 from '../Assets/ClientContent/Metafit/Posts/mf2.png'
import mf3 from '../Assets/ClientContent/Metafit/Posts/mf3.png'
import mf4 from '../Assets/ClientContent/Metafit/Posts/mf4.png'

import kr1 from '../Assets/ClientContent/Kresha/Posts/Kr1.png'
import kr2 from '../Assets/ClientContent/Kresha/Posts/Kr2.png'
import kr3 from '../Assets/ClientContent/Kresha/Posts/KR3.png'
import kr4 from '../Assets/ClientContent/Kresha/Posts/KR4.png'

import as1 from '../Assets/ClientContent/AS-Real/Posts/As1.png'
import as2 from '../Assets/ClientContent/AS-Real/Posts/AS2.png'
import as3 from '../Assets/ClientContent/AS-Real/Posts/AS3.png'

import rtt1 from '../Assets/ClientContent/RakeshTT/Posts/RTT1.jpeg'
import rtt2 from '../Assets/ClientContent/RakeshTT/Posts/Rtt2.jpeg'
import rtt3 from '../Assets/ClientContent/RakeshTT/Posts/Rtt3.jpeg'
import rtt4 from '../Assets/ClientContent/RakeshTT/Posts/Rtt4.jpeg'

import ag1 from '../Assets/ClientContent/AGfit/post/ag1.png'
import ag2 from '../Assets/ClientContent/AGfit/post/ag2.png'
import ag3 from '../Assets/ClientContent/AGfit/post/ag3.png'
import ag4 from '../Assets/ClientContent/AGfit/post/ag4.png'
import agr1 from '../Assets/ClientContent/AGfit/Reels/agr1.jpeg'
import agr2 from '../Assets/ClientContent/AGfit/Reels/agr2.jpeg'
import agr3 from '../Assets/ClientContent/AGfit/Reels/agr3.jpeg'

import kep1 from '../Assets/ClientContent/KE/Post/KE1.jpeg'
import kep2 from '../Assets/ClientContent/KE/Post/KE2.jpeg'
import kep3 from '../Assets/ClientContent/KE/Post/KE3.jpeg'
import kep4 from '../Assets/ClientContent/KE/Post/KE4.jpeg'
import ker1 from '../Assets/ClientContent/KE/Reels/ker1.jpeg'
import ker2 from '../Assets/ClientContent/KE/Reels/jker2.jpeg'
import ker3 from '../Assets/ClientContent/KE/Reels/ker3.jpeg'
import ker4 from '../Assets/ClientContent/KE/Reels/ke4.jpeg'

export const socialPortfolioClients = [
  {
    id: 'oliverapparels',
    name: 'Oliver Apparels',
    tagline: 'Chandni Chowk, Delhi',
    instagramHandle: 'oliverapparels',
    instagramUrl: 'https://www.instagram.com/oliverapparels/',
    posts: [
      { id: 'oa-p1', src: olp1 },
      { id: 'oa-p2', src: olp2 },
      { id: 'oa-p3', src: olp3 },
      { id: 'oa-p4', src: olp4 },
    ],
    reels: [
      { id: 'oa-1', url: 'https://www.instagram.com/reels/DYobc3mTSIv/', thumbnail: ol1 },
      { id: 'oa-2', url: 'https://www.instagram.com/reels/DYHdU2Rzgkr/', thumbnail: ol2 },
      { id: 'oa-3', url: 'https://www.instagram.com/reels/DYUhh-ezROv/', thumbnail: ol3 },
      { id: 'oa-4', url: 'https://www.instagram.com/reels/DXJzkqrEw8H/', thumbnail: ol4 },
    ],
  },
  {
    id: '2dcafe',
    name: '2d Cafe',
    tagline: 'Lucknow',
    instagramHandle: '2dcafelko',
    instagramUrl: 'https://www.instagram.com/2dcafelko/',
    posts: [],
    reels: [
      { id: '2d-1', url: 'https://www.instagram.com/reels/DYi3GYNp8vp/', thumbnail: cafe1 },
      { id: '2d-2', url: 'https://www.instagram.com/reels/DVA9riOgXLI/', thumbnail: cafe2 },
    ],
  },
  {
    id: 'gawriganga',
    name: 'Gawri Ganga',
    tagline: 'Authentic Rudraksha & spiritual wellness',
    instagramHandle: 'gawriganga.in',
    instagramUrl: 'https://www.instagram.com/gawriganga.in/',
    posts: [
      { id: 'gg-p1', src: gg1 },
      { id: 'gg-p2', src: gg2 },
      { id: 'gg-p3', src: gg3 },
      { id: 'gg-p4', src: gg4 },
    ],
    reels: [
      { id: 'gg-1', url: 'https://www.instagram.com/reels/DYXFPTBjkY4/', thumbnail: ggr1 },
      { id: 'gg-2', url: 'https://www.instagram.com/reels/DX1SfsEzex-/', thumbnail: ggr2 },
      { id: 'gg-3', url: 'https://www.instagram.com/reels/DYg6rdhmkTW/', thumbnail: ggr3 },
      { id: 'gg-4', url: 'https://www.instagram.com/reels/DYPF4V0gOkC/', thumbnail: ggr4 },
    ],
  },
  {
    id: 'kalaagri',
    name: 'Kalaagri',
    tagline: 'Delhi',
    instagramHandle: 'kalaagri.delhi',
    instagramUrl: 'https://www.instagram.com/kalaagri.delhi/',
    posts: [
      { id: 'ka-p1', src: kgp1 },
      { id: 'ka-p2', src: kgp2 },
      { id: 'ka-p3', src: kgp3 },
      { id: 'ka-p4', src: kgp4 },
    ],
    reels: [
      { id: 'ka-1', url: 'https://www.instagram.com/reel/DYweAQZRfls/', thumbnail: kgr1 },
      { id: 'ka-2', url: 'https://www.instagram.com/reels/DXjYynFkTtu/', thumbnail: kgr2 },
      { id: 'ka-3', url: 'https://www.instagram.com/reels/DWqZs9dD3SH/', thumbnail: kgr3 },
      { id: 'ka-4', url: 'https://www.instagram.com/reels/DWOWNfOj8Rd/', thumbnail: kgr4 },
    ],
  },
  {
    id: 'metafit',
    name: 'Meta Fit',
    tagline: 'Lucknow',
    instagramHandle: 'metafit_lucknow',
    instagramUrl: 'https://www.instagram.com/metafit_lucknow/',
    posts: [
      { id: 'mf-p1', src: mf1 },
      { id: 'mf-p2', src: mf2 },
      { id: 'mf-p3', src: mf3 },
      { id: 'mf-p4', src: mf4 },
    ],
    reels: [
      { id: 'mf-1', url: 'https://www.instagram.com/reels/DXGkqUlDGc0/', thumbnail: mfr1 },
      { id: 'mf-2', url: 'https://www.instagram.com/reels/DUaUCqJjJWH/', thumbnail: mfr2 },
      { id: 'mf-3', url: 'https://www.instagram.com/reels/DUTA3IvDI_5/', thumbnail: mfr3 },
      { id: 'mf-4', url: 'https://www.instagram.com/reels/DWOXP1zjJKC/', thumbnail: mfr4 },
    ],
  },
  {
    id: 'Ag-Fitness',
    name: 'AG Fitness',
    tagline: 'Delhi',
    instagramHandle: '',
    instagramUrl: '',
    posts: [
      { id: 'ag-p1', src: ag1 },
      { id: 'ag-p2', src: ag2 },
      { id: 'ag-p3', src: ag3 },
      { id: 'ag-p4', src: ag4 },
    ],
    reels: [
      { id: 'ag-r1', url: 'https://www.instagram.com/reel/DYrCAoEq4Sn/', thumbnail: agr1 },
      { id: 'ag-r2', url: 'https://www.instagram.com/reel/DYhObnfqV-M/', thumbnail: agr2 },
      { id: 'ag-r3', url: 'https://www.instagram.com/reel/DYXDAFZquIV/', thumbnail: agr3 },
    ],
  },
  {
    id: 'kailash-electronics',
    name: 'Kailash Electronics',
    tagline: 'Delhi',
    instagramHandle: '',
    instagramUrl: '',
    posts: [
      { id: 'ke-p1', src: kep1 },
      { id: 'ke-p2', src: kep2 },
      { id: 'ke-p3', src: kep3 },
      { id: 'ke-p4', src: kep4 },
    ],
    reels: [
      { id: 'ke-r1', url: 'https://www.instagram.com/reel/DXrEcjVE-AW/', thumbnail: ker1 },
      { id: 'ke-r2', url: 'https://www.instagram.com/reel/DYG9_BFzKMB/', thumbnail: ker2 },
      { id: 'ke-r3', url: 'https://www.instagram.com/reel/DYMmXFZzYxv/', thumbnail: ker3 },
      { id: 'ke-r4', url: 'https://www.instagram.com/reel/DYwnNkQT0U1/', thumbnail: ker4 },
    ],
  },
  {
    id: 'kresha-fashion',
    name: 'Kresha Fashion',
    tagline: '',
    instagramHandle: '',
    instagramUrl: '',
    posts: [
      { id: 'kr-p1', src: kr1 },
      { id: 'kr-p2', src: kr2 },
      { id: 'kr-p3', src: kr3 },
      { id: 'kr-p4', src: kr4 },
    ],
    reels: [],
  },
  {
    id: 'as-real-estate',
    name: 'AS Real Estate',
    tagline: '',
    instagramHandle: '',
    instagramUrl: '',
    posts: [
      { id: 'as-p1', src: as1 },
      { id: 'as-p2', src: as2 },
      { id: 'as-p3', src: as3 },
    ],
    reels: [],
  },
  {
    id: 'rakesh-tour-travels',
    name: 'Rakesh Tour & Travels',
    tagline: '',
    instagramHandle: '',
    instagramUrl: '',
    posts: [
      { id: 'rtt-p1', src: rtt1 },
      { id: 'rtt-p2', src: rtt2 },
      { id: 'rtt-p3', src: rtt3 },
      { id: 'rtt-p4', src: rtt4 },
    ],
    reels: [],
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
