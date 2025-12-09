import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import OliverApparelsSuccess from './pages/blog/OliverApparelsSuccess'
import ASRealityLeadGeneration from './pages/blog/ASRealityLeadGeneration'
import RakeshTourTravelsWebsite from './pages/blog/RakeshTourTravelsWebsite'
import KreshaFashionGrowth from './pages/blog/KreshaFashionGrowth'
import WebsiteDesign from './pages/WebsiteDesign'
import SEO from './pages/SEO'
import CustomDevelopment from './pages/CustomDevelopment'
import DigitalMarketing from './pages/DigitalMarketing'
import GrowthStrategy from './pages/GrowthStrategy'
import ContentWriting from './pages/ContentWriting'
import Termsnconditions from './pages/Termsnconditions'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service/website-design" element={<WebsiteDesign />} />
        <Route path="/service/seo" element={<SEO />} />
        <Route path="/service/custom-development" element={<CustomDevelopment />} />
        <Route path="/service/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/service/growth-strategy" element={<GrowthStrategy />} />
        <Route path="/service/content-writing" element={<ContentWriting />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/oliver-apparels-success" element={<OliverApparelsSuccess />} />
        <Route path="/blog/as-reality-lead-generation" element={<ASRealityLeadGeneration />} />
        <Route path="/blog/rakesh-tour-travels-website" element={<RakeshTourTravelsWebsite />} />
        <Route path="/blog/kresha-fashion-growth" element={<KreshaFashionGrowth />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<Termsnconditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App

