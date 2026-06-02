import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen(): React.JSX.Element {
  const { userRole, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>
        Has ingresado con el rol: <Text style={styles.roleText}>{userRole}</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Cerrar Sesión" 
          onPress={logout} 
          color="#dc3545"
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
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  roleText: {
    fontWeight: 'bold',
    color: '#5f0650',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    width: '60%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});