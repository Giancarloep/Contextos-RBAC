import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function SettingsScreen(): React.JSX.Element {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>estas en Settings</Text>
      
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
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '60%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});