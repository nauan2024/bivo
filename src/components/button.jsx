import { Text, TouchableOpacity } from "react-native";
import { ButtonDad } from "../pages/login/styles";
import { TextComum } from "../pages/login/styles";

export default function Button ({ label }){
    return(
        <TouchableOpacity>
            <TextComum>
           <Text>{label}</Text>
           </TextComum>
        </TouchableOpacity>
    )
}