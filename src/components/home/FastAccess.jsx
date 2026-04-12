import SectionHeading from "../shared/SectionHeading";

export default function FastAccess() {
  return (
    <section className="section section-dark">
      <div className="container two-col">
        <div>
          <img
            src="/images/prescription-savings.jpg"
            alt="Person picking up a prescription at a pharmacy"
            className="section-image"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="What You Get"
            title="Practical access to care, support, and everyday value"
            text="KonnectMD Access is built to give members a simpler way to stay connected to services that matter."
          />
          <p className="body-copy">
            Depending on the membership level, access may include virtual urgent
            care, primary care, prescriptions, wellness support, mental health
            services, specialist access, and more.
          </p>
          <p className="body-copy">
            Members can also access added value through discounts and services
            that help make healthcare support feel more usable and less
            stressful.
          </p>
        </div>
      </div>
    </section>
  );
}