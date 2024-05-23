import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchReviews(user.uid);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchReviews = async (userId) => {
    const reviewsCollection = await db.collection('reviews').where('userId', '==', userId).get();
    setReviews(reviewsCollection.docs.map(doc => doc.data()));
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Perfil de {user.email}</h2>
          <h3>Valoraciones</h3>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review.rating} - {review.comment}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Por favor, inicia sesión para ver tu perfil.</p>
      )}
    </div>
  );
};

export default Profile;
