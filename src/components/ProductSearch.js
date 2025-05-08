import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../App';
import useDebounce from '../hooks/useDebounce';
import { useLanguage } from '../context/LanguageContext'; // Importer useLanguage


const ProductSearch = ({ onSearch = () => {} }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { isDarkTheme } = useContext(ThemeContext);
    const { translate } = useLanguage(); // Utiliser le contexte de langue

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        onSearch(debouncedSearchTerm);

    }, [debouncedSearchTerm, onSearch]);

    return (
        <div className="mb-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={translate('searchPlaceholder')} // Utiliser la traduction
                className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
            />
        </div>
    );
};

export default ProductSearch;