import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import Login from './src/pages/login';
import Cadastro from './src/pages/Cadastro';
import ListaVeiculos from './src/pages/ListaVeiculos';
import Entrada from './src/pages/entrada';
import Saida from './src/pages/saida';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden />
      <NavigationContainer>
       
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false 
          }}
        >
        
          <Stack.Screen name="Home" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Entrada" component={Entrada} />
          <Stack.Screen name="Main" component={ListaVeiculos} />
          <Stack.Screen name="Saida" component={Saida} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContainerApp>
  );
}