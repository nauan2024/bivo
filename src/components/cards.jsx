import { CardInfo } from "../pages/ListaVeiculos/styles";
import { Text } from "react-native";
import { View } from "react-native";
import { ComponentContainerCards } from "../pages/ListaVeiculos/styles";
import { CamposCards } from "../pages/ListaVeiculos/styles";
export default function Cards ({Label}) {
    return(
        <CardInfo>
                <ComponentContainerCards>
                    <CamposCards> Placa: </CamposCards>
                    <CamposCards> Hora: </CamposCards>
                    <CamposCards> Data: </CamposCards>
                </ComponentContainerCards>
                <ComponentContainerCards>
                    <CamposCards> ABCD1234</CamposCards>
                    <CamposCards> 20/08/2025</CamposCards>
                    <CamposCards> 20:08</CamposCards>
                </ComponentContainerCards>
            
        </CardInfo>
    )
}