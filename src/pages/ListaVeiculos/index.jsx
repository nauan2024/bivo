import styled from "styled-components/native";
import { ContainerListaVeiculos } from "./styles";
import { Upbar } from "./styles";
import ComponentTitleLeft from "../../components/ComponentTitleLeft";
import { Text } from "react-native";
import { Image } from "react-native";
import { Logotipo } from "./styles";
import { CardInfo } from "./styles";
import { ContainerCards } from "./styles";
import Cards from "../../components/cards";

export default function ListaVeiculos() {
    return(
        <ContainerListaVeiculos>
                <Upbar>
                    <ComponentTitleLeft Label={"Bivô"}></ComponentTitleLeft>
                    <Logotipo source={require("../../../src/assets/logotipo.png")}></Logotipo>
                </Upbar>
                <ContainerCards>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>

                </ContainerCards>
                
                
        </ContainerListaVeiculos>
    )
}