import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

// Telas
import Login from './src/pages/login';
import Cadastro from './src/pages/Cadastro';
import ListaVeiculos from './src/pages/ListaVeiculos';
import Entrada from './src/pages/entrada';
import Saida from './src/pages/saida';

// Importações corretas para navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. Criar o Stack Navigator da forma correta
const Stack = createNativeStackNavigator();

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden />
      {/* 2. Envolver tudo no NavigationContainer */}
      <NavigationContainer>
        {/* 3. Usar os componentes do Stack para definir as telas */}
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerShown: false // Opção para esconder o cabeçalho
          }}
        >
          {/* Cada tela é definida com Stack.Screen */}
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