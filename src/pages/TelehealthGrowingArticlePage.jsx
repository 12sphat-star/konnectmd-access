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

const fonts = {
  display: "'Syne', sans-serif",
  body: "'DM Sans', sans-serif",
};

function StatCard({ number, label }) {
  return (
    <div style={{
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: "18px",
      padding: "22px 20px",
      textAlign: "center",
      flex: "1 1 180px",
    }}>
      <div style={{
        fontFamily: fonts.display,
        fontSize: "38px",
        fontWeight: 900,
        color: colors.accentLight,
        lineHeight: 1,
        marginBottom: "8px",
      }}>
        {number}
      </div>
      <div style={{ fontSize: "13px", color: colors.textMuted, lineHeight: 1.4 }}>
        {label}
      </div>
    </div>
  );
}

function SectionHeading({ icon, children }) {
  return (
    <h2 style={{
      fontFamily: fonts.display,
      fontSize: "clamp(22px, 3vw, 28px)",
      fontWeight: 800,
      color: colors.textPrimary,
      marginTop: "52px",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }}>
      {icon && <span>{icon}</span>}
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
      borderRadius: "16px",
      padding: "22px 24px",
      margin: "28px 0",
      color: colors.textBody,
      fontSize: "16px",
      lineHeight: 1.7,
    }}>
      {children}
    </div>
  );
}

function TrustItem({ icon, title, desc }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "14px",
      background: colors.surface,
      border: `1px solid ${colors.borderSubtle}`,
      borderRadius: "14px",
      padding: "18px",
    }}>
      <div style={{
        width: "38px",
        height: "38px",
        background: "rgba(59,130,246,0.15)",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <strong style={{
          display: "block",
          color: colors.textPrimary,
          fontSize: "14px",
          fontWeight: 700,
          marginBottom: "4px",
        }}>
          {title}
        </strong>
        <span style={{ color: colors.textMuted, fontSize: "13px" }}>{desc}</span>
      </div>
    </div>
  );
}

export default function TelehealthGrowingArticlePage() {
  const geoTags = [
    "Norfolk",
    "Virginia Beach",
    "Chesapeake",
    "Portsmouth",
    "Hampton",
    "Newport News",
    "Suffolk",
    "Isle of Wight",
  ];

  const trustItems = [
    {
      icon: "🏥",
      title: "Licensed Providers",
      desc: "Healthcare professionals available through virtual care access",
    },
    {
      icon: "💊",
      title: "Prescription Savings",
      desc: "Rx savings programs that may reduce out-of-pocket costs",
    },
    {
      icon: "🔒",
      title: "Privacy-First",
      desc: "Virtual access from home without traditional waiting rooms",
    },
    {
      icon: "🌎",
      title: "Nationwide Access",
      desc: "Available across the United States and U.S. territories",
    },
  ];

  return (
    <main style={{ background: colors.bg, color: colors.textPrimary, minHeight: "100vh" }}>
      <SEO
        title="Why Telehealth Is Growing in Hampton Roads | KonnectMD Access"
        description="Rising healthcare costs, long wait times, mental health demand, and family needs are driving Hampton Roads residents toward telehealth and healthcare access memberships."
        path="/insights/why-telehealth-is-growing-hampton-roads"
      />

      <article itemScope itemType="https://schema.org/Article" style={{ padding: "120px 24px 100px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{
            color: colors.accentLight,
            fontWeight: 700,
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginBottom: "18px",
            fontFamily: fonts.body,
          }}>
            Healthcare Access · Hampton Roads · 2026
          </p>

          <h1 itemProp="headline" style={{
            fontFamily: fonts.display,
            fontSize: "clamp(38px, 7vw, 68px)",
            lineHeight: 1,
            fontWeight: 900,
            color: colors.textPrimary,
            marginBottom: "28px",
          }}>
            Why More Hampton Roads Families Are Choosing Telehealth in 2026
          </h1>

          <p itemProp="description" style={{
            color: colors.textSecondary,
            fontSize: "20px",
            lineHeight: 1.8,
            borderLeft: `3px solid ${colors.accent}`,
            paddingLeft: "20px",
            marginBottom: "52px",
          }}>
            Rising deductibles, longer appointment wait times, and the complexity of traditional healthcare are pushing families, self-employed workers, and small business owners across Hampton Roads toward telehealth and virtual care memberships.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "12px" }}>
            <StatCard number="38×" label="Telehealth use remains far above pre-pandemic levels" />
            <StatCard number="$1,700+" label="Average annual deductible pressure for many U.S. workers" />
            <StatCard number="Weeks" label="Many patients face delays for routine appointments" />
          </div>

          <p style={{
            fontSize: "12px",
            color: colors.textMuted,
            marginBottom: "48px",
            lineHeight: 1.5,
          }}>
            References include McKinsey telehealth research, Kaiser Family Foundation employer health benefits research, CDC mental health data, NFIB small business reporting, and physician appointment wait-time research.
          </p>

          <SectionHeading icon="📈">Healthcare access is shifting fast.</SectionHeading>

          <BodyP>
            Telehealth is no longer just a pandemic-era workaround. It has become part of how families, workers, and business owners think about everyday healthcare access.
          </BodyP>

          <BodyP>
            For Hampton Roads residents, this shift is practical. Military family schedules, long commutes, shift work, caregiving responsibilities, and small business demands make traditional 9-to-5 healthcare harder to manage.
          </BodyP>

          <SectionHeading icon="📍">Why this matters across Hampton Roads.</SectionHeading>

          <BodyP>
            Hampton Roads is home to active-duty military families, veterans, shipyard workers, healthcare workers, defense contractors, educators, entrepreneurs, and growing small business communities.
          </BodyP>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "16px 0 28px" }}>
            {geoTags.map((city) => (
              <span key={city} style={{
                background: "rgba(59,130,246,0.1)",
                border: `1px solid ${colors.border}`,
                borderRadius: "8px",
                padding: "5px 14px",
                fontSize: "13px",
                color: colors.accentMuted,
                fontWeight: 600,
              }}>
                {city}
              </span>
            ))}
          </div>

          <BodyP>
            Across Norfolk, Virginia Beach, Chesapeake, Portsmouth, Hampton, Newport News, and Suffolk, more people are searching for healthcare options that are flexible, understandable, and easier to access.
          </BodyP>

          <SectionHeading icon="🧠">Mental health support is now a top priority.</SectionHeading>

          <BodyP>
            Stress, burnout, anxiety, and emotional fatigue are affecting families and business owners nationwide. Virtual mental health access is becoming more important because it can reduce barriers like travel time, privacy concerns, and scheduling delays.
          </BodyP>

          <HighlightBox>
            <strong style={{ color: colors.accentMuted }}>Key insight:</strong>{" "}
            Mental health support and virtual urgent care are among the strongest use cases for modern telehealth because they solve real-life access problems.
          </HighlightBox>

          <SectionHeading icon="💼">Entrepreneurs and self-employed workers are driving demand.</SectionHeading>

          <BodyP>
            Small business owners, contractors, freelancers, and independent professionals often face difficult healthcare decisions. Traditional coverage can become expensive and confusing, especially for people who do not have employer-sponsored benefits.
          </BodyP>

          <BodyP>
            Healthcare access memberships and virtual care solutions are increasingly being explored as practical tools for individuals, families, and small teams.
          </BodyP>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "14px",
            margin: "36px 0",
          }}>
            {trustItems.map((item) => (
              <TrustItem key={item.title} {...item} />
            ))}
          </div>

          <SectionHeading icon="🔗">Where KonnectMD Access fits in.</SectionHeading>

          <BodyP>
            <strong style={{ color: colors.textPrimary }}>KonnectMD Access is not health insurance.</strong>{" "}
            It is a healthcare access and savings membership designed to help individuals, families, entrepreneurs, and small business owners explore telehealth, virtual urgent care, mental health support, prescription savings, and wellness services depending on the membership selected.
          </BodyP>

          <BodyP>
            KonnectMD Access is rooted in Hampton Roads and available nationwide throughout the United States and U.S. territories.
          </BodyP>

          <SectionHeading icon="🚀">The future of healthcare is flexible and virtual.</SectionHeading>

          <BodyP>
            The healthcare system is moving toward convenience, technology, transparency, and consumer-driven access. Telehealth is becoming a normal starting point for many healthcare conversations.
          </BodyP>

          <BodyP>
            For Hampton Roads families and businesses, exploring modern healthcare access options now may be one of the most practical decisions of 2026.
          </BodyP>

          <section style={{
            marginTop: "52px",
            borderTop: `1px solid ${colors.borderSubtle}`,
            paddingTop: "40px",
          }}>
            <h2 style={{
              fontFamily: fonts.display,
              fontSize: "22px",
              fontWeight: 800,
              color: colors.textPrimary,
              marginBottom: "24px",
            }}>
              Common questions about telehealth in Hampton Roads
            </h2>

            {[
              {
                q: "Is telehealth available in Hampton Roads?",
                a: "Yes. Telehealth services are available throughout Hampton Roads including Norfolk, Virginia Beach, Chesapeake, Portsmouth, Hampton, Newport News, and Suffolk. KonnectMD Access members can access virtual care nationwide.",
              },
              {
                q: "What is a healthcare access membership?",
                a: "A healthcare access membership is not health insurance. It is a program that may provide access to telehealth, virtual urgent care, mental health support, prescription savings, and wellness resources for a membership fee.",
              },
              {
                q: "Can self-employed workers use telehealth memberships?",
                a: "Yes. Healthcare access memberships can be useful for self-employed individuals, contractors, freelancers, entrepreneurs, and small business owners exploring options outside traditional employer-sponsored coverage.",
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ marginBottom: "28px" }}>
                <h3 style={{
                  fontFamily: fonts.display,
                  fontSize: "17px",
                  fontWeight: 700,
                  color: colors.accentMuted,
                  marginBottom: "8px",
                }}>
                  {q}
                </h3>
                <p style={{ color: colors.textSecondary, lineHeight: 1.7, margin: 0 }}>
                  {a}
                </p>
              </div>
            ))}
          </section>

          <section style={{
            marginTop: "52px",
            paddingTop: "32px",
            borderTop: `1px solid ${colors.borderSubtle}`,
          }}>
            <h2 style={{
              fontFamily: fonts.display,
              fontSize: "22px",
              fontWeight: 800,
              color: colors.textPrimary,
              marginBottom: "18px",
            }}>
              Sources and healthcare trend references
            </h2>

            <ul style={{
              color: colors.textSecondary,
              lineHeight: 1.8,
              paddingLeft: "20px",
              fontSize: "14px",
            }}>
              <li>McKinsey & Company telehealth and virtual care consumer research</li>
              <li>Kaiser Family Foundation employer health benefits research</li>
              <li>CDC mental health and adult wellness data</li>
              <li>National Federation of Independent Business small business healthcare cost reporting</li>
              <li>Physician appointment wait-time research</li>
            </ul>

            <p style={{
              color: colors.textMuted,
              fontSize: "12px",
              lineHeight: 1.6,
              marginTop: "14px",
            }}>
              This article is for educational purposes only. KonnectMD Access is not health insurance. Services and benefits vary by membership tier.
            </p>
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
              fontFamily: fonts.display,
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 900,
              color: colors.textPrimary,
              marginBottom: "12px",
            }}>
              Ready to explore your healthcare access options?
            </h2>

            <p style={{
              color: colors.textSecondary,
              fontSize: "17px",
              lineHeight: 1.7,
              margin: "0 auto 28px",
              maxWidth: "540px",
            }}>
              See whether KonnectMD Access is the right fit for your family, your team, or your business.
            </p>

            <Link to="/book-call" style={{
              display: "inline-block",
              background: colors.accent,
              color: "#ffffff",
              padding: "15px 34px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "16px",
              boxShadow: "0 16px 40px rgba(37,99,235,0.32)",
              fontFamily: fonts.body,
            }}>
              Book a Free 30-Minute Call →
            </Link>

            <p style={{
              marginTop: "18px",
              fontSize: "12px",
              color: colors.textMuted,
              lineHeight: 1.5,
            }}>
              KonnectMD Access is not health insurance. Benefits vary by membership tier. Available in the United States and U.S. territories.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}