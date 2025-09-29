import React from 'react';
import { meals } from './mealsData';
import MealItem from './MealItem';
import './MealList.css';

const MealList: React.FC = () => (
  <div className="meals-wrapper">
    <div className="meals-list">
      {meals.map(meal => (
        <MealItem
          key={meal.id}
          title={meal.title}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </div>
  </div>
);

export default MealList;
