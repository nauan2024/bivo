import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image,Label } from 'react-native';
import styled from 'styled-components/native';
import Login from './src/pages/login';

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
      <Text>bOA TARDE POHA</Text>
            <Login/>

      <Image source={"././src/assets/logotipo.png"}></Image>

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
