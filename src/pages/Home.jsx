import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import WhatItIs from "../components/home/WhatItIs";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FastAccess from "../components/home/FastAccess";
import WhoItsFor from "../components/home/WhoItsFor";
import HowItWorks from "../components/home/HowItWorks";
import PlansPreview from "../components/home/PlansPreview";
import AddOnsSection from "../components/home/AddOnsSection";
import BusinessSection from "../components/home/BusinessSection";
import HouseholdSection from "../components/home/HouseholdSection";
import Disclaimer from "../components/shared/Disclaimer";
import LaunchSection from "../components/home/LaunchSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhatItIs />
      <WhyChooseUs />
      <FastAccess />
      <WhoItsFor />
      <HowItWorks />
      <PlansPreview />
      <HouseholdSection />
      <AddOnsSection />
      <BusinessSection />
      <Disclaimer />
      <LaunchSection />
      <CTASection />
    </>
  );
}