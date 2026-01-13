import React, { useEffect, useState } from 'react'
import './FairyFrame.css'
import SparkleIcon from './SparkleIcon'
import ButterflyIcon from './ButterflyIcon'

const FairyFrame = () => {
  const [sparkles, setSparkles] = useState([])
  const [butterflies, setButterflies] = useState([])
  const [fireflies, setFireflies] = useState([])

  // Generate sparkles
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = []
      for (let i = 0; i < 30; i++) {
        newSparkles.push({
          id: `sparkle-${i}`,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 2,
        })
      }
      setSparkles(newSparkles)
    }
    generateSparkles()
  }, [])

  // Generate butterflies
  useEffect(() => {
    const generateButterflies = () => {
      const newButterflies = []
      for (let i = 0; i < 8; i++) {
        newButterflies.push({
          id: `butterfly-${i}`,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 15 + Math.random() * 10,
          size: 30 + Math.random() * 20,
        })
      }
      setButterflies(newButterflies)
    }
    generateButterflies()
  }, [])

  // Generate fireflies
  useEffect(() => {
    const generateFireflies = () => {
      const newFireflies = []
      for (let i = 0; i < 12; i++) {
        newFireflies.push({
          id: `firefly-${i}`,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 8,
          duration: 20 + Math.random() * 15,
        })
      }
      setFireflies(newFireflies)
    }
    generateFireflies()
  }, [])

  return (
    <div className="fairy-frame-container">
      {/* Left Vines */}
      <div className="vine-frame vine-left">
        <svg viewBox="0 0 200 1000" preserveAspectRatio="none" className="vine-svg">
          <path
            d="M 20 0 Q 15 50 25 100 T 20 200 T 30 300 T 15 400 T 25 500 T 20 600 T 30 700 T 15 800 T 25 900 T 20 1000"
            fill="none"
            stroke="#4a7c59"
            strokeWidth="16"
            className="vine-path"
          />
          <path
            d="M 20 50 Q 10 100 25 150 T 15 250 T 30 350 T 10 450 T 25 550 T 15 650 T 30 750 T 10 850 T 25 950"
            fill="none"
            stroke="#6b9c7a"
            strokeWidth="12"
            className="vine-path vine-path-2"
          />
          {/* Leaves */}
          <g className="leaves-group">
            <ellipse cx="25" cy="120" rx="12" ry="8" fill="#5a8c69" className="leaf" />
            <ellipse cx="15" cy="220" rx="10" ry="6" fill="#6b9c7a" className="leaf" />
            <ellipse cx="30" cy="320" rx="14" ry="9" fill="#5a8c69" className="leaf" />
            <ellipse cx="18" cy="420" rx="11" ry="7" fill="#6b9c7a" className="leaf" />
            <ellipse cx="28" cy="520" rx="13" ry="8" fill="#5a8c69" className="leaf" />
            <ellipse cx="16" cy="620" rx="10" ry="6" fill="#6b9c7a" className="leaf" />
            <ellipse cx="32" cy="720" rx="12" ry="8" fill="#5a8c69" className="leaf" />
            <ellipse cx="20" cy="820" rx="11" ry="7" fill="#6b9c7a" className="leaf" />
            <ellipse cx="26" cy="920" rx="13" ry="8" fill="#5a8c69" className="leaf" />
          </g>
          {/* Flowers */}
          <g className="flowers-group">
            <circle cx="25" cy="150" r="6" fill="#ffb3d9" className="flower" />
            <circle cx="15" cy="280" r="5" fill="#ffcae9" className="flower" />
            <circle cx="30" cy="380" r="7" fill="#ffb3d9" className="flower" />
            <circle cx="18" cy="480" r="6" fill="#ffcae9" className="flower" />
            <circle cx="28" cy="580" r="5" fill="#ffb3d9" className="flower" />
            <circle cx="16" cy="680" r="6" fill="#ffcae9" className="flower" />
            <circle cx="32" cy="780" r="7" fill="#ffb3d9" className="flower" />
            <circle cx="20" cy="880" r="5" fill="#ffcae9" className="flower" />
          </g>
        </svg>
      </div>

      {/* Right Vines */}
      <div className="vine-frame vine-right">
        <svg viewBox="0 0 200 1000" preserveAspectRatio="none" className="vine-svg">
          <path
            d="M 180 0 Q 185 50 175 100 T 180 200 T 170 300 T 185 400 T 175 500 T 180 600 T 170 700 T 185 800 T 175 900 T 180 1000"
            fill="none"
            stroke="#4a7c59"
            strokeWidth="16"
            className="vine-path"
          />
          <path
            d="M 180 50 Q 190 100 175 150 T 185 250 T 170 350 T 190 450 T 175 550 T 185 650 T 170 750 T 190 850 T 175 950"
            fill="none"
            stroke="#6b9c7a"
            strokeWidth="12"
            className="vine-path vine-path-2"
          />
          {/* Leaves */}
          <g className="leaves-group">
            <ellipse cx="175" cy="120" rx="12" ry="8" fill="#5a8c69" className="leaf" />
            <ellipse cx="185" cy="220" rx="10" ry="6" fill="#6b9c7a" className="leaf" />
            <ellipse cx="170" cy="320" rx="14" ry="9" fill="#5a8c69" className="leaf" />
            <ellipse cx="182" cy="420" rx="11" ry="7" fill="#6b9c7a" className="leaf" />
            <ellipse cx="172" cy="520" rx="13" ry="8" fill="#5a8c69" className="leaf" />
            <ellipse cx="184" cy="620" rx="10" ry="6" fill="#6b9c7a" className="leaf" />
            <ellipse cx="168" cy="720" rx="12" ry="8" fill="#5a8c69" className="leaf" />
            <ellipse cx="180" cy="820" rx="11" ry="7" fill="#6b9c7a" className="leaf" />
            <ellipse cx="174" cy="920" rx="13" ry="8" fill="#5a8c69" className="leaf" />
          </g>
          {/* Flowers */}
          <g className="flowers-group">
            <circle cx="175" cy="150" r="6" fill="#ffb3d9" className="flower" />
            <circle cx="185" cy="280" r="5" fill="#ffcae9" className="flower" />
            <circle cx="170" cy="380" r="7" fill="#ffb3d9" className="flower" />
            <circle cx="182" cy="480" r="6" fill="#ffcae9" className="flower" />
            <circle cx="172" cy="580" r="5" fill="#ffb3d9" className="flower" />
            <circle cx="184" cy="680" r="6" fill="#ffcae9" className="flower" />
            <circle cx="168" cy="780" r="7" fill="#ffb3d9" className="flower" />
            <circle cx="180" cy="880" r="5" fill="#ffcae9" className="flower" />
          </g>
        </svg>
      </div>

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          <SparkleIcon size={20} />
        </div>
      ))}

      {/* Butterflies */}
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="butterfly"
          style={{
            left: `${butterfly.left}%`,
            top: `${butterfly.top}%`,
            animationDelay: `${butterfly.delay}s`,
            animationDuration: `${butterfly.duration}s`,
          }}
        >
          <div className="butterfly-body">
            <ButterflyIcon size={butterfly.size} />
          </div>
        </div>
      ))}

      {/* Fireflies */}
      {fireflies.map((firefly) => (
        <div
          key={firefly.id}
          className="firefly"
          style={{
            left: `${firefly.left}%`,
            top: `${firefly.top}%`,
            animationDelay: `${firefly.delay}s`,
            animationDuration: `${firefly.duration}s`,
          }}
        >
          <div className="firefly-glow"></div>
        </div>
      ))}
    </div>
  )
}

export default FairyFrame
