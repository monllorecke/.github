import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search-packages">Buscar Paquetes</Link></li>
        <li><Link to="/search-trips">Buscar Trayectos</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
        <li><Link to="/register">Registrarse</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
