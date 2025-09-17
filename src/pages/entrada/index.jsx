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
import { LineDivision } from "./styles";
import DoubleLines from "../../components/doublelines";
import { ContainerEntrada } from "./styles";
import { Line } from "./styles";
import { CircleSocial } from "./styles";
import SocialIcons from "../../components/SocialIcons";
export default function Entrada() {
    return(
        <ContainerEntrada>
              
                        
                        <ConstainerTitle>
                        <Title label={"Bivô"}></Title>
                        </ConstainerTitle>
                       
                        <Logotipo source={require("../../../src/assets/logotipo.png")}></Logotipo>
                        
                        <InTextcontainer>
                            <Input placeholder="Placa :"/>

                            <Input placeholder="Data :"/>
            
                            <Input placeholder="Hora :"/>
            
                        </InTextcontainer>
                        <ButtonDad>
                            <Button label="Entrada"></Button>
                        </ButtonDad>
                            <SocialIcons></SocialIcons>
                        <Line></Line>
                        
        </ContainerEntrada>
    )
}