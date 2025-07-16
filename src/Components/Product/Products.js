import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);

        const  uniqueCategories= ['all', ...new Set(data.map(p => p.category))];
        setCategories(uniqueCategories);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(p => p.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="products-wrapper">
      <div className="filter-container">
        <label htmlFor="category-select">Filter by category:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="products-container">
        {filteredProducts.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          filteredProducts.map(product => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="product-link"
            >
              <div className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.title} className="product-image" />
                </div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">$ {product.price}</p>
                <p className="product-description">{product.description.substring(0, 100)}...</p>
                <p className="product-rating">
                  ⭐ {product.rating.rate} ({product.rating.count} reviews)
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;

