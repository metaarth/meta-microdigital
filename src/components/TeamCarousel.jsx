import { useEffect, useRef } from 'react'

const TeamCarousel = () => {
  const carouselRef = useRef(null)

  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      image: "/assets/images/team-1.jpg",
      twitter: "https://twitter.com/microdigitall",
      facebook: "https://facebook.com/microdigitall",
      linkedin: "https://linkedin.com/company/microdigitall"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Creative Director",
      image: "/assets/images/team-2.jpg",
      twitter: "#",
      facebook: "#",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Lead Developer",
      image: "/assets/images/team-3.jpg",
      twitter: "#",
      facebook: "#",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      role: "Digital Marketing Manager",
      image: "/assets/images/team-4.jpg",
      twitter: "#",
      facebook: "#",
      linkedin: "#"
    }
  ]

  useEffect(() => {
    if (carouselRef.current && window.$ && window.$.fn.owlCarousel) {
      const $carousel = window.$(carouselRef.current)
      $carousel.owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 30,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          992: { items: 3 }
        }
      })

      return () => {
        $carousel.trigger('destroy.owl.carousel')
      }
    }
  }, [])

  return (
    <div ref={carouselRef} className="owl-carousel team-carousel">
      {teamMembers.map((member) => (
        <div key={member.id} className="team-item team-card">
          <div className="position-relative">
            <img
              className="img-fluid w-100"
              src={member.image}
              alt={member.name}
            />
            <div className="team-overlay position-absolute d-flex align-items-center justify-content-center m-3">
              <div className="d-flex align-items-center justify-content-start">
                <a
                  className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0"
                  style={{ width: '38px', height: '38px' }}
                  href={member.twitter}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0"
                  style={{ width: '38px', height: '38px' }}
                  href={member.facebook}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-secondary rounded-circle text-center px-0"
                  style={{ width: '38px', height: '38px' }}
                  href={member.linkedin}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border border-top-0 text-center" style={{ padding: '30px' }}>
            <h5 className="font-weight-bold">{member.name}</h5>
            <span>{member.role}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TeamCarousel
