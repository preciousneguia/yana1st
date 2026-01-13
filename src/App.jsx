import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Pictures from './components/Pictures'
import EventDetails from './components/EventDetails'
import RSVP from './components/RSVP'
import FairyFrame from './components/FairyFrame'
import BackgroundMusic from './components/BackgroundMusic'
import IntroAnimation from './components/IntroAnimation'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [showGodparent, setShowGodparent] = useState(false)
  const [animationStage, setAnimationStage] = useState(0) // 0: initial, 1: title, 2: subtitle, 3: photo, 4: done

  useEffect(() => {
    // Check for URL parameter
    const urlParams = new URLSearchParams(window.location.search)
    const godparentParam = urlParams.get('godparent')
    if (godparentParam === 'true' || godparentParam === 'yes') {
      setShowGodparent(true)
    }

    // Track scroll position for animations
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate which section we're in based on scroll
  const [windowHeight, setWindowHeight] = React.useState(
    typeof window !== 'undefined' ? window.innerHeight : 800
  )

  React.useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const currentSection = Math.floor(scrollY / windowHeight)

  useEffect(() => {
    const stage1Timer = setTimeout(() => setAnimationStage(1), 2000) // Tinkerbell flies, reveals title
    const stage2Timer = setTimeout(() => setAnimationStage(2), 4000) // Tinkerbell flies, reveals subtitle
    const stage3Timer = setTimeout(() => setAnimationStage(3), 6000) // Tinkerbell flies, reveals photo
    const finalTimer = setTimeout(() => setAnimationStage(4), 7500) // Fade in rest of the page

    return () => {
      clearTimeout(stage1Timer)
      clearTimeout(stage2Timer)
      clearTimeout(stage3Timer)
      clearTimeout(finalTimer)
    }
  }, [])

  return (
    <div className={`app-container stage-${animationStage}`}>
      {animationStage < 4 && <IntroAnimation stage={animationStage} />}
      
      {/* Background Music - Load after animation */}
      {animationStage === 4 && <BackgroundMusic />}
      
      {/* Animated Fairy Tale Character Frames */}
      <FairyFrame scrollY={scrollY} currentSection={currentSection} windowHeight={windowHeight} />
      
      {/* Main Content */}
      <Hero scrollY={scrollY} windowHeight={windowHeight} animationStage={animationStage} />
      <EventDetails />
      <Pictures />
      <RSVP showGodparent={showGodparent} />
    </div>
  )
}

export default App
