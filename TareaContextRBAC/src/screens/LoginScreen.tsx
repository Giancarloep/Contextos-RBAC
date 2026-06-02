import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen(): React.JSX.Element {
  const [selectedRole, setSelectedRole] = useState<'common' | 'admin'>('common');
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione su Rol</Text>
      <View style={styles.roleContainer}>
        <TouchableOpacity 
          style={[styles.radioBtn, selectedRole === 'common' && styles.radioBtnActive]}
          onPress={() => setSelectedRole('common')}
        >
          <Text style={selectedRole === 'common' ? styles.textActive : styles.textInactive}>
            Common
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.radioBtn, selectedRole === 'admin' && styles.radioBtnActive]}
          onPress={() => setSelectedRole('admin')}
        >
          <Text style={selectedRole === 'admin' ? styles.textActive : styles.textInactive}>
            Admin
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonWrapper}>
        <Button 
          title="Ingresar" 
          onPress={() => login(selectedRole)} 
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  roleContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  radioBtn: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 10,
    backgroundColor: '#fff',
  },
  radioBtnActive: {
    backgroundColor: '#5f0650',
    borderColor: '#5f0650',
  },
  textActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textInactive: {
    color: '#333',
  },
  buttonWrapper: {
    width: '70%',
  },
});