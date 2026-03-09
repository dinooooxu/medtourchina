import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function Header() {
  const { t, language, changeLanguage, languages } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
            <div className="bg-white/20 p-2 rounded-lg">
              <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="font-bold">MedTour China</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-primary-200 transition">{t('nav.home')}</Link>
            <Link to="/search" className="hover:text-primary-200 transition">{t('nav.search')}</Link>
            <Link to="/guide" className="hover:text-primary-200 transition">{t('nav.guide')}</Link>
            <Link to="/about" className="hover:text-primary-200 transition">{t('nav.about')}</Link>
            <Link to="/contact" className="hover:text-primary-200 transition">{t('nav.contact')}</Link>
            
            <div className="relative ml-4">
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-primary-700 text-white px-3 py-1 rounded text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block hover:text-primary-200 transition" onClick={() => setMobileMenuOpen(false)}>{t('nav.home')}</Link>
            <Link to="/search" className="block hover:text-primary-200 transition" onClick={() => setMobileMenuOpen(false)}>{t('nav.search')}</Link>
            <Link to="/guide" className="block hover:text-primary-200 transition" onClick={() => setMobileMenuOpen(false)}>{t('nav.guide')}</Link>
            <Link to="/about" className="block hover:text-primary-200 transition" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</Link>
            <Link to="/contact" className="block hover:text-primary-200 transition" onClick={() => setMobileMenuOpen(false)}>{t('nav.contact')}</Link>
            
            <div className="relative">
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-primary-700 text-white px-3 py-2 rounded text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-300 w-full"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
