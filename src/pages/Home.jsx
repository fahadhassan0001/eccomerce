import React, { useState } from 'react';
import products from '../assets/Product.json';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="home">
      <h1>Home page</h1>
      <p>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
