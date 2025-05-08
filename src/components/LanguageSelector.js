import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="form-select"
        >
            <option value="fr">Français</option>
            <option value="en">English</option>
        </select>
    );
};

export default LanguageSelector;