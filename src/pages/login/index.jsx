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
import AnchorLogin from "../../components/AnchorLogin";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
export default function Login({navigator}) {

    const navigation = useNavigation()
    

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
                <Button label="Entrar"  onPress={() => navigation.navigate("Main")} ></Button>

            <SocialIcons></SocialIcons>
            <AnchorLogin label={"não tem cadastro?"} anchor={"Cadastre-se"} onPress={() => navigation.navigate("Cadastro")}></AnchorLogin>
            <OneLine></OneLine>
            <Suporte></Suporte>
        </LoginContainer>
    )
}