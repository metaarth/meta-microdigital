import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://microdigitall.com/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://microdigitall.com/contact.html" }
      ]
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
    // Clear submit status when user makes changes
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Get EmailJS credentials from environment variables
      // Set these in your .env file (see EMAILJS_SETUP.md for instructions)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Validate that credentials are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials are not configured. Please check your .env file.')
      }

      // Get current date and time
      const now = new Date()
      const date = now.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
      const time = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      })

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Meta-MicroDigital Team',
          reply_to: formData.email,
          date: date,
          time: time
        },
        publicKey
      )

      // Success
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Scroll to success message
      setTimeout(() => {
        const successDiv = document.getElementById('success')
        if (successDiv) {
          successDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }
      }, 100)

    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 className="display-4 page-header-title mb-3 mt-0 mt-lg-5">Contact</h1>
        <div className="d-inline-flex page-header-breadcrumbs">
          <p className="m-0">
            <Link to="/" className="page-header-link">Home</Link>
          </p>
          <p className="m-0 px-2">/</p>
          <p className="m-0 page-header-text">Contact</p>
        </div>
      </div>
      {/* Page Header End */}

      {/* Contact Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-5">
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-4">
                  <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                  <div className="d-flex flex-column">
                    <h5 className="font-weight-bold">Our Office</h5>
                    <p className="m-0">T-02, A-44 VDS Tower Sec-02 Near Sector-15 Metro Station</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                  <div className="d-flex flex-column">
                    <h5 className="font-weight-bold">Email Us</h5>
                    <p className="m-0">microdigitall@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                  <div className="d-flex flex-column">
                    <h5 className="font-weight-bold">Call Us</h5>
                    <p className="m-0">+91 7905682443<br/>+91 6396558439</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div id="success" className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Thank you for contacting us. We'll get back to you soon!
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setSubmitStatus(null)}
                      aria-label="Close"
                    ></button>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> Something went wrong. Please try again or contact us directly.
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setSubmitStatus(null)}
                      aria-label="Close"
                    ></button>
                  </div>
                )}

                <form ref={formRef} name="sentMessage" id="contactForm" onSubmit={handleSubmit} noValidate>
                  <div className="control-group mb-3">
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && <p className="help-block text-danger mt-1">{errors.name}</p>}
                  </div>
                  
                  <div className="control-group mb-3">
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <p className="help-block text-danger mt-1">{errors.email}</p>}
                  </div>
                  
                  <div className="control-group mb-3">
                    <input
                      type="text"
                      className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    {errors.subject && <p className="help-block text-danger mt-1">{errors.subject}</p>}
                  </div>
                  
                  <div className="control-group mb-3">
                    <textarea
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      rows="6"
                      id="message"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {errors.message && <p className="help-block text-danger mt-1">{errors.message}</p>}
                  </div>
                  
                  <div>
                    <button 
                      className="btn btn-primary py-2 px-4" 
                      type="submit" 
                      id="sendMessageButton"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  )
}

export default Contact

