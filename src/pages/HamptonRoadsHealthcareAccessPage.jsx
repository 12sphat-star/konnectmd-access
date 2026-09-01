import { Link } from "react-router-dom";
import "../Styles/HamptonRoadsHealthcareAccessPage.css";

function HamptonRoadsHealthcareAccessPage() {
  const needs = [
  {
    icon: "🩺",
    title: "I Need to See a Doctor",
    text: "Explore convenient virtual-care resources and physician access.",
    link: "/resource-center/telehealth",
    cta: "Explore Virtual Care",
  },
  {
    icon: "🧠",
    title: "I Need Mental, Emotional or Life Support",
    text: "Explore support for emotional health, family, work and everyday-life challenges.",
    link: "/resource-center/behavioral-health",
    cta: "Find Support",
  },
  {
    icon: "💊",
    title: "I Need Help With Medication Costs",
    text: "Explore prescription resources and options that may help with medication costs.",
    link: "/resource-center/prescription-savings",
    cta: "Explore Prescription Resources",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "I Need Healthcare Help for My Family",
    text: "Explore practical healthcare-access resources for you and your family.",
    link: "/resource-center/family-healthcare",
    cta: "Explore Family Resources",
  },
  {
    icon: "🏢",
    title: "My Employees Need Healthcare Options",
    text: "Explore healthcare-access resources for small businesses and their teams.",
    link: "/resource-center/business-healthcare",
    cta: "Explore Business Resources",
  },
  {
    icon: "🇺🇸",
    title: "I'm a Veteran or Military Family",
    text: "Explore healthcare resources for veterans and military families.",
    link: "/resource-center/veterans",
    cta: "Explore Veteran Resources",
  },
  {
    icon: "↗",
    title: "I'm Not Sure Where to Start",
    text: "That's okay. Start here and we'll help you explore which options may fit your situation.",
    link: "/membership-finder",
    cta: "Help Me Find a Starting Point",
    featured: true,
  },
];

  return (
    <main className="hr-access-page">

      {/* SECTION 1 — HERO */}
      <section className="hr-hero">
        <div className="hr-hero-overlay" />

        <div className="hr-container hr-hero-content">
          <p className="hr-eyebrow">
            HAMPTON ROADS HEALTHCARE ACCESS INITIATIVE
          </p>

          <h1>What Do You Need Help With Today?</h1>

        <p className="hr-hero-lead">
  Healthcare can be complicated.
  <strong> Finding help shouldn't be.</strong>
</p>

<p className="hr-hero-copy">
  We're helping Hampton Roads individuals and families find practical
  healthcare resources, understand their options, and take the next
  step based on what they actually need.
</p>

          <div className="hr-hero-actions">
            <a href="#find-help" className="hr-btn hr-btn-primary">
              Find a Resource
            </a>

            <Link to="/membership-finder" className="hr-btn hr-btn-secondary">
              Explore Healthcare Options
            </Link>
          </div>

         <div className="hr-first-100">
  <span>OUR FIRST COMMUNITY MISSION</span>
  <strong>
    Help 100 Hampton Roads individuals and families take their next
    step toward better healthcare access.
  </strong>
</div>
        </div>
      </section>

{/* SECTION 2 — REAL-LIFE NEEDS */}
<section className="hr-signals">
  <div className="hr-container hr-signal-grid">

    <div className="hr-signal">
      
      <div>
        <strong>I NEED TO SEE A DOCTOR</strong>
        <span>Getting care shouldn't mean losing half your day.</span>
      </div>
    </div>

    <div className="hr-signal">
      
      <div>
        <strong>I NEED SUPPORT</strong>
        <span>Mental, emotional, family, work & everyday-life challenges.</span>
      </div>
    </div>

    <div className="hr-signal">
      
      <div>
        <strong>MEDICATIONS COST TOO MUCH</strong>
        <span>Prescription costs shouldn't force impossible choices.</span>
      </div>
    </div>

    <div className="hr-signal">
      
      <div>
        <strong>I NEED HELP FOR MY FAMILY</strong>
        <span>Finding practical healthcare access for the people who matter most.</span>
      </div>
    </div>

  </div>
</section>
      {/* SECTION 3 — START WITH THE NEED */}
      <section id="find-help" className="hr-needs">
        <div className="hr-container">

          <div className="hr-section-heading">
            <p>START WITH WHAT'S HAPPENING IN YOUR LIFE</p>
            <h2>What Brought You Here Today?</h2>
            <span>
              You don't need to know which program or service you need.
              Choose what sounds most like your situation.
            </span>
          </div>

          <div className="hr-needs-grid">
            {needs.map((need) => (
              <Link
                to={need.link}
                className={`hr-need-card ${need.featured ? "hr-need-card-featured" : ""}`}
                key={need.title}
              >
                <div className="hr-need-icon">{need.icon}</div>

                <div>
                  <h3>{need.title}</h3>
                  <p>{need.text}</p>
                  <span className="hr-card-link">
                    {need.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — MENTAL, WELLNESS & EVERYDAY-LIFE SUPPORT */}
<section className="hr-life-support">
  <div className="hr-container">

    <div className="hr-life-support-heading">
      <span className="hr-eyebrow">SUPPORT FOR MORE OF REAL LIFE</span>

     <h2>Sometimes You Need More Than Medical Care.</h2>

      <p className="hr-life-support-lead">
        Your health can be affected by what's happening emotionally,
        at home, at work and in everyday life. Finding the right support
        shouldn't be another problem to solve.
      </p>
    </div>

    <div className="hr-support-grid">

      <div className="hr-support-group">
        <span>MENTAL &amp; EMOTIONAL</span>
        <h3>When Life Feels Heavy</h3>
        <p>
          Anxiety • Depression • Stress • Trauma • Grief • Burnout
        </p>
      </div>

      <div className="hr-support-group">
        <span>FAMILY &amp; RELATIONSHIPS</span>
        <h3>When Home Gets Complicated</h3>
        <p>
          Marriage • Parenting • Child Behavioral • Family Conflict
        </p>
      </div>

      <div className="hr-support-group">
        <span>WORK &amp; CAREER</span>
        <h3>When Work Follows You Home</h3>
        <p>
          Work Stress • Conflict • Harassment &amp; Bullying • Career Concerns
        </p>
      </div>

      <div className="hr-support-group">
        <span>EVERYDAY LIFE</span>
        <h3>When You Just Need Some Help</h3>
        <p>
          Financial Stress • Child Care • Elder Care • Legal Referrals • Basic Needs
        </p>
      </div>

    </div>

    <div className="hr-life-support-bottom">
      <div>
        <strong>And that's only part of the support available.</strong>
        <p>
          From emotional health to challenges at home, at work and in
          everyday life, support can start with a conversation.
        </p>
      </div>

      <Link
        to="/resource-center/behavioral-health"
        className="hr-life-support-button"
      >
        Explore Mental, Wellness &amp; Life Support →
      </Link>
    </div>

  </div>
</section>

{/* SECTION 5 — KONNECTMD SOLUTION REVEAL */}
<section className="hr-solution-reveal">
  <div className="hr-container">

    <div className="hr-solution-heading">
      <span className="hr-solution-eyebrow">
        ONE PRACTICAL HEALTHCARE ACCESS OPTION
      </span>

      <h2>
        What If One Membership Could Help With Several of These Needs?
      </h2>

      <p>
        That's where KonnectMD comes in — bringing several valuable
        healthcare-access and support services together in one membership.
      </p>
    </div>

    <div className="hr-solution-brand">
      <span>Konnect<span className="hr-md-red">MD</span></span>
      <strong>Healthcare Access</strong>
    </div>

    <div className="hr-solution-grid">

      <div className="hr-solution-benefit">
        <span className="hr-benefit-number">24/7</span>
        <h3>Physician Access</h3>
        <p>
          Connect with a physician from home, work or while traveling.
        </p>
      </div>

      <div className="hr-solution-benefit">
        <span className="hr-benefit-number">Mental + Life</span>
        <h3>Support for Real Life</h3>
        <p>
          Mental, emotional, family, work, relationship and everyday-life support.
        </p>
      </div>

      <div className="hr-solution-benefit">
        <span className="hr-benefit-number">1,000+</span>
        <h3>Medications</h3>
        <p>
          Access to more than 1,000 medications at no additional cost.*
        </p>
      </div>

      <div className="hr-solution-benefit">
        <span className="hr-benefit-number">Up to 7</span>
        <h3>Family Members</h3>
        <p>
          Give more of your family access to healthcare through one membership.*
        </p>
      </div>

    </div>

    <div className="hr-solution-value">

      <div className="hr-solution-price">
        <span>Healthcare access starting around</span>
        <strong>Around $2 a day</strong>
      </div>

      <div className="hr-solution-actions">
        <Link to="/get-details" className="hr-solution-primary">
          See How KonnectMD Works
        </Link>

        <Link to="/plans" className="hr-solution-secondary">
          Compare Memberships
        </Link>
      </div>

    </div>

    <p className="hr-solution-disclaimer">
      *Benefits, medication availability, family eligibility and services vary
      by membership. KonnectMD is a healthcare membership and is not health
      insurance or a replacement for comprehensive major-medical coverage.
    </p>

  </div>
</section>

{/* SECTION 6 — FIRST COMMUNITY MISSION */}
<section className="hr-community-mission">
  <div className="hr-container">

    <div className="hr-community-mission-grid">

      <div className="hr-community-mission-number">
        <span>OUR FIRST COMMUNITY MISSION</span>
        <strong>100</strong>
        <p>Hampton Roads individuals &amp; families</p>
      </div>

      <div className="hr-community-mission-content">
        <span className="hr-community-eyebrow">
          HELP STARTS WITH ACCESS
        </span>

        <h2>
         Let's Help 100 Hampton Roads Individuals & Families Take Their Next Step.
        </h2>

        <p className="hr-community-lead">
          The Hampton Roads Healthcare Access Initiative is starting with
          a simple community goal: help 100 local individuals and families
          better understand their healthcare-access options and connect
          them with resources that may help.
        </p>

        <div className="hr-community-promise">
          <strong>Helping someone doesn't always mean selling them something.</strong>
          <p>
            Sometimes help means finding a resource. Sometimes it means
            understanding an option. Sometimes it means connecting someone
            with support they didn't know was available.
          </p>
        </div>

      <div className="hr-community-actions">
  <Link to="/get-details" className="hr-community-button">
    I Need Help Finding an Option →
  </Link>

  <a href="#community-partners" className="hr-community-partner-link">
    I Want to Help My Community →
  </a>
</div>
      </div>

    </div>

  </div>
</section>

{/* SECTION 7 — COMMUNITY PARTNERS */}
<section id="community-partners" className="hr-community-partners">
  <div className="hr-container">

    <div className="hr-partners-heading">
      <span className="hr-partners-eyebrow">
        COMMUNITY PARTNERS
      </span>

      <h2>
  Together, We Can Expand Healthcare Access Across Hampton Roads.
</h2>

      <p>
        You already serve people in our community. We want to help make
        practical healthcare information, resources and access options
        easier for them to find.
      </p>
    </div>

    <div className="hr-partner-grid">

      <div className="hr-partner-card">
        <span>CHURCHES &amp; MINISTRIES</span>
        <h3>Support the People You Already Serve</h3>
        <p>
          Give members and families another place to turn when they need
          help understanding healthcare-access options and available resources.
        </p>
      </div>

      <div className="hr-partner-card">
        <span>COMMUNITY ORGANIZATIONS</span>
        <h3>Bring Healthcare Resources Into the Community</h3>
        <p>
          Add practical healthcare-access information and resource navigation
          to community programs, outreach efforts and local events.
        </p>
      </div>

      <div className="hr-partner-card">
        <span>EMPLOYERS &amp; SMALL BUSINESSES</span>
        <h3>Help Employees Find More Healthcare Options</h3>
        <p>
          Explore affordable healthcare-access resources that may help
          employees and their families, including workers without traditional
          employer-sponsored coverage.
        </p>
      </div>

      <div className="hr-partner-card">
        <span>VETERANS &amp; MILITARY COMMUNITIES</span>
        <h3>Connect Military Families With Additional Resources</h3>
        <p>
          Help veterans, military families and caregivers discover additional
          healthcare-access and support resources available to them.
        </p>
      </div>

      <div className="hr-partner-card">
        <span>NONPROFITS &amp; COMMUNITY PROGRAMS</span>
        <h3>Add Healthcare Access to the Support You Provide</h3>
        <p>
          When healthcare questions arise, give the people you serve a
          practical starting point for finding information and options.
        </p>
      </div>

      <div className="hr-partner-card">
        <span>EVENT &amp; OUTREACH ORGANIZERS</span>
        <h3>Invite the Initiative Into Your Next Event</h3>
        <p>
          Healthcare-access education, resource information and one-on-one
          conversations can become part of your community outreach.
        </p>
      </div>

    </div>

    <div className="hr-partner-invite">

      <div>
        <span>HOSTING AN EVENT OR SERVING A COMMUNITY?</span>

        <h3>Let's See How We Can Help.</h3>

        <p>
          Tell us who you serve and what you're trying to accomplish.
          We'll explore whether the Hampton Roads Healthcare Access Initiative
          can provide resources, education or healthcare-access information
          that fits your community.
        </p>
      </div>

      <Link to="/contact" className="hr-partner-button">
        Talk With Us About Your Community →
      </Link>

    </div>

  </div>
</section>

{/* SECTION 8 — QUESTIONS & ANSWERS */}
<section className="hr-initiative-faq">
  <div className="hr-container">

    <div className="hr-faq-heading">
      <span>QUESTIONS &amp; ANSWERS</span>
      <h2>Questions About the Initiative?</h2>
      <p>
        Start here. The goal of the Hampton Roads Healthcare Access
        Initiative is to make it easier to understand your options
        and know where to go next.
      </p>
    </div>

    <div className="hr-faq-list">

      <details className="hr-faq-item">
        <summary>
          What is the Hampton Roads Healthcare Access Initiative?
        </summary>
        <p>
          The Hampton Roads Healthcare Access Initiative is a local effort
          focused on helping individuals and families better understand
          healthcare-access resources and practical options that may help
          them get care. Our first community mission is to help 100 Hampton
          Roads individuals and families take a meaningful next step toward
          better healthcare access.
        </p>
      </details>

      <details className="hr-faq-item">
        <summary>
          Is the Initiative only for people without health insurance?
        </summary>
        <p>
          No. People with insurance can still struggle with the cost of care,
          high deductibles, getting timely appointments, prescription costs,
          mental and emotional support, family needs and other barriers to
          accessing care. The Initiative is designed to help people explore
          resources and options based on the challenges they are facing.
        </p>
      </details>

      <details className="hr-faq-item">
        <summary>
          Is the Hampton Roads Healthcare Access Initiative the same as KonnectMD?
        </summary>
        <p>
          No. The Initiative is the broader community healthcare-access effort.
          KonnectMD is one practical healthcare membership option that may be
          introduced when its services fit a person's, family's or employer's
          needs.
        </p>
      </details>

      <details className="hr-faq-item">
        <summary>
          What kind of mental, emotional and everyday-life support can I explore?
        </summary>
        <p>
          Support may include areas such as anxiety, depression, stress, grief,
          trauma, burnout, parenting, relationships, family conflict, work
          stress, career concerns, financial stress, child care, elder care,
          legal referrals and other everyday-life challenges. Available
          services depend on the specific program or membership being used.
        </p>
      </details>

      <details className="hr-faq-item">
        <summary>
          Can the Initiative help small businesses and their employees?
        </summary>
        <p>
          Yes. Small businesses are an important part of the Initiative.
          We can help business owners explore practical healthcare-access
          resources and options for employees and their families, including
          situations where traditional employer-sponsored healthcare may be
          unavailable or difficult to afford.
        </p>
      </details>

      <details className="hr-faq-item">
        <summary>
          I'm a business owner. How can I get information for my employees?
        </summary>
        <p>
          Start by contacting us and telling us about your business, your
          workforce and the healthcare challenges your employees may be
          experiencing. We can help you explore available options and determine
          whether a healthcare-access solution such as KonnectMD may fit your
          organization.
        </p>
        <Link to="/contact" className="hr-faq-link">
          Talk With Us About Your Business →
        </Link>
      </details>

      <details className="hr-faq-item">
        <summary>
          Can my family participate?
        </summary>
        <p>
          Yes. The Initiative serves individuals and families. When KonnectMD
          is an appropriate option, eligible family members may be included
          depending on the membership selected. Membership benefits and
          eligibility vary by plan.
        </p>
      </details>

      <details className="hr-faq-item">
        <summary>
          Is KonnectMD health insurance?
        </summary>
        <p>
          No. KonnectMD is a healthcare membership. It is not health insurance
          and should not be considered a replacement for comprehensive
          major-medical insurance coverage.
        </p>
      </details>

      <details className="hr-faq-item">
        <summary>
          I don't know what kind of help I need. Where should I start?
        </summary>
        <p>
          That's okay. Start with what is happening in your life. You can
          explore physician access, mental and everyday-life support,
          prescription resources, family healthcare, employee healthcare
          and other resources through the Healthcare Access Resource Center.
        </p>
        <a href="#find-help" className="hr-faq-link">
          Help Me Find a Starting Point →
        </a>
      </details>

    </div>

  </div>
</section>

{/* SECTION 9 — CHOOSE YOUR PATH */}
<section className="hr-final-action">
  <div className="hr-container">

    <div className="hr-final-heading">
      <span className="hr-final-eyebrow">
        YOUR NEXT STEP CAN START HERE
      </span>

      <h2>Find the Path That Fits You.</h2>

      <p>
        Whether you're looking for healthcare access for yourself and your
        family, exploring options for your business, or looking for resources
        for the people your organization serves, start with the path that
        fits you.
      </p>
    </div>

    <div className="hr-final-grid">

      {/* INDIVIDUALS & FAMILIES */}
      <div className="hr-final-card">
        <span>01 — INDIVIDUALS &amp; FAMILIES</span>

        <h3>Healthcare Access for Me &amp; My Family</h3>

        <p>
          Explore healthcare access, savings and support designed around
          the everyday needs of individuals and families.
        </p>

        <Link to="/family" className="hr-final-link">
          Explore Family Options →
        </Link>
      </div>

      {/* BUSINESS OWNERS */}
      <div className="hr-final-card hr-final-card-featured">
        <span>02 — BUSINESS OWNERS &amp; SELF-EMPLOYED</span>

        <h3>Healthcare Access for My Business</h3>

        <p>
          Explore practical healthcare access for business owners,
          employees, independent teams and their families.
        </p>

        <Link
          to="/resource-center/business-healthcare"
          className="hr-final-link"
        >
          Explore Business Options →
        </Link>
      </div>

      {/* ORGANIZATIONS */}
      <div className="hr-final-card">
        <span>03 — CHURCHES, NONPROFITS &amp; ORGANIZATIONS</span>

        <h3>Resources for the People We Serve</h3>

        <p>
          Explore healthcare access and real-life support resources for
          members, families, employees, volunteers and the communities
          you serve.
        </p>

        <Link to="/organizations" className="hr-final-link">
          Explore Organization Options →
        </Link>
      </div>

    </div>

  </div>
</section>

    </main>
  );
}

export default HamptonRoadsHealthcareAccessPage;