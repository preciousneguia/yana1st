import React from 'react'

const RSVP = ({ showGodparent }) => {
  const b = import.meta.env.BASE_URL

  return (
    <section className="rsvp-section">
      <style>{`
        .rsvp-content {
          max-width: 900px !important;
          width: 90% !important;
        }
        .rsvp-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 3rem;
          width: 100%;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .calendar-wrapper {
          background: rgba(255, 255, 255, 0.9);
          padding: 1.2rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          font-family: monospace;
          font-size: 1.1rem;
        }
        .calendar-title {
          text-align: center;
          font-weight: bold;
          color: #d4af37;
          margin-bottom: 0.5rem;
        }
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          text-align: center;
        }
        .cal-day {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }
        .cal-header {
          font-weight: bold;
          color: #888;
        }
        .cal-highlight {
          background: #ffb7c5;
          color: white;
          border-radius: 50%;
          font-weight: bold;
        }
        .footer-fairy {
          height: 120px;
          width: auto;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
        }
        .see-you-text {
          font-family: 'Girly', cursive;
          font-size: 3.5rem;
          color: var(--text-color);
          animation: shake 4s ease-in-out infinite;
        }
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          2% { transform: rotate(-3deg); }
          4% { transform: rotate(3deg); }
          6% { transform: rotate(-3deg); }
          8% { transform: rotate(0deg); }
        }
        @media (max-width: 768px) {
          .rsvp-footer {
            flex-direction: column;
            justify-content: center;
          }
        }
      `}</style>
      <div className="section-content">
        <div className="rsvp-content">
          {showGodparent && (
            <>
              <div className="fairy-icon">🧚‍♀️</div>
              <h2 className="section-title">A Special Request</h2>
              <p className="godparent-text">
                We would be honored to have you as Yana's godparent to be a part of her magical journey through life.
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

          <div className="rsvp-footer">
            <div className="calendar-wrapper">
              <div className="calendar-title">February 2026</div>
              <div className="calendar-grid">
                {['S','M','T','W','T','F','S'].map(d => <div key={d} className="cal-day cal-header">{d}</div>)}
                {/* Feb 1, 2026 is a Sunday */}
                {Array.from({length: 28}, (_, i) => i + 1).map(d => (
                  <div key={d} className={`cal-day ${d === 20 ? 'cal-highlight' : ''}`}>
                    {d}
                  </div>
                ))}
              </div>
            </div>

            <img src={b + 'assets/butterfly.svg'} alt="Butterfly" className="footer-fairy" />

            <div className="see-you-text">
              See you there!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RSVP
