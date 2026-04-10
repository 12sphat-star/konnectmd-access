import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  interestType: "Individual / Family",
  membershipInterest: "Need Help Choosing",
  householdSize: "",
  state: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    const payload = {
      source: "KonnectMD Access Website",
      submittedAt: new Date().toISOString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      interestType: formData.interestType,
      membershipInterest: formData.membershipInterest,
      householdSize: formData.householdSize,
      state: formData.state,
      message: formData.message,
    };

    try {
      const response = await fetch(import.meta.env.VITE_GHL_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await response.text();

      if (!response.ok) {
        throw new Error(text || "Failed to submit form");
      }

      // Fixed: raw webhook response text is no longer stored or shown to the user
      setStatus({
        loading: false,
        success: true,
        error: "",
      });

      setFormData(initialForm);
    } catch (error) {
      console.error("Webhook error:", error);

      setStatus({
        loading: false,
        success: false,
        error: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="cta-box premium-cta">
          <p className="eyebrow">Get Plan Details</p>
          <h1 className="page-title">
            Find the right membership for your household or business
          </h1>
          <p className="section-copy">
            Fill out the form below and we'll help you review the options that
            may best fit your needs. One plan can support up to 7 members, and
            access follows you anywhere in the U.S.
          </p>

          <form className="basic-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="interestType">Interest Type</label>
                <select
                  id="interestType"
                  name="interestType"
                  value={formData.interestType}
                  onChange={handleChange}
                >
                  <option>Individual / Family</option>
                  <option>Business</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="membershipInterest">Membership Interest</label>
                <select
                  id="membershipInterest"
                  name="membershipInterest"
                  value={formData.membershipInterest}
                  onChange={handleChange}
                >
                  <option>Silver</option>
                  <option>Gold</option>
                  <option>Platinum</option>
                  <option>Titanium</option>
                  <option>Need Help Choosing</option>
                </select>
              </div>

              <div>
                <label htmlFor="householdSize">How Many People Need Access?</label>
                <input
                  id="householdSize"
                  name="householdSize"
                  type="number"
                  min="1"
                  max="7"
                  placeholder="1 to 7"
                  value={formData.householdSize}
                  onChange={handleChange}
                />
              </div>

              <div>
  <label htmlFor="state">State</label>
  <select
    id="state"
    name="state"
    value={formData.state}
    onChange={handleChange}
  >
    <option value="">Select your state</option>
    <option>Alabama</option><option>Alaska</option><option>Arizona</option>
    <option>Arkansas</option><option>California</option><option>Colorado</option>
    <option>Connecticut</option><option>Delaware</option><option>Florida</option>
    <option>Georgia</option><option>Hawaii</option><option>Idaho</option>
    <option>Illinois</option><option>Indiana</option><option>Iowa</option>
    <option>Kansas</option><option>Kentucky</option><option>Louisiana</option>
    <option>Maine</option><option>Maryland</option><option>Massachusetts</option>
    <option>Michigan</option><option>Minnesota</option><option>Mississippi</option>
    <option>Missouri</option><option>Montana</option><option>Nebraska</option>
    <option>Nevada</option><option>New Hampshire</option><option>New Jersey</option>
    <option>New Mexico</option><option>New York</option><option>North Carolina</option>
    <option>North Dakota</option><option>Ohio</option><option>Oklahoma</option>
    <option>Oregon</option><option>Pennsylvania</option><option>Rhode Island</option>
    <option>South Carolina</option><option>South Dakota</option><option>Tennessee</option>
    <option>Texas</option><option>Utah</option><option>Vermont</option>
    <option>Virginia</option><option>Washington</option><option>West Virginia</option>
    <option>Wisconsin</option><option>Wyoming</option>
  </select>
</div>
           </div>

            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us a little about what you need..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div style={{ marginTop: "1.25rem" }}>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status.loading}
              >
                {status.loading ? "Submitting..." : "Submit Request"}
              </button>
            </div>

            {status.success && (
              <p className="form-success">
                Thanks — your request was submitted successfully.
              </p>
            )}

            {status.error && <p className="form-error">{status.error}</p>}

            {/* Fixed: removed raw webhook "Response: {responseText}" output —
                it was exposing backend data and looked unprofessional to users */}
          </form>
        </div>
      </div>
    </section>
  );
}