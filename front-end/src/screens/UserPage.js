import { useState, useEffect } from "react";
import axios from "axios";

const UserPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Effectuez une requête GET à votre API pour récupérer les informations de l'utilisateur
    axios.get("http://127.0.0.1:8000/api/auth/user-profile", {
      headers: {
        Authorization: "Bearer votre_token_d'accès"
      }
    })
      .then(response => {
        setUser(response.data); // Mettez à jour l'état de l'utilisateur avec les données récupérées de l'API
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // Utilisez une dépendance vide pour vous assurer que cette requête n'est effectuée qu'une seule fois lors du montage du composant

  if (!user) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div>
      <h2>Bienvenue, {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserPage;
