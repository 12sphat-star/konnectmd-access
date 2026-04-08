import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import PlansPage from "./pages/PlansPage";
import ContactPage from "./pages/ContactPage";
import CalendarPage from "./pages/CalendarPage";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/get-details" element={<ContactPage />} />
        <Route path="/book-call" element={<CalendarPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}