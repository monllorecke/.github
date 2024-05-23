import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const SearchTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const tripsCollection = await db.collection('trips').get();
      setTrips(tripsCollection.docs.map(doc => doc.data()));
    };

    fetchTrips();
  }, []);

  return (
    <div>
      <h2>Buscar Trayectos</h2>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>{trip.origin} to {trip.destination} - {trip.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTrips;
