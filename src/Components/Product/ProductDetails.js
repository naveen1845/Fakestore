import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch product details');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading product details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return null;

  return (
    <div className="product-details-container">
      <Link to="/products" className="back-link">&larr; Back to Products</Link>

      <div className="product-details-card">
        <img src={product.image} alt={product.title} className="product-details-image" />
        <div className="product-details-info">
          <h2>{product.title}</h2>
          <p className="product-details-price">₹{product.price}</p>
          <p className="product-details-description">{product.description}</p>
          <p className="product-details-category"><strong>Category:</strong> {product.category}</p>
          <p className="product-details-rating">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
