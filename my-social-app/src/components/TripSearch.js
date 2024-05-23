// src/components/TripSearch.js
import React, { useState } from 'react';
import './TripSearch.css';

const TripSearch = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for trips:', search);
  };

  return (
    <div className="TripSearch">
      <h2>Buscar Trayectos</h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Buscar por dirección, ciudad, etc." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default TripSearch;
