import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import LoginForm from './LoginScreen';


const SignupForm = ({ onLoginPress }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login', {
        name,
        email,
        password,
      });
      // Gérer la réponse de l'API ici, par exemple afficher un message de succès
      console.log(response.data);
      // Réinitialiser les champs du formulaire
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      // Gérer les erreurs de l'API ici, par exemple afficher un message d'erreur
      console.error(error);
    }
  };

  const handleLoginPress = () => {
    // Appeler la fonction de rappel pour passer à l'écran de connexion
    onLoginPress();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmer le mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="S'inscrire" onPress={handleSignup} /> 
      <Button title="Déjà inscrit ? Se connecter" onPress={handleLoginPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SignupForm;
