// src/components/PackageSearch.js
import React, { useState } from 'react';
import './PackageSearch.css';

const PackageSearch = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', search);
  };

  return (
    <div className="PackageSearch">
      <h2>Buscar Paquetes</h2>
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

export default PackageSearch;
