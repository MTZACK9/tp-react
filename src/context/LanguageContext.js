import React, { createContext, useState, useContext } from 'react';

const translations = {
    en: {
        searchPlaceholder: 'Search for a product...',
        loading: 'Loading...',
        error: 'Error:',
        price: 'Price:',
        previous: 'Previous',
        next: 'Next',
        page: 'Page',
        of: 'of',
        reload_products: "Reload Product"

    },
    fr: {
        searchPlaceholder: 'Rechercher un produit...',
        loading: 'Chargement...',
        error: 'Erreur :',
        price: 'Prix :',
        previous: 'Précédent',
        next: 'Suivant',
        page: 'Page',
        of: 'sur',
        reload_products: "Recharger les produits"
    },
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr');

    const translate = (key) => translations[language][key] || key;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);