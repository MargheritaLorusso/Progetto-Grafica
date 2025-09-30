import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroImage from './HeroImage';
import Summary from './Summary';
import MealList from './MealList';
import Product from './Product';

const RoutesComponent: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={
          <>
            <HeroImage />
            <Summary />
            <MealList /> {/* lista con link dinamici al dettaglio */}
          </>
        } />
        <Route path="/merch" element={<h2 style={{ padding: '2rem' }}>Merch Page</h2>} />
        <Route path="/profile" element={<h2 style={{ padding: '2rem' }}>Profile Page</h2>} />
        <Route path="/product/:id" element={<Product />} /> {/* rotta dinamica */}
      </Routes>
    );
  };
  
  export default RoutesComponent;
