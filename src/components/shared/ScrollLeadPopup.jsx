import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const POPUP_STORAGE_KEY = "konnectmd_popup_last_seen";
const POPUP_COMPLETED_KEY = "konnectmd_popup_completed";
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

const excludedPaths = [
  "/book-call",
  "/get-details",
  "/plans",
  "/contact",
  "/join-the-team",
];

export default function ScrollLeadPopup() {
  const { pathname } = useLocation();

  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    setShow(false);

    const isExcludedPage = excludedPaths.some(
      (path) => pathname === path || pathname.startsWith(`${path}/`)
    );

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const hasCompleted = localStorage.getItem(POPUP_COMPLETED_KEY) === "true";
    const lastSeen = Number(localStorage.getItem(POPUP_STORAGE_KEY) || 0);
    const recentlySeen = Date.now() - lastSeen < SEVEN_DAYS;

    if (isExcludedPage || isMobile) {
  return undefined;
}

    let timeRequirementMet = false;
    let scrollRequirementMet = false;

    const tryToOpenPopup = () => {
      if (timeRequirementMet && scrollRequirementMet) {
        setShow(true);
        localStorage.setItem(POPUP_STORAGE_KEY, String(Date.now()));
        window.removeEventListener("scroll", handleScroll);
      }
    };

    const handleScroll = () => {
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) return;

      const scrollPercentage = window.scrollY / documentHeight;

      if (scrollPercentage >= 0.55) {
        scrollRequirementMet = true;
        tryToOpenPopup();
      }
    };

    const timer = window.setTimeout(() => {
      timeRequirementMet = true;
      tryToOpenPopup();
   }, 5000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const closePopup = () => {
    localStorage.setItem(POPUP_STORAGE_KEY, String(Date.now()));
    setShow(false);
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  setIsSubmitting(true);
  setSubmitError("");

  const form = event.currentTarget;

  const data = new FormData();

  data.append("source", "Website Popup");
  data.append("submittedAt", new Date().toISOString());

  data.append(
    "firstName",
    form.elements.firstName.value
  );

  data.append(
    "lastName",
    form.elements.lastName.value
  );

  data.append(
    "email",
    form.elements.email.value
  );

  data.append(
    "phone",
    form.elements.phone.value
  );

  data.append(
    "interest_type",
    form.elements.interest.value
  );

  data.append("membership_interest", "Need Help Choosing");
  data.append("household_size", "");
  data.append("state", "");
  data.append("message", "Lead submitted from website popup.");

  try {
    const response = await fetch(
      import.meta.env.VITE_GOOGLE_SCRIPT_URL,
      {
        method: "POST",
        body: data,
      }
    );

    const text = await response.text();

    if (!response.ok) {
      throw new Error(text || "Submission failed");
    }

    localStorage.setItem(POPUP_COMPLETED_KEY, "true");

    setSubmitted(true);

    form.reset();
  } catch (error) {
    console.error(error);

    setSubmitError(
      "We could not send your information. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};

if (!show) return null;

return (
  <div
    style={overlayStyle}
    role="dialog"
    aria-modal="true"
    aria-labelledby="lead-popup-title"
  >
      <div style={popupStyle}>
        <button
          type="button"
          onClick={closePopup}
          style={closeStyle}
          aria-label="Close information form"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <p style={eyebrowStyle}>Healthcare Access Information</p>

            <h2 id="lead-popup-title" style={headlineStyle}>
              Would You Like Help Understanding Your Options?
            </h2>

            <p style={copyStyle}>
              Request information about physician access, prescription savings,
              behavioral health services, family memberships, or business
              healthcare options available through KonnectMD.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="access_key"
                value="24a9e0eb-1534-486c-887f-116931dc3d69"
              />

              <input
                type="hidden"
                name="subject"
                value="New RuKonnected Website Lead"
              />

              <input
                type="hidden"
                name="from_name"
                value="RuKonnected Website"
              />

              <input
                type="hidden"
                name="page"
                value={pathname}
              />

            <input
  name="firstName"
  type="text"
  placeholder="First Name"
  required
  style={inputStyle}
/>

<input
  name="lastName"
  type="text"
  placeholder="Last Name"
  required
  style={inputStyle}
/>

              <input
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
                style={inputStyle}
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                autoComplete="tel"
                required
                style={inputStyle}
              />

              <select name="interest" required style={inputStyle}>
                <option value="">I&apos;m interested in...</option>
                <option value="Individual Membership">
                  Individual Membership
                </option>
                <option value="Family Membership">Family Membership</option>
                <option value="Prescription Savings">
                  Prescription Savings
                </option>
                <option value="Behavioral Health">
                  Behavioral Health
                </option>
                <option value="Veteran Resources">Veteran Resources</option>
                <option value="Small Business Benefits">
                  Small Business Benefits
                </option>
                <option value="Agent Opportunity">Agent Opportunity</option>
                <option value="Need More Information">
                  General Information
                </option>
              </select>

              <button
                type="submit"
                style={{
                  ...buttonStyle,
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Me Information"}
              </button>

              {submitError && (
                <p style={errorStyle} role="alert">
                  {submitError}
                </p>
              )}

              <p style={noticeStyle}>
                KonnectMD memberships are not health insurance. Your
                information will only be used to respond to your request.
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 id="lead-popup-title" style={headlineStyle}>
              Thank You
            </h2>

            <p style={copyStyle}>
              We received your request and will follow up with more information.
            </p>

            <button type="button" onClick={closePopup} style={buttonStyle}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.72)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const popupStyle = {
  position: "relative",
  width: "100%",
  maxWidth: "460px",
  maxHeight: "calc(100vh - 40px)",
  overflowY: "auto",
  padding: "30px",
  border: "1px solid rgba(147, 197, 253, 0.25)",
  borderRadius: "24px",
  background: "#071426",
  color: "#ffffff",
  boxShadow: "0 30px 90px rgba(0, 0, 0, 0.45)",
};

const closeStyle = {
  position: "absolute",
  top: "14px",
  right: "16px",
  border: "none",
  background: "transparent",
  color: "#94a3b8",
  fontSize: "26px",
  lineHeight: 1,
  cursor: "pointer",
};

const eyebrowStyle = {
  margin: "0 0 10px",
  color: "#93c5fd",
  fontSize: "12px",
  fontWeight: 900,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

const headlineStyle = {
  margin: "0 36px 12px 0",
  fontSize: "28px",
  lineHeight: 1.1,
};

const copyStyle = {
  margin: "0 0 8px",
  color: "#cbd5e1",
  lineHeight: 1.6,
};

const inputStyle = {
  boxSizing: "border-box",
  width: "100%",
  marginTop: "12px",
  padding: "14px",
  border: "1px solid rgba(147, 197, 253, 0.25)",
  borderRadius: "12px",
  background: "#0b1f36",
  color: "#ffffff",
  font: "inherit",
};

const buttonStyle = {
  width: "100%",
  marginTop: "14px",
  padding: "14px",
  border: "none",
  borderRadius: "12px",
  background: "#3b82f6",
  color: "#ffffff",
  fontWeight: 900,
  cursor: "pointer",
};

const noticeStyle = {
  marginTop: "12px",
  color: "#94a3b8",
  fontSize: "12px",
  lineHeight: 1.5,
};

const errorStyle = {
  margin: "12px 0 0",
  color: "#fca5a5",
  fontSize: "13px",
  lineHeight: 1.5,
};