import { useState } from 'react'

const RSVP = ({ showGodparent, animationStage }) => {
  const b = import.meta.env.BASE_URL
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("+96560073175").then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    })
  }

  return (
    <section className="rsvp-section">
      <div className="section-content">
        <div className="rsvp-top-content">
          <p className="rsvp-text">
            To RSVP <span className='yes'>yes</span>, please reach us on
          </p>
          <div className="links">
            <a
              href="https://www.facebook.com/keazziahgemimah.eguia"
              target="_blank"
              rel="noopener noreferrer"
              className="rsvp-link"
            >
              Facebook
            </a>
            <button
              onClick={handleCopy}
              className="rsvp-link"
            >
              {copied ? 'Copied!' : 'WhatsApp'}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`rsvp-background-image ${animationStage >= 3 ? 'visible' : 'hidden'}`}
        style={{
          opacity: animationStage >= 3 ? 1 : 0,
        }}
      >
        <div className="rsvp-image-wrapper">
          <img
            src={b + 'assets/yana/rsvp.JPG'}
            alt="RSVP Background"
            className="rsvp-image"
          />
        </div>
      </div>

      <div className="rsvp-bottom-content">
        {showGodparent && (
          <>
            <p className="godparent-text-rsvp">
              P.S. We would be honored to have you as Yana's godparent to be a part of her magical journey through life.
            </p>
          </>
        )}
        {!showGodparent && (
          <div className="see-you-text">
            See you there!
          </div>
        )}
      </div>
    </section>
  )
}
export default RSVP
