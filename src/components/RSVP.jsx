import React from 'react'

const RSVP = ({ showGodparent }) => {
  return (
    <section className="rsvp-section">
      <div className="section-content">
        <div className="rsvp-content">
          {showGodparent && (
            <>
              <div className="fairy-icon">🧚‍♀️</div>
              <h2 className="section-title">A Special Request</h2>
              <p className="godparent-text">
                Would you like to be Yana's godparent? We would be honored to have you as part of her magical journey through life.
              </p>
            </>
          )}
          <p className="rsvp-text">
            To RSVP <b>yes</b>, please reach me on
          </p>
          <a 
            href="https://www.facebook.com/keazziahgemimah.eguia" 
            className="rsvp-link"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  )
}

export default RSVP
