import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CertificatesPage from './pages/CertificatesPage';
import FitnessPage from './pages/FitnessPage';
// import Footer from './components/Footer'; // Can add later

// ScrollToTop component to handle route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/fitness" element={<FitnessPage />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
