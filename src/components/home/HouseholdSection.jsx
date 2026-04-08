import SectionHeading from "../shared/SectionHeading";

export default function HouseholdSection() {
  return (
    <section className="section">
      <div className="container two-col">
        <div>
          <SectionHeading
            eyebrow="Household Value"
            title="A practical option for your household, not just one person"
            text="If your package includes household enrollment, this can be a powerful way to extend healthcare access beyond just the primary member."
          />
          <p className="body-copy">
            This is one of the biggest reasons people take a closer look.
            Instead of thinking only about individual access, this can help
            support the people who matter most in your home.
          </p>
          <p className="body-copy">
            If applicable to your selected plan, up to 7 household members,
            including yourself, may be included.
          </p>
        </div>

        <div>
          <img
            src="/images/family-care.jpg"
            alt="Family reviewing healthcare options together"
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
}