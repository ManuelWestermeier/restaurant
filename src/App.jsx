import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import NotFound from './pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"           element={<Home />} />
        <Route path="/kontakt"    element={<Kontakt />} />
        <Route path="/impressum"  element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="*"           element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(() => {
    return localStorage.getItem('cookiesAccepted') === 'true';
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-bg">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        {!cookiesAccepted && (
          <CookieBanner onAccept={() => setCookiesAccepted(true)} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
