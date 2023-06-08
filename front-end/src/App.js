import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './screens/LoginForm';
import HomePage from './screens/HomePage';
import UserPage from './screens/UserPage';
import RegisterForm from './screens/RegisterForm';




function App() {
  return (		
	<Routes>
		<Route path="/" element={< HomePage/>} />
		<Route path="/LoginForm" element={< LoginForm/>} />
		<Route path="/RegisterForm" element={< RegisterForm/>} />
		<Route path="/UserPage" element={< UserPage/>} />
	</Routes> 
	)
}

export default App;
