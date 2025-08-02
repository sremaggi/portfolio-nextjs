'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Importar los archivos de traducción
import en from '@/locales/en.json';
import es from '@/locales/es.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState(en);

    // Cargar traducciones desde el archivo correspondiente
    useEffect(() => {
        if (language === 'en') {
            setTranslations(en);
        } else {
            setTranslations(es);
        }
    }, [language]);

    // Cambiar idioma
    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'es' : 'en';
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
