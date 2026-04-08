import SectionHeading from "../shared/SectionHeading";

export default function FastAccess() {
  return (
    <section className="section section-dark">
      <div className="container two-col">
        <div>
          <img
            src="/images/doctor-call.jpg"
            alt="Doctor on a virtual call"
            className="section-image"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="Get Started Fast"
            title="Use your benefits quickly after enrollment"
            text="For many people, speed matters just as much as affordability."
          />
          <p className="body-copy">
            This solution is designed to help you get started fast, without the
            delays people often expect from traditional insurance processes.
          </p>
          <p className="body-copy">
            It also gives people confidence knowing they can explore an option
            that is not built around pre-existing condition exclusions in the
            same way many traditional insurance conversations are.
          </p>
        </div>
      </div>
    </section>
  );
}