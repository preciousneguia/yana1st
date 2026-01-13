import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Pictures from './components/Pictures'
import EventDetails from './components/EventDetails'
import Godparent from './components/Godparent'
import RSVP from './components/RSVP'
import FairyFrame from './components/FairyFrame'
import BackgroundMusic from './components/BackgroundMusic'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [showGodparent, setShowGodparent] = useState(false)

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

  return (
    <>
      {/* Background Music */}
      <BackgroundMusic />
      
      {/* Animated Fairy Tale Character Frames */}
      <FairyFrame scrollY={scrollY} currentSection={currentSection} windowHeight={windowHeight} />
      
      {/* Main Content */}
      <Hero scrollY={scrollY} windowHeight={windowHeight} />
      <EventDetails />
      <Pictures />
      {showGodparent && <Godparent />}
      <RSVP />
    </>
  )
}

export default App
