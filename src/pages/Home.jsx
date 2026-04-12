import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import WhatItIs from "../components/home/WhatItIs";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CostComparison from "../components/home/CostComparison";
import WhoItsFor from "../components/home/WhoItsFor";
import FastAccess from "../components/home/FastAccess";
import HowItWorks from "../components/home/HowItWorks";
import PlansPreview from "../components/home/PlansPreview";
import AddOnsSection from "../components/home/AddOnsSection";
import Disclaimer from "../components/shared/Disclaimer";
import AgentSection from "../components/home/AgentSection";
import LaunchSection from "../components/home/LaunchSection";
import CTASection from "../components/home/CTASection";


export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhatItIs />
  <WhyChooseUs />
  <CostComparison />
<WhoItsFor />
<FastAccess />
<HowItWorks />
<PlansPreview />
<AddOnsSection />
      <Disclaimer />
      <AgentSection />
      <LaunchSection />
      <CTASection />
    </>
  );
}