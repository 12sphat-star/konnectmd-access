import { useEffect, useState } from "react";

export default function ScrollLeadPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hasSeenPopup = sessionStorage.getItem("konnectmd_popup_seen");

      if (!hasSeenPopup && window.scrollY > 1200) {
        setShow(true);
        sessionStorage.setItem("konnectmd_popup_seen", "true");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  if (!show) return null;

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <button onClick={() => setShow(false)} style={closeStyle}>
          ×
        </button>

        {!submitted ? (
          <>
            <p style={eyebrowStyle}>Healthcare Access Info</p>

            <h2 style={headlineStyle}>
              Healthcare Access Starting Around $2 Per Day?
            </h2>

            <p style={copyStyle}>
              Discover how individuals, families, veterans, and business owners
              are accessing telehealth, mental health support, prescription
              savings, and more.
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
                name="name"
                type="text"
                placeholder="Name"
                required
                style={inputStyle}
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                style={inputStyle}
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                required
                style={inputStyle}
              />

              <select name="interest" required style={inputStyle}>
                <option value="">I'm interested in...</option>
                <option value="Individual Coverage">Individual Coverage</option>
                <option value="Family Coverage">Family Coverage</option>
                <option value="Veteran Resources">Veteran Resources</option>
                <option value="Small Business Benefits">
                  Small Business Benefits
                </option>
                <option value="Agent Opportunity">Agent Opportunity</option>
                <option value="Need More Information">
                  Just Need More Information
                </option>
              </select>

              <button type="submit" style={buttonStyle}>
                Send Me Information
              </button>

              <p style={noticeStyle}>
                KonnectMD Access is not health insurance. We do not sell your
                information.
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 style={headlineStyle}>Thank you!</h2>
            <p style={copyStyle}>
              We received your information and will follow up shortly.
            </p>
            <button onClick={() => setShow(false)} style={buttonStyle}>
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
  background: "rgba(0,0,0,0.68)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const popupStyle = {
  background: "#071426",
  color: "#fff",
  maxWidth: "460px",
  width: "100%",
  borderRadius: "24px",
  padding: "30px",
  border: "1px solid rgba(147,197,253,0.25)",
  boxShadow: "0 30px 90px rgba(0,0,0,0.45)",
  position: "relative",
};

const closeStyle = {
  position: "absolute",
  top: "14px",
  right: "16px",
  background: "transparent",
  color: "#94a3b8",
  border: "none",
  fontSize: "26px",
  cursor: "pointer",
};

const eyebrowStyle = {
  color: "#93c5fd",
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  fontSize: "12px",
};

const headlineStyle = {
  fontSize: "28px",
  lineHeight: 1.1,
  marginBottom: "12px",
};

const copyStyle = {
  color: "#cbd5e1",
  lineHeight: 1.6,
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid rgba(147,197,253,0.25)",
  marginTop: "12px",
  background: "#0b1f36",
  color: "#fff",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  background: "#3b82f6",
  color: "#fff",
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  fontWeight: 900,
  cursor: "pointer",
  marginTop: "14px",
};

const noticeStyle = {
  color: "#94a3b8",
  fontSize: "12px",
  marginTop: "12px",
  lineHeight: 1.5,
};