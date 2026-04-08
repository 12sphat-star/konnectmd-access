import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import WhyChooseUs from "../components/home/WhyChooseUs";
import WhatItIs from "../components/home/WhatItIs";
import HouseholdSection from "../components/home/HouseholdSection";
import FastAccess from "../components/home/FastAccess";
import WhoItsFor from "../components/home/WhoItsFor";
import HowItWorks from "../components/home/HowItWorks";
import PlansPreview from "../components/home/PlansPreview";
import LaunchSection from "../components/home/LaunchSection";
import CTASection from "../components/home/CTASection";
import Disclaimer from "../components/shared/Disclaimer";
import AddOnsSection from "../components/home/AddOnsSection";
import BusinessSection from "../components/home/BusinessSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyChooseUs />
      <WhatItIs />
      <HouseholdSection />
      <FastAccess />
      <WhoItsFor />
      <HowItWorks />
      <PlansPreview />
      <AddOnsSection />
      <BusinessSection />
      <Disclaimer />
      <LaunchSection />
      <CTASection />
    </>
  );
}