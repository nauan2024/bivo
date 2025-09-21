import { CardInfo } from "./componentsstyle";
import { Text } from "react-native";
import { View } from "react-native";
import { ComponentContainerCards } from "./componentsstyle";
import { CamposCards } from "./componentsstyle";
import DoubleLines from "./doublelines";
import { InfoCards } from "./componentsstyle";
export default function Cards ({Label}) {
    return(
        <CardInfo>
                <ComponentContainerCards>
                    <CamposCards> Placa: </CamposCards>
                    <CamposCards> Hora: </CamposCards>
                    <CamposCards> Data: </CamposCards>
                </ComponentContainerCards>
                <ComponentContainerCards>
                    <InfoCards> ABCD1234</InfoCards>
                    <InfoCards> 20/08/2025</InfoCards>
                    <InfoCards> 20:08</InfoCards>
                    
                </ComponentContainerCards>
            
        </CardInfo>
        
    )
}