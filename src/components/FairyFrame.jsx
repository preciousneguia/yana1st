import React from 'react'

const FairyFrame = ({ scrollY, currentSection, windowHeight = 800 }) => {
  // Different fairy tale character images for different sections
  // Using custom SVG illustrations - replace with your own images if desired
  const characters = {
    hero: {
      topLeft: '/assets/fairy.svg',      // Tinkerbell/Fairy
      topRight: '/assets/sparkles.svg',  // Sparkles
      bottomLeft: '/assets/unicorn.svg', // Unicorn
      bottomRight: '/assets/flowers.svg', // Flowers
    },
    pictures: {
      topLeft: '/assets/butterfly.svg',  // Butterfly
      topRight: '/assets/stars.svg',     // Stars
      bottomLeft: '/assets/moon.svg',    // Moon
      bottomRight: '/assets/sparkles.svg', // Sparkles
    },
    rsvp: {
      topLeft: '/assets/sparkles.svg',   // Sparkles
      topRight: '/assets/fairy.svg',      // Fairy
      bottomLeft: '/assets/flowers.svg', // Flowers
      bottomRight: '/assets/unicorn.svg', // Unicorn
    }
  }

  // Calculate progress within current section (0 to 1)
  const sectionProgress = (scrollY % windowHeight) / windowHeight

  // Get character set based on section
  const getCharacterSet = () => {
    if (currentSection === 0) return characters.hero
    if (currentSection === 1) return characters.pictures
    return characters.rsvp
  }

  const currentChars = getCharacterSet()
  const nextChars = currentSection === 0 ? characters.pictures : 
                    currentSection === 1 ? characters.rsvp : 
                    characters.hero

  // Calculate positions - characters move out of frame between sections
  const getPosition = (position) => {
    let x = 0
    let y = 0
    let opacity = 1
    let scale = 1

    if (currentSection === 0) {
      // Hero section - characters visible
      if (sectionProgress < 0.5) {
        // First half: stay in place
        opacity = 1
        scale = 1
      } else {
        // Second half: start moving out
        const t = (sectionProgress - 0.5) * 2 // 0 to 1
        if (position === 'topLeft') {
          x = -150 * t
          y = -100 * t
        } else if (position === 'topRight') {
          x = 150 * t
          y = -100 * t
        } else if (position === 'bottomLeft') {
          x = -150 * t
          y = 100 * t
        } else {
          x = 150 * t
          y = 100 * t
        }
        opacity = 1 - t * 0.8
        scale = 1 - t * 0.3
      }
    } else if (currentSection === 1) {
      // Pictures section - characters coming in from outside
      if (sectionProgress < 0.3) {
        // First part: still moving in
        const t = sectionProgress / 0.3
        if (position === 'topLeft') {
          x = -150 * (1 - t)
          y = -100 * (1 - t)
        } else if (position === 'topRight') {
          x = 150 * (1 - t)
          y = -100 * (1 - t)
        } else if (position === 'bottomLeft') {
          x = -150 * (1 - t)
          y = 100 * (1 - t)
        } else {
          x = 150 * (1 - t)
          y = 100 * (1 - t)
        }
        opacity = 0.2 + t * 0.8
        scale = 0.7 + t * 0.3
      } else if (sectionProgress < 0.7) {
        // Middle: visible
        opacity = 1
        scale = 1
      } else {
        // End: start moving out
        const t = (sectionProgress - 0.7) / 0.3
        if (position === 'topLeft') {
          x = -200 * t
          y = -150 * t
        } else if (position === 'topRight') {
          x = 200 * t
          y = -150 * t
        } else if (position === 'bottomLeft') {
          x = -200 * t
          y = 150 * t
        } else {
          x = 200 * t
          y = 150 * t
        }
        opacity = 1 - t
        scale = 1 - t * 0.4
      }
    } else {
      // RSVP section - characters coming back in
      const t = Math.min(sectionProgress * 1.5, 1)
      if (position === 'topLeft') {
        x = -200 * (1 - t)
        y = -150 * (1 - t)
      } else if (position === 'topRight') {
        x = 200 * (1 - t)
        y = -150 * (1 - t)
      } else if (position === 'bottomLeft') {
        x = -200 * (1 - t)
        y = 150 * (1 - t)
      } else {
        x = 200 * (1 - t)
        y = 150 * (1 - t)
      }
      opacity = t
      scale = 0.6 + t * 0.4
    }

    return { x, y, opacity, scale }
  }

  const topLeft = getPosition('topLeft')
  const topRight = getPosition('topRight')
  const bottomLeft = getPosition('bottomLeft')
  const bottomRight = getPosition('bottomRight')

  return (
    <>
      {/* Top Left - Tinkerbell/Fairy */}
      <div 
        className="fairy-frame top-left"
        style={{
          transform: `translate(${topLeft.x}px, ${topLeft.y}px) scale(${topLeft.scale})`,
          opacity: topLeft.opacity,
          transition: 'transform 0.1s linear, opacity 0.1s linear'
        }}
      >
        <img 
          src={currentChars.topLeft} 
          alt="Fairy" 
          className="fairy-character sparkle"
        />
      </div>

      {/* Top Right */}
      <div 
        className="fairy-frame top-right"
        style={{
          transform: `translate(${topRight.x}px, ${topRight.y}px) scale(${topRight.scale})`,
          opacity: topRight.opacity,
          transition: 'transform 0.1s linear, opacity 0.1s linear'
        }}
      >
        <img 
          src={currentChars.topRight} 
          alt="Sparkles" 
          className="fairy-character sparkle"
        />
      </div>

      {/* Bottom Left */}
      <div 
        className="fairy-frame bottom-left"
        style={{
          transform: `translate(${bottomLeft.x}px, ${bottomLeft.y}px) scale(${bottomLeft.scale})`,
          opacity: bottomLeft.opacity,
          transition: 'transform 0.1s linear, opacity 0.1s linear'
        }}
      >
        <img 
          src={currentChars.bottomLeft} 
          alt="Fairy tale character" 
          className="fairy-character sparkle"
        />
      </div>

      {/* Bottom Right */}
      <div 
        className="fairy-frame bottom-right"
        style={{
          transform: `translate(${bottomRight.x}px, ${bottomRight.y}px) scale(${bottomRight.scale})`,
          opacity: bottomRight.opacity,
          transition: 'transform 0.1s linear, opacity 0.1s linear'
        }}
      >
        <img 
          src={currentChars.bottomRight} 
          alt="Fairy tale character" 
          className="fairy-character sparkle"
        />
      </div>

      {/* Additional decorative sparkles */}
      <div 
        className="fairy-frame top-center"
        style={{
          opacity: Math.max(0.3, 1 - currentSection * 0.3),
          transform: `translateX(-50%) translateY(${currentSection * 15}px) scale(${1 - currentSection * 0.1})`
        }}
      >
        <div className="fairy-character" style={{fontSize: '2rem'}}>✨</div>
      </div>

      <div 
        className="fairy-frame bottom-center"
        style={{
          opacity: Math.max(0.3, 1 - currentSection * 0.3),
          transform: `translateX(-50%) translateY(${-currentSection * 15}px) scale(${1 - currentSection * 0.1})`
        }}
      >
        <div className="fairy-character" style={{fontSize: '2rem'}}>✨</div>
      </div>
    </>
  )
}

export default FairyFrame
