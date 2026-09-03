import { useState } from "react";
import "../Styles/HealthcareAssessmentPage.css";
import "../Styles/HealthcareAssessmentSmart.css";

const questions = [
  {
    id: "coverage",
    category: "Coverage",
    question: "Which best describes your current healthcare situation?",
    helper:
      "Your current coverage helps us understand which resources may be most relevant.",
    options: [
      "I have health insurance",
      "I have insurance, but costs are still a concern",
      "I do not currently have health insurance",
      "My coverage is changing or ending soon",
      "I'm not sure what options are available to me",
    ],
  },
  {
    id: "who",
    category: "Household",
    question:
      "Who are you most concerned about having healthcare access for?",
    helper:
      "Healthcare needs can look very different for an individual, couple or family.",
    options: [
      "Just me",
      "Me and my spouse or partner",
      "My children",
      "My entire family",
      "I'm helping someone else",
    ],
  },
  {
    id: "doctorAccess",
    category: "Doctor Access",
    question: "How easy is it for you to see a doctor when you need one?",
    helper:
      "Think about routine illnesses and non-emergency healthcare needs.",
    options: [
      "Usually easy",
      "Sometimes difficult",
      "Very difficult",
      "I often use urgent care or the ER instead",
      "I sometimes delay getting care",
    ],
  },
  {
    id: "cost",
    category: "Healthcare Costs",
    question:
      "How much of a concern are healthcare costs for you or your family?",
    helper:
      "Consider visits, deductibles, copays, prescriptions and other out-of-pocket expenses.",
    options: [
      "A major concern",
      "Somewhat of a concern",
      "Not a major concern",
      "It depends on the type of care I need",
    ],
  },
  {
    id: "prescriptions",
    category: "Prescriptions",
    question:
      "Are prescription costs a concern for you or someone in your household?",
    helper:
      "Medication prices can vary considerably depending on the medication and pharmacy.",
    options: [
      "Yes, frequently",
      "Sometimes",
      "Rarely",
      "No",
      "We don't currently use prescription medications",
    ],
  },
  {
    id: "mentalHealth",
    category: "Mental Health",
    question:
      "How important is access to mental health or counseling support for your household?",
    helper:
      "This can include counseling, emotional wellness and behavioral health support.",
    options: [
      "Very important",
      "Somewhat important",
      "Not currently a priority",
      "I'd like to learn more about available resources",
    ],
  },
  {
    id: "delayedCare",
    category: "Access Barriers",
    question:
      "In the past 12 months, have you delayed or avoided healthcare because of cost or access?",
    helper:
      "This helps identify whether affordability or availability is creating a barrier to care.",
    options: [
      "Yes, because of cost",
      "Yes, because I couldn't get an appointment",
      "Yes, for both reasons",
      "No",
      "Prefer not to say",
    ],
  },
  {
    id: "priority",
    category: "Your Priority",
    question:
      "Which healthcare need would make the biggest difference for you right now?",
    helper:
      "Choose the area you would most like help understanding or improving.",
    options: [
      "Affordable access to a doctor",
      "Lower prescription costs",
      "Mental health or counseling support",
      "Healthcare access for my family",
      "Help understanding my healthcare options",
      "A combination of these",
    ],
  },
];

const snapshotAreas = [
  {
    id: "doctor",
    title: "Doctor Access",
    description: "Convenient access to care",
  },
  {
    id: "cost",
    title: "Healthcare Costs",
    description: "Managing out-of-pocket expenses",
  },
  {
    id: "rx",
    title: "Prescription Savings",
    description: "Reducing medication costs",
  },
  {
    id: "mental",
    title: "Mental Health",
    description: "Counseling & wellness support",
  },
  {
    id: "family",
    title: "Family Access",
    description: "Healthcare resources for your household",
  },
];

function HealthcareAssessmentPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [contactInfo, setContactInfo] = useState({
  firstName: "",
  email: "",
  phone: "",
  zip: "",
});

  const question = questions[currentQuestion];
  const answeredCount = Object.keys(answers).length;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const selectAnswer = (answer) => {
    const updatedAnswers = {
      ...answers,
      [question.id]: answer,
    };

    setAnswers(updatedAnswers);

if (currentQuestion < questions.length - 1) {
  setCurrentQuestion((prev) => prev + 1);
} else {
  setShowLeadCapture(true);
}
};

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else {
      setStarted(false);
    }
  };

  const restartAssessment = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
    setStarted(false);
  };

  const getActiveAreas = () => {
    const active = [];

    if (
      answers.doctorAccess === "Sometimes difficult" ||
      answers.doctorAccess === "Very difficult" ||
      answers.doctorAccess === "I often use urgent care or the ER instead" ||
      answers.doctorAccess === "I sometimes delay getting care" ||
      answers.delayedCare === "Yes, because I couldn't get an appointment" ||
      answers.delayedCare === "Yes, for both reasons" ||
      answers.priority === "Affordable access to a doctor" ||
      answers.priority === "A combination of these"
    ) {
      active.push("doctor");
    }

    if (
      answers.coverage ===
        "I have insurance, but costs are still a concern" ||
      answers.cost === "A major concern" ||
      answers.cost === "Somewhat of a concern" ||
      answers.cost === "It depends on the type of care I need" ||
      answers.delayedCare === "Yes, because of cost" ||
      answers.delayedCare === "Yes, for both reasons" ||
      answers.priority === "A combination of these"
    ) {
      active.push("cost");
    }

    if (
      answers.prescriptions === "Yes, frequently" ||
      answers.prescriptions === "Sometimes" ||
      answers.priority === "Lower prescription costs" ||
      answers.priority === "A combination of these"
    ) {
      active.push("rx");
    }

    if (
      answers.mentalHealth === "Very important" ||
      answers.mentalHealth === "Somewhat important" ||
      answers.mentalHealth ===
        "I'd like to learn more about available resources" ||
      answers.priority === "Mental health or counseling support" ||
      answers.priority === "A combination of these"
    ) {
      active.push("mental");
    }

    if (
      answers.who === "Me and my spouse or partner" ||
      answers.who === "My children" ||
      answers.who === "My entire family" ||
      answers.priority === "Healthcare access for my family" ||
      answers.priority === "A combination of these"
    ) {
      active.push("family");
    }

    return [...new Set(active)];
  };

  const getRecommendations = () => {
    const recommendations = [];
    const activeAreas = getActiveAreas();

    if (activeAreas.includes("doctor")) {
      recommendations.push({
        type: "Doctor Access",
        title: "Explore More Convenient Ways to Access Care",
        text:
          "Your answers suggest that getting timely access to a healthcare professional may be worth exploring. Virtual care and other non-emergency access options may help provide another path when traditional appointments are difficult.",
        action:
  "Next step: Identify where you would turn today if you needed non-emergency medical care but couldn't get a timely appointment with your regular provider.",
          link: "/resource-center/telehealth",
        linkText: "Explore the Telehealth Resource Center",
      });
    }

    if (activeAreas.includes("cost")) {
      recommendations.push({
        type: "Healthcare Costs",
        title: "Look Beyond Traditional Healthcare Access",
        text:
          "Healthcare costs appear to be an important consideration for you. Understanding the differences between insurance, healthcare memberships, discount programs and other resources can help you make more informed decisions.",
        action:
  "Next step: Look at the healthcare expenses you pay outside of your monthly premium — including deductibles, copays, prescriptions and routine care — to get a clearer picture of what healthcare is actually costing you.",
          link: "/healthcare-alternatives-hampton-roads",
        linkText: "Explore Healthcare Alternatives",
      });
    }

    if (activeAreas.includes("rx")) {
      recommendations.push({
        type: "Prescription Savings",
        title: "Compare Before Paying for Prescriptions",
        text:
          "Your answers indicate that prescription savings may be useful. Pharmacy prices, generic alternatives and prescription savings programs are all areas worth comparing.",
       action:
  "Next step: Before filling your next prescription, compare the price at more than one pharmacy and check the cash, insurance and available discount prices. The lowest price may not always be the one you expect.",
          link: "/resource-center/prescription-savings",
        linkText: "Visit the Prescription Savings Resource Center",
      });
    }

    if (activeAreas.includes("mental")) {
      recommendations.push({
        type: "Mental Health & Wellness",
        title: "Include Mental Health in Your Healthcare Plan",
        text:
          "Mental health and counseling support matter to your household. Knowing what behavioral health resources are available before they're needed can make accessing support easier.",
       action:
  "Next step: Find out what counseling or behavioral health resources you or your household could access today — before you're in a situation where you urgently need support.",
          link: "/resource-center/behavioral-health",
        linkText: "Explore Behavioral Health Resources",
      });
    }

    if (activeAreas.includes("family")) {
      recommendations.push({
        type: "Family Healthcare",
        title: "Consider the Healthcare Needs of the Whole Household",
        text:
          "Your answers show that healthcare access extends beyond just one person. Comparing options that support multiple household members may be especially important for you.",
        action:
  "Next step: Find out what counseling or behavioral health resources you or your household could access today — before you're in a situation where you urgently need support.",
          link: "/resource-center/family-healthcare",
        linkText: "Visit the Family Healthcare Resource Center",
      });
    }

    if (
      answers.coverage === "I do not currently have health insurance" ||
      answers.coverage === "My coverage is changing or ending soon" ||
      answers.coverage ===
        "I'm not sure what options are available to me" ||
      answers.priority === "Help understanding my healthcare options"
    ) {
      recommendations.push({
        type: "Understanding Your Options",
        title: "Know What Each Healthcare Option Does — and Doesn't Do",
        text:
          "Your answers suggest that understanding available healthcare options may be particularly valuable. Comparing resources side by side can help you determine what fits your situation.",
       action:
  "Next step: Separate the healthcare options you're considering into three questions: What does it provide? What does it cost? And what does it not cover or replace?",
          link: "/hampton-roads-healthcare-access",
        linkText: "Explore Hampton Roads Healthcare Access",
      });
    }

    if (recommendations.length === 0) {
      recommendations.push({
        type: "Healthcare Planning",
        title: "Stay Prepared Before You Need Care",
        text:
          "Your answers don't indicate a major access barrier right now. Knowing where to find trusted healthcare resources before a need arises can still help you make faster, better-informed decisions.",
        action:
  "Next step: Keep a simple list of the healthcare resources you would use for routine care, an unexpected illness, prescriptions and mental health support so you aren't searching for options when a need arises.",
          link: "/hampton-roads-healthcare-access",
        linkText: "Explore Healthcare Resources",
      });
    }

    return recommendations;
  };

  const activeAreas = getActiveAreas();
  const getSnapshotSummary = () => {
  const areas = getActiveAreas();

  let opening =
    "Your responses show that you are thinking carefully about how healthcare access fits your real-life needs.";

  if (
    answers.coverage === "I have insurance, but costs are still a concern"
  ) {
    opening =
      "You currently have health insurance, but your answers show that having coverage does not necessarily remove concerns about healthcare costs or access.";
  } else if (
    answers.coverage === "I do not currently have health insurance"
  ) {
    opening =
      "You are currently navigating healthcare without traditional health insurance, making it especially important to understand the different ways you can access care and manage healthcare costs.";
  } else if (
    answers.coverage === "My coverage is changing or ending soon"
  ) {
    opening =
      "With your healthcare coverage changing or ending soon, this may be a good time to understand the different resources and access options available before you need care.";
  } else if (
    answers.coverage === "I'm not sure what options are available to me"
  ) {
    opening =
      "Your answers suggest that greater clarity around available healthcare options could help you make more informed decisions about accessing care.";
  }

  let focus = "";

  if (areas.length >= 3) {
    focus =
      "More than one area stood out in your assessment, which means looking at your healthcare access as a whole may be more useful than trying to solve each concern separately.";
  } else if (areas.length === 2) {
    focus =
      "Two areas stood out from your responses. Exploring how those needs work together may help you identify options that fit your situation more effectively.";
  } else if (areas.length === 1) {
    focus =
      "One area stood out most clearly from your responses, giving you a useful place to begin exploring your healthcare resources.";
  } else {
    focus =
      "Your responses do not indicate a major healthcare access concern right now, but knowing your available resources before you need them can still be valuable.";
  }

  return {
    opening,
    focus,
  };
};

const snapshotSummary = getSnapshotSummary();
const getPrimaryArea = () => {
  switch (answers.priority) {
    case "Affordable access to a doctor":
      return "doctor";

    case "Lower prescription costs":
      return "rx";

    case "Mental health or counseling support":
      return "mental";

    case "Healthcare access for my family":
      return "family";

    case "Help understanding my healthcare options":
      return "options";

    case "A combination of these":
      if (
        answers.cost === "A major concern" ||
        answers.delayedCare === "Yes, because of cost" ||
        answers.delayedCare === "Yes, for both reasons"
      ) {
        return "cost";
      }

      if (
        answers.doctorAccess === "Very difficult" ||
        answers.doctorAccess === "I often use urgent care or the ER instead" ||
        answers.doctorAccess === "I sometimes delay getting care" ||
        answers.delayedCare ===
          "Yes, because I couldn't get an appointment"
      ) {
        return "doctor";
      }

      if (answers.prescriptions === "Yes, frequently") {
        return "rx";
      }

      if (answers.mentalHealth === "Very important") {
        return "mental";
      }

      if (
        answers.who === "My children" ||
        answers.who === "My entire family"
      ) {
        return "family";
      }

      return "cost";

    default:
      return null;
  }
};

const primaryArea = getPrimaryArea();
const primaryAreaNames = {
  doctor: "Doctor Access",
  cost: "Healthcare Costs",
  rx: "Prescription Savings",
  mental: "Mental Health & Wellness",
  family: "Family Healthcare",
  options: "Understanding Your Healthcare Options",
};

const primaryAreaName =
  primaryAreaNames[primaryArea] || "Your Healthcare Access";

  /* =====================================================
     SMART ENTRANCE
  ===================================================== */

  if (!started) {
    return (
      <main className="healthcare-assessment-page">
        <section className="smart-assessment-intro">
          <div className="smart-assessment-intro-bg" />

          <div className="assessment-container smart-intro-grid">
            <div className="smart-intro-content">
              <span className="smart-kicker">
                KONNECTMD ACCESS • HEALTHCARE RESOURCE CENTER
              </span>

              <h1>
                How Well Does Your Healthcare Access
                <span> Fit Your Real Life?</span>
              </h1>

              <p className="smart-intro-lead">
                Healthcare isn't just about whether you have insurance. It's
                about whether you can actually get the care, support and
                resources you need when you need them.
              </p>

              <div className="smart-assessment-promise">
                <div>
                  <strong>2 Minutes</strong>
                  <span>Quick assessment</span>
                </div>

                <div>
                  <strong>Personalized</strong>
                  <span>Based on your answers</span>
                </div>

                <div>
                  <strong>Smart Insights</strong>
                  <span>Relevant areas to explore</span>
                </div>
              </div>

              <button
                className="smart-start-button"
                type="button"
                onClick={() => setStarted(true)}
              >
                Start My Healthcare Assessment
                <span>→</span>
              </button>

              <p className="smart-intro-note">
                Free • No obligation • Educational resource
              </p>
            </div>

            <div className="smart-intro-panel">
              <span className="smart-panel-label">
                YOUR HEALTHCARE ACCESS SNAPSHOT
              </span>

              <h2>What will we look at?</h2>

              <div className="smart-check-list">
                <div>
                  <span>✓</span>
                  <p>
                    <strong>Doctor Access</strong>
                    How easily can you get care when you need it?
                  </p>
                </div>

                <div>
                  <span>✓</span>
                  <p>
                    <strong>Healthcare Costs</strong>
                    Are costs affecting the decisions you make?
                  </p>
                </div>

                <div>
                  <span>✓</span>
                  <p>
                    <strong>Prescription Savings</strong>
                    Could medication costs be reduced?
                  </p>
                </div>

                <div>
                  <span>✓</span>
                  <p>
                    <strong>Mental Health & Wellness</strong>
                    What support matters to your household?
                  </p>
                </div>

                <div>
                  <span>✓</span>
                  <p>
                    <strong>Family Access</strong>
                    Who needs access to healthcare resources?
                  </p>
                </div>
              </div>

              <div className="smart-panel-footer">
                <span>12 STONE SMART SITE™ EXPERIENCE</span>
                <p>
                  Your answers help the site identify resources that may be
                  relevant to you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  /* =====================================================
     SMART RESULTS
  ===================================================== */

if (showLeadCapture && !showResults) {
  const handleContactChange = (event) => {
    const { name, value } = event.target;

    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSnapshotSubmit = async (event) => {
  event.preventDefault();

  const endpoint =
    "https://script.google.com/macros/s/AKfycbyfUdoLMNMUZzstgq91QfljGG9BFZPGpbFuA7HcqBYdWXzCsIbR2PNl2RJxtcblnZY/exec";

  const submissionData = {
    firstName: contactInfo.firstName,
    email: contactInfo.email,
    phone: contactInfo.phone,
    zip: contactInfo.zip,

    coverage: answers.coverage || "",
    who: answers.who || "",
    doctorAccess: answers.doctorAccess || "",
    cost: answers.cost || "",
    prescriptions: answers.prescriptions || "",
    mentalHealth: answers.mentalHealth || "",
    delayedCare: answers.delayedCare || "",
    priority: answers.priority || "",

    identifiedAreas: activeAreas.map(
      (areaId) =>
        snapshotAreas.find((area) => area.id === areaId)?.title || areaId
    ),

    primaryFocus: primaryAreaName,
  };

  try {
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(submissionData),
    });

    setShowLeadCapture(false);
    setShowResults(true);
  } catch (error) {
    console.error("Assessment submission error:", error);

    alert(
      "We couldn't submit your information. Please check your connection and try again."
    );
  }
};

  return (
    <main className="healthcare-assessment-page smart-capture-page">
      <section className="smart-capture-section">
        <div className="assessment-container smart-capture-layout">

          <div className="smart-capture-content">
            <span className="smart-kicker">
              ASSESSMENT COMPLETE
            </span>

            <div className="smart-complete-icon">✓</div>

            <h1>
              Your Healthcare
              <span> Snapshot Is Ready.</span>
            </h1>

            <p className="smart-capture-lead">
              We've analyzed your responses and identified healthcare
              access areas and resources that may be worth exploring
              based on what you told us.
            </p>

            <div className="smart-capture-summary">
              <div>
                <strong>8</strong>
                <span>Questions analyzed</span>
              </div>

              <div>
                <strong>{activeAreas.length}</strong>
                <span>Areas identified</span>
              </div>

              <div>
                <strong>Personalized</strong>
                <span>Resources selected for you</span>
              </div>
            </div>

            <div className="smart-capture-preview">
              <span>YOUR SNAPSHOT MAY INCLUDE</span>

              <div className="smart-preview-tags">
                {activeAreas.length > 0 ? (
                  snapshotAreas
                    .filter((area) => activeAreas.includes(area.id))
                    .map((area) => (
                      <span key={area.id}>✓ {area.title}</span>
                    ))
                ) : (
                  <span>✓ Healthcare Access Planning</span>
                )}
              </div>
            </div>
          </div>

          <div className="smart-capture-card">
            <span className="smart-panel-label">
              VIEW YOUR PERSONALIZED RESULTS
            </span>

            <h2>Your Personalized Healthcare Snapshot Is Ready.</h2>

            <p>
Enter your information below to view your Healthcare Access 
Snapshot and resources based on the needs you identified. </p>

            <form onSubmit={handleSnapshotSubmit}>

              <div className="smart-form-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={contactInfo.firstName}
                  onChange={handleContactChange}
                  placeholder="Your first name"
                  required
                />
              </div>

              <div className="smart-form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={contactInfo.email}
                  onChange={handleContactChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="smart-form-row">

                <div className="smart-form-field">
                  <label htmlFor="phone">Mobile Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={contactInfo.phone}
                    onChange={handleContactChange}
                    placeholder="(757) 555-1234"
                    required
                  />
                </div>

                <div className="smart-form-field">
                  <label htmlFor="zip">ZIP Code</label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    inputMode="numeric"
                    maxLength="5"
                    value={contactInfo.zip}
                    onChange={handleContactChange}
                    placeholder="23510"
                    required
                  />
                </div>

              </div>

              <button
                type="submit"
                className="smart-view-results-button"
              >
                View My Healthcare Snapshot
                <span>→</span>
              </button>

            </form>

            <div className="smart-capture-privacy">
              <span>🔒</span>

              <p>
                Your information is used to provide your requested
                healthcare resources and follow-up information.
                We do not sell your personal information.
              </p>
            </div>

            <p className="smart-capture-disclaimer">
              This assessment is educational and informational and does
              not provide medical or insurance advice. KonnectMD
              healthcare memberships are not health insurance.
            </p>

          </div>

        </div>
      </section>
    </main>
  );
}
  if (showResults) {
    const recommendations = getRecommendations();

    return (
      <main className="healthcare-assessment-page smart-results-page">
        <section className="smart-results-hero">
          <div className="assessment-container">
            <span className="smart-kicker">ASSESSMENT COMPLETE</span>

            <h1>
  {contactInfo.firstName
    ? `${contactInfo.firstName}, Here’s Your Healthcare Access Snapshot`
    : "Your Healthcare Access Snapshot"}
</h1>

            <p>
              Based on what you told us, we've identified healthcare access
              areas and resources that may be worth exploring.
            </p>

            <div className="smart-results-status">
              <span>✓</span>
              Personalized using your {questions.length} assessment responses
            </div>
          </div>
        </section>

        <section className="smart-results-body">
          <div className="assessment-container">
            <div className="smart-results-layout">
              <div className="smart-results-main">
                <div className="smart-results-insight">
  <div className="smart-results-insight-label">
    <span>YOUR HEALTHCARE ACCESS PICTURE</span>
    <strong>What Your Answers Tell Us</strong>
  </div>

  <div className="smart-results-insight-content">
    <p>{snapshotSummary.opening}</p>
    <p>{snapshotSummary.focus}</p>
  </div>
</div>
                <div className="smart-section-heading">
                  <span>YOUR PERSONALIZED RESULTS</span>
                  <h2>Areas Worth Exploring</h2>
                  <p>
                    These aren't grades or medical recommendations. They're
                    areas identified from the needs and concerns you shared.
                  </p>
                </div>

                <div className="smart-recommendation-list">
                  {recommendations.map((item, index) => (
                    <article
  className={`smart-recommendation-card ${
    (item.type === "Doctor Access" && primaryArea === "doctor") ||
    (item.type === "Healthcare Costs" && primaryArea === "cost") ||
    (item.type === "Prescription Savings" && primaryArea === "rx") ||
    (item.type === "Mental Health & Wellness" && primaryArea === "mental") ||
    (item.type === "Family Healthcare" && primaryArea === "family") ||
    (item.type === "Understanding Your Options" && primaryArea === "options")
      ? "smart-primary-recommendation"
      : ""
  }`}
  key={index}
>
                      <div className="smart-recommendation-top">
                        <span className="smart-recommendation-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="smart-recommendation-type">
                          {item.type}
                        </span>
                      </div>
{((item.type === "Doctor Access" && primaryArea === "doctor") ||
  (item.type === "Healthcare Costs" && primaryArea === "cost") ||
  (item.type === "Prescription Savings" && primaryArea === "rx") ||
  (item.type === "Mental Health & Wellness" && primaryArea === "mental") ||
  (item.type === "Family Healthcare" && primaryArea === "family") ||
  (item.type === "Understanding Your Options" &&
    primaryArea === "options")) && (
  <div className="smart-primary-label">
    <span>★</span>
    YOUR PRIMARY FOCUS
  </div>
)}
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
{item.action && (
  <div className="smart-recommendation-action">
    <span>“A PRACTICAL NEXT STEP.”</span>
    <p>{item.action.replace("Next step: ", "")}</p>
  </div>
)}
                      <a
                        className="smart-resource-link"
                        href={item.link}
                      >
                        {item.linkText}
                        <span>→</span>
                      </a>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="smart-results-sidebar">
                <span className="smart-panel-label">
                  YOUR HEALTHCARE SNAPSHOT
                </span>

                <h3>What stood out?</h3>

                <div className="smart-result-area-list">
                  {snapshotAreas.map((area) => {
                    const isActive = activeAreas.includes(area.id);

                    return (
                      <div
                        className={`smart-result-area ${
                          isActive ? "active" : ""
                        }`}
                        key={area.id}
                      >
                        <span>{isActive ? "✓" : "•"}</span>

                        <div>
                          <strong>{area.title}</strong>
                          <small>
                            {isActive
                              ? "Worth exploring"
                              : "No strong concern identified"}
                          </small>
                        </div>
                      </div>
                    );
                  })}
                </div>
<div className="smart-action-plan">
  <div className="smart-action-plan-heading">
    <span>YOUR HEALTHCARE ACCESS PLAN</span>
    <h2>A Simple Place to Start</h2>
    <p>
      You don't need to address everything at once. Based on your
      assessment, here's a practical way to begin.
    </p>
  </div>

  <div className="smart-action-plan-steps">
    <div className="smart-plan-step">
      <span className="smart-plan-number">1</span>

      <div>
        <span className="smart-plan-label">START HERE</span>
        <h3>Focus on {primaryAreaName}</h3>
        <p>
          This is the area you identified as most important, or the area
          that stood out most strongly from your responses.
        </p>
      </div>
    </div>

    <div className="smart-plan-step">
      <span className="smart-plan-number">2</span>

      <div>
        <span className="smart-plan-label">LOOK AT THE WHOLE PICTURE</span>
        <h3>Review Your Other Identified Needs</h3>
        <p>
          Use the resources above to explore the other healthcare access
          areas that appeared in your assessment.
        </p>
      </div>
    </div>

    <div className="smart-plan-step">
      <span className="smart-plan-number">3</span>

      <div>
        <span className="smart-plan-label">IF YOU WANT HELP</span>
        <h3>Talk Through Your Options</h3>
        <p>
          If you'd like help understanding how the different resources
          and healthcare access options may fit together, we're available
          to help you explore them.
        </p>

        <a href="/book-call" className="smart-plan-link">
          Talk With Us About Your Options
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>
                <div className="smart-results-help">
                  <span>NEED HELP?</span>
                  <h4>Want to talk through your options?</h4>
                  <p>
                    Request information and we'll help you understand which
                    healthcare resources may fit what you're looking for.
                  </p>

                  <a href="/get-details">
                    Get My Healthcare Information →
                  </a>
                </div>
              </aside>
            </div>

            <div className="smart-results-disclaimer">
              <strong>Important:</strong> This assessment is for educational
              and informational purposes only and is not medical advice,
              insurance advice or a determination of eligibility. KonnectMD
              healthcare memberships are not health insurance.
            </div>

            <button
              type="button"
              className="smart-restart-button"
              onClick={restartAssessment}
            >
              ↻ Retake Assessment
            </button>
          </div>
        </section>
      </main>
    );
  }

  /* =====================================================
     SMART ASSESSMENT EXPERIENCE
  ===================================================== */

  return (
    <main className="healthcare-assessment-page smart-question-page">
      <section className="smart-question-header">
        <div className="assessment-container">
          <div className="smart-question-header-row">
            <div>
              <span className="smart-question-header-label">
                HEALTHCARE ACCESS ASSESSMENT
              </span>

              <h1>Building Your Healthcare Snapshot</h1>
            </div>

            <div className="smart-question-count">
              <strong>
                {currentQuestion + 1}
                <span> / {questions.length}</span>
              </strong>
              <small>QUESTIONS</small>
            </div>
          </div>

          <div className="smart-progress-track">
            <div
              className="smart-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      <section className="smart-question-body">
        <div className="assessment-container smart-question-layout">
          <div className="smart-question-main">
            <div className="smart-question-meta">
              <span>{question.category}</span>
              <small>
                {Math.round(progress)}% COMPLETE
              </small>
            </div>

            <h2>{question.question}</h2>

            <p className="smart-question-helper">
              {question.helper}
            </p>

            <div className="smart-answer-list">
              {question.options.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  className={`smart-answer-option ${
                    answers[question.id] === option ? "selected" : ""
                  }`}
                  onClick={() => selectAnswer(option)}
                >
                  <span className="smart-answer-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="smart-answer-text">{option}</span>

                  <span className="smart-answer-arrow">→</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              className="smart-question-back"
              onClick={goBack}
            >
              ← {currentQuestion === 0 ? "Back to Introduction" : "Previous Question"}
            </button>
          </div>

          <aside className="smart-live-snapshot">
            <div className="smart-live-heading">
              <span className="smart-panel-label">
                LIVE HEALTHCARE SNAPSHOT
              </span>

              <div className="smart-live-counter">
                <strong>{answeredCount}</strong>
                <span>answers analyzed</span>
              </div>
            </div>

            <h3>Your picture is taking shape.</h3>

            <p className="smart-live-intro">
              As you answer, we'll identify healthcare areas that may deserve
              a closer look.
            </p>

            <div className="smart-live-areas">
              {snapshotAreas.map((area) => {
                const isActive = activeAreas.includes(area.id);

                return (
                  <div
                    className={`smart-live-area ${
                      isActive ? "active" : ""
                    }`}
                    key={area.id}
                  >
                    <span className="smart-live-icon">
                      {isActive ? "✓" : ""}
                    </span>

                    <div>
                      <strong>{area.title}</strong>
                      <small>
                        {isActive
                          ? "Identified from your answers"
                          : area.description}
                      </small>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="smart-live-footer">
              <span>SMART SITE INSIGHT</span>
              <p>
                Your answers stay focused on healthcare access and are used to
                personalize the resources shown at the end.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default HealthcareAssessmentPage;