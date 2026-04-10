import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="section landing-section">
      <div className="container landing-container">
        <div className="landing-hero">
          <p className="eyebrow">Healthcare Access Option</p>

          <h1>
            If traditional healthcare isn’t working for you, this may be worth
            a look.
          </h1>

          <p className="landing-sub">
            Rising costs have made it harder for many individuals, families, and
            business owners to find something that fits. KonnectMD Access is a
            healthcare access membership designed to help people stay connected
            to care in a simpler way.
          </p>

          <div className="landing-actions">
            <Link to="/get-more-info" className="btn btn-primary">
              Get Plan Details
            </Link>

            <Link to="/book-call" className="btn btn-secondary">
              Schedule a Call
            </Link>
          </div>
        </div>

        <div className="landing-points">
          <div className="landing-point">Up to 7 members on one plan</div>
          <div className="landing-point">Nationwide access</div>
          <div className="landing-point">Multiple membership levels</div>
          <div className="landing-point">Fast access to care</div>
        </div>

        <div className="landing-block">
          <h2>What this is</h2>
          <p>
            KonnectMD Access is a healthcare access and savings membership. It
            is designed to help individuals, families, and business owners stay
            connected to care without the complexity of traditional systems.
          </p>
          <p>
            Depending on the membership level, access may include virtual care,
            prescriptions, wellness support, mental health services, specialist
            access, and more.
          </p>
          <p className="note">
            This is not health insurance.
          </p>
        </div>

        <div className="landing-block">
          <h2>Why people are taking a closer look</h2>
          <ul>
            <li>Healthcare costs continue to rise</li>
            <li>Many people feel priced out of traditional options</li>
            <li>Families want simpler access to care</li>
            <li>Business owners need flexible solutions</li>
          </ul>
        </div>

        <div className="landing-block">
          <h2>How it works</h2>
          <ul>
            <li>Choose a membership level</li>
            <li>Complete enrollment</li>
            <li>Get onboarded and access your portal</li>
            <li>Start using services nationwide</li>
          </ul>
        </div>

        <div className="landing-cta">
          <h2>Take the next step</h2>
          <p>
            The best way to see if this fits your situation is to review the
            details or schedule a quick call.
          </p>

          <div className="landing-actions">
            <Link to="/get-more-info" className="btn btn-primary">
              Get Plan Details
            </Link>

            <a
              href="https://www.konnectmdagency.com/12stone"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Go to Enrollment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}