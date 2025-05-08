import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { useLanguage } from '../context/LanguageContext';
import useProductSearch from '../hooks/useProductSearch';
import ProductSearch from './ProductSearch'; // Importer ProductSearch

const ProductList = () => {
    const { isDarkTheme } = useContext(ThemeContext);
    const { translate } = useLanguage();
    const {
        products,
        loading,
        error,
        reloadProducts,
        handleSearch // Récupérer handleSearch
    } = useProductSearch();

    if (loading) return (
        <div className="text-center my-4">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">{translate('loading')}</span>
            </div>
        </div>
    );

    if (error) return (
        <div className="alert alert-danger" role="alert">
            {translate('error')} {error}
            <button onClick={reloadProducts} className="btn btn-warning ms-3">
                Recharger
            </button>
        </div>
    );

    return (
        <div>
            {/* Passer handleSearch à ProductSearch */}
            <ProductSearch onSearch={handleSearch} />
            <button onClick={reloadProducts} className="btn btn-primary mb-3">
                {translate('reload_products')}
            </button>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {products.map(product => (
                    <div key={product.id} className="col">
                        <div className={`card h-100 ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
                            {product.thumbnail && (
                                <img
                                    src={product.thumbnail}
                                    className="card-img-top"
                                    alt={product.title}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">
                                    <strong>{translate('price')}</strong>
                                    {product.price}€
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProductList;