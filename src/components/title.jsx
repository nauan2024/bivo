import {Text, Button} from "react-native";
import { TitleStyle } from "./componentsstyle";

export default function Title ( {label} ) {

    return(
        <TitleStyle>
        <Text>{label}</Text>
        </TitleStyle>
        

        
    )
    
}