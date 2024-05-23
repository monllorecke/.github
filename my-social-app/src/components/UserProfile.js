// src/components/UserProfile.js
import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="UserProfile">
      <h2>Perfil de Usuario</h2>
      <div className="UserProfile-info">
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Correo electrónico:</strong> {user.email}</p>
        {/* Add more user info as needed */}
      </div>
    </div>
  );
};

export default UserProfile;
