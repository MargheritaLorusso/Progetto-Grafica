import React, { useState } from 'react';
import './MealItem.css';

interface Props {
  title: string;
  description: string;
  price: number;
}

const MealItem: React.FC<Props> = ({ title, description, price }) => {
  const [amount, setAmount] = useState(1);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Aggiunto ${amount} x ${title} al carrello!`);
    // Qui puoi aggiungere la logica per aggiornare il carrello
  };

  return (
    <div className="meal-item">
      <div>
        <h3>{title}</h3>
        <span className="description">{description}</span>
        <span className="price">${price.toFixed(2)}</span>
      </div>
      <form className="actions" onSubmit={handleAdd}>
        <label>
          Amount
          <input
            type="number"
            min="1"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            className="amount-input"
          />
        </label>
        <button type="submit" className="add-btn">
          + Add
        </button>
      </form>
    </div>
  );
};

export default MealItem;
