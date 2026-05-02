import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MentalHealthPage() {
  useEffect(() => {
    document.title = "Mental Health Support | KonnectMD";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="section detail-offer-page">
      <div className="container" style={{ maxWidth: "920px" }}>
        <p className="details-kicker">Mental Health Support</p>

        <h1 style={{ maxWidth: "760px" }}>
          Mental health support should not feel out of reach.
        </h1>

        <p className="detail-offer-sub" style={{ maxWidth: "760px" }}>
          Stress. Anxiety. Burnout. Depression. Emotional pressure at home or
          work. Many families are carrying more than people can see. KonnectMD
          may help members access mental health support in a simpler, more
          private way — including 24/7 access options because emotional
          struggles do not only happen during business hours.
        </p>

        <div className="detail-offer-actions" style={{ marginTop: "1.5rem" }}>
          <Link
            to="/contact"
            state={{ interestType: "Mental Health Support" }}
            className="btn btn-primary"
          >
            Get Mental Health Details →
          </Link>

          <Link to="/get-details" className="btn btn-outline">
            Back to Options
          </Link>
        </div>

        <section
          style={{
            marginTop: "3rem",
            padding: "2rem",
            borderLeft: "4px solid var(--blue-soft)",
            background: "rgba(45, 127, 249, 0.07)",
            borderRadius: "0 18px 18px 0",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            People are smiling in public while struggling in private.
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
            Mental health is no longer a side conversation. It affects families,
            marriages, work performance, parenting, sleep, focus, and peace.
            Getting support should feel normal, not embarrassing.
          </p>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <p className="details-kicker">Who This Helps</p>

          <div style={{ display: "grid", gap: "1.5rem" }}>
            <div>
              <h3>For parents carrying everything</h3>
              <p className="body-copy">
                The bills, the kids, the work schedule, the relationship
                pressure, the “I have to keep it together” feeling — it adds
                up. Support can help families breathe again.
              </p>
            </div>

            <div>
              <h3>For entrepreneurs and business owners</h3>
              <p className="body-copy">
                Pressure can look like confidence on the outside and anxiety on
                the inside. Building, selling, leading, and surviving takes a
                mental toll too.
              </p>
            </div>

            <div>
              <h3>For households trying to stay connected</h3>
              <p className="body-copy">
                Mental wellness affects communication, patience, energy, and
                how a family functions together. When one person struggles, the
                whole household can feel it.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: "3rem",
            padding: "2rem",
            borderRadius: "22px",
            background: "var(--panel)",
            border: "1px solid var(--border)",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            This is not weakness. This is wisdom.
          </h2>
          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Taking care of your mind is part of taking care of your life.
            KonnectMD may help make support easier to access, easier to talk
            about, and easier to consider before life feels overwhelming.
          </p>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <h2>Common questions</h2>

          <div style={{ display: "grid", gap: "1.25rem", marginTop: "1rem" }}>
            <div>
              <h3>Is mental health support included?</h3>
              <p className="body-copy">
                Mental health support may be available depending on the
                KonnectMD membership option selected.
              </p>
            </div>

            <div>
              <h3>Is this private?</h3>
              <p className="body-copy">
                KonnectMD is designed to help members access support in a more
                private and convenient way.
              </p>
            </div>

            <div>
              <h3>What should I do next?</h3>
              <p className="body-copy">
                Click below and a KonnectMD agent can explain available options
                and how mental health support may fit your membership.
              </p>
            </div>
          </div>
        </section>

        <div
          className="detail-lux-bottom"
          style={{
            marginTop: "3rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/contact"
            state={{ interestType: "Mental Health Support" }}
            className="btn btn-primary"
          >
            Get Details on Mental Health Support →
          </Link>

          <Link to="/get-details" className="btn btn-secondary">
            ← Back to All Options
          </Link>
        </div>
      </div>
    </main>
  );
}