import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function TelehealthIndustryPage() {
  useEffect(() => {
    document.title =
      "Why Telehealth Is Growing | KonnectMD Hampton Roads";
    window.scrollTo(0, 0);
  }, []);

 return (
  <>
    <SEO
      title="Why Telehealth Is Growing in Hampton Roads | KonnectMD"
      description="Learn why telehealth and healthcare access memberships are growing as families, entrepreneurs, and small businesses look for faster, more affordable care options."
      path="/telehealth-growth"
    />
    <main className="section detail-offer-page">
      <div className="container" style={{ maxWidth: "980px" }}>
        <p className="details-kicker">Healthcare Industry Trends</p>

        <h1>
          Why Telehealth Is Growing — and Why Families Are Paying Attention
        </h1>

        <p className="detail-offer-sub" style={{ maxWidth: "760px" }}>
          Healthcare has changed. Families, entrepreneurs, and small business
          owners want faster access, clearer costs, and more convenient ways to
          get support. Telehealth is growing because people are tired of waiting,
          driving, and guessing what care will cost.
        </p>

        <div className="detail-offer-actions" style={{ marginTop: "1.5rem" }}>
          <Link to="/get-details" className="btn btn-primary">
            Get KonnectMD Details →
          </Link>

          <Link to="/locations" className="btn btn-outline">
            See Hampton Roads Locations
          </Link>
        </div>

        <section
          style={{
            marginTop: "3rem",
            padding: "2rem",
            borderRadius: "22px",
            background: "var(--panel)",
            border: "1px solid var(--border)",
          }}
        >
          <p className="details-kicker">The shift</p>
          <h2 style={{ marginTop: 0 }}>
            People are not just searching for “telehealth.” They are searching
            for help now.
          </h2>
          <p className="body-copy">
            Real people usually search based on the problem they need solved:
            “I need a doctor today,” “I do not have insurance,” “I need help
            with prescriptions,” or “I need support from home.” That is why
            healthcare access websites must answer real questions, not just list
            industry terms.
          </p>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <p className="details-kicker">Why virtual care keeps growing</p>

          <div style={{ display: "grid", gap: "1.6rem" }}>
            <div>
              <h2>1. Convenience matters more than ever.</h2>
              <p className="body-copy">
                Families are busy. Business owners are busy. Many people do not
                want to sit in traffic, miss work, or wait in a lobby when a
                virtual care option may fit the situation.
              </p>
            </div>

            <div>
              <h2>2. Healthcare costs are pushing people to compare options.</h2>
              <p className="body-copy">
                Even people with coverage can still feel pressure from premiums,
                deductibles, copays, prescriptions, and surprise costs.
                Membership-style access options are getting more attention
                because people want practical alternatives.
              </p>
            </div>

            <div>
              <h2>3. Mental health needs are changing the conversation.</h2>
              <p className="body-copy">
                Stress, anxiety, burnout, and depression do not always wait for
                a traditional office visit. The demand for private, convenient
                support is one reason virtual care continues to matter.
              </p>
            </div>

            <div>
              <h2>4. Small businesses need simpler benefit conversations.</h2>
              <p className="body-copy">
                Many small business owners want to help their team but cannot
                afford complicated group health plans. Healthcare access
                memberships can create a more practical conversation for
                employees, contractors, and entrepreneurs.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: "3rem",
            padding: "2rem",
            borderLeft: "4px solid var(--blue-soft)",
            background: "rgba(45, 127, 249, 0.07)",
            borderRadius: "0 18px 18px 0",
          }}
        >
          <h2 style={{ marginTop: 0 }}>What the industry data shows</h2>
          <p className="body-copy">
            Telehealth adoption remains far above pre-pandemic levels. The
            American Medical Association reported that 71.4% of physicians used
            telehealth weekly in 2024, compared with 25.1% in 2018. The
            American Hospital Association has also described telehealth as safe,
            effective, and widely adopted over the past five years.
          </p>
          <p className="body-copy">
            Market research also shows continued growth: Grand View Research
            estimated the global telehealth market at $123.26 billion in 2024
            and projected it to reach $455.27 billion by 2030.
          </p>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <p className="details-kicker">What this means for Hampton Roads</p>
          <h2>
            Norfolk, Virginia Beach, Chesapeake, Portsmouth, Hampton, Newport
            News, and Suffolk all have families looking for easier care access.
          </h2>
          <p className="body-copy">
            Hampton Roads has entrepreneurs, military-connected households,
            commuters, service workers, families, retirees, and small business
            owners. Many of them are not asking for complicated healthcare
            language. They are asking for care that is easier to access, easier
            to understand, and easier to afford.
          </p>
        </section>

        <section
          style={{
            marginTop: "3rem",
            padding: "2rem",
            borderRadius: "22px",
            background: "var(--panel)",
            border: "1px solid var(--border)",
          }}
        >
          <p className="details-kicker">How KonnectMD fits</p>
          <h2 style={{ marginTop: 0 }}>
            KonnectMD is positioned around access, savings, and practical
            support.
          </h2>
          <p className="body-copy">
            KonnectMD is not traditional health insurance. It is a healthcare
            membership designed to help members access services and savings.
            That can include doctor access from home, prescription savings,
            mental health support, family membership value, and additional
            benefits depending on the selected option.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "1.4rem",
            }}
          >
            <Link to="/get-details" className="btn btn-primary">
              Get Plan Details
            </Link>
            <Link
              to="/problems/doctor-without-insurance"
              className="btn btn-secondary"
            >
              Need a Doctor Without Insurance?
            </Link>
          </div>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <h2>Frequently asked questions</h2>

          <div style={{ display: "grid", gap: "1.3rem", marginTop: "1rem" }}>
            <div>
              <h3>Why is telehealth growing?</h3>
              <p className="body-copy">
                Telehealth is growing because people want convenient access,
                shorter wait times, and simpler ways to get help for common
                healthcare needs.
              </p>
            </div>

            <div>
              <h3>Is telehealth replacing all doctor visits?</h3>
              <p className="body-copy">
                No. Emergency care and many in-person needs still require the
                right medical setting. Telehealth is useful for many common,
                non-emergency situations.
              </p>
            </div>

            <div>
              <h3>Why does this matter for families?</h3>
              <p className="body-copy">
                Families often need care after work, on weekends, or when
                schedules are tight. Virtual access can make healthcare easier
                to use when appropriate.
              </p>
            </div>

            <div>
              <h3>How does KonnectMD connect to this trend?</h3>
              <p className="body-copy">
                KonnectMD helps members access healthcare services and savings
                through a membership-style option instead of relying only on
                traditional insurance.
              </p>
            </div>
          </div>
        </section>

        <div
          className="detail-lux-bottom"
          style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <Link to="/get-details" className="btn btn-primary">
            Get KonnectMD Details →
          </Link>

          <Link to="/" className="btn btn-secondary">
            ← Back Home
          </Link>
        </div>
      </div>
    </main>
    </>
  );
}