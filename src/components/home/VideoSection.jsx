export default function VideoSection() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">See How It Works</p>

          <h2>
            A quick overview of what KonnectMD offers
          </h2>

          <p className="section-copy">
            Watch this short overview to see exactly what members get access to
            and how KonnectMD can work for your household or business.
          </p>
        </div>

        {/* VIDEO LABEL */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "14px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#2563eb",
              color: "white",
              padding: "12px 18px",
              borderRadius: "999px",
              fontWeight: "900",
              boxShadow: "0 10px 30px rgba(37,99,235,.35)",
              letterSpacing: "0.5px",
            }}
          >
            ▶ WATCH THE 2-MINUTE OVERVIEW
          </span>
        </div>

        {/* HOSTED VIDEO */}
        <div
          style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid var(--border)",
            marginTop: "1rem",
            boxShadow: "0 20px 60px rgba(0,0,0,.25)",
          }}
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/launch-hero.png"
            style={{
              width: "100%",
              display: "block",
              cursor: "pointer",
            }}
          >
            <source
              src="/videos/launch-video.mp4"
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>
        </div>

        {/* CTA */}
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