// src/components/Post.js
import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="Post">
      <h3 className="Post-title">Publicación</h3>
      <p className="Post-content">{post.content}</p>
      <span className="Post-date">{post.createdAt.toDateString()}</span>
    </div>
  );
};

export default Post;
