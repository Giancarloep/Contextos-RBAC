import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Ingresar como Usuario" 
          onPress={() => login('common')} 
          color="#5f0650" 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Ingresar como Admin" 
          onPress={() => login('admin')} 
          color="#5f0650" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '70%',
    marginBottom: 15,
  },
});