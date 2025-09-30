// Product.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { meals } from './mealsData';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // legge il param id dall'URL

  // Trova il prodotto nei dati in base all'id dinamico
  const product = meals.find((meal) => meal.id === id);

  if (!product) {
    return <p>Prodotto non trovato.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Prezzo: €{product.price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
