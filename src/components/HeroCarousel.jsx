import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const splitTitle = (title, accent) => {
  if (!accent) return title
  const i = title.indexOf(accent)
  if (i < 0) return title
  return (
    <>
      {title.slice(0, i)}
      <span className="hero-digest__accent">{accent}</span>
      {title.slice(i + accent.length)}
    </>
  )
}

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  /** During swap: index of the slide leaving the front, and direction of travel (1 = forward / next). */
  const [leaving, setLeaving] = useState(null)
  const intervalRef = useRef(null)
  const leaveTimerRef = useRef(null)
  const activeIndexRef = useRef(0)
  const restartAutoplayRef = useRef(() => {})

  const slides = [
    {
      id: 1,
      subtitle: 'IT & Digital Marketing',
      title: 'Data‑Driven Growth for Modern Brands and Businesses',
      accent: 'Modern Brands',
      description:
        'Engineering reliable systems and campaigns that turn attention into revenue—without the agency fluff.',
      chips: ['Managed IT', 'Performance ads', 'SEO & content'],
      link: '/about',
      linkText: 'How we work',
      image: '/assets/images/hero/hero-slide-1.jpg',
      focal: '50% 28%',
      imageAlt: 'Team collaborating and planning together in a bright office',
    },
    {
      id: 2,
      subtitle: 'Expert Delivery',
      title: 'Certified Experts Who Ship, Measure, and Iterate',
      accent: 'Ship, Measure',
      description:
        'Senior practitioners across cloud, web, and growth—aligned to your KPIs from day one.',
      chips: ['Cloud & security', 'Web & apps', 'Analytics'],
      link: '/service',
      linkText: 'View services',
      image: '/assets/images/hero/hero-slide-2.jpg',
      focal: '50% 22%',
      imageAlt: 'Colleagues presenting and working on a laptop in a modern workspace',
    },
    {
      id: 3,
      subtitle: 'Outcomes',
      title: 'Proven ROI and Long-Term Partnerships',
      accent: 'Proven ROI',
      description:
        'Transparent reporting, realistic roadmaps, and compounding results for teams that want to scale.',
      chips: ['ROI reporting', 'Retention', 'Scale-ready'],
      link: '/contact',
      linkText: 'Start a project',
      image: '/assets/images/hero/hero-slide-3.jpg',
      focal: '50% 35%',
      imageAlt: 'Team workshop with a lead guiding strategy at a conference table',
    },
  ]

  const scheduleLeavingClear = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current)
    leaveTimerRef.current = setTimeout(() => {
      setLeaving(null)
      leaveTimerRef.current = null
    }, 520)
  }

  restartAutoplayRef.current = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      const prev = activeIndexRef.current
      const next = (prev + 1) % slides.length
      setLeaving({ index: prev, dir: 1 })
      setActiveIndex(next)
      scheduleLeavingClear()
    }, 6500)
  }

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    restartAutoplayRef.current()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current)
    }
  }, [slides.length])

  const transitionTo = (fromIndex, nextIndex, dir) => {
    if (nextIndex === fromIndex) return
    setLeaving({ index: fromIndex, dir })
    setActiveIndex(nextIndex)
    scheduleLeavingClear()
    restartAutoplayRef.current()
  }

  const goToSlide = (index) => {
    if (index === activeIndex) return
    const len = slides.length
    const forward = (index - activeIndex + len) % len
    const backward = (activeIndex - index + len) % len
    const dir = forward <= backward ? 1 : -1
    transitionTo(activeIndex, index, dir)
  }

  const goToPrevious = () => {
    transitionTo(activeIndex, (activeIndex - 1 + slides.length) % slides.length, -1)
  }

  const goToNext = () => {
    transitionTo(activeIndex, (activeIndex + 1) % slides.length, 1)
  }

  const progressPct = ((activeIndex + 1) / slides.length) * 100
  const leavingSlide = leaving != null ? slides[leaving.index] : null

  return (
    <div className="hero-digest">
      <div className="hero-digest__grid" aria-hidden="true" />
      <div
        id="header-carousel"
        className="carousel slide carousel-fade position-relative hero-digest__carousel"
      >
        <div className="container hero-digest__container">
          <div className="row align-items-center g-4 g-xl-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="carousel-inner hero-digest__carousel-inner--text">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                  >
                    <div className="hero-digest__slide-copy">
                      <div className="hero-digest__copy">
                        <p className="hero-digest__kicker">
                          <span className="hero-digest__kicker-index">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="hero-digest__kicker-divider" aria-hidden="true" />
                          <span>{slide.subtitle}</span>
                        </p>

                        <h1 className="hero-digest__title">
                          {splitTitle(slide.title, slide.accent)}
                        </h1>

                        <p className="hero-digest__lede">{slide.description}</p>

                        {slide.chips?.length > 0 && (
                          <ul className="hero-digest__chips">
                            {slide.chips.map((chip) => (
                              <li key={chip}>{chip}</li>
                            ))}
                          </ul>
                        )}

                        <div className="hero-digest__actions">
                          <Link to={slide.link} className="hero-digest__btn hero-digest__btn--primary">
                            {slide.linkText}
                            <i className="fas fa-arrow-right ms-2" aria-hidden="true" />
                          </Link>
                          <Link to="/contact" className="hero-digest__btn hero-digest__btn--ghost">
                            Book a call
                          </Link>
                        </div>

                        <div className="hero-digest__contact-line">
                          <a href="tel:+918318891438">+91 8318891438</a>
                          <span aria-hidden="true">·</span>
                          <a href="mailto:info@metamicrodigital.com">info@metamicrodigital.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <div className="hero-digest__visual">
                <div className="hero-deck">
                  {leaving && leavingSlide && (
                    <article
                      key={`leave-${leaving.index}-${leaving.dir}`}
                      className={`hero-deck-card hero-deck-card--front hero-deck-card--leaving hero-deck-card--leave-${leaving.dir >= 1 ? 'next' : 'prev'}`}
                      aria-hidden="true"
                    >
                      <div className="hero-deck-card__media">
                        <div className="hero-deck-card__badge">
                          <span className="hero-deck-card__badge-label">slide</span>
                          <span className="hero-deck-card__badge-num">
                            {String(leaving.index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <img
                          src={leavingSlide.image}
                          alt=""
                          className="hero-deck-card__img"
                          style={{
                            objectPosition: leavingSlide.focal ?? 'center center',
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="hero-deck-card__body">
                        <span className="hero-deck-card__body-dot" aria-hidden="true" />
                        <span className="hero-deck-card__body-text">
                          Meta MicroDigital · {leavingSlide.subtitle}
                        </span>
                      </div>
                    </article>
                  )}
                  {[2, 1, 0].map((step) => {
                    const role = step === 2 ? 'back' : step === 1 ? 'mid' : 'front'
                    const deckSlide = slides[(activeIndex + step) % slides.length]
                    const isFront = role === 'front'
                    const deckNum = (activeIndex + step) % slides.length + 1
                    const enterMod =
                      leaving && isFront
                        ? ` hero-deck-card--enter hero-deck-card--enter-${leaving.dir >= 1 ? 'next' : 'prev'}`
                        : ''
                    return (
                      <article
                        key={`${activeIndex}-${role}`}
                        className={`hero-deck-card hero-deck-card--${role}${enterMod}`}
                        aria-hidden={!isFront}
                      >
                        <div className="hero-deck-card__media">
                          <img
                            src={deckSlide.image}
                            alt={isFront ? deckSlide.imageAlt : ''}
                            className="hero-deck-card__img"
                            style={{
                              objectPosition: deckSlide.focal ?? 'center center',
                            }}
                            loading={activeIndex === 0 && isFront ? 'eager' : 'lazy'}
                            fetchPriority={activeIndex === 0 && isFront ? 'high' : 'low'}
                            decoding="async"
                          />
                        </div>
                        <div className="hero-deck-card__body">
                          <span className="hero-deck-card__body-dot" aria-hidden="true" />
                          <span className="hero-deck-card__body-text">
                            Meta MicroDigital · {deckSlide.subtitle}
                          </span>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hero-digest__arrow hero-digest__arrow--prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <i className="fas fa-arrow-left" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="hero-digest__arrow hero-digest__arrow--next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <i className="fas fa-arrow-right" aria-hidden="true" />
        </button>

        <div className="hero-digest__rail">
          <div className="container hero-digest__container">
            <div
              className="hero-digest__progress-track"
              role="presentation"
              aria-hidden="true"
            >
              <div
                className="hero-digest__progress-fill"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="hero-digest__tabs" role="tablist" aria-label="Hero slides">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  className={`hero-digest__tab ${index === activeIndex ? 'is-active' : ''}`}
                  aria-selected={index === activeIndex}
                  aria-label={`Slide ${index + 1}: ${slide.subtitle}`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="hero-digest__tab-num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="hero-digest__tab-label">{slide.subtitle}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel
