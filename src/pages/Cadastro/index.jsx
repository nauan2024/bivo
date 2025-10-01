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
import AnchorLogin from "../../components/AnchorLogin";
import { useNavigation } from "@react-navigation/native";
export default function Cadastro() {
    const navigation = useNavigation()
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
                <Button label="Entrar" onPress={() => navigation.navigate("Home")}></Button>
            <SocialIcons></SocialIcons>

            <OneLine/>

            <Suporte />

            <AnchorLogin label={"Tem cadastro?"} anchor={"Login"} onPress={() => navigation.navigate("Home")}/>

        </ContainerCadastro>
    )
}