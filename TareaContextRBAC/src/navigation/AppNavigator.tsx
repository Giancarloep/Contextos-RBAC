import React, { createContext, useState, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

type UserRole = 'admin' | 'common' | null;

interface AuthContextType {
  userRole: UserRole;
  login: (role: 'admin' | 'common') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function LoginScreen() {
  const auth = useContext(AuthContext);
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <View style={styles.btnSpacer}>
        <Button title="Ingresar como Usuario" onPress={() => auth?.login('common')} color="#5f0650" />
      </View>
      <View style={styles.btnSpacer}>
        <Button title="Ingresar como Admin" onPress={() => auth?.login('admin')} color="#5f0650" />
      </View>
    </View>
  );
}

function HomeScreen() {
  const auth = useContext(AuthContext);
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Bienvenido al Home</Text>
      <Button title="Cerrar Sesión" onPress={() => auth?.logout()} color="#dc3545" />
    </View>
  );
}

function SettingsScreen() {
  const auth = useContext(AuthContext);
  return (
    <View style={styles.center}>
      <Text style={styles.text}>estas en Settings</Text>
      <Button title="Cerrar Sesión" onPress={() => auth?.logout()} color="#dc3545" />
    </View>
  );
}

type TabsParamList = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

function TabNavigator() {
  const auth = useContext(AuthContext);
  const role = auth?.userRole;

  return (
    <Tab.Navigator
      initialRouteName={role === 'admin' ? 'Settings' : 'Home'}
      screenOptions={{
        tabBarActiveTintColor: '#5f0650',
        tabBarStyle: { backgroundColor: '#fff' },
        headerStyle: { backgroundColor: '#5f0650' },
        headerTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      {role === 'admin' && (
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Configuración',
            tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const [userRole, setUserRole] = useState<UserRole>(null);

  const login = (role: 'admin' | 'common') => setUserRole(role);
  const logout = () => setUserRole(null);

  return (
    <AuthContext.Provider value={{ userRole, login, logout }}>
      {userRole === null ? <LoginScreen /> : <TabNavigator />}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  btnSpacer: {
    width: '70%',
    marginBottom: 15,
  },
});