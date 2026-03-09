import { createContext, useContext, useState } from 'react'
import { translations, languages } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k]
      } else {
        return key
      }
    }
    
    return value
  }

  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setLanguage(langCode)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
