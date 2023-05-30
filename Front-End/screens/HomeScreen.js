import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      // Effectuer la requête de déconnexion à votre API
      await axios.post('http://127.0.0.1:8000/api/auth/logout');
      // Réinitialiser les informations d'authentification (par exemple, le token)
      // Ici, nous supposons que vous stockez les informations d'authentification dans un état global
      // Vous devez mettre à jour cette partie en fonction de votre implémentation spécifique
      // Exemple: authState.setToken(null);
      // Rediriger l'utilisateur vers l'écran de connexion (ou autre écran approprié)
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Bienvenue sur la page d'accueil !</Text>
      <Button title="Déconnexion" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
