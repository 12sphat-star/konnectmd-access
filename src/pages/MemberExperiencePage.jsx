import "./../Styles/MemberExperiencePage.css";
import SEO from "../components/SEO";

export default function MemberExperiencePage() {
  return (
    <>
      <SEO
        title="Member Experience | KonnectMD Access"
        description="See how KonnectMD members access their healthcare benefits through the secure member portal."
      />

      <main className="member-experience-page">

        <section className="member-hero">
          <div className="container">

            <div className="member-hero-content">

              <div className="member-copy">

                <span className="member-eyebrow">
                  MEMBER EXPERIENCE
                </span>

                <h1>
                  See What Happens After You Become a Member
                </h1>

                <p>
                  Explore the secure KonnectMD Member Portal and discover how
                  members access physicians, prescription savings, behavioral
                  health, family management, and more—all from one convenient
                  dashboard.
                </p>

              </div>

              <div className="member-image">

                {/* Demo Portal Screenshot Goes Here */}

              </div>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}