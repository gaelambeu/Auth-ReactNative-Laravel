import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token'); // Récupère le token depuis le local storage
      const response = await axios.get('url_de_ton_api/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userData = response.data;
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Page Utilisateur</h2>
      <button onClick={fetchUser}>Afficher les informations utilisateur</button>
      {user && (
        <div>
          <p>Nom: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserPage;
