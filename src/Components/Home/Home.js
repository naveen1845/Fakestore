// src/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data.slice(0, 4)); // Only top 4 products
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
      });
  }, []);

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to FakeStore</h1>
        <p>Your one-stop shop for fake but fantastic products!</p>
      </header>

      <section className="highlight-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
