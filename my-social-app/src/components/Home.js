// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <h1 className="title">Bienvenido a Paqpaq</h1>
      <p className="description">La mejor manera de compartir tus trayectos y colaborar con el medio ambiente.</p>
      <div className="SearchBox">
        <input type="text" placeholder="Buscar trayectos..." />
        <button>Buscar</button>
      </div>
    </div>
  );
};

export default Home;
