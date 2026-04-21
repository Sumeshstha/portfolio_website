import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import UnderConstruction from './pages/UnderConstruction';

const getRouterBasename = () => {
  const publicUrl = process.env.PUBLIC_URL || '';

  if (!publicUrl) {
    return '';
  }

  if (publicUrl.startsWith('http')) {
    try {
      const { pathname } = new URL(publicUrl);
      return pathname === '/' ? '' : pathname.replace(/\/$/, '');
    } catch {
      return '';
    }
  }

  return publicUrl.replace(/\/$/, '');
};

const routerBasename = getRouterBasename();

function App() {
  return (
    <ThemeProvider>
      <Router basename={routerBasename}>
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 overflow-x-hidden w-full max-w-full">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* TEMP UNDER-CONSTRUCTION ROUTES (Apr 2026)
                  To undo: remove routes below and restore real page components/routes. */}
              <Route path="/contact" element={<UnderConstruction />} />
              <Route path="/certificates" element={<UnderConstruction />} />
              <Route path="*" element={<UnderConstruction />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
