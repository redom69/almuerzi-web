import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Modal from './screens/Modal'
import MealsScreen from './screens/Meals'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MealsScreen'>
        <Stack.Screen name="MealsScreen" component={MealsScreen} options={{ title: 'Comidas disponibles' }} />
        <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }} >
          <Stack.Screen name="Modal" component={Modal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer >
  );
}
