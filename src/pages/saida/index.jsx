import { ContainerSaida } from "./styles";
import Title from "../../components/title";
import Button from "../../components/button";
import { ButtonDad } from "./styles";
import { InTextcontainer } from "./styles";
import { ConstainerTitle } from "./styles";
import Input from "../../components/inputtext";
import { Line } from "./styles";
import SocialIcons from "../../components/SocialIcons";
import ImgLogotipo from "../../components/LogotipoComponent";
import Suporte from "../../components/Suporte";


export default function Saida() {

    return (
        <ContainerSaida>


            <ConstainerTitle>
                <Title label={"Bivô"}></Title>
            </ConstainerTitle>

            <ImgLogotipo></ImgLogotipo>

            <InTextcontainer>
                <Input placeholder="Placa :" />

                <Input placeholder="Data :" />

                <Input placeholder="Hora :" />

            </InTextcontainer>
            <ButtonDad>
                <Button label="Saida"></Button>
            </ButtonDad>
            <SocialIcons></SocialIcons>

            <Line></Line>

            <Suporte></Suporte>

        </ContainerSaida>
    )
}