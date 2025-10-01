import { CardInfo } from "./componentsstyle";
import { Text } from "react-native";
import { View } from "react-native";
import { ComponentContainerCards } from "./componentsstyle";
import { CamposCards } from "./componentsstyle";
import DoubleLines from "./doublelines";
import { InfoCards } from "./componentsstyle";
import { Backbar } from "./componentsstyle";
export default function Cards ({Label}) {
    return(
        <CardInfo>
                <ComponentContainerCards>
                    <Backbar>

                    <CamposCards> Placa: </CamposCards>
                    <InfoCards> ABCD1234</InfoCards>
                    </Backbar>
                    
                    <Backbar>
                        <CamposCards> Hora: </CamposCards>
                        <InfoCards> 20:08</InfoCards>
                    </Backbar>
                    
                    <Backbar>
                        <CamposCards> Data: </CamposCards>
                        <InfoCards> 20/08/2025</InfoCards>
                    </Backbar>
                    

                </ComponentContainerCards>
                
            
        </CardInfo>
        
    )
}