import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Modal from './screens/Modal'
import MealsScreen from './screens/Meals'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'

const Stack = createNativeStackNavigator();
const register = true

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={register ? 'LoginScreen' : 'MealsScreen'}>
        <Stack.Group screenOptions={{ headerShown: false }} >
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Register' }} />
        </Stack.Group>

        <Stack.Screen name="MealsScreen" component={MealsScreen} options={{ title: 'Comidas disponibles' }} />
        <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }} >
          <Stack.Screen name="Modal" component={Modal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer >
  );
}
