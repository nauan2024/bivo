import { Text, Button, TouchableOpacity } from "react-native";

export default function button ({ label }){
    return(
        <TouchableOpacity>
           <Text>{label}</Text>
        </TouchableOpacity>
    )
}