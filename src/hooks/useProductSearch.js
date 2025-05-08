import { useState, useEffect } from 'react';

const useProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Produits filtrés
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); // Terme de recherche

  const fetchProducts = async (page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.daaif.net/products?delay=1000&page=${page}`);
      if (!response.ok) throw new Error('Erreur réseau');
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filtrer les produits en fonction du terme de recherche
  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  const reloadProducts = () => {
    fetchProducts(currentPage);
  };


  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  return {
    products: filteredProducts, 
    loading,
    error,
    reloadProducts,
    handleSearch 
  };
};

export default useProductSearch;