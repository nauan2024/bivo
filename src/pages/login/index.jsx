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
import Suporte from "../../components/Suporte";
import OneLine from "../../components/oneLine";
import SocialIcons from "../../components/SocialIcons";
export default function Login() {
    return(
        <LoginContainer>
            
            
            <ConstainerTitle>
            <Title label={"Bivô"}></Title>
            </ConstainerTitle>
           
            <Logotipo source={require("../../../src/assets/logotipo.png")}></Logotipo>
            
            <InTextcontainer>
                <Input placeholder="Email :"/>

                <Input placeholder="Senha :"/>

            </InTextcontainer>
            <ButtonDad>
                <Button label="Entrar"></Button>
            </ButtonDad>

            <SocialIcons></SocialIcons>
            <OneLine></OneLine> 
            <Suporte></Suporte>           
        </LoginContainer>
    )
}