import { ContainerCadastro } from "./styles";
import Title from "../../components/title";
import Button from "../../components/button";
import { ButtonDad } from "./styles";
import { InTextcontainer } from "./styles";
import { ConstainerTitle } from "./styles";
import Input from "../../components/inputtext";
import ImgLogotipo from "../../components/LogotipoComponent";
import OneLine from "../../components/oneLine";
import SocialIcons from "../../components/SocialIcons";
import Suporte from "../../components/Suporte";

export default function Cadastro() {
    return (
        <ContainerCadastro>


            <ConstainerTitle>
                <Title label={"Bivô"}></Title>
            </ConstainerTitle>

            <ImgLogotipo />
            <InTextcontainer>
                <Input placeholder="Email :" />

                <Input placeholder="Nome :" />

                <Input placeholder="Senha :" />

            </InTextcontainer>
            <ButtonDad>
                <Button label="Entrar"></Button>
            </ButtonDad>

            <SocialIcons></SocialIcons>

            <OneLine></OneLine>

            <Suporte />



        </ContainerCadastro>
    )
}