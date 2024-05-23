// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">Inicio</Link>
      <Link to="/profile">Perfil</Link>
      <Link to="/search-trips">Buscar Trayectos</Link>
      <Link to="/search-packages">Buscar Paquetes</Link>
      <Link to="/login">Iniciar Sesión</Link>
      <Link to="/register">Registro</Link>
    </nav>
  );
};

export default Navbar;
