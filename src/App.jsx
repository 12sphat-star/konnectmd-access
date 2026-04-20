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

import InterestSelector from "./pages/InterestSelector";
import TelehealthPage from "./pages/TelehealthPage";
import RxSavingsPage from "./pages/RxSavingsPage";
import MentalHealthPage from "./pages/MentalHealthPage";
import FamilyMembershipPage from "./pages/FamilyMembershipPage";
import AdditionalBenefitsPage from "./pages/AdditionalBenefitsPage";

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<PlansPage />} />

        <Route path="/get-details" element={<InterestSelector />} />
        <Route path="/get-details/telehealth" element={<TelehealthPage />} />
        <Route path="/get-details/rx-savings" element={<RxSavingsPage />} />
        <Route path="/get-details/mental-health" element={<MentalHealthPage />} />
        <Route path="/get-details/family-membership" element={<FamilyMembershipPage />} />
        <Route path="/get-details/additional-benefits" element={<AdditionalBenefitsPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-call" element={<CalendarPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/join-the-team" element={<JoinPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}