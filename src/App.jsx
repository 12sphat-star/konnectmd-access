import ScrollLeadPopup from "./components/shared/ScrollLeadPopup";
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
import BusinessHealthcarePage from "./pages/BusinessHealthcarePage";
import EntrepreneursPage from "./pages/EntrepreneursPage";
import TelehealthResourceCenter from "./pages/TelehealthResourceCenter";

import InterestSelector from "./pages/InterestSelector";
import TelehealthPage from "./pages/TelehealthPage";
import RxSavingsPage from "./pages/RxSavingsPage";
import MentalHealthPage from "./pages/MentalHealthPage";
import FamilyMembershipPage from "./pages/FamilyMembershipPage";
import AdditionalBenefitsPage from "./pages/AdditionalBenefitsPage";
import VeteranMentalHealthSupportPage from "./pages/VeteranMentalHealthSupportPage";
import TelehealthForVeteransPage from "./pages/TelehealthForVeteransPage";

import VeteransResourceCenter from "./pages/VeteransResourceCenter";
import PrescriptionSavingsResourceCenter from "./pages/PrescriptionSavingsResourceCenter";
import BehavioralHealthResourceCenter from "./pages/BehavioralHealthResourceCenter";
import FamilyHealthcareResourceCenter from "./pages/FamilyHealthcareResourceCenter";
import SmallBusinessHealthcareResourceCenter from "./pages/SmallBusinessHealthcareResourceCenter";
import EntrepreneurHealthcareResourceCenter from "./pages/EntrepreneurHealthcareResourceCenter";

import TelehealthIndustryPage from "./pages/TelehealthIndustryPage";
import HealthcareAlternativesPage from "./pages/HealthcareAlternativesPage";

import LaunchPage from "./pages/LaunchPage";
import NorfolkTelehealthPage from "./pages/NorfolkTelehealthPage";
import VirginiaBeachTelehealthPage from "./pages/VirginiaBeachTelehealthPage";
import ChesapeakeTelehealthPage from "./pages/ChesapeakeTelehealthPage";
import PortsmouthTelehealthPage from "./pages/PortsmouthTelehealthPage";
import HamptonTelehealthPage from "./pages/HamptonTelehealthPage";
import NewportNewsTelehealthPage from "./pages/NewportNewsTelehealthPage";
import SuffolkTelehealthPage from "./pages/SuffolkTelehealthPage";
import MentalHealthSupportHamptonRoadsPage from "./pages/MentalHealthSupportHamptonRoadsPage";
import InsightsPage from "./pages/InsightsPage";
import TelehealthGrowingArticlePage from "./pages/TelehealthGrowingArticlePage";
import WhenToUseTelehealthVsUrgentCarePage from "./pages/WhenToUseTelehealthVsUrgentCarePage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
   <BrowserRouter>
  <ScrollToTop />
  <Navbar />
  <ScrollLeadPopup />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Main Pages */}
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/get-details" element={<InterestSelector />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-call" element={<CalendarPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/join-the-team" element={<JoinPage />} />

        {/* NEW LAUNCH PAGE */}
        <Route path="/launch" element={<LaunchPage />} />
        <Route path="/veterans-healthcare-access" element={<LaunchPage />} />
        <Route path="/insights/veteran-mental-health-support-hampton-roads"element={<VeteranMentalHealthSupportPage />}
/>
        {/* Locations */}
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/norfolk-va" element={<NorfolkPage />} />
        <Route path="/locations/virginia-beach-va" element={<VirginiaBeachPage />} />
        <Route path="/locations/chesapeake-va" element={<ChesapeakePage />} />
        <Route path="/locations/portsmouth-va" element={<PortsmouthPage />} />
        <Route path="/locations/hampton-va" element={<HamptonPage />} />
        <Route path="/locations/newport-news-va" element={<NewportNewsPage />} />
        <Route path="/locations/suffolk-va" element={<SuffolkPage />} />
<Route path="/norfolk-telehealth" element={<NorfolkTelehealthPage />} />
<Route path="/virginia-beach-telehealth" element={<VirginiaBeachTelehealthPage />} />
<Route path="/chesapeake-telehealth" element={<ChesapeakeTelehealthPage />} />
<Route path="/portsmouth-telehealth" element={<PortsmouthTelehealthPage />} />
<Route path="/hampton-telehealth" element={<HamptonTelehealthPage />} />
<Route path="/newport-news-telehealth" element={<NewportNewsTelehealthPage />} />
<Route path="/suffolk-telehealth" element={<SuffolkTelehealthPage />} />
<Route path="/insights" element={<InsightsPage />} />
<Route path="/insights/why-telehealth-is-growing-hampton-roads"element={<TelehealthGrowingArticlePage />}

/>

<Route
  path="/insights/telehealth-for-veterans-hampton-roads"
  element={<TelehealthForVeteransPage />}
/>
<Route
  path="/resource-center/telehealth"
  element={<TelehealthResourceCenter />}
 /> 
<Route
  path="/resource-center/veterans"
  element={<VeteransResourceCenter />}
/>
<Route
  path="/resource-center/prescription-savings"
  element={<PrescriptionSavingsResourceCenter />}
/>
<Route
  path="/resource-center/behavioral-health"
  element={<BehavioralHealthResourceCenter />}
/>
<Route
  path="/resource-center/family-healthcare"
  element={<FamilyHealthcareResourceCenter />}
/>
<Route
  path="/resource-center/business-healthcare"
  element={<BusinessHealthcarePage />}
/>
<Route
  path="/resource-center/entrepreneurs"
  element={<EntrepreneursPage />}
/>
<Route
  path="/insights/when-to-use-telehealth-vs-urgent-care-vs-er-hampton-roads"
  element={<WhenToUseTelehealthVsUrgentCarePage />}
/>

        {/* Problem / Solution Pages */}
        <Route
          path="/problems/family-healthcare"
          element={<FamilyCoveragePage />}
        />

        <Route
          path="/problems/doctor-without-insurance"
          element={<NoInsuranceDoctorPage />}
        />

        <Route
          path="/problems/prescription-savings"
          element={<PrescriptionSavingsPage />}
        />

        <Route
          path="/resource-center/business-healthcare"
          element={<SmallBusinessHealthcarePage />}
        />

        <Route
          path="/business-owners-entrepreneurs-healthcare-hampton-roads"
          element={<BusinessHealthcarePage />}
        />

        {/* Detail Pages */}
        <Route
          path="/get-details/telehealth"
          element={<TelehealthPage />}
        />

        <Route
          path="/get-details/rx-savings"
          element={<RxSavingsPage />}
        />

        <Route
          path="/get-details/mental-health"
          element={<MentalHealthPage />}
        />

        <Route
          path="/get-details/family-membership"
          element={<FamilyMembershipPage />}
        />

        <Route
          path="/get-details/additional-benefits"
          element={<AdditionalBenefitsPage />}
        />

        {/* SEO Pages */}
        <Route
          path="/telehealth-growth"
          element={<TelehealthIndustryPage />}
        />

        <Route
          path="/healthcare-alternatives-hampton-roads"
          element={<HealthcareAlternativesPage />}
        />

<Route
  path="/mental-health-support-hampton-roads"
  element={<MentalHealthSupportHamptonRoadsPage />}

/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}