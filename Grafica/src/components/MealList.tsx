import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { meals } from './mealsData';
import './MealList.css';

const MealList: React.FC = () => {
  const [amounts, setAmounts] = useState<{ [id: string]: number }>({});

  // Incrementa la quantità solo cliccando su + Add
  const increment = (id: string) => {
    setAmounts(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  // Gestisce cambio manuale nella input (opzionale)
  const changeAmount = (id: string, value: string) => {
    const num = parseInt(value);
    if (!isNaN(num) && num > 0) {
      setAmounts(prev => ({ ...prev, [id]: num }));
    }
  };

  return (
    <div className="meals-list">
      {meals.map(meal => (
        <div key={meal.id} className="meal-card-row">
          <div className="meal-info">
            <Link to={`/product/${meal.id}`} className="meal-title-link">
              <h3>{meal.title}</h3>
            </Link>
            <p className="meal-description">{meal.description}</p>
            <span className="meal-price">${meal.price}</span>
          </div>
          <div className="meal-actions">
            <label htmlFor={`amount_${meal.id}`} className="amount-label">Amount</label>
            <input
              id={`amount_${meal.id}`}
              type="number"
              min="1"
              value={amounts[meal.id] || 1}
              onChange={(e) => changeAmount(meal.id, e.target.value)}
              className="amount-input"
            />
            <button
              className="add-btn"
              onClick={() => increment(meal.id)}
            >
              + Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealList;
