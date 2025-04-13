import React from 'react';
import { useParams } from 'react-router-dom';
import products from "../assets/Product.json"
const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Product;
