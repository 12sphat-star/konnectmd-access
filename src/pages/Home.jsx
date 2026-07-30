import Hero from "../components/home/Hero";
import KonnectMDIntro from "../components/home/KonnectMDIntro";
import WhoWeHelp from "../components/home/WhoWeHelp";
import KonnectMDFeatures from "../components/home/KonnectMDFeatures";
import TrustStrip from "../components/home/TrustStrip";
import HealthcareDashboard from "../components/home/HealthcareDashboard";
import PrescriptionSavingsCenter from "../components/home/PrescriptionSavingsCenter";
import MembershipFinder from "../components/home/MembershipFinder";
import PlansPreview from "../components/home/PlansPreview";
import TestimonialsSection from "../components/home/TestimonialsSection";
import LearningCenter from "../components/home/LearningCenter";
import VideoSection from "../components/home/VideoSection";
import LatestInsights from "../components/home/LatestInsights";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";
import SEO from "../components/SEO";

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://rukonnected.com/#website",
      url: "https://rukonnected.com/",
      name: "KonnectMD Access",
      description:
        "A healthcare access resource center offering education, decision guides, membership information, and access to healthcare solutions available through KonnectMD.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://rukonnected.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://rukonnected.com/#organization",
      name: "KonnectMD Access",
      url: "https://rukonnected.com/",
      description:
        "KonnectMD Access helps individuals, families, veterans, entrepreneurs, and businesses understand healthcare access options and connect with services available through KonnectMD.",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <SEO
        title="Healthcare Access Resource Center | KonnectMD Access"
        description="Explore trusted healthcare resources, 24/7 physician access, prescription savings, behavioral health services, family memberships, business solutions, and KonnectMD membership options nationwide."
        path="/"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />

      <Hero />
      <KonnectMDIntro />
      <WhoWeHelp />
      <KonnectMDFeatures />
      <TrustStrip />
      <HealthcareDashboard />
      <PrescriptionSavingsCenter />
      <MembershipFinder />
      <PlansPreview />
      <TestimonialsSection />
      <LearningCenter />
      <VideoSection />
      <LatestInsights />
      <FAQSection />
      <CTASection />
    </>
  );
}