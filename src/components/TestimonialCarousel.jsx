import { useEffect, useRef } from 'react'

const TestimonialCarousel = () => {
  const carouselRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      text: "We helped Oliver establish a strong online presence with social media setup, Meta Ads, and business generation. Their visibility and customer inquiries grew significantly.",
      name: "Rakesh Middha",
      role: "Owner – Oliver Apparels (Clothing)",
      quote: "Great team! They helped us build our brand online from scratch.",
      image: "/assets/images/brandlogo/Oliver.jpg"
    },
    {
      id: 2,
      text: "Kalaagri expanded its reach with our social media management and consistent digital branding. Their customer engagement improved noticeably.",
      name: "Rakesh Middha",
      role: "Owner – Kalaagri (Clothing)",
      quote: "Our brand looks more premium online – very happy with the work.",
      image: "/assets/images/brandlogo/kalaagri.jpg"
    },
    {
      id: 3,
      text: "For AS Reality, we managed social media, ran Meta Ads, and generated high-quality real estate leads. Their inquiry rate and sales pipeline improved drastically.",
      name: "Sushant Pawar",
      role: "Owner – AS Reality (Real Estate)",
      quote: "The lead quality was excellent. It truly boosted our conversions.",
      image: "/assets/images/brandlogo/As.jpg"
    },
    {
      id: 4,
      text: "We handled complete social media management and delivered a fully functional business website for Rakesh Tour & Travels, improving customer trust and bookings.",
      name: "Rakesh",
      role: "Owner – Rakesh Tour & Travels",
      quote: "The website looks amazing and professional. Highly recommended.",
      image: "/assets/images/brandlogo/rakesh.jpg"
    },
    {
      id: 5,
      text: "Multiple Meta Ads campaigns and social media branding helped Kresha Fashion gain more visibility, customers, and online recognition.",
      name: "Udipti Gupta",
      role: "Owner – Kresha Fashion (Clothing)",
      quote: "Our online sales increased after consistent marketing. Great results!",
      image: "/assets/images/brandlogo/kresha.jpg"
    },
    {
      id: 6,
      text: "Meta Fit Gym benefited from our social media management, Meta Ads, and lead generation strategies — driving constant walk-ins and membership inquiries.",
      name: "Ambrish Nath Tiwari",
      role: "Owner – Meta Fit (Gym)",
      quote: "We now get daily leads—amazing work from the team.",
      image: "/assets/images/brandlogo/metafit.jpg"
    }
  ]

  useEffect(() => {
    if (carouselRef.current && window.$ && window.$.fn.owlCarousel) {
      const $carousel = window.$(carouselRef.current)
      $carousel.owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 30,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 }
        }
      })

      return () => {
        $carousel.trigger('destroy.owl.carousel')
      }
    }
  }, [])

  return (
    <div ref={carouselRef} className="owl-carousel testimonial-carousel">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-item">
          <div className="testimonial-text position-relative border mb-4" style={{ padding: '25px 30px' }}>
            {testimonial.text}
          </div>
          <div className="d-flex align-items-center">
            <img
              className="img-fluid rounded-circle"
              src={testimonial.image}
              alt={testimonial.name}
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            />
            <div className="pl-4">
              <h6 className="font-weight-bold">{testimonial.name}</h6>
              <i className="text-muted">{testimonial.role}</i>
              <p className="mt-2 mb-0">
                <small>"{testimonial.quote}"</small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TestimonialCarousel
