import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Erreur lors de la lecture du localStorage :', error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error('Erreur lors de l\'écriture dans le localStorage :', error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};

export default useLocalStorage;