export default function CalendarPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-box premium-cta">
          <p className="eyebrow">Book a Call</p>
          <h1 className="page-title">Schedule a time to review your options</h1>
          <p className="section-copy">
            Choose a time that works for you and we’ll walk through the
            membership options that best fit your needs.
          </p>

          <div className="calendar-embed">
            <iframe
              src="https://b.12stoneboost.com/widget/bookings/system-clarity-conversation"
              title="Book a Call"
              width="100%"
              height="800"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}