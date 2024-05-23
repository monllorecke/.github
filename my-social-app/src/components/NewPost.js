// src/components/NewPost.js
import React, { useState } from 'react';
import { db } from '../firebase';
import './NewPost.css';

const NewPost = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      content,
      createdAt: new Date()
    })
    .then(() => {
      setContent('');
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="NewPost">
      <h2>Crear Nueva Publicación</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          placeholder="Escribe tu publicación aquí..." 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default NewPost;
