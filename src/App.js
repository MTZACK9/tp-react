import React, { createContext, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider } from './context/LanguageContext'; // Importer le LanguageProvider

export const ThemeContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
      <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        {/* Wrapper avec LanguageContext.Provider */}
        <LanguageProvider>
          <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
            <header className="my-4">
              <h1 className="text-center">Catalogue de Produits</h1>
              <div className="d-flex justify-content-end gap-2">
                <ThemeToggle />
                {/* Ajouter le sélecteur de langue */}
                <LanguageSelector />
              </div>
            </header>
            <main>
              <ProductList />
            </main>
          </div>
        </LanguageProvider>
      </ThemeContext.Provider>
  );
};

export default App;