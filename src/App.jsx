import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import PlansPage from "./pages/PlansPage";
import ContactPage from "./pages/ContactPage";
import CalendarPage from "./pages/CalendarPage";
import LandingPage from "./pages/LandingPage";
import JoinPage from "./pages/JoinPage";

import NorfolkPage from "./pages/NorfolkPage";
import VirginiaBeachPage from "./pages/VirginiaBeachPage";
import ChesapeakePage from "./pages/ChesapeakePage";
import PortsmouthPage from "./pages/PortsmouthPage";
import HamptonPage from "./pages/HamptonPage";
import NewportNewsPage from "./pages/NewportNewsPage";
import SuffolkPage from "./pages/SuffolkPage";
import LocationsPage from "./pages/LocationsPage";

import FamilyCoveragePage from "./pages/FamilyCoveragePage";
import NoInsuranceDoctorPage from "./pages/NoInsuranceDoctorPage";
import PrescriptionSavingsPage from "./pages/PrescriptionSavingsPage";
import SmallBusinessHealthcarePage from "./pages/SmallBusinessHealthcarePage";

import InterestSelector from "./pages/InterestSelector";
import TelehealthPage from "./pages/TelehealthPage";
import RxSavingsPage from "./pages/RxSavingsPage";
import MentalHealthPage from "./pages/MentalHealthPage";
import FamilyMembershipPage from "./pages/FamilyMembershipPage";
import AdditionalBenefitsPage from "./pages/AdditionalBenefitsPage";

import TelehealthIndustryPage from "./pages/TelehealthIndustryPage";
import HealthcareAlternativesPage from "./pages/HealthcareAlternativesPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LaunchBanner() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #0284c7, #0ea5e9)",
        color: "white",
        textAlign: "center",
        padding: "10px 15px",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "1.5",
      }}
    >
      🚀 LIVE ZOOM EVENT – May 21 @ 8PM | Hampton Roads Launch{" "}
      <a
        href="https://www.eventbrite.com/e/the-answer-to-rising-healthcare-costs-tickets-1988397603759?aff=oddtdtcreator"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#fff",
          marginLeft: "8px",
          textDecoration: "underline",
          fontWeight: "800",
          whiteSpace: "nowrap",
        }}
      >
        Reserve Your Spot Now →
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LaunchBanner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/plans" element={<PlansPage />} />
        <Route path="/get-details" element={<InterestSelector />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-call" element={<CalendarPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/join-the-team" element={<JoinPage />} />

        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/norfolk-va" element={<NorfolkPage />} />
        <Route path="/locations/virginia-beach-va" element={<VirginiaBeachPage />} />
        <Route path="/locations/chesapeake-va" element={<ChesapeakePage />} />
        <Route path="/locations/portsmouth-va" element={<PortsmouthPage />} />
        <Route path="/locations/hampton-va" element={<HamptonPage />} />
        <Route path="/locations/newport-news-va" element={<NewportNewsPage />} />
        <Route path="/locations/suffolk-va" element={<SuffolkPage />} />

        <Route path="/problems/family-healthcare" element={<FamilyCoveragePage />} />
        <Route path="/problems/doctor-without-insurance" element={<NoInsuranceDoctorPage />} />
        <Route path="/problems/prescription-savings" element={<PrescriptionSavingsPage />} />
        <Route path="/problems/small-business-healthcare" element={<SmallBusinessHealthcarePage />} />

        <Route path="/get-details/telehealth" element={<TelehealthPage />} />
        <Route path="/get-details/rx-savings" element={<RxSavingsPage />} />
        <Route path="/get-details/mental-health" element={<MentalHealthPage />} />
        <Route path="/get-details/family-membership" element={<FamilyMembershipPage />} />
        <Route path="/get-details/additional-benefits" element={<AdditionalBenefitsPage />} />

        <Route path="/telehealth-growth" element={<TelehealthIndustryPage />} />
        <Route
          path="/healthcare-alternatives-hampton-roads"
          element={<HealthcareAlternativesPage />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}