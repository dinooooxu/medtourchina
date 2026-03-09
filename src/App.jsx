import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Hospitals from './pages/Hospitals';
import Guide from './pages/Guide';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
