import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import realizarLogin from './screens/realizarLogin';
import PaginaPrincipal from './screens/PaginaPrincipal';
import Jogadores from './screens/Jogadores'; // Certifique-se de importar a tela

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="realizarLogin">
      <Stack.Screen name="realizarLogin" component={realizarLogin} />
      <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} />
      <Stack.Screen name="Jogadores" component={Jogadores} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
