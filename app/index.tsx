import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@pages/Home';
import Solver from '@pages/Solver';

// Defina o StackNavigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} // Esconde o cabeçalho padrão
      />
      <Stack.Screen 
        name="Solver" 
        component={Solver} 
        options={{ title: 'Resolução de Equações' }} 
      />
    </Stack.Navigator>
  );
}
