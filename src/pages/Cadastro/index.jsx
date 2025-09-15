import { View } from "react-native";
import { ContainerCadastro } from "./styles";
import { LoginContainer } from "./styles";
import Title from "../../components/title";
import Button from "../../components/button";
import { ButtonDad } from "./styles";
import { ButtonConfig } from "./styles";
import { InTextcontainer } from "./styles";
import { EmailInput } from "./styles";
import { ConstainerTitle } from "./styles";
import { SenhaInput } from "./styles";
import { TextComum } from "./styles";
import Input from "../../components/inputtext";
import { Image } from "react-native";
import { ContainerLogotipo } from "./styles";
import { Logotipo } from "./styles";

export default function Cadastro() {
    return(
        <ContainerCadastro>
              
                        
                        <ConstainerTitle>
                        <Title label={"Bivô"}></Title>
                        </ConstainerTitle>
                       
                        <Logotipo source={require("../../../src/assets/logotipo.png")}></Logotipo>
                        
                        <InTextcontainer>
                            <Input placeholder="Email :"/>

                            <Input placeholder="Nome :"/>
            
                            <Input placeholder="Senha :"/>
            
                        </InTextcontainer>
                        <ButtonDad>
                            <Button label="Entrar"></Button>
                        </ButtonDad>
        </ContainerCadastro>
    )
}