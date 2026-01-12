import React, { useState, useEffect, useRef } from 'react'

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const audioRef = useRef(null)

  // Try to autoplay after user interaction
  useEffect(() => {
    const playAndUnmute = () => {
      const a = audioRef.current
      if (!a) return
      try {
        a.muted = false
        a.volume = 0.5
        const p = a.play()
        if (p && typeof p.then === 'function') {
          p.then(() => setIsPlaying(true)).catch(() => {})
        } else {
          setIsPlaying(true)
        }
      } catch (e) {
        // ignore
      }
    }

    const handleUserInteraction = (e) => {
      if (userInteracted) return
      setUserInteracted(true)
      // Call synchronously inside the user event handler to satisfy gesture requirement
      playAndUnmute()
    }

    const wrappedHandler = (e) => {
      // Call directly; if ref isn't yet attached, playAndUnmute will no-op until the element exists
      handleUserInteraction(e)
    }

    // Listen for gestures that count as user interaction in browsers
    const events = ['click', 'scroll', 'touchstart', 'pointerdown']
    events.forEach(event => window.addEventListener(event, wrappedHandler, { once: true }))

    return () => events.forEach(event => window.removeEventListener(event, wrappedHandler))
  }, [userInteracted])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        muted={false}
        volume={0.5}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src="/assets/music/fairy-theme.mp3" type="audio/mpeg" />
        <source src="/assets/music/fairy-theme.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      
      {/* Music control button */}
      <button
        className="music-control"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </>
  )
}

export default BackgroundMusic
