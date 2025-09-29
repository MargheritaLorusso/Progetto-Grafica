import React from 'react';
import './Header.css';

const Header: React.FC = () => (
  <header className="header-bar">
    <h1 className="header-title">React Meal</h1>
    <button className="cart-btn">
      <span role="img" aria-label="cart">🛒</span> Your Cart
      <span className="cart-badge">3</span>
    </button>
  </header>
);

export default Header;
