import SectionHeading from "../shared/SectionHeading";

export default function WhoItsFor() {
  const items = [
    "Self-employed individuals and families",
    "Small business owners exploring flexible options",
    "Households that want up to 7 members on one plan",
    "People looking for nationwide access to services",
    "Those who want a simpler way to stay connected to care",
    "People reviewing additional healthcare access options",
  ];

  return (
    <section id="who-its-for" className="section section-dark">
      <div className="container two-col">
        <div>
          <img
            src="/images/who-it-helps.jpg"
            alt="Family and business-focused healthcare access"
            className="section-image"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="Who It Helps"
            title="Built for households, business owners, and people who need another option"
            text="KonnectMD Access is designed for real-life use, with nationwide access and room for up to 7 members on one plan."
          />
          <ul className="check-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}