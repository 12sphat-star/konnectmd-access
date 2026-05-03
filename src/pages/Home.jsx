import { useEffect } from "react";
import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import WhatItIs from "../components/home/WhatItIs";
import VideoSection from "../components/home/VideoSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CostComparison from "../components/home/CostComparison";
import WhoItsFor from "../components/home/WhoItsFor";
import FastAccess from "../components/home/FastAccess";
import HowItWorks from "../components/home/HowItWorks";
import PlansPreview from "../components/home/PlansPreview";
import TestimonialsSection from "../components/home/TestimonialsSection";
import AddOnsSection from "../components/home/AddOnsSection";
import Disclaimer from "../components/shared/Disclaimer";
import FAQSection from "../components/home/FAQSection";
import AgentSection from "../components/home/AgentSection";
import LaunchSection from "../components/home/LaunchSection";
import CTASection from "../components/home/CTASection";
import SEO from "../components/SEO";

export default function Home() {
  useEffect(() => {
  document.title = "KonnectMD Access | Affordable Healthcare in Hampton Roads";
}, []);
  return (
    <>
    <SEO
  title="Affordable Healthcare Access in Hampton Roads | KonnectMD"
  description="KonnectMD helps Hampton Roads families, entrepreneurs, and small business owners access virtual care, prescription savings, mental health support, family membership options, and more."
  path="/"
/>
      <Hero />
      <TrustStrip />
      <WhatItIs />
    <VideoSection />
  <WhyChooseUs />
  <CostComparison />
<WhoItsFor />
<FastAccess />
<HowItWorks />
<PlansPreview />
<TestimonialsSection />
<AddOnsSection />
      <Disclaimer />
      <FAQSection />
      <AgentSection />
      <LaunchSection />
      <CTASection />
    </>
  );
}