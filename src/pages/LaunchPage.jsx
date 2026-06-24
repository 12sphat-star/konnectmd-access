import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const tableCell = {
  padding: "16px 18px",
  borderBottom: "1px solid #e2e8f0",
  color: "#475569",
  lineHeight: 1.5,
};

const tableCellStrong = {
  ...tableCell,
  fontWeight: 900,
  color: "#020617",
};

export default function LaunchPage() {
  return (
    <main style={{ background: "#020617", color: "white", overflow: "hidden" }}>
      <SEO
        title="Veterans Healthcare Access | Telehealth & Family Support | KonnectMD"
        description="Healthcare access support for veterans and military families including telehealth, mental health support, prescription savings, family healthcare options, and wellness services nationwide."
        path="/launch"
      />

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }

        .launch-hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 50px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 110px 24px 70px;
          position: relative;
          z-index: 2;
        }

        .launch-title {
          font-size: clamp(42px, 6vw, 82px);
          line-height: 1.02;
          font-weight: 900;
          letter-spacing: -2px;
          margin: 0;
        }

        .launch-image {
          width: 100%;
          max-width: 650px;
          animation: float 6s ease-in-out infinite;
          filter: drop-shadow(0 0 60px rgba(34, 211, 238, 0.45));
        }

        .launch-btn {
          display: inline-block;
          background: #22d3ee;
          color: #020617;
          padding: 18px 28px;
          border-radius: 18px;
          font-weight: 900;
          text-decoration: none;
          box-shadow: 0 20px 60px rgba(34, 211, 238, 0.3);
        }

        .launch-btn:hover {
          background: white;
          transform: scale(1.04);
        }

        .launch-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 45px;
        }

        .launch-card {
          background: #f8fafc;
          color: #020617;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .faq-card {
          background: #0b1f36;
          border: 1px solid rgba(103,232,249,.16);
          border-radius: 18px;
          padding: 22px;
          text-align: left;
        }

        .mobile-sticky {
          display: none;
        }

        @media (max-width: 900px) {
          .launch-hero {
            grid-template-columns: 1fr;
            padding: 55px 18px 40px;
            text-align: center;
            gap: 28px;
            min-height: auto;
          }

          .launch-title {
            font-size: 38px;
            line-height: 1.05;
            letter-spacing: -1px;
          }

          .launch-hero p {
            font-size: 17px !important;
            line-height: 1.45 !important;
          }

          .launch-tags,
          .launch-actions {
            justify-content: center;
          }

          .launch-actions {
            flex-direction: column;
          }

          .launch-btn {
            width: 100%;
            box-sizing: border-box;
            text-align: center;
          }

          .launch-image {
            max-width: 360px;
            margin-top: -10px;
          }

          .launch-grid {
            grid-template-columns: 1fr;
          }

          .mobile-sticky {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 9999;
            padding: 12px;
            background: rgba(2, 6, 23, 0.88);
            backdrop-filter: blur(10px);
          }

          main {
            padding-bottom: 82px;
          }
        }
      `}</style>

      <section style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(6,182,212,.35), transparent 35%), radial-gradient(circle at bottom left, rgba(37,99,235,.35), transparent 35%)",
          }}
        />

        <div className="launch-hero">
          <div>
            <div
              style={{
                display: "inline-block",
                border: "1px solid rgba(34,211,238,.35)",
                background: "rgba(34,211,238,.12)",
                color: "#a5f3fc",
                padding: "10px 18px",
                borderRadius: "999px",
                fontWeight: 900,
                marginBottom: 24,
              }}
            >
              Veterans • Military Families • Nationwide Access
            </div>

            <h1 className="launch-title">
              Veterans & Military Families
              <span style={{ display: "block" }}>Deserve Better</span>
              <span style={{ display: "block", color: "#67e8f9" }}>
                Healthcare Access.
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2vw, 24px)",
                color: "#cbd5e1",
                lineHeight: 1.6,
                marginTop: 24,
                maxWidth: 650,
              }}
            >
              KonnectMD Access helps veterans, military families, individuals,
              entrepreneurs, and households explore healthcare access options
              including telehealth, mental health support, prescription savings,
              family membership options, and wellness services.
            </p>

            <p
              style={{
                color: "#93c5fd",
                fontWeight: 800,
                fontSize: 18,
                marginTop: 16,
              }}
            >
              Available nationwide throughout the United States and U.S. territories.
            </p>

            <div
              className="launch-tags"
              style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}
            >
              {[
                "Telehealth",
                "Mental Health Support",
                "Prescription Savings",
                "Family Options",
                "Veteran-Friendly Access",
                "Nationwide",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    border: "1px solid rgba(103,232,249,.25)",
                    background: "rgba(34,211,238,.12)",
                    color: "#cffafe",
                    padding: "10px 14px",
                    borderRadius: "999px",
                    fontWeight: 700,
                  }}
                >
                  ✔ {tag}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: 30,
                border: "1px solid rgba(250,204,21,.25)",
                background: "rgba(250,204,21,.10)",
                color: "#fef08a",
                padding: 20,
                borderRadius: 24,
                maxWidth: 650,
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              KonnectMD Access does not replace VA benefits or health insurance.
              It is a healthcare access and savings membership that may help
              complement existing options.
            </div>

            <div
              className="launch-actions"
              style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 34 }}
            >
              <a
                className="launch-btn"
                href="https://konnectmdnow.com/"
                target="_blank"
                rel="noreferrer"
              >
                Explore Membership Options
              </a>

              <Link
                to="/book-call"
                style={{
                  display: "inline-block",
                  color: "white",
                  padding: "18px 28px",
                  borderRadius: 18,
                  fontWeight: 800,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,.18)",
                  background: "rgba(255,255,255,.06)",
                }}
              >
                Book a 30-Minute Call
              </Link>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
           <img
  src="/images/veterans-healthcare-access-hero.png"
  alt="Veterans and military families exploring healthcare access and telehealth support"
  className="launch-image"
/>
          </div>
        </div>
      </section>
<section style={{ background: "#020617", padding: "80px 24px" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <p style={{ color: "#67e8f9", fontWeight: 900, letterSpacing: 1 }}>
      WHY THIS MATTERS
    </p>

    <h2 style={{ fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.05 }}>
      Veterans and military families often need healthcare access that moves with real life.
    </h2>

    <p style={{ color: "#cbd5e1", fontSize: 19, lineHeight: 1.7, maxWidth: 850 }}>
      Military life, veteran transitions, family responsibilities, PCS moves, long appointment wait times,
      prescription costs, and mental health needs can all create pressure. KonnectMD Access helps veterans,
      military spouses, and families explore healthcare access options that may complement existing benefits.
    </p>

    <div className="launch-grid">
      {[
        "Mental health and emotional wellness support",
        "Virtual urgent care for common non-emergency needs",
        "Prescription savings for everyday medications",
        "Family healthcare membership options",
        "Support for military spouses and households",
        "Nationwide access for families who move or travel",
      ].map((item) => (
        <div className="launch-card" key={item}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>⭐</div>
          <h3 style={{ margin: 0, fontSize: 22 }}>{item}</h3>
        </div>
      ))}
    </div>
  </div>
</section>
      <section
        style={{
          background: "#0f172a",
          borderTop: "1px solid rgba(255,255,255,.1)",
          borderBottom: "1px solid rgba(255,255,255,.1)",
          padding: "34px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#94a3b8",
            letterSpacing: "4px",
            fontSize: 12,
            fontWeight: 800,
          }}
        >
          VETERANS • MILITARY FAMILIES • TELEHEALTH • MENTAL HEALTH SUPPORT
        </p>

        <h3 style={{ fontSize: 24, marginTop: 18 }}>
          24/7 ACCESS • NATIONWIDE • PRESCRIPTION SAVINGS • FAMILY OPTIONS
        </h3>
      </section>

      <section style={{ background: "white", color: "#020617", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.05, margin: 0 }}>
            Healthcare access support
            <span style={{ display: "block", color: "#0891b2" }}>
              for veterans and military families.
            </span>
          </h2>

          <p style={{ color: "#475569", fontSize: 19, maxWidth: 780, margin: "18px auto 0" }}>
            Hampton Roads is home to one of the strongest military and veteran
            communities in the country. From Norfolk and Virginia Beach to
            Chesapeake, Portsmouth, Hampton, Newport News, and Suffolk, families
            are looking for practical healthcare access that works with modern life.
          </p>

          <div className="launch-grid">
            {[
              "Virtual Urgent Care",
              "Mental Health Support",
              "Prescription Savings",
              "Family Healthcare Options",
              "Small Business Friendly",
              "Nationwide Access",
            ].map((item) => (
              <div className="launch-card" key={item}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>✅</div>
                <h3 style={{ margin: 0, fontSize: 22 }}>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
<section style={{ background: "white", color: "#020617", padding: "80px 24px" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <p
      style={{
        color: "#0891b2",
        fontWeight: 900,
        letterSpacing: 1,
      }}
    >
      HAMPTON ROADS VETERANS
    </p>

    <h2
      style={{
        fontSize: "clamp(34px, 5vw, 56px)",
        lineHeight: 1.05,
        marginBottom: 24,
      }}
    >
      Serving one of America's largest military communities.
    </h2>

    <p
      style={{
        fontSize: 19,
        color: "#475569",
        lineHeight: 1.8,
        maxWidth: 950,
      }}
    >
      Hampton Roads is home to one of the largest military and veteran
      populations in the United States. From Naval Station Norfolk and Joint
      Base Langley-Eustis to NAS Oceana, Little Creek, Portsmouth Naval Medical
      Center, and the Coast Guard community, thousands of active-duty military,
      veterans, retirees, reservists, and military families call this region
      home.
    </p>

    <p
      style={{
        fontSize: 19,
        color: "#475569",
        lineHeight: 1.8,
        marginTop: 24,
      }}
    >
      Whether you live in Norfolk, Virginia Beach, Chesapeake, Portsmouth,
      Hampton, Newport News, or Suffolk, healthcare access remains an important
      concern for many military households. KonnectMD Access is available
      nationwide while maintaining a strong focus on serving the Hampton Roads
      community.
    </p>

    <div
      style={{
        marginTop: 40,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: 20,
      }}
    >
      {[
        "Norfolk Veterans",
        "Virginia Beach Military Families",
        "Chesapeake Veterans",
        "Portsmouth Military Community",
        "Hampton Veterans",
        "Newport News Military Families",
        "Suffolk Veterans",
        "Nationwide Access",
      ].map((item) => (
        <div
          key={item}
          style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: 18,
            padding: 20,
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  </div>

</section>
<section style={{ background: "#f8fafc", color: "#020617", padding: "80px 24px" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <p style={{ color: "#0891b2", fontWeight: 900, letterSpacing: 1 }}>
      VETERAN RESOURCES
    </p>

    <h2 style={{ fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.05 }}>
      Important resources veterans and military families should know.
    </h2>

    <p style={{ color: "#475569", fontSize: 19, lineHeight: 1.8, maxWidth: 900 }}>
      KonnectMD Access may help complement existing healthcare access options,
      but veterans and military families should also know where to turn for VA
      benefits, crisis support, counseling, and community-based resources.
    </p>

    <div className="launch-grid">
      {[
        [
          "Veterans Crisis Line",
          "For immediate crisis support, dial 988 and press 1. Veterans, service members, and loved ones can also text 838255 or chat online through the Veterans Crisis Line.",
        ],
        [
          "Vet Centers",
          "VA Vet Centers provide community-based counseling and outreach for eligible veterans, service members, National Guard and Reserve members, and qualifying family members.",
        ],
        [
          "VA Mental Health Services",
          "The VA provides mental health services for eligible veterans, including counseling, treatment, crisis support, and connections to local resources.",
        ],
        [
          "Hampton Roads Support",
          "Veterans and military families in Norfolk, Virginia Beach, Chesapeake, Portsmouth, Hampton, Newport News, and Suffolk may have access to both VA and community-based support options.",
        ],
        [
          "When KonnectMD May Help",
          "KonnectMD Access may help with non-emergency telehealth, prescription savings, family healthcare access, and wellness-related support depending on the membership selected.",
        ],
        [
          "When To Seek Emergency Help",
          "If someone is in immediate danger, at risk of self-harm, experiencing a medical emergency, chest pain, severe bleeding, or trouble breathing, call 911 immediately.",
        ],
      ].map(([title, text]) => (
        <div className="launch-card" key={title}>
          <h3 style={{ marginTop: 0, fontSize: 22 }}>{title}</h3>
          <p style={{ color: "#475569", lineHeight: 1.7, marginBottom: 0 }}>
            {text}
          </p>
        </div>
      ))}
    </div>

    <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6, marginTop: 28 }}>
      Source references: Veterans Crisis Line, VA Vet Centers, VA Mental Health
      Services, and official VA public information. KonnectMD Access is not
      affiliated with or endorsed by the U.S. Department of Veterans Affairs.
    </p>
  </div>
  <section
  style={{
    background: "#071426",
    color: "#fff",
    padding: "80px 24px",
  }}
>
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
    <p
      style={{
        color: "#93c5fd",
        fontWeight: 900,
        letterSpacing: "0.12em",
      }}
    >
      TELEHEALTH GUIDE
    </p>

    <h2
      style={{
        fontSize: "clamp(34px, 5vw, 56px)",
        lineHeight: 1.05,
      }}
    >
      What telehealth can and cannot help with.
    </h2>

    <p
      style={{
        color: "#cbd5e1",
        fontSize: "18px",
        lineHeight: 1.8,
        maxWidth: "900px",
      }}
    >
      Many veterans and military families are interested in telehealth because it
      may reduce travel, shorten wait times, and make healthcare access more
      convenient for non-emergency situations.
    </p>

    <div className="launch-grid">
      <div className="launch-card">
        <h3>✓ Conditions Telehealth May Help Treat</h3>

        <ul style={{ lineHeight: 2 }}>
          <li>Sinus infections</li>
          <li>Allergies</li>
          <li>Cold and flu symptoms</li>
          <li>Minor skin conditions</li>
          <li>Pink eye</li>
          <li>Medication refill requests</li>
          <li>Minor digestive issues</li>
          <li>Behavioral health support</li>
        </ul>
      </div>

      <div className="launch-card">
        <h3>✕ Conditions That Require Immediate Medical Care</h3>

        <ul style={{ lineHeight: 2 }}>
          <li>Chest pain</li>
          <li>Stroke symptoms</li>
          <li>Severe bleeding</li>
          <li>Trouble breathing</li>
          <li>Major injuries</li>
          <li>Loss of consciousness</li>
          <li>Suicidal emergencies</li>
          <li>Life-threatening conditions</li>
        </ul>
      </div>
    </div>

    <p
      style={{
        color: "#94a3b8",
        fontSize: "14px",
        marginTop: "24px",
      }}
    >
      Emergency situations require 911, emergency medical services, or
      appropriate emergency care. KonnectMD Access is not emergency medical
      care.
    </p>
  </div>
</section>
<section
  style={{
    background: "#ffffff",
    color: "#020617",
    padding: "70px 24px 20px",
  }}
>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <p style={{ color: "#0891b2", fontWeight: 900, letterSpacing: "0.12em" }}>
      WHY KONNECTMD ACCESS MATTERS
    </p>

    <h2 style={{ fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.05 }}>
      The gap is not always emergency care. Sometimes the gap is everyday access.
    </h2>

    <p style={{ color: "#475569", fontSize: 19, lineHeight: 1.8, maxWidth: 900 }}>
      Many families do not need the emergency room for every health concern, but
      they still need a way to speak with a licensed provider, ask questions,
      explore next steps, and avoid unnecessary delays. KonnectMD Access is
      designed for those non-emergency moments when people need practical access
      to care, prescription savings, mental health support, and family healthcare
      options.
    </p>

    <div className="launch-grid">
      {[
        "When you need care after hours",
        "When the issue is not serious enough for the ER",
        "When you want to avoid unnecessary urgent care visits",
        "When prescription costs are becoming a burden",
        "When your family needs easier access to support",
        "When you want healthcare options outside traditional insurance"
      ].map((item) => (
        <div className="launch-card" key={item}>
          <h3 style={{ margin: 0 }}>{item}</h3>
        </div>
      ))}
    </div>
  </div>
</section>
<section
  style={{
    background: "#f8fafc",
    color: "#020617",
    padding: "80px 24px",
  }}
>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <p
      style={{
        color: "#0891b2",
        fontWeight: 900,
        letterSpacing: "0.12em",
      }}
    >
      CARE DECISION GUIDE
    </p>

    <h2
      style={{
        fontSize: "clamp(34px, 5vw, 56px)",
        lineHeight: 1.05,
        marginBottom: 24,
      }}
    >
      Telehealth vs urgent care vs the emergency room.
    </h2>

    <p
      style={{
        color: "#475569",
        fontSize: 19,
        lineHeight: 1.8,
        maxWidth: 900,
        marginBottom: 40,
      }}
    >
      Not every healthcare situation requires the same level of care. Understanding
      where to go can help veterans, military families, and households save time
      while getting the right level of support.
    </p>

    <div
      style={{
        overflowX: "auto",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: 24,
        boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: "760px",
        }}
      >
        <thead>
          <tr style={{ background: "#0f172a", color: "#ffffff" }}>
            {[
              "Healthcare Need",
              "Telehealth",
              "Urgent Care",
              "Emergency Room",
            ].map((head) => (
              <th
                key={head}
                style={{
                  padding: "18px",
                  textAlign: "left",
                  fontSize: 15,
                  fontWeight: 900,
                  borderBottom: "1px solid #334155",
                }}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {[
            ["Minor illness", "Often appropriate", "Appropriate", "Usually not needed"],
            ["Prescription questions", "Often appropriate", "Appropriate", "Usually not needed"],
            ["Mental health support", "May be appropriate", "Limited", "For crisis situations"],
            ["Minor injuries", "Not ideal", "Often appropriate", "Sometimes needed"],
            ["Major injuries", "Not appropriate", "Not appropriate", "Appropriate"],
            ["Chest pain", "Not appropriate", "Not appropriate", "Call 911 / ER"],
            ["Stroke symptoms", "Not appropriate", "Not appropriate", "Call 911 / ER"],
            ["Trouble breathing", "Not appropriate", "Not appropriate", "Call 911 / ER"],
          ].map(([need, telehealth, urgentCare, er]) => (
            <tr key={need}>
              <td style={tableCellStrong}>{need}</td>
              <td style={tableCell}>{telehealth}</td>
              <td style={tableCell}>{urgentCare}</td>
              <td style={tableCell}>{er}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div
      style={{
        marginTop: 34,
        background: "#020617",
        color: "#ffffff",
        borderRadius: 22,
        padding: 28,
      }}
    >
      <h3 style={{ marginTop: 0, color: "#67e8f9", fontSize: 24 }}>
        Important safety reminder
      </h3>

      <p style={{ color: "#cbd5e1", lineHeight: 1.7, marginBottom: 0 }}>
        Telehealth is designed for non-emergency healthcare situations. Chest
        pain, stroke symptoms, severe bleeding, trouble breathing, suicidal
        emergencies, major injuries, and life-threatening symptoms require
        immediate emergency care or calling 911.
      </p>
    </div>
  </div>
</section>
</section>
      <section style={{ background: "#020617", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#67e8f9", fontWeight: 900, letterSpacing: 1 }}>
            COMMON QUESTIONS
          </p>

          <h2 style={{ fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.05 }}>
            Veterans healthcare access questions people ask.
          </h2>

          <div className="launch-grid">
            {[
              [
                "Does KonnectMD replace VA benefits?",
                "No. KonnectMD Access does not replace VA benefits, health insurance, TRICARE, or emergency care. It is a healthcare access and savings membership that may complement existing options.",
              ],
              [
                "Can military families use KonnectMD?",
                "Yes. KonnectMD Access may help military families explore virtual urgent care, mental health support, prescription savings, and family healthcare access options depending on the membership selected.",
              ],
              [
                "Is mental health support available?",
                "Depending on the membership level, KonnectMD Access may include access to mental health and emotional wellness support services.",
              ],
              [
                "Can veterans use telehealth?",
                "Yes. Telehealth can be useful for many common non-emergency healthcare concerns and may help people access support without always starting in a waiting room.",
              ],
              [
                "Is this only for Hampton Roads?",
                "No. KonnectMD Access is available nationwide throughout the United States and U.S. territories, while building a strong local presence in Hampton Roads.",
              ],
              [
                "Can families be included?",
                "Depending on the membership selected, household and family membership options may be available.",
              ],
              [
  "Can veterans use KonnectMD Access?",
  "Yes. Veterans, military families, spouses, and households can explore KonnectMD Access membership options and healthcare access resources available nationwide.",
],
[
  "Does KonnectMD Access replace VA benefits?",
  "No. KonnectMD Access does not replace VA benefits, TRICARE, health insurance, or emergency care. It may complement existing healthcare resources for non-emergency access, savings, and support.",
],
[
  "Does KonnectMD Access replace TRICARE?",
  "No. KonnectMD Access is not TRICARE, VA benefits, or health insurance. It is a healthcare access and savings membership.",
],
[
  "Can military spouses use KonnectMD Access?",
  "Yes. Depending on the membership selected, military spouses and family members may be able to access household healthcare support options.",
],
[
  "Can family members be included on one membership?",
  "Depending on the membership selected, family or household options may be available. Review the current membership details to confirm who may be included.",
],
[
  "Is KonnectMD Access health insurance?",
  "No. KonnectMD Access is not health insurance. It is a membership-based healthcare access program that may include telehealth, prescription savings, mental health support, wellness services, and other healthcare-related benefits.",
],
[
  "Can KonnectMD Access be used nationwide?",
  "Yes. KonnectMD Access is available throughout the United States and U.S. territories.",
],
[
  "Can veterans access telehealth through KonnectMD Access?",
  "Depending on the membership selected, veterans and military families may be able to access telehealth services for non-emergency healthcare needs.",
],
[
  "Can KonnectMD Access help with prescription savings?",
  "Depending on the membership selected, prescription savings programs may be available and may help reduce out-of-pocket medication costs.",
],
[
  "When should I use telehealth instead of urgent care?",
  "Telehealth may be appropriate for non-emergency concerns such as allergies, sinus issues, minor illness, medication questions, and other common healthcare needs. Urgent care may be better when an in-person exam or procedure is needed.",
],
[
  "When should I go directly to the emergency room?",
  "Go directly to the emergency room or call 911 for chest pain, stroke symptoms, severe bleeding, trouble breathing, major trauma, loss of consciousness, suicidal emergencies, or life-threatening conditions.",
],
[
  "What should I do if I am experiencing a mental health crisis?",
  "Call or text 988 immediately. Veterans can dial 988 and press 1 for the Veterans Crisis Line. If someone is in immediate danger, call 911.",
],
[
  "Can small business owners offer KonnectMD Access to employees?",
  "Yes. Small business owners, entrepreneurs, and organizations may explore KonnectMD Access as a healthcare access option for employees, contractors, or team members.",
],
[
  "How do I learn which membership option may fit my situation?",
  "You can review the membership options online, request more information, or book a 30-minute call to discuss whether KonnectMD Access may fit your household, business, or family needs.",
],
            ].map(([q, a]) => (
              <div className="faq-card" key={q}>
                <h3 style={{ color: "#93c5fd", marginTop: 0 }}>{q}</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white", color: "#020617", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.05 }}>
            Explore more healthcare access resources.
          </h2>

          <div className="launch-grid">
            {[
              [
  "/mental-health-support-hampton-roads",
  "Mental Health Support"
],
[
  "/insights",
  "Healthcare Access Insights"
],
[
  "/plans",
  "Membership Plans"
],
[
  "/norfolk-telehealth",
  "Telehealth in Norfolk"
],
[
  "/virginia-beach-telehealth",
  "Telehealth in Virginia Beach"
],
[
  "/book-call",
  "Book a Call"
],
[
  "/healthcare-alternatives-hampton-roads",
  "Healthcare Alternatives"
],
[
  "/insights/veteran-mental-health-support-hampton-roads",
  "Veteran Mental Health Support",
],
[
  "/insights/telehealth-for-veterans-hampton-roads",
  "Telehealth for Veterans",
],
[
  "/insights/when-to-use-telehealth-vs-urgent-care-vs-er-hampton-roads",
  "Telehealth vs Urgent Care vs ER"
],
            ].map(([url, label]) => (
              <Link
                key={url}
                to={url}
                className="launch-card"
                style={{ textDecoration: "none" }}
              >
                <h3 style={{ margin: 0 }}>{label}</h3>
              </Link>
            ))}
          </div>

          <div
            style={{
              marginTop: 60,
              background: "#020617",
              color: "white",
              borderRadius: 32,
              padding: "50px 24px",
            }}
          >
            <p style={{ color: "#67e8f9", fontWeight: 900, letterSpacing: 1 }}>
              TAKE THE NEXT STEP
            </p>

            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05 }}>
              Healthcare access should not be confusing.
            </h2>

            <p style={{ color: "#cbd5e1", fontSize: 19, maxWidth: 720, margin: "20px auto" }}>
              Explore how KonnectMD Access may help you, your family, or your
              business access healthcare support in a more practical way.
            </p>

            <a
              className="launch-btn"
              href="https://konnectmdnow.com/"
              target="_blank"
              rel="noreferrer"
            >
              Explore Membership Options
            </a>
          </div>
        </div>
      </section>

      <div className="mobile-sticky">
        <a
          className="launch-btn"
          href="https://konnectmdnow.com/"
          target="_blank"
          rel="noreferrer"
          style={{ width: "100%", textAlign: "center" }}
        >
          Explore Membership Options
        </a>
      </div>
    </main>
  );
}