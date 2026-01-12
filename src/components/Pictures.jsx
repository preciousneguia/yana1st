import React, { useEffect, useRef, useState } from 'react'

const Pictures = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="pictures-section" ref={sectionRef}>
      <div className="section-content">
        <h2 className="section-title">Our Little Fairy</h2>
        <p className="section-subtitle">Celebrating Yana's magical first year</p>
        <div className="pictures-grid">
          <div className={`picture-card ${isVisible ? 'visible' : ''}`}>
            <div className="picture-frame">
              <img
                src={import.meta.env.BASE_URL + 'assets/yana/one2.jpeg'}
                alt="Yana's photo 1" 
                className="picture-img"
              />
              <div className="frame-decoration">✨</div>
            </div>
          </div>
          <div className={`picture-card ${isVisible ? 'visible' : ''}`}>
            <div className="picture-frame">
              <img
                src={import.meta.env.BASE_URL + 'assets/yana/onemid.jpeg'}
                alt="Yana's photo 2" 
                className="picture-img"
              />
              <div className="frame-decoration">✨</div>
            </div>
          </div>
          <div className={`picture-card ${isVisible ? 'visible' : ''}`}>
            <div className="picture-frame">
              <img
                src={import.meta.env.BASE_URL + 'assets/yana/one.jpeg'}
                alt="Yana's photo 3" 
                className="picture-img"
              />
              <div className="frame-decoration">✨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pictures
