import { LoginContainer } from "./styles";
import Title from "../../components/title";
import Button from "../../components/button";
import { ButtonDad } from "./styles";
import { InTextcontainer } from "./styles";
import { ConstainerTitle } from "./styles";
import Input from "../../components/inputtext";
import Suporte from "../../components/Suporte";
import OneLine from "../../components/oneLine";
import SocialIcons from "../../components/SocialIcons";
import ImgLogotipo from "../../components/LogotipoComponent";
export default function Login() {
    return (
        <LoginContainer>


            <ConstainerTitle>
                <Title label={"Bivô"}></Title>
            </ConstainerTitle>

            <ImgLogotipo></ImgLogotipo>

            <InTextcontainer>
                <Input placeholder="Email :" />

                <Input placeholder="Senha :" />

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