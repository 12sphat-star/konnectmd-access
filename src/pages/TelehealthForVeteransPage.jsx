import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const colors = {
  bg: "#071426",
  surface: "#0b1f36",
  surfaceDeep: "#0f2744",
  border: "rgba(59,130,246,0.2)",
  borderSubtle: "rgba(255,255,255,0.06)",
  accent: "#2563eb",
  accentLight: "#60a5fa",
  accentMuted: "#93c5fd",
  textPrimary: "#ffffff",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
  textBody: "#cbd5e1",
};

function SectionHeading({ icon, children }) {
  return (
    <h2 style={{
      fontSize: "clamp(24px, 3vw, 32px)",
      fontWeight: 900,
      color: colors.textPrimary,
      marginTop: "54px",
      marginBottom: "16px",
      display: "flex",
      gap: "10px",
      alignItems: "center",
    }}>
      <span>{icon}</span>
      {children}
    </h2>
  );
}

function BodyP({ children }) {
  return (
    <p style={{
      color: colors.textSecondary,
      lineHeight: 1.8,
      marginBottom: "18px",
      fontSize: "17px",
    }}>
      {children}
    </p>
  );
}

function HighlightBox({ children }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(37,99,235,0.04))",
      border: `1px solid ${colors.border}`,
      borderRadius: "18px",
      padding: "24px",
      margin: "30px 0",
      color: colors.textBody,
      lineHeight: 1.7,
    }}>
      {children}
    </div>
  );
}

const tableCell = {
  padding: "16px 18px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  color: colors.textSecondary,
  lineHeight: 1.5,
};

const tableCellStrong = {
  ...tableCell,
  fontWeight: 900,
  color: colors.textPrimary,
};

export default function TelehealthForVeteransPage() {
  return (
    <main style={{ background: colors.bg, color: colors.textPrimary }}>
      <SEO
        title="Telehealth for Veterans in Hampton Roads | KonnectMD Access"
        description="Learn what telehealth may help treat, what requires urgent or emergency care, and how veterans and military families in Hampton Roads can think about healthcare access."
        path="/insights/telehealth-for-veterans-hampton-roads"
      />

      <article style={{ padding: "120px 24px 100px" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{
            color: colors.accentLight,
            fontWeight: 900,
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginBottom: "18px",
          }}>
            Veterans · Telehealth · Hampton Roads
          </p>

          <h1 style={{
            fontSize: "clamp(42px, 7vw, 72px)",
            lineHeight: 0.95,
            fontWeight: 950,
            marginBottom: "28px",
          }}>
            Telehealth for Veterans in Hampton Roads
          </h1>

          <p style={{
            color: colors.textSecondary,
            fontSize: "20px",
            lineHeight: 1.8,
            borderLeft: `3px solid ${colors.accent}`,
            paddingLeft: "20px",
            marginBottom: "48px",
          }}>
            Telehealth can be useful for many non-emergency healthcare concerns,
            but it is not the right choice for every situation. Veterans and
            military families need clear guidance on when virtual care may help,
            when urgent care is better, and when emergency care is required.
          </p>

          <HighlightBox>
            <strong style={{ color: colors.accentMuted }}>Important:</strong>{" "}
            KonnectMD Access is not health insurance, emergency medical care, VA
            benefits, or TRICARE. Emergency situations require calling 911 or
            seeking immediate emergency care.
          </HighlightBox>

          <SectionHeading icon="💻">
            What telehealth may help with.
          </SectionHeading>

          <BodyP>
            Telehealth is often most useful for non-emergency healthcare needs
            where a licensed provider can review symptoms, answer questions,
            discuss next steps, and determine whether additional care is needed.
          </BodyP>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
            marginTop: "24px",
          }}>
            {[
              "Sinus symptoms",
              "Allergies",
              "Cold and flu symptoms",
              "Pink eye",
              "Minor skin concerns",
              "Medication questions",
              "Minor digestive issues",
              "Behavioral health support",
            ].map((item) => (
              <div key={item} style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: "16px",
                padding: "18px",
                fontWeight: 800,
              }}>
                ✓ {item}
              </div>
            ))}
          </div>

          <SectionHeading icon="🚨">
            What telehealth should not be used for.
          </SectionHeading>

          <BodyP>
            Telehealth is not appropriate for emergencies or symptoms that may
            indicate a life-threatening condition. In those cases, the safest
            next step is immediate emergency care.
          </BodyP>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
            marginTop: "24px",
          }}>
            {[
              "Chest pain",
              "Stroke symptoms",
              "Severe bleeding",
              "Trouble breathing",
              "Major injuries",
              "Loss of consciousness",
              "Suicidal emergencies",
              "Life-threatening symptoms",
            ].map((item) => (
              <div key={item} style={{
                background: "#1f2937",
                border: "1px solid rgba(248,113,113,0.35)",
                borderRadius: "16px",
                padding: "18px",
                fontWeight: 800,
              }}>
                ✕ {item}
              </div>
            ))}
          </div>

          <SectionHeading icon="📊">
            Telehealth vs urgent care vs emergency room.
          </SectionHeading>

          <BodyP>
            Choosing the right level of care may help save time, reduce
            confusion, and protect emergency resources for true emergencies.
          </BodyP>

          <div style={{
            overflowX: "auto",
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: "22px",
            marginTop: "26px",
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "760px" }}>
              <thead>
                <tr style={{ background: "#020617" }}>
                  {["Healthcare Need", "Telehealth", "Urgent Care", "Emergency Room"].map((head) => (
                    <th key={head} style={{
                      padding: "18px",
                      textAlign: "left",
                      color: "#fff",
                      fontWeight: 900,
                    }}>
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

          <SectionHeading icon="🇺🇸">
            Why this matters for Hampton Roads veterans.
          </SectionHeading>

          <BodyP>
            Hampton Roads is home to thousands of veterans, active-duty service
            members, military spouses, retirees, caregivers, and families. From
            Norfolk and Virginia Beach to Chesapeake, Portsmouth, Hampton,
            Newport News, and Suffolk, healthcare access is part of everyday
            family life.
          </BodyP>

          <BodyP>
            Telehealth may be especially useful for people balancing work,
            caregiving, transportation, military transitions, or family schedules.
          </BodyP>

          <SectionHeading icon="🔗">
            Where KonnectMD Access fits.
          </SectionHeading>

          <BodyP>
            KonnectMD Access may help veterans, military families, individuals,
            households, and business owners explore non-emergency healthcare
            access options such as telehealth, mental health support,
            prescription savings, wellness services, and family membership
            options depending on the membership selected.
          </BodyP>

          <section style={{
            marginTop: "54px",
            borderTop: `1px solid ${colors.borderSubtle}`,
            paddingTop: "40px",
          }}>
            <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px" }}>
              Common questions about telehealth for veterans
            </h2>

            {[
              [
                "Can veterans use telehealth?",
                "Yes. Veterans may use telehealth for appropriate non-emergency healthcare needs depending on the provider, program, and membership selected.",
              ],
              [
                "Does telehealth replace VA care?",
                "No. Telehealth through KonnectMD Access does not replace VA benefits, TRICARE, health insurance, or emergency medical care.",
              ],
              [
                "When should I not use telehealth?",
                "Do not use telehealth for chest pain, stroke symptoms, severe bleeding, trouble breathing, major trauma, suicidal emergencies, or life-threatening symptoms.",
              ],
              [
                "Can military families use telehealth?",
                "Yes. Military families may explore telehealth and healthcare access options depending on the membership selected.",
              ],
            ].map(([q, a]) => (
              <div key={q} style={{ marginBottom: "28px" }}>
                <h3 style={{ color: colors.accentMuted, fontSize: "18px", marginBottom: "8px" }}>
                  {q}
                </h3>
                <p style={{ color: colors.textSecondary, lineHeight: 1.7 }}>
                  {a}
                </p>
              </div>
            ))}
          </section>

          <div style={{
            marginTop: "60px",
            padding: "44px",
            background: `linear-gradient(135deg, ${colors.surface}, ${colors.surfaceDeep})`,
            border: `1px solid rgba(147,197,253,0.22)`,
            borderRadius: "24px",
            textAlign: "center",
          }}>
            <h2 style={{
              fontSize: "clamp(26px, 4vw, 36px)",
              fontWeight: 950,
              marginBottom: "12px",
            }}>
              Explore healthcare access options.
            </h2>

            <p style={{
              color: colors.textSecondary,
              fontSize: "17px",
              lineHeight: 1.7,
              maxWidth: "620px",
              margin: "0 auto 28px",
            }}>
              See whether KonnectMD Access may fit your household, family, or
              business healthcare access needs.
            </p>

            <Link to="/book-call" style={{
              display: "inline-block",
              background: colors.accent,
              color: "#ffffff",
              padding: "15px 34px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "16px",
            }}>
              Book a Free 30-Minute Call →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}