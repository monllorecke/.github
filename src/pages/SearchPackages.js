import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const SearchPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const packagesCollection = await db.collection('packages').get();
      setPackages(packagesCollection.docs.map(doc => doc.data()));
    };

    fetchPackages();
  }, []);

  return (
    <div>
      <h2>Buscar Paquetes</h2>
      <ul>
        {packages.map((pkg, index) => (
          <li key={index}>{pkg.origin} to {pkg.destination} - {pkg.weight}kg</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPackages;
