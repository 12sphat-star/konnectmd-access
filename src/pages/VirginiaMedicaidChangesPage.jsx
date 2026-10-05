import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function VirginiaMedicaidChangesPage() {
  useEffect(() => {
    document.title =
      "Virginia Medicaid Changes for 2027 | RuKonnected Insights";

    const description =
      "Virginia Medicaid changes are coming in 2027. Learn about six-month renewals, new federal work requirements, exemptions, qualifying activities, and what Virginia families should do now.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
    window.scrollTo(0, 0);
  }, []);

  const s = {
    page: {
      background: "#f7f9fc",
      color: "#172033",
      minHeight: "100vh",
      fontFamily: "Arial, Helvetica, sans-serif",
    },
    hero: {
      background:
        "linear-gradient(135deg, #071b35 0%, #0b3764 60%, #0b63a5 100%)",
      color: "#fff",
      padding: "88px 24px 78px",
    },
    heroInner: {
      maxWidth: "1040px",
      margin: "0 auto",
    },
    category: {
      color: "#8dd7ff",
      fontWeight: 900,
      fontSize: "14px",
      letterSpacing: "1.6px",
      textTransform: "uppercase",
    },
    title: {
      fontSize: "clamp(38px, 6vw, 68px)",
      lineHeight: 1.04,
      fontWeight: 900,
      letterSpacing: "-1.5px",
      margin: "18px 0 22px",
      maxWidth: "1000px",
    },
    subtitle: {
      fontSize: "21px",
      lineHeight: 1.65,
      color: "#d7e8f8",
      maxWidth: "850px",
    },
    meta: {
      marginTop: "25px",
      color: "#a9c9e6",
      fontSize: "15px",
    },
    article: {
      maxWidth: "920px",
      margin: "0 auto",
      padding: "55px 24px 90px",
    },
    back: {
      display: "inline-block",
      marginBottom: "30px",
      color: "#0b73b8",
      fontWeight: 800,
      textDecoration: "none",
    },
    image: {
      width: "100%",
      height: "auto",
      display: "block",
      borderRadius: "20px",
      boxShadow: "0 18px 50px rgba(9,40,75,.14)",
      marginBottom: "42px",
    },
    p: {
      fontSize: "18px",
      lineHeight: 1.8,
      color: "#3b4859",
      margin: "0 0 20px",
    },
    lead: {
      fontSize: "22px",
      lineHeight: 1.75,
      color: "#29394d",
      marginBottom: "25px",
    },
    h2: {
      color: "#082b50",
      fontSize: "34px",
      lineHeight: 1.2,
      fontWeight: 900,
      margin: "58px 0 20px",
    },
    h3: {
      color: "#0b4f82",
      fontSize: "24px",
      lineHeight: 1.3,
      fontWeight: 850,
      margin: "34px 0 12px",
    },
    box: {
      background: "#fff",
      border: "1px solid #e2e8ef",
      borderRadius: "18px",
      padding: "30px",
      margin: "32px 0",
      boxShadow: "0 10px 35px rgba(9,40,75,.07)",
    },
    blueBox: {
      background: "#eaf6ff",
      borderLeft: "6px solid #1597d4",
      borderRadius: "14px",
      padding: "28px 30px",
      margin: "34px 0",
    },
    goldBox: {
      background: "#fff7e8",
      borderLeft: "6px solid #e6a11c",
      borderRadius: "14px",
      padding: "28px 30px",
      margin: "34px 0",
    },
    darkBox: {
      background: "#071b35",
      color: "#fff",
      borderRadius: "20px",
      padding: "34px",
      margin: "45px 0",
    },
    list: {
      fontSize: "18px",
      lineHeight: 1.85,
      color: "#3b4859",
      paddingLeft: "25px",
    },
    scenario: {
      background: "#fff",
      border: "1px solid #dfe7ef",
      borderRadius: "16px",
      padding: "25px 28px",
      marginBottom: "18px",
    },
    label: {
      color: "#0b73b8",
      fontWeight: 900,
      fontSize: "14px",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    sourceLink: {
      color: "#8dd7ff",
      fontWeight: 800,
      textDecoration: "underline",
    },
    disclaimer: {
      fontSize: "14px",
      lineHeight: 1.7,
      color: "#718096",
      marginTop: "38px",
    },
  };

  return (
    <main style={s.page}>
      {/* HERO */}
      <section style={s.hero}>
        <div style={s.heroInner}>
          <div style={s.category}>Virginia Healthcare Update</div>

          <h1 style={s.title}>
            Virginia Medicaid Changes: What Families Need to Know for 2027
          </h1>

          <p style={s.subtitle}>
            Six-month renewals, new federal work requirements and other
            eligibility changes are coming. Here is what the rules actually
            mean — in plain English.
          </p>

          <div style={s.meta}>
            RuKonnected Insights • Last reviewed October 5, 2026 • 10 minute read
          </div>
        </div>
      </section>

      <article style={s.article}>
        <Link to="/insights" style={s.back}>
          ← Back to RuKonnected Insights
        </Link>

        <img
          src="/images/virginia-medicaid-changes-2027.png"
          alt="Virginia Medicaid changes for 2027 and what Virginia families need to know"
          style={s.image}
        />

        {/* 60 SECOND VERSION */}
        <div style={s.blueBox}>
          <div style={s.label}>The 60-Second Version</div>

          <h2
            style={{
              ...s.h2,
              margin: "10px 0 15px",
              fontSize: "28px",
            }}
          >
            Yes, Virginia Medicaid is changing. No, Medicaid is not ending.
          </h2>

          <p style={{ ...s.p, marginBottom: "12px" }}>
            Beginning January 1, 2027, certain Virginia Medicaid Expansion
            adults will face new federal work or community-engagement
            requirements.
          </p>

          <p style={{ ...s.p, marginBottom: "12px" }}>
            Medicaid Expansion eligibility will also generally be reviewed
            every six months instead of every 12 months.
          </p>

          <p style={{ ...s.p, marginBottom: 0 }}>
            <strong>But these rules do not apply to everyone.</strong> There
            are exclusions, exceptions and several different ways some members
            may satisfy the new requirements.
          </p>
        </div>

        <p style={s.lead}>
          If you receive Virginia Medicaid — or have a parent, adult child,
          employee or friend who does — the headlines alone don't tell you
          enough.
        </p>

        <p style={s.p}>
          The questions that matter are: Does this apply to me? What counts as
          work? What if I work part-time? What if I'm self-employed, attending
          school, caring for someone or unable to work? And what happens when
          my renewal comes around?
        </p>

        <p style={s.p}>
          This RuKonnected guide breaks down the current Virginia guidance so
          you know what questions to ask and where to get official help.
        </p>

        {/* WHO */}
        <h2 style={s.h2}>First: Does the New Work Requirement Apply to You?</h2>

        <p style={s.p}>
          The new federal requirement is aimed at certain adults enrolled
          through Virginia's Medicaid Expansion program. It does not mean that
          every person receiving Medicaid must work 80 hours each month.
        </p>

        <div style={s.box}>
          <div style={s.label}>Start Here</div>

          <h3 style={{ ...s.h3, marginTop: "10px" }}>
            You may be affected if you are:
          </h3>

          <ul style={s.list}>
            <li>Between ages 19 and 64;</li>
            <li>Enrolled through Virginia Medicaid Expansion; and</li>
            <li>
              Not covered by one of the exclusions or exceptions provided
              under the new requirements.
            </li>
          </ul>

          <p style={{ ...s.p, marginBottom: 0 }}>
            Your individual Medicaid eligibility category matters. If you
            aren't sure whether you're an Expansion member, don't guess —
            verify it with Virginia Medicaid.
          </p>
        </div>

        {/* 80 HOURS */}
        <h2 style={s.h2}>
          “80 Hours” Does Not Necessarily Mean 80 Hours at One Job
        </h2>

        <p style={s.p}>
          This is one of the most important details to understand.
        </p>

        <p style={s.p}>
          Virginia's current guidance describes multiple ways affected
          Expansion members may satisfy the federal requirement. Qualifying
          activities may include paid employment, self-employment, certain
          unpaid work, community service, job or workforce training, education
          and combinations of qualifying activities.
        </p>

        <div style={s.box}>
          <div style={s.label}>Examples of Qualifying Activities</div>

          <ul style={s.list}>
            <li>Paid employment</li>
            <li>Self-employment</li>
            <li>Certain unpaid or in-kind work</li>
            <li>Community service or volunteering</li>
            <li>Job or workforce training programs</li>
            <li>Attending school at least half-time</li>
            <li>Combinations of qualifying activities</li>
          </ul>
        </div>

        <p style={s.p}>
          In other words, someone should not automatically assume that the
          phrase “work requirement” means working 80 paid hours for a single
          employer.
        </p>

        {/* INCOME */}
        <h2 style={s.h2}>There Is Also an Income Pathway</h2>

        <p style={s.p}>
          Virginia Medicaid's current guidance says an affected member may
          satisfy the requirement by having at least{" "}
          <strong>$580 in qualifying monthly household income</strong> or by
          completing at least 80 hours of qualifying activities.
        </p>

        <p style={s.p}>
          Depending on the circumstances, household income may include more
          than wages from one job. Virginia's guidance also addresses issues
          such as spouse income, certain other income and seasonal work.
        </p>

        <div style={s.goldBox}>
          <strong style={{ color: "#744b00", fontSize: "20px" }}>
            Don't use the $580 figure as a do-it-yourself eligibility test.
          </strong>

          <p style={{ ...s.p, marginTop: "10px", marginBottom: 0 }}>
            Medicaid eligibility involves more than one rule. Use this
            information to understand the change, but verify your individual
            situation with Virginia Medicaid.
          </p>
        </div>

        {/* EXEMPTIONS */}
        <h2 style={s.h2}>Who May Be Excluded or Exempt?</h2>

        <p style={s.p}>
          Another reason the headline “Medicaid now has a work requirement”
          can be misleading is that exclusions and exceptions exist.
        </p>

        <p style={s.p}>
          Virginia's current guidance identifies several groups that may not
          have to meet the new requirement, depending on their circumstances.
          These include certain:
        </p>

        <ul style={s.list}>
          <li>Pregnant and postpartum individuals;</li>
          <li>
            Parents or caregivers responsible for certain children or people
            with disabilities;
          </li>
          <li>People with qualifying disabilities or medical needs;</li>
          <li>Members of federally recognized tribes;</li>
          <li>Certain veterans with qualifying VA disability status;</li>
          <li>
            People who are incarcerated or recently released in certain
            circumstances; and
          </li>
          <li>Other individuals who meet a federal or state exception.</li>
        </ul>

        <p style={s.p}>
          The details matter. Two people who both receive Medicaid can have
          very different requirements based on their eligibility category and
          circumstances.
        </p>

        {/* REAL QUESTIONS */}
        <h2 style={s.h2}>What If...? Real Questions Virginians May Have</h2>

        <div style={s.scenario}>
          <h3 style={{ ...s.h3, marginTop: 0 }}>
            What if I only work part-time?
          </h3>

          <p style={{ ...s.p, marginBottom: 0 }}>
            Part-time work does not automatically mean you fail the
            requirement. Virginia's guidance provides different pathways,
            including qualifying income and combinations of approved
            activities. Your specific circumstances determine what applies.
          </p>
        </div>

        <div style={s.scenario}>
          <h3 style={{ ...s.h3, marginTop: 0 }}>
            What if I'm self-employed?
          </h3>

          <p style={{ ...s.p, marginBottom: 0 }}>
            Self-employment is included among qualifying work activities in
            Virginia's current guidance. Documentation requirements may still
            apply.
          </p>
        </div>

        <div style={s.scenario}>
          <h3 style={{ ...s.h3, marginTop: 0 }}>
            What if I'm attending school?
          </h3>

          <p style={{ ...s.p, marginBottom: 0 }}>
            Virginia's current guidance says attending school at least
            half-time may satisfy the activity requirement.
          </p>
        </div>

        <div style={s.scenario}>
          <h3 style={{ ...s.h3, marginTop: 0 }}>
            What if I'm caring for my child or someone with a disability?
          </h3>

          <p style={{ ...s.p, marginBottom: 0 }}>
            Certain parents and caregivers may qualify for an exclusion or
            exception. Because age and caregiving circumstances matter, verify
            your specific situation with Virginia Medicaid.
          </p>
        </div>

        <div style={s.scenario}>
          <h3 style={{ ...s.h3, marginTop: 0 }}>
            What if I'm pregnant?
          </h3>

          <p style={{ ...s.p, marginBottom: 0 }}>
            Virginia's current guidance identifies pregnant individuals and
            certain people within the postpartum period among populations that
            may be excluded from the new requirement.
          </p>
        </div>

        <div style={s.scenario}>
          <h3 style={{ ...s.h3, marginTop: 0 }}>
            What if I lose my job?
          </h3>

          <p style={{ ...s.p, marginBottom: 0 }}>
            Don't automatically assume you've lost Medicaid. Report the change
            and find out how your new circumstances affect your eligibility,
            activity requirement or possible exception.
          </p>
        </div>

        {/* SIX MONTHS */}
        <h2 style={s.h2}>What Does a Six-Month Renewal Actually Mean?</h2>

        <p style={s.p}>
          Beginning January 1, 2027, Medicaid Expansion eligibility periods
          generally become six months rather than 12 months.
        </p>

        <p style={s.p}>
          For current Expansion members, Virginia says the transition
          generally occurs beginning with the member's first applicable
          renewal in 2027.
        </p>

        <div style={s.blueBox}>
          <div style={s.label}>A Simple Example</div>

          <h3 style={{ ...s.h3, marginTop: "10px" }}>Meet James</h3>

          <p style={s.p}>
            James receives coverage through Virginia Medicaid Expansion. His
            eligibility is renewed in February 2027.
          </p>

          <p style={{ ...s.p, marginBottom: 0 }}>
            Under the new six-month eligibility period, instead of assuming he
            won't deal with renewal again until February 2028, James needs to
            pay attention to another eligibility review much sooner.
          </p>
        </div>

        <p style={s.p}>
          That's why keeping your mailing address, telephone number and email
          current becomes even more important.
        </p>

        {/* RETROACTIVE */}
        <h2 style={s.h2}>Another Change You May Not Have Heard About</h2>

        <p style={s.p}>
          The new federal rules also change retroactive Medicaid coverage.
        </p>

        <p style={s.p}>
          Beginning January 1, 2027, Virginia says retroactive coverage will
          generally be limited to <strong>one month for Medicaid Expansion</strong>{" "}
          and <strong>two months for other Medicaid eligibility groups</strong>,
          when applicable.
        </p>

        <p style={s.p}>
          This matters because retroactive Medicaid can help cover qualifying
          medical expenses incurred before an application is completed.
          Shortening that period makes timely applications and renewals even
          more important.
        </p>

        {/* ACTION PLAN */}
        <div style={s.darkBox}>
          <div
            style={{
              ...s.label,
              color: "#8dd7ff",
            }}
          >
            RuKonnected Action Checklist
          </div>

          <h2
            style={{
              color: "#fff",
              fontSize: "32px",
              margin: "10px 0 20px",
            }}
          >
            7 Things You Can Do Before 2027
          </h2>

          <ol
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              color: "#d6e6f4",
              paddingLeft: "25px",
            }}
          >
            <li>
              Make sure Medicaid has your current mailing address, phone number
              and email.
            </li>

            <li>
              Find out whether your coverage is through Medicaid Expansion.
            </li>

            <li>Know your next renewal date.</li>

            <li>
              Read every Medicaid notice you receive — especially during 2027.
            </li>

            <li>
              Find out whether the new work/community-engagement requirement
              applies to you.
            </li>

            <li>
              If you believe you qualify for an exception, find out what
              information or documentation may be required.
            </li>

            <li>
              Ask for help before a deadline passes if you don't understand a
              notice.
            </li>
          </ol>
        </div>

        {/* FAQ */}
        <h2 style={s.h2}>Frequently Asked Questions</h2>

        <div style={s.scenario}>
          <h3 style={{ ...s.h3, marginTop: 0 }}>
            Is Virginia Medicaid ending in 2027?
          </h3>
          <p style={{ ...s.p, marginBottom: 0 }}>
            No. Virginia Medicaid is not ending. Certain eligibility,
            participation and renewal requirements are changing.
          </p>
        </div>

        <div style={s.scenario}>
          <h3 style={{ ...s.h3, marginTop: 0 }}>
            Does every Medicaid member have to work 80 hours?
          </h3>
          <p style={{ ...s.p, marginBottom: 0 }}>
            No. The new requirement applies to certain Medicaid Expansion
            adults. There are exclusions and exceptions, and qualifying
            activities can include more than paid employment.
          </p>
        </div>

        <div style={s.scenario}>
          <h3 style={{ ...s.h3, marginTop: 0 }}>
            Does everyone have to renew Medicaid every six months?
          </h3>
          <p style={{ ...s.p, marginBottom: 0 }}>
            No. The six-month eligibility period applies primarily to Medicaid
            Expansion members under the new federal rules. Other Medicaid
            populations may have different renewal requirements.
          </p>
        </div>

        <div style={s.scenario}>
          <h3 style={{ ...s.h3, marginTop: 0 }}>
            What should I do if I don't understand a Medicaid notice?
          </h3>
          <p style={{ ...s.p, marginBottom: 0 }}>
            Contact Cover Virginia or your local Department of Social Services.
            Don't ignore a notice simply because you're unsure what it means.
          </p>
        </div>

        {/* OFFICIAL HELP */}
        <div style={s.darkBox}>
          <h2
            style={{
              color: "#fff",
              fontSize: "30px",
              marginTop: 0,
            }}
          >
            Get Information From the Source
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.75,
              color: "#d6e6f4",
            }}
          >
            For questions about your individual coverage, eligibility,
            renewal or whether an exception applies, contact:
          </p>

          <p
            style={{
              fontSize: "22px",
              color: "#fff",
              fontWeight: 900,
            }}
          >
            Cover Virginia: 1-855-242-8282
          </p>

          <p
            style={{
              color: "#d6e6f4",
              fontSize: "17px",
            }}
          >
            TTY: 1-888-221-1590
          </p>

          <p>
            <a
              href="https://www.dmas.virginia.gov/news-updates/new-federal-requirements/"
              target="_blank"
              rel="noopener noreferrer"
              style={s.sourceLink}
            >
              Virginia Medicaid — New Federal Requirements →
            </a>
          </p>

          <p>
            <a
              href="https://www.dmas.virginia.gov/news-updates/new-federal-requirements/federal-work-requirements/"
              target="_blank"
              rel="noopener noreferrer"
              style={s.sourceLink}
            >
              Virginia Medicaid — Federal Work Requirements →
            </a>
          </p>

          <p>
            <a
              href="https://www.dmas.virginia.gov/news-updates/new-federal-requirements/six-month-eligibility-renewals-for-certain-adults/"
              target="_blank"
              rel="noopener noreferrer"
              style={s.sourceLink}
            >
              Virginia Medicaid — Six-Month Renewals →
            </a>
          </p>
        </div>

        {/* END */}
        <h2 style={s.h2}>The Bottom Line</h2>

        <p style={s.p}>
          The biggest mistake Virginia Medicaid members can make is assuming
          that every headline applies to everyone — or assuming that nothing
          has changed.
        </p>

        <p style={s.p}>
          The rules are changing, but your individual situation matters.
          Understand which Medicaid program you're enrolled in, keep your
          information current, read your notices and ask questions before a
          deadline passes.
        </p>

        <p style={s.p}>
          That's the purpose of RuKonnected Insights: taking complicated
          healthcare information and helping Virginia families understand what
          it could mean in everyday life.
        </p>

        <Link
          to="/insights"
          style={{
            display: "inline-block",
            background: "#0b73b8",
            color: "#fff",
            padding: "15px 25px",
            borderRadius: "10px",
            fontWeight: 800,
            textDecoration: "none",
            marginTop: "10px",
          }}
        >
          Explore More RuKonnected Insights →
        </Link>

        <p style={s.disclaimer}>
          <strong>Important:</strong> This article is for general educational
          purposes and is not legal advice, medical advice or an individual
          Medicaid eligibility determination. Federal and Virginia Medicaid
          guidance may change as implementation continues. Always verify
          information affecting your coverage with Virginia Medicaid, Cover
          Virginia or your local Department of Social Services.
        </p>
      </article>
    </main>
  );
}