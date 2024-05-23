// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Login">
      <h2>Iniciar Sesión</h2>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
