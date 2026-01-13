import React, { useState, useEffect } from 'react';
import './IntroAnimation.css';

const IntroAnimation = ({ stage }) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Only run the sparkle interval during the animation stages
    if (stage > 0 && stage < 4) {
      const interval = setInterval(() => {
        // Add a new sparkle
        setSparkles(currentSparkles => [
          ...currentSparkles,
          {
            id: Date.now() + Math.random(),
            // Random vertical offset for a shimmering effect
            style: { '--y-offset': `${(Math.random() - 0.5) * 40}px` }
          }
        ]);

        // Clean up old sparkles that have faded out
        if (sparkles.length > 50) {
          setSparkles(currentSparkles => currentSparkles.slice(1));
        }
      }, 50); // Add a new sparkle every 50ms

      return () => clearInterval(interval);
    }
  }, [stage, sparkles.length]); // Rerun effect if stage changes

  // Don't render anything if the animation isn't in an active stage
  if (stage === 0 || stage >= 4) {
    return null;
  }

  return (
    <div className="intro-animation">
      <div className={`tinkerbell-container stage-${stage}`}>
        <img src="https://www.freeiconspng.com/uploads/tinkerbell-png-12.png" />
        {sparkles.map(sparkle => (
          <div key={sparkle.id} className="sparkle" style={sparkle.style}></div>
        ))}
      </div>
    </div>
  );
};

export default IntroAnimation;
