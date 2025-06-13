import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/TelaPrincipal';
import ListaAssinaturasScreen from './src/screens/ListadeInscricao';
import AdicionarAssinaturaScreen from './src/screens/AdicionarLista';

const Stack = createNativeStackNavigator();

export default function App() {
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'AssinApp' }} />
        <Stack.Screen name="Lista" component={ListaAssinaturasScreen} options={{ title: 'Lista de Assinaturas' }} />
        <Stack.Screen name="Adicionar" component={AdicionarAssinaturaScreen} options={{ title: 'Adicionar/Editar Assinatura' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
