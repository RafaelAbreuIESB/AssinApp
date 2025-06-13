import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/TelaPrincipal';
import AddEditSubscriptionScreen from '../screens/AdicionarLista';
import SubscriptionListScreen from '../screens/ListadeInscricao';
import AddEditScreen from '../screens/AdicionarLista';
import ListaScreen from '../screens/ListadeInscricao';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Adicionar" component={AddEditScreen} />
        <Stack.Screen name="Lista" component={ListaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
