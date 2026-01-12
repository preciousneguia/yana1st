import React from 'react'

const Hero = ({ scrollY, windowHeight }) => {
  // Calculate opacity based on scroll (fade out as we scroll down)
  const fadeOpacity = Math.max(0, 1 - (scrollY / (windowHeight * 0.8)))
  
  return (
    <section className="hero-section">
      {/* Background image with wrapping paper effect */}
      <div 
        className="hero-background-image"
        style={{
          opacity: fadeOpacity,
        }}
      >
        <div className="hero-image-wrapper">
          <img 
            src="/assets/yana/one3.jpeg" 
            alt="Yana" 
            className="hero-image"
          />
        </div>
      </div>
      
      <div className="section-content">
        <div className="hero-content">
          <h1 className="hero-title">Yana's</h1>
          <h2 className="hero-subtitle">Fairy First Birthday</h2>
        </div>
      </div>
      
      {/* Celebration text below image */}
      <div className="hero-celebration-text">
        <p className="hero-date">Join us for an enchanting celebration!</p>
      </div>

      {/* Scroll indicator moved to bottom of hero */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  )
}

export default Hero
