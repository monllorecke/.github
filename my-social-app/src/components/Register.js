// src/components/Register.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registered
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Register">
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
