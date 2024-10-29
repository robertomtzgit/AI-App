import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page.tsx";
import TextAnalysisView from "./pages/text-analysis-view.tsx";
import LoginView from "./pages/login-view.tsx";
import RegisterView from "./pages/register-view.tsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<LandingPage />} />

          {/* Ruta /analysis para mostrar el componente TextAnalysisView */}
          <Route path="/analysis" element={<TextAnalysisView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
