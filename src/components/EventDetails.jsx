import React from 'react'

const EventDetails = () => {
  return (
    <section className="event-section">
      <style>{`
        .event-content {
          display: flex;
          flex-direction: column;
          align-items: center;
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
      `}</style>
      <div className="section-content">
        <div className="event-content">
          <h2 className="section-title">Join us for an enchanting celebration!</h2>
          <div className="section-subtitle event-info">
            <p>on February 20, 2026</p>
            <p>6pm at City Tower Hotel</p>
            <p>1F Function Hall</p>
          </div>
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
        </div>
      </div>
    </section>
  )
}

export default EventDetails
