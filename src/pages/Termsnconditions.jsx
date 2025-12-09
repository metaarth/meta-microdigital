import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'

const Termsnconditions = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms & Conditions",
      "description": "Terms and Conditions for Meta-MicroDigital"
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
        title="Terms & Conditions"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Terms & Conditions" }
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
                  Welcome to Meta-MicroDigital. By accessing or using our website ("Site") and our services, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully. If you do not agree with any part of these terms, you must not use our website or services.
                </p>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>1. Definitions</h2>
                  <ul className="list-unstyled">
                    <li className="mb-2"><strong>"Company"</strong>, <strong>"We"</strong>, <strong>"Us"</strong>, <strong>"Our"</strong> refers to Meta-MicroDigital</li>
                    <li className="mb-2"><strong>"User"</strong>, <strong>"Client"</strong>, <strong>"You"</strong>, <strong>"Your"</strong> refers to any individual or entity using our website or services.</li>
                    <li className="mb-2"><strong>"Services"</strong> refers to marketing, branding, software development, IT consultation, digital solutions, and any other services provided by us.</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>2. Use of Website</h2>
                  <p className="mb-2">By using our Site, you agree:</p>
                  <ul>
                    <li className="mb-2">To use the Site only for lawful purposes.</li>
                    <li className="mb-2">Not to engage in any activity that may damage or interfere with the Site or its security.</li>
                    <li className="mb-2">Not to attempt unauthorized access to any part of the Site.</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>3. Services & Deliverables</h2>
                  <ul>
                    <li className="mb-2">All services provided by Meta-MicroDigital will be based on agreed proposals, quotations, or contracts.</li>
                    <li className="mb-2">Project timelines may vary depending on the scope, client feedback, and third-party dependencies.</li>
                    <li className="mb-2">Any additions or modifications requested after final agreement may incur additional charges.</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>4. Payments & Refund Policy</h2>
                  <ul>
                    <li className="mb-2">Payments must be made according to the terms stated in the proposal or invoice.</li>
                    <li className="mb-2">All fees paid for digital services, design, development, or consultation are non-refundable once work has commenced.</li>
                    <li className="mb-2">Late payments may delay delivery and may incur additional charges.</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>5. Intellectual Property</h2>
                  <ul>
                    <li className="mb-2">All content, designs, software, strategies, marketing assets, and documentation created during the project remain the intellectual property of Meta-MicroDigital unless otherwise stated.</li>
                    <li className="mb-2">Upon full payment, the client receives rights to use the final approved deliverables for their business operations.</li>
                    <li className="mb-2">The Company reserves the right to display completed work in its portfolio unless a written NDA states otherwise.</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>6. Confidentiality</h2>
                  <p className="mb-2">We respect your confidential information and will not share it with third parties unless:</p>
                  <ul>
                    <li className="mb-2">Required by law, or</li>
                    <li className="mb-2">Necessary to provide the services (e.g., working with third-party vendors based on the project requirement).</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>7. Third-Party Tools & Integrations</h2>
                  <p className="mb-2">We may use third-party software, APIs, plugins, and hosting providers. We are not responsible for:</p>
                  <ul>
                    <li className="mb-2">Downtime, errors, or issues caused by third-party tools</li>
                    <li className="mb-2">License fees or renewal charges that apply to third-party services</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>8. Limitation of Liability</h2>
                  <p className="mb-2">To the fullest extent permitted by law, Meta-MicroDigital is not liable for:</p>
                  <ul>
                    <li className="mb-2">Any loss of revenue, profits, business, or data</li>
                    <li className="mb-2">Website downtime, cyber-attacks, or service interruptions</li>
                    <li className="mb-2">Any damages arising from misuse of delivered services or content</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>9. Indemnification</h2>
                  <p className="mb-2">You agree to indemnify and hold Meta-MicroDigital harmless against any claims, losses, damages, or expenses arising from:</p>
                  <ul>
                    <li className="mb-2">Your breach of these Terms & Conditions</li>
                    <li className="mb-2">Misuse of our services or website</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>10. Modification of Terms</h2>
                  <p>We reserve the right to update or modify these Terms & Conditions at any time. Changes will be posted on this page with a revised date. Continued use of our website or services indicates acceptance of modified terms.</p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>11. Termination</h2>
                  <p className="mb-2">We reserve the right to suspend or terminate access to our services or website:</p>
                  <ul>
                    <li className="mb-2">If you violate these Terms</li>
                    <li className="mb-2">If payment obligations are not fulfilled</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>12. Governing Law</h2>
                  <p>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be resolved in the courts located in India.</p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="h4 mb-3" style={{ color: '#30D1FF' }}>13. Contact Information</h2>
                  <p className="mb-2">If you have any questions about these Terms & Conditions, please contact us:</p>
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

export default Termsnconditions
