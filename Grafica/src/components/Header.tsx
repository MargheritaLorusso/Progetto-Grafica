import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => (
  <header className="header-bar">
    <h1 className="header-title">React Meal</h1>
    <nav className="nav-bar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Home
      </NavLink>
      <NavLink to="/merch" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Merch
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Profile
      </NavLink>
    </nav>
    <button className="cart-btn">
      <span role="img" aria-label="cart">🛒</span> Your Cart
      <span className="cart-badge">3</span>
    </button>
  </header>
);

export default Header;
