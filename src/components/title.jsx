import {Text, Button} from "react-native";
import { TitleStyle } from "../pages/login/styles";

export default function Title ( {label} ) {

    return(
        <TitleStyle>
        <Text>{label}</Text>
        </TitleStyle>
        

        
    )
    
}