import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/user-profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userData = response.data;
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    axios.post("http://127.0.0.1:8000/api/auth/logout", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setToken("");
    navigate("/LoginForm"); // Redirect to the login page
  };

  return (
    <div>
      <h2>User Page</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserPage;
