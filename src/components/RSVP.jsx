const RSVP = ({ showGodparent, animationStage }) => {
  const b = import.meta.env.BASE_URL

  return (
    <section className="rsvp-section">
      <div className="section-content">
        <div className="rsvp-top-content">
          <p className="rsvp-text">
            To RSVP <span className='yes'>yes</span>, please reach us on
          </p>
          <a
            href="https://www.facebook.com/keazziahgemimah.eguia"
            className="rsvp-link"
          >
            Facebook
          </a>
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
