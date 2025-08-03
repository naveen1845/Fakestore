import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data.slice(0, 4)))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="home">
      <header className="home-header">
        <div className="hero-content">
          <h1>Welcome to <span>ApniDukaan</span></h1>
          <p>Fake products. Real vibes. The best shopping you'll never regret!</p>
        </div>
      </header>

      <section className="highlight-section">
        <h2>🔥 Featured Picks</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
