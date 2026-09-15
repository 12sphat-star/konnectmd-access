import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/BusinessHealthcareAssessmentPage.css";

const ASSESSMENT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbx_YeSPgrlT9TBMkPJ49zIJK6qWpQDF8jkeLT0P3tFw8uqd2m4zOYWGgOq_taahU5z-/exec";

const questions = [
  {
    key: "teamSize",
    label: "YOUR TEAM",
    question: "How many people are part of your business?",
    helper:
      "Include employees or regular team members you would potentially want to support.",
    options: [
      "Just me — I'm self-employed",
      "2–5 people",
      "6–10 people",
      "11–25 people",
      "26–50 people",
      "More than 50 people",
    ],
  },
  {
    key: "recruiting",
    label: "RECRUITING",
    question: "How difficult is it for you to attract good people?",
    helper:
      "Think about whether benefits or healthcare access affect your ability to compete for workers.",
    options: [
      "Not a challenge right now",
      "A minor challenge",
      "A noticeable challenge",
      "A major challenge",
      "One of our biggest challenges",
    ],
  },
  {
    key: "retention",
    label: "RETENTION",
    question: "How concerned are you about keeping good employees?",
    helper:
      "Consider turnover, employee satisfaction and what competitors may be able to offer.",
    options: [
      "Not concerned",
      "Slightly concerned",
      "Moderately concerned",
      "Very concerned",
      "It's a major business issue",
    ],
  },
  {
    key: "currentBenefits",
    label: "CURRENT BENEFITS",
    question: "What best describes your current healthcare benefit situation?",
    helper:
      "Choose the answer that most closely reflects what your business offers today.",
    options: [
      "We offer health insurance",
      "We offer limited health or wellness benefits",
      "We provide an allowance or reimbursement",
      "Employees are responsible for their own healthcare",
      "We currently offer no healthcare-related benefit",
      "I'm self-employed and cover my own healthcare needs",
    ],
  },
  {
    key: "employeeNeed",
    label: "YOUR PEOPLE",
    question: "Which healthcare need would create the most immediate value?",
    helper:
      "Think about what would make the biggest difference for your employees and their households.",
    options: [
      "24/7 access to a doctor",
      "Mental health and real-life support",
      "Prescription support and savings",
      "Family healthcare access",
      "Dental, vision and other everyday savings",
      "A combination of these",
    ],
  },
  {
    key: "businessChallenge",
    label: "BUSINESS IMPACT",
    question: "What healthcare-related issue affects your business the most?",
    helper:
      "This helps us understand the business problem behind the healthcare need.",
    options: [
      "Employees missing work for routine care",
      "Difficulty competing with larger employers",
      "Healthcare benefits cost too much",
      "Employees have limited healthcare access",
      "Recruiting or retaining employees",
      "I need a practical option for myself or my family",
    ],
  },
  {
    key: "interest",
    label: "ALTERNATIVES",
    question:
      "How open are you to a healthcare membership that is not health insurance?",
    helper:
      "KonnectMD is a healthcare membership and should not be confused with major medical insurance.",
    options: [
      "Very open — I want to understand it",
      "Open if the value makes sense",
      "Possibly — I need more information",
      "I'm mainly comparing options",
      "Not sure yet",
    ],
  },
  {
    key: "timing",
    label: "TIMING",
    question: "When would you consider putting something in place?",
    helper:
      "There is no commitment. This simply helps determine how quickly you may want information.",
    options: [
      "As soon as possible",
      "Within 30 days",
      "Within 1–3 months",
      "Later this year",
      "I'm only researching right now",
    ],
  },
  {
    key: "priority",
    label: "PRIORITY",
    question: "What matters most when evaluating an option like this?",
    helper:
      "Choose the factor that would have the greatest influence on your decision.",
    options: [
      "Affordability for the business",
      "Value for employees",
      "Family benefits",
      "Ease of implementation",
      "Recruiting and retention value",
      "Healthcare access for myself",
    ],
  },
  {
    key: "nextStep",
    label: "NEXT STEP",
    question: "If there appears to be a fit, what would you prefer to do next?",
    helper:
      "Your answer helps us make any follow-up relevant to what you actually want.",
    options: [
      "Show me the business options",
      "Let me experience KonnectMD first",
      "I'd like a brief conversation",
      "Send me information to review",
      "I'm not ready for a follow-up yet",
    ],
  },
];

function calculateResult(answers) {
  let score = 0;

  if (
    answers.recruiting === "A major challenge" ||
    answers.recruiting === "One of our biggest challenges"
  ) {
    score += 2;
  } else if (
    answers.recruiting === "A noticeable challenge" ||
    answers.recruiting === "A minor challenge"
  ) {
    score += 1;
  }

  if (
    answers.retention === "Very concerned" ||
    answers.retention === "It's a major business issue"
  ) {
    score += 2;
  } else if (
    answers.retention === "Moderately concerned" ||
    answers.retention === "Slightly concerned"
  ) {
    score += 1;
  }

  if (
    answers.currentBenefits ===
      "Employees are responsible for their own healthcare" ||
    answers.currentBenefits ===
      "We currently offer no healthcare-related benefit" ||
    answers.currentBenefits ===
      "I'm self-employed and cover my own healthcare needs"
  ) {
    score += 2;
  } else if (
    answers.currentBenefits ===
      "We offer limited health or wellness benefits" ||
    answers.currentBenefits ===
      "We provide an allowance or reimbursement"
  ) {
    score += 1;
  }

  if (
    answers.interest === "Very open — I want to understand it" ||
    answers.interest === "Open if the value makes sense"
  ) {
    score += 2;
  } else if (
    answers.interest === "Possibly — I need more information" ||
    answers.interest === "I'm mainly comparing options"
  ) {
    score += 1;
  }

  if (
    answers.timing === "As soon as possible" ||
    answers.timing === "Within 30 days"
  ) {
    score += 2;
  } else if (answers.timing === "Within 1–3 months") {
    score += 1;
  }

  if (score >= 7) {
    return {
      readiness: "High Opportunity",
      headline: "There May Be a Strong Fit for Your Business.",
      message:
        "Your answers suggest that healthcare access, employee value or benefit affordability may already be affecting your business. KonnectMD may be worth a closer look as one possible way to strengthen what you can offer without starting with a traditional group health plan.",
    };
  }

  if (score >= 4) {
    return {
      readiness: "Worth Exploring",
      headline: "This Is Worth a Closer Look.",
      message:
        "Your answers show several areas where additional healthcare access could create value for you or your team. The next step is simply to understand the available options and determine whether they fit your priorities.",
    };
  }

  return {
    readiness: "Exploring",
    headline: "You're in the Right Place to Explore Your Options.",
    message:
      "Your business may not have an urgent healthcare-access problem today, but understanding your options now can help you make a more informed decision when your needs change.",
  };
}

export default function BusinessHealthcareAssessmentPage() {
  const navigate = useNavigate();

  const [stage, setStage] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const [contact, setContact] = useState({
    firstName: "",
    businessName: "",
    email: "",
    phone: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const question = questions[currentQuestion];

  const startAssessment = () => {
    setStage("questions");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectAnswer = (value) => {
    const updatedAnswers = {
      ...answers,
      [question.key]: value,
    };

    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 180);
    } else {
      const calculatedResult = calculateResult(updatedAnswers);
      setResult(calculatedResult);

      setTimeout(() => {
        setStage("capture");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 180);
    }
  };

  const goBack = () => {
    if (currentQuestion === 0) {
      setStage("intro");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setCurrentQuestion((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitAssessment = async (event) => {
    event.preventDefault();
    setSubmitError("");

    if (
      !contact.firstName.trim() ||
      !contact.businessName.trim() ||
      !contact.email.trim() ||
      !contact.phone.trim()
    ) {
      setSubmitError("Please complete all four fields.");
      return;
    }

    setSubmitting(true);

    const finalResult = result || calculateResult(answers);

    const payload = {
      firstName: contact.firstName.trim(),
      businessName: contact.businessName.trim(),
      email: contact.email.trim(),
      phone: contact.phone.trim(),

      teamSize: answers.teamSize || "",
      recruiting: answers.recruiting || "",
      retention: answers.retention || "",
      currentBenefits: answers.currentBenefits || "",
      employeeNeed: answers.employeeNeed || "",
      businessChallenge: answers.businessChallenge || "",
      interest: answers.interest || "",
      timing: answers.timing || "",
      priority: answers.priority || "",
      nextStep: answers.nextStep || "",

      readiness: finalResult.readiness,
      resultHeadline: finalResult.headline,
    };

    try {
      await fetch(ASSESSMENT_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setResult(finalResult);
      setStage("results");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Assessment submission error:", error);

      setSubmitError(
        "We couldn't submit your assessment. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const restartAssessment = () => {
    setAnswers({});
    setContact({
      firstName: "",
      businessName: "",
      email: "",
      phone: "",
    });
    setCurrentQuestion(0);
    setResult(null);
    setSubmitError("");
    setStage("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const returnToBusinessTop = () => {
    navigate("/resource-center/business-healthcare");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }, 50);
  };

  const goToBusinessOptions = () => {
    navigate("/resource-center/business-healthcare");

    setTimeout(() => {
      const section = document.getElementById("business-options");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  if (stage === "intro") {
    return (
      <main className="business-assessment-page">
        <section className="business-assessment-intro">
          <div className="business-assessment-container">
            <div className="business-assessment-intro-grid">
              <div className="business-assessment-intro-content">
                <span className="business-assessment-kicker">
                  BUSINESS HEALTHCARE READINESS ASSESSMENT™
                </span>

                <h1>
                  What Is Healthcare Access
                  <span>Really Costing Your Business?</span>
                </h1>

                <p className="business-assessment-lead">
                  In about two minutes, identify where healthcare
                  access may be affecting your employees, recruiting,
                  retention or your ability to compete.
                </p>

                <div className="business-assessment-promise">
                  <div>
                    <strong>10 Questions</strong>
                    <span>Quick and focused</span>
                  </div>

                  <div>
                    <strong>Personalized</strong>
                    <span>Based on your answers</span>
                  </div>

                  <div>
                    <strong>No Obligation</strong>
                    <span>Explore before deciding</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="business-assessment-start"
                  onClick={startAssessment}
                >
                  Start My Assessment →
                </button>

                <p className="business-assessment-note">
                  KonnectMD is a healthcare membership, not health
                  insurance.
                </p>
              </div>

              <div className="business-assessment-intro-panel">
                <span className="business-assessment-panel-label">
                  YOUR BUSINESS SNAPSHOT
                </span>

                <h2>What we'll look at</h2>

                <div className="business-assessment-check-list">
                  <div>
                    <span>✓</span>
                    <p>
                      <strong>Recruiting</strong>
                      Is healthcare affecting your ability to compete
                      for good people?
                    </p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>
                      <strong>Retention</strong>
                      Could greater everyday healthcare value help you
                      keep the people you already have?
                    </p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>
                      <strong>Healthcare Access</strong>
                      What do your employees currently have available
                      when they need care?
                    </p>
                  </div>

                  <div>
                    <span>✓</span>
                    <p>
                      <strong>Business Fit</strong>
                      Is there enough potential value to justify a
                      closer look?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (stage === "questions") {
    return (
      <main className="business-assessment-page">
        <section className="business-assessment-question-section">
          <div className="business-assessment-container">
            <div className="business-assessment-question-header">
              <div>
                <span className="business-assessment-question-label">
                  BUSINESS HEALTHCARE READINESS ASSESSMENT™
                </span>

                <h1>Your Business Snapshot</h1>
              </div>

              <div className="business-assessment-question-count">
                <strong>
                  {currentQuestion + 1}
                  <span> / {questions.length}</span>
                </strong>
                <small>QUESTION</small>
              </div>
            </div>

            <div className="business-assessment-progress-track">
              <div
                className="business-assessment-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="business-assessment-question-card">
              <div className="business-assessment-question-meta">
                <span>{question.label}</span>
                <small>
                  QUESTION {currentQuestion + 1} OF {questions.length}
                </small>
              </div>

              <h2>{question.question}</h2>

              <p className="business-assessment-helper">
                {question.helper}
              </p>

              <div className="business-assessment-answer-list">
                {question.options.map((option, index) => (
                  <button
                    type="button"
                    key={option}
                    className={`business-assessment-answer ${
                      answers[question.key] === option ? "selected" : ""
                    }`}
                    onClick={() => selectAnswer(option)}
                  >
                    <span className="business-assessment-letter">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span>{option}</span>

                    <span className="business-assessment-arrow">→</span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="business-assessment-back"
                onClick={goBack}
              >
                ← Back
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (stage === "capture") {
    return (
      <main className="business-assessment-page">
        <section className="business-assessment-results">
          <div className="business-assessment-container">
            <div className="business-assessment-results-card">
              <div className="business-assessment-complete-icon">
                ✓
              </div>

              <p className="business-assessment-result-label">
                ASSESSMENT COMPLETE
              </p>

              <h1>Your Business Snapshot Is Ready.</h1>

              <p className="business-assessment-result-message">
                Enter your information below to see your Business
                Healthcare Readiness result and the next step that may
                make the most sense for your business.
              </p>

              <form
                className="business-assessment-capture-form"
                onSubmit={submitAssessment}
              >
                <div className="business-assessment-form-grid">
                  <div className="business-assessment-field">
                    <label htmlFor="assessment-first-name">
                      First Name
                    </label>
                    <input
                      id="assessment-first-name"
                      type="text"
                      name="firstName"
                      value={contact.firstName}
                      onChange={handleContactChange}
                      autoComplete="given-name"
                      required
                    />
                  </div>

                  <div className="business-assessment-field">
                    <label htmlFor="assessment-business-name">
                      Business Name
                    </label>
                    <input
                      id="assessment-business-name"
                      type="text"
                      name="businessName"
                      value={contact.businessName}
                      onChange={handleContactChange}
                      autoComplete="organization"
                      required
                    />
                  </div>

                  <div className="business-assessment-field">
                    <label htmlFor="assessment-email">
                      Email
                    </label>
                    <input
                      id="assessment-email"
                      type="email"
                      name="email"
                      value={contact.email}
                      onChange={handleContactChange}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="business-assessment-field">
                    <label htmlFor="assessment-phone">
                      Mobile Phone
                    </label>
                    <input
                      id="assessment-phone"
                      type="tel"
                      name="phone"
                      value={contact.phone}
                      onChange={handleContactChange}
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>

                {submitError && (
                  <p className="business-assessment-submit-error">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  className="business-assessment-submit-button"
                  disabled={submitting}
                >
                  {submitting
                    ? "Preparing My Results..."
                    : "Show Me My Results →"}
                </button>

                <p className="business-assessment-privacy">
                  Your information is used to provide your assessment
                  result and relevant follow-up about KonnectMD
                  healthcare access options.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="business-assessment-page">
      <section className="business-assessment-results">
        <div className="business-assessment-container">
          <div className="business-assessment-results-card">
            <div className="business-assessment-complete-icon">
              ✓
            </div>

            <p className="business-assessment-result-label">
              YOUR BUSINESS HEALTHCARE READINESS RESULT
            </p>

            <h1>{result?.headline}</h1>

            <div className="business-assessment-status">
              <span>READINESS</span>
              <strong>{result?.readiness}</strong>
            </div>

            <p className="business-assessment-result-message">
              {result?.message}
            </p>

            <div className="business-assessment-result-grid">
              <div>
                <span>YOUR TEAM</span>
                <strong>{answers.teamSize}</strong>
              </div>

              <div>
                <span>BIGGEST POTENTIAL VALUE</span>
                <strong>{answers.employeeNeed}</strong>
              </div>

              <div>
                <span>YOUR TIMING</span>
                <strong>{answers.timing}</strong>
              </div>
            </div>

            <div className="business-assessment-next">
              <span>YOUR NEXT STEP</span>

              <h2>
                Let's see what may make sense for your business.
              </h2>

              <p>
                Your assessment gives us a starting point. Now you can
                review the business options and decide whether
                KonnectMD deserves a closer look for you and your team.
              </p>

              <button
                type="button"
                className="business-assessment-primary-button"
                onClick={goToBusinessOptions}
              >
                Show Me My Business Options →
              </button>

              <button
                type="button"
                className="business-assessment-secondary-link"
                onClick={returnToBusinessTop}
              >
                ← Return to Business Healthcare
              </button>
            </div>

            <button
              type="button"
              className="business-assessment-restart"
              onClick={restartAssessment}
            >
              Restart Assessment
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}