import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/MembershipFinder.css";

const questions = [
  {
    id: "essentialCare",
    label: "I mainly want affordable 24/7 physician access.",
    silver: 4,
    gold: 2,
    platinum: 1,
    titanium: 1,
  },
  {
    id: "prescriptions",
    label: "Prescription savings are one of my highest priorities.",
    silver: 2,
    gold: 3,
    platinum: 5,
    titanium: 5,
  },
  {
    id: "mentalHealth",
    label: "Counseling or mental health support is important.",
    silver: 0,
    gold: 5,
    platinum: 5,
    titanium: 5,
  },
  {
    id: "specialist",
    label: "I want access to specialist advice and dermatology.",
    silver: 0,
    gold: 2,
    platinum: 5,
    titanium: 5,
  },
  {
    id: "preventiveCare",
    label: "Preventive care, blood testing, or chronic-care support matters.",
    silver: 0,
    gold: 1,
    platinum: 5,
    titanium: 5,
  },
  {
    id: "maximumBenefits",
    label: "I want the most complete household healthcare package.",
    silver: 0,
    gold: 1,
    platinum: 3,
    titanium: 6,
  },
  {
    id: "petCare",
    label: "Veterinary or pet-health benefits would be useful.",
    silver: 0,
    gold: 0,
    platinum: 0,
    titanium: 6,
    addOn: "Concierge Virtual Pet Care",
  },
  {
    id: "medicalBills",
    label: "Help understanding or disputing medical bills would be valuable.",
    silver: 0,
    gold: 0,
    platinum: 1,
    titanium: 6,
    addOn: "Medical Bill Advocate",
  },
  {
    id: "weightManagement",
    label: "I am interested in physician-guided weight management.",
    silver: 0,
    gold: 0,
    platinum: 1,
    titanium: 1,
    addOn: "GLP-1 Weight Loss Program",
  },
];

const planDetails = {
  Silver: {
    price: "$59.99/mo",
    description:
      "Essential 24/7 concierge healthcare access and prescription savings for the household.",
  },
  Gold: {
    price: "$79.99/mo",
    description:
      "Everything in Silver, plus counseling, wellness support, and specialist messaging.",
  },
  Platinum: {
    price: "$99.99/mo",
    description:
      "Everything in Gold, plus broader medications, preventive care, dermatology, and chronic-care support.",
  },
  Titanium: {
    price: "$149.99/mo",
    description:
      "The most complete option, adding pet care, travel benefits, medical debt advocacy, and broader services.",
  },
};

function calculateRecommendation(selected) {
  const scores = {
    Silver: 0,
    Gold: 0,
    Platinum: 0,
    Titanium: 0,
  };

  questions.forEach((question) => {
    if (!selected.includes(question.id)) return;

    scores.Silver += question.silver;
    scores.Gold += question.gold;
    scores.Platinum += question.platinum;
    scores.Titanium += question.titanium;
  });

  const rankedPlans = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  return {
    recommended: rankedPlans[0][0],
    alternative: rankedPlans[1][0],
    scores,
  };
}

export default function MembershipFinder() {
  const [selected, setSelected] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const recommendation = useMemo(
    () => calculateRecommendation(selected),
    [selected]
  );

  const selectedQuestions = questions.filter((question) =>
    selected.includes(question.id)
  );

  const addOnSuggestions = [
    ...new Set(
      selectedQuestions
        .filter((question) => question.addOn)
        .map((question) => question.addOn)
    ),
  ];

  const toggleQuestion = (id) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

    setShowResults(false);
  };

  const resetFinder = () => {
    setSelected([]);
    setShowResults(false);
  };

  return (
    <section className="membership-finder" aria-labelledby="membership-finder-title">
      <div className="container membership-finder-shell">
        <div className="membership-finder-header">
          <p className="membership-finder-eyebrow">
            Personalized Membership Guide
          </p>

          <h2 id="membership-finder-title">
            Which KonnectMD Membership May Fit You Best?
          </h2>

          <p>
            Select everything that matters to your household. We will compare
            your priorities with the four membership levels and explain the
            result.
          </p>
        </div>

        {!showResults ? (
          <>
            <div className="membership-question-grid">
              {questions.map((question) => {
                const isSelected = selected.includes(question.id);

                return (
                  <button
                    key={question.id}
                    type="button"
                    className={`membership-question ${
                      isSelected ? "is-selected" : ""
                    }`}
                    onClick={() => toggleQuestion(question.id)}
                    aria-pressed={isSelected}
                  >
                    <span className="membership-checkbox" aria-hidden="true">
                      {isSelected ? "✓" : ""}
                    </span>

                    <span>{question.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="membership-finder-actions">
              <button
                type="button"
                className="btn btn-primary"
                disabled={selected.length === 0}
                onClick={() => setShowResults(true)}
              >
                Show My Recommendation
              </button>

              <button
                type="button"
                className="membership-reset-button"
                onClick={resetFinder}
              >
                Clear selections
              </button>
            </div>
          </>
        ) : (
          <div className="membership-result" aria-live="polite">
            <div className="membership-result-main">
              <p className="membership-result-label">Recommended membership</p>

              <h3>{recommendation.recommended}</h3>

              <div className="membership-result-price">
                {planDetails[recommendation.recommended].price}
              </div>

              <p>{planDetails[recommendation.recommended].description}</p>

              <div className="membership-why">
                <strong>Why this plan was recommended</strong>

                <ul>
                  {selectedQuestions.slice(0, 5).map((question) => (
                    <li key={question.id}>{question.label}</li>
                  ))}
                </ul>
              </div>

              <div className="membership-result-actions">
                <Link to="/plans" className="btn btn-primary">
                  Compare All Memberships
                </Link>

                <Link to="/get-details" className="btn btn-secondary">
                  Get Personalized Details
                </Link>
              </div>
            </div>

            <aside className="membership-result-side">
              <div className="membership-alternative">
                <span>Also consider</span>
                <strong>{recommendation.alternative}</strong>
                <p>
                  {planDetails[recommendation.alternative].description}
                </p>
              </div>

              {addOnSuggestions.length > 0 && (
                <div className="membership-addons">
                  <span>Optional services related to your selections</span>

                  <ul>
                    {addOnSuggestions.map((addOn) => (
                      <li key={addOn}>{addOn}</li>
                    ))}
                  </ul>

                  <p>
                    Add-on services are purchased separately and do not
                    determine the core membership recommendation.
                  </p>
                </div>
              )}

              <button
                type="button"
                className="membership-start-over"
                onClick={resetFinder}
              >
                Start over
              </button>
            </aside>
          </div>
        )}

        <p className="membership-finder-disclaimer">
          This tool provides general educational guidance based on the plan
          information supplied by KonnectMD. It is not medical, insurance, or
          financial advice. Review complete membership terms before enrolling.
        </p>
      </div>
    </section>
  );
}