import React, { useState } from 'react'
import HomePage from './app/components/HomePage';
import Details from './app/components/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemContext } from './app/components/context/context';




export default function App() {

  const Stack = createNativeStackNavigator();
  const [details, setDetails] = useState('');

  return (
    <ItemContext.Provider value={[details, setDetails]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemContext.Provider>
  );
}