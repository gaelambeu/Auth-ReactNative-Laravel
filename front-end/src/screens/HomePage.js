import React from 'react';
import { Link } from 'react-router-dom';



function HomePage() {
  return (
    <div>
      <h1>Bonjour</h1>
      <Link to="/LoginForm">Connexion</Link>
      <Link to="/RegisterForm">Register</Link>
    </div>
  );
}

export default HomePage;
