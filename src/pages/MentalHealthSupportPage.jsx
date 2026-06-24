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

function SectionHeading({ icon, children }) {
  return (
    <h2
      style={{
        fontFamily: fonts.display,
        fontSize: "clamp(24px, 3vw, 32px)",
        fontWeight: 900,
        color: colors.textPrimary,
        marginTop: "54px",
        marginBottom: "16px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span>{icon}</span>
      {children}
    </h2>
  );
}

function BodyP({ children }) {
  return (
    <p
      style={{
        color: colors.textSecondary,
        lineHeight: 1.8,
        marginBottom: "18px",
        fontSize: "17px",
      }}
    >
      {children}
    </p>
  );
}

function HighlightBox({ children }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(37,99,235,0.04))",
        border: `1px solid ${colors.border}`,
        borderRadius: "18px",
        padding: "24px",
        margin: "30px 0",
        color: colors.textBody,
        lineHeight: 1.7,
      }}
    >
      {children}
    </div>
  );
}

export default function VeteranMentalHealthSupportPage() {
  const cities = [
    "Norfolk",
    "Virginia Beach",
    "Chesapeake",
    "Portsmouth",
    "Hampton",
    "Newport News",
    "Suffolk",
  ];

  const faqs = [
    {
      q: "Can veterans use telehealth for mental health support?",
      a: "Yes. Telehealth may help veterans and military families access non-emergency mental health and emotional wellness support more conveniently, depending on the program or membership selected.",
    },
    {
      q: "Does KonnectMD Access replace VA benefits or TRICARE?",
      a: "No. KonnectMD Access does not replace VA benefits, TRICARE, health insurance, emergency care, or crisis services. It is a healthcare access and savings membership that may complement existing resources.",
    },
    {
      q: "Can military spouses and families use KonnectMD Access?",
      a: "Yes. Depending on the membership selected, KonnectMD Access may provide household and family options that support spouses, children, and family members.",
    },
    {
      q: "Is this for emergencies?",
      a: "No. If someone is in immediate danger or experiencing a mental health emergency, call 911 or 988 right away. KonnectMD Access is for non-emergency healthcare access and support.",
    },
  ];

  return (
    <main style={{ background: colors.bg, color: colors.textPrimary }}>
      <SEO
        title="Veteran Mental Health Support in Hampton Roads | KonnectMD Access"
        description="Explore veteran mental health support in Hampton Roads, including telehealth counseling, family support, emotional wellness resources, and healthcare access options."
        path="/insights/veteran-mental-health-support-hampton-roads"
      />

      <article style={{ padding: "120px 24px 100px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              color: colors.accentLight,
              fontWeight: 900,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              marginBottom: "18px",
            }}
          >
            Veterans · Mental Health · Hampton Roads
          </p>

          <h1
            style={{
              fontFamily: fonts.display,
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: 0.95,
              fontWeight: 950,
              marginBottom: "28px",
            }}
          >
            Veteran Mental Health Support in Hampton Roads
          </h1>

          <p
            style={{
              color: colors.textSecondary,
              fontSize: "20px",
              lineHeight: 1.8,
              borderLeft: `3px solid ${colors.accent}`,
              paddingLeft: "20px",
              marginBottom: "48px",
            }}
          >
            Veterans, military families, spouses, and caregivers often carry
            unique emotional pressure. Access to mental health support,
            telehealth, family wellness resources, and practical healthcare
            options can make a meaningful difference.
          </p>

          <HighlightBox>
            <strong style={{ color: colors.accentMuted }}>Important:</strong>{" "}
            KonnectMD Access is not emergency mental health care and does not
            replace VA benefits, TRICARE, or health insurance. If you or someone
            you know may be in crisis, call or text <strong>988</strong> or call{" "}
            <strong>911</strong> immediately.
          </HighlightBox>

          <SectionHeading icon="🇺🇸">
            Why mental health support matters for veterans.
          </SectionHeading>

          <BodyP>
            Military service can shape every part of life — identity, family,
            work, health, and emotional wellness. For many veterans, the
            transition from active duty to civilian life can bring pressure that
            is not always visible from the outside.
          </BodyP>

          <BodyP>
            Veterans may face stress connected to career changes, family
            responsibilities, physical health concerns, isolation, grief,
            financial pressure, service-connected experiences, or the challenge
            of finding care that feels accessible and comfortable.
          </BodyP>

          <SectionHeading icon="🧠">
            Mental health support is not weakness. It is maintenance.
          </SectionHeading>

          <BodyP>
            Mental health support can help people process stress, anxiety,
            burnout, anger, grief, relationship strain, sleep challenges, and the
            emotional weight of carrying too much for too long.
          </BodyP>

          <BodyP>
            For veterans and military families, support can also help strengthen
            communication, family stability, and personal resilience during life
            transitions.
          </BodyP>

          <SectionHeading icon="📍">
            Why this matters in Hampton Roads.
          </SectionHeading>

          <BodyP>
            Hampton Roads is one of the most military-connected regions in the
            country. From Naval Station Norfolk and NAS Oceana to Joint Base
            Langley-Eustis, Little Creek, Portsmouth Naval Medical Center, and
            Coast Guard communities, military life is woven into the identity of
            the region.
          </BodyP>

          <BodyP>
            Veterans and military families across Norfolk, Virginia Beach,
            Chesapeake, Portsmouth, Hampton, Newport News, and Suffolk may need
            healthcare access that fits changing schedules, family needs, and
            real-life responsibilities.
          </BodyP>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              margin: "20px 0 34px",
            }}
          >
            {cities.map((city) => (
              <span
                key={city}
                style={{
                  background: "rgba(59,130,246,0.1)",
                  border: `1px solid ${colors.border}`,
                  borderRadius: "8px",
                  padding: "6px 14px",
                  fontSize: "13px",
                  color: colors.accentMuted,
                  fontWeight: 700,
                }}
              >
                {city}
              </span>
            ))}
          </div>

          <SectionHeading icon="💻">
            Can telehealth help veterans and military families?
          </SectionHeading>

          <BodyP>
            Telehealth may help reduce barriers for people who have difficulty
            traveling, managing appointments, balancing family schedules, or
            finding time during traditional office hours.
          </BodyP>

          <BodyP>
            For non-emergency support, virtual care and virtual mental health
            options may make it easier to start the conversation from home,
            especially for people who may otherwise delay care.
          </BodyP>

          <SectionHeading icon="🆘">
            Crisis and support resources veterans should know.
          </SectionHeading>

          <BodyP>
            If you are a veteran, service member, or family member facing
            immediate emotional distress, the Veterans Crisis Line is available
            by dialing 988 and pressing 1. You can also text 838255 for support.
          </BodyP>

          <HighlightBox>
            <strong style={{ color: colors.accentMuted }}>
              Emergency reminder:
            </strong>{" "}
            If someone is in immediate danger, call 911. If someone may harm
            themselves or others, call or text 988 immediately. KonnectMD Access
            is not emergency mental health care.
          </HighlightBox>

          <BodyP>
            Veterans may also explore VA mental health services, Vet Centers,
            community-based counseling, peer support, family support services,
            and telehealth options. The right resource depends on the situation,
            urgency, eligibility, and personal preference.
          </BodyP>

          <SectionHeading icon="🔗">
            Where KonnectMD Access fits.
          </SectionHeading>

          <BodyP>
            KonnectMD Access helps individuals, families, entrepreneurs, small
            business owners, veterans, and military families explore healthcare
            access options that may include telehealth, mental health support,
            prescription savings, wellness services, and family membership
            options depending on the membership selected.
          </BodyP>

          <BodyP>
            KonnectMD Access is available nationwide throughout the United
            States and U.S. territories, with a growing local presence in
            Hampton Roads and across Virginia.
          </BodyP>

          <section
            style={{
              marginTop: "54px",
              borderTop: `1px solid ${colors.borderSubtle}`,
              paddingTop: "40px",
            }}
          >
            <h2
              style={{
                fontFamily: fonts.display,
                fontSize: "28px",
                fontWeight: 900,
                marginBottom: "24px",
              }}
            >
              Common questions about veteran mental health support
            </h2>

            {faqs.map(({ q, a }) => (
              <div key={q} style={{ marginBottom: "28px" }}>
                <h3
                  style={{
                    color: colors.accentMuted,
                    fontFamily: fonts.display,
                    fontSize: "18px",
                    marginBottom: "8px",
                  }}
                >
                  {q}
                </h3>
                <p style={{ color: colors.textSecondary, lineHeight: 1.7 }}>
                  {a}
                </p>
              </div>
            ))}
          </section>

          <section
            style={{
              marginTop: "52px",
              paddingTop: "32px",
              borderTop: `1px solid ${colors.borderSubtle}`,
            }}
          >
            <h2
              style={{
                fontFamily: fonts.display,
                fontSize: "24px",
                fontWeight: 900,
                marginBottom: "20px",
              }}
            >
              Related healthcare access resources
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                ["/veterans-healthcare-access", "Veterans Healthcare Access"],
                ["/mental-health-support-hampton-roads", "Mental Health Support"],
                ["/insights", "Healthcare Access Insights"],
                ["/plans", "Membership Plans"],
                ["/book-call", "Book a Call"],
              ].map(([url, label]) => (
                <Link
                  key={url}
                  to={url}
                  style={{
                    background: colors.surface,
                    border: `1px solid ${colors.border}`,
                    borderRadius: "16px",
                    padding: "20px",
                    color: colors.textPrimary,
                    textDecoration: "none",
                    fontWeight: 800,
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </section>

          <div
            style={{
              marginTop: "60px",
              padding: "44px",
              background: `linear-gradient(135deg, ${colors.surface}, ${colors.surfaceDeep})`,
              border: `1px solid rgba(147,197,253,0.22)`,
              borderRadius: "24px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: fonts.display,
                fontSize: "clamp(26px, 4vw, 36px)",
                fontWeight: 950,
                marginBottom: "12px",
              }}
            >
              Explore healthcare access support.
            </h2>

            <p
              style={{
                color: colors.textSecondary,
                fontSize: "17px",
                lineHeight: 1.7,
                maxWidth: "620px",
                margin: "0 auto 28px",
              }}
            >
              See whether KonnectMD Access may fit your situation, your family,
              or your household healthcare needs.
            </p>

            <Link
              to="/book-call"
              style={{
                display: "inline-block",
                background: colors.accent,
                color: "#ffffff",
                padding: "15px 34px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
                boxShadow: "0 16px 40px rgba(37,99,235,0.32)",
              }}
            >
              Book a Free 30-Minute Call →
            </Link>

            <p
              style={{
                marginTop: "18px",
                fontSize: "12px",
                color: colors.textMuted,
                lineHeight: 1.5,
              }}
            >
              KonnectMD Access is not health insurance. Benefits vary by
              membership tier. Emergency situations require 911 or 988.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}