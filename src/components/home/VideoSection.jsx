export default function VideoSection() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">See How It Works</p>
          <h2>A quick overview of what KonnectMD offers</h2>
          <p className="section-copy">
            Watch this short overview to see exactly what members get access to
            and how KonnectMD can work for your household or business.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "18px",
            border: "1px solid var(--border)",
            marginTop: "1.5rem",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/BBtPfd4MdVY?rel=0&modestbranding=1"
            title="KonnectMD Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>

        <div
          style={{
            marginTop: "1.5rem",
            textAlign: "center",
          }}
        >
          <a href="/get-details" className="btn btn-primary">
            See My Options
          </a>
        </div>
      </div>
    </section>
  );
}