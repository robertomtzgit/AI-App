import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page.tsx";
import TextAnalysisView from "./pages/text-analysis-view.tsx";
import LoginView from "./pages/login-view.tsx";
import RegisterView from "./pages/register-view.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx"; // Asegurarse de la extensión correcta
import PrivateRoute from "./components/PrivateRoute.js"; // Considera renombrarlo a .tsx si usas TypeScript

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<LandingPage />} />
          {/* Ruta protegida /analysis */}
          <Route
            path="/analysis"
            element={
              <PrivateRoute>
                <TextAnalysisView />
              </PrivateRoute>
            }
          />
          {/* Rutas de autenticación */}
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
          {/* Corregir la ruta */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
