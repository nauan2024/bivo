import Title from "../../components/title";
import Button from "../../components/button";
import { ButtonDad } from "./styles";
import { InTextcontainer } from "./styles";
import { ConstainerTitle } from "./styles";
import Input from "../../components/inputtext";
import { Logotipo } from "./styles";
import { ContainerEntrada } from "./styles";
import { Line } from "./styles";
import SocialIcons from "../../components/SocialIcons";
import Suporte from "../../components/Suporte";
export default function Entrada() {
    return (
        <ContainerEntrada>


            <ConstainerTitle>
                <Title label={"Bivô"}></Title>
            </ConstainerTitle>

            <Logotipo source={require("../../../src/assets/logotipo.png")}></Logotipo>

            <InTextcontainer>
                <Input placeholder="Placa :" />



            </InTextcontainer>
                <Button label="Entrada" ></Button>
            <Line></Line>
            <Suporte></Suporte>

        </ContainerEntrada>
    )
}