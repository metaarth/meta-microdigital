import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'

const PrivacyPolicy = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy",
      "description": "Privacy Policy for Meta-MicroDigital"
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Privacy Policy" }
        ]}
      />

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="terms-content">
                <p className="text-muted mb-4">
                  <strong>Last updated:</strong> {currentDate}
                </p>
                
                <p className="mb-4">
                  At Meta-MicroDigital, we are committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly. This Privacy Policy outlines how we collect, use, store, and protect your information when you visit our website or use our services.
                </p>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>1. Information We Collect</h2>
                  <p className="mb-3">We may collect the following types of information:</p>
                  
                  <h3 className="h5 mb-2 mt-4" style={{ color: '#30D1FF' }}>a) Personal Information</h3>
                  <p className="mb-2">Provided voluntarily by users through forms, inquiries, sign-ups, or service orders:</p>
                  <ul>
                    <li className="mb-2">Full name</li>
                    <li className="mb-2">Email address</li>
                    <li className="mb-2">Phone number</li>
                    <li className="mb-2">Business / company name</li>
                    <li className="mb-2">Address</li>
                    <li className="mb-2">Billing details</li>
                  </ul>

                  <h3 className="h5 mb-2 mt-4" style={{ color: '#30D1FF' }}>b) Technical Information</h3>
                  <p className="mb-2">Collected automatically when browsing our website:</p>
                  <ul>
                    <li className="mb-2">IP address</li>
                    <li className="mb-2">Browser type and device details</li>
                    <li className="mb-2">Operating system</li>
                    <li className="mb-2">Pages visited and time spent</li>
                    <li className="mb-2">Cookies and tracking data</li>
                  </ul>

                  <h3 className="h5 mb-2 mt-4" style={{ color: '#30D1FF' }}>c) Project-Related Information</h3>
                  <p>Any files, documents, or business data provided for design, development, marketing, or consultation purposes.</p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>2. How We Use Your Information</h2>
                  <p className="mb-2">We may use the collected information to:</p>
                  <ul>
                    <li className="mb-2">Deliver and manage requested services</li>
                    <li className="mb-2">Communicate regarding projects, support, and updates</li>
                    <li className="mb-2">Improve our website, services, and user experience</li>
                    <li className="mb-2">Process payments and generate invoices</li>
                    <li className="mb-2">Send promotional offers or newsletters (only with consent)</li>
                    <li className="mb-2">Maintain internal records and analytics</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>3. Cookies & Tracking Technologies</h2>
                  <p className="mb-2">Our website uses cookies and similar technologies to:</p>
                  <ul>
                    <li className="mb-2">Improve functionality and performance</li>
                    <li className="mb-2">Personalize content and advertising</li>
                    <li className="mb-2">Analyze website traffic</li>
                  </ul>
                  <p className="mt-3">
                    Users may disable cookies through their browser settings, but certain features of the website may not function properly as a result.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>4. Sharing & Disclosure of Information</h2>
                  <p className="mb-3">We do not sell or rent your personal information to third parties. We may share information only under the following conditions:</p>
                  <ul>
                    <li className="mb-2">With trusted third-party service providers (hosting services, payment processors, email platforms, etc.)</li>
                    <li className="mb-2">When legally required to comply with court orders or government authorities</li>
                    <li className="mb-2">To protect our legal rights or prevent fraud</li>
                  </ul>
                  <p className="mt-3">
                    All third-party partners handling data are required to follow strict confidentiality and privacy standards.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>5. Data Storage & Security</h2>
                  <p className="mb-2">We use strong administrative, technical, and physical safeguards to protect your information from:</p>
                  <ul>
                    <li className="mb-2">Unauthorized access</li>
                    <li className="mb-2">Misuse</li>
                    <li className="mb-2">Loss or alteration</li>
                  </ul>
                  <p className="mt-3">
                    Although we take extensive precautions, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>6. Data Retention</h2>
                  <p className="mb-2">We retain personal information only for as long as:</p>
                  <ul>
                    <li className="mb-2">Required to deliver requested services</li>
                    <li className="mb-2">Legally required by taxation or regulatory purposes</li>
                    <li className="mb-2">Needed to resolve disputes or enforce agreements</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>7. Your Rights</h2>
                  <p className="mb-2">Depending on your jurisdiction, you may have rights to:</p>
                  <ul>
                    <li className="mb-2">Access your personal information</li>
                    <li className="mb-2">Request correction or updates</li>
                    <li className="mb-2">Request deletion of your account or data</li>
                    <li className="mb-2">Withdraw consent for marketing communications</li>
                  </ul>
                  <p className="mt-3">
                    To exercise any of these rights, please contact us at the details below.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>8. External Links</h2>
                  <p className="mb-2">Our website may contain links to third-party websites. We are not responsible for their:</p>
                  <ul>
                    <li className="mb-2">Privacy practices</li>
                    <li className="mb-2">Security policies</li>
                    <li className="mb-2">Content</li>
                  </ul>
                  <p className="mt-3">
                    We recommend reviewing the Privacy Policies of third-party sites before engaging with them.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>9. Children's Privacy</h2>
                  <p>
                    Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal data from children. If such information is found, we will delete it immediately.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>10. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this policy periodically. Any changes will be posted on this page with an updated "Last revised" date. Continued use of our website or services constitutes acceptance of any changes.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>11. Contact Information</h2>
                  <p className="mb-2">If you have any questions or concerns regarding this Privacy Policy, please contact us:</p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><strong>Meta-MicroDigital</strong></li>
                    <li className="mb-2"><strong>Email:</strong> info@microdigitall.com</li>
                    <li className="mb-2"><strong>Phone:</strong> +91 8318891438</li>
                    <li className="mb-2"><strong>Address:</strong> T-02, A-44 VDS Tower Sec-02 Near Sector-15 Metro Station</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy

