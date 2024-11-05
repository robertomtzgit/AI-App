import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page.tsx";
import TextAnalysisView from "./pages/text-analysis-view.tsx";
import LoginView from "./pages/login-view.tsx";
import RegisterView from "./pages/register-view.tsx";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/analysis" element={<TextAnalysisView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
