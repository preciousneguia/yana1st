import React from 'react'

const Godparent = () => {
  const handleClick = () => {
    alert('Thank you for accepting! ✨ We are so honored to have you as Yana\'s godparent!')
  }

  return (
    <section className="godparent-section">
      <div className="section-content">
        <div className="godparent-content">
          <div className="fairy-icon">🧚‍♀️</div>
          <h2 className="section-title">A Special Request</h2>
          <p className="godparent-text">
            Would you like to be Yana's godparent? We would be honored to have you as part of her magical journey through life.
          </p>
          <button className="godparent-button" onClick={handleClick}>
            Yes, I'd be honored!
          </button>
        </div>
      </div>
    </section>
  )
}

export default Godparent
