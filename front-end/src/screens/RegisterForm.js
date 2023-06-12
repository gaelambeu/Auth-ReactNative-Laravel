import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToUser, setRedirectToUser] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/register', { name, email, password });
      const token = response.data.token;
      // Store the token in local storage or in global state of your choice
      console.log('Token:', token);
      setRedirectToUser(true); // Set redirectToUser to true to activate the conditional rendering
    } catch (error) {
      console.error(error);
    }
  };

  if (redirectToUser) {
    navigate('/UserPage'); // Use navigate('/user') to redirect to "/user"
  }

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>S'inscrire</button>
    </div>
  );
}

export default Register;
