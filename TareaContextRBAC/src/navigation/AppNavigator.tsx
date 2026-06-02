import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./AppNavigator"; // Importa tus pestañas que acabamos de arreglar
import { useAuth } from "../context/AuthContext";

type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { userRole } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userRole === null ? (
          // Si no hay sesión, se bloquea en la pantalla de Login
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          // Si el estado cambia, pasa automáticamente a las pestañas
          <Stack.Screen name="MainTabs" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}