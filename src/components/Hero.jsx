import React from 'react'

const Hero = ({ scrollY, windowHeight, animationStage }) => {
  // Calculate opacity based on scroll (fade out as we scroll down)
  return (
    <section className="hero-section">
      {/* Background image with wrapping paper effect */}
      <div
        className={`hero-background-image ${animationStage >= 3 ? 'visible' : 'hidden'}`}
        style={{
          opacity: animationStage >= 3 ? 1 : 0,
        }}
      >
        <div className="hero-image-wrapper">
          <img
            src={import.meta.env.BASE_URL + 'assets/yana/hero.JPG'}
            alt="Yana"
            className="hero-image"
          />
        </div>
      </div>

      <div className="section-content">
        <div className="hero-content">
          <h1 className={`hero-title ${animationStage >= 1 ? 'visible' : ''}`}>Mariana Ysabelle's</h1>
          <h2 className={`hero-subtitle ${animationStage >= 2 ? 'visible' : ''}`}>Fairy First Birthday and Dedication</h2>
        </div>
      </div>

      {/* Scroll indicator moved to bottom of hero */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  )
}

export default Hero
