import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image,Label } from 'react-native';
import styled from 'styled-components/native';
import Login from './src/pages/login';
import button from './src/components/button';
import Title from './src/components/title';
import Cadastro from './src/pages/Cadastro';
import ListaVeiculos from './src/pages/ListaVeiculos';
import Entrada from './src/pages/entrada';
import ImgLogotipo from './src/components/LogotipoComponent';
import Saida from './src/pages/saida';
import Error404 from './src/pages/Error';


// const Container = styled.View`
// flex:1;
// display:flex;
// flex-direction: column;
// background-color: red;
// align-items: center;
// justify-content: center;
// `
const ContainerApp = styled.SafeAreaView`
  flex:1;
`

export default function App() {
  return (
    <ContainerApp>

   
      <StatusBar hidden />
      <Login/>
        {/* <Image source={"././src/assets"}></Image> */}

     </ContainerApp>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // topo: {
  //   flex:1,
  //   color:"white",
  // }
});