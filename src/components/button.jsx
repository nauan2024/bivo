import { Button, TouchableOpacity } from "react-native";

export default function Button ({ label }){
    return(
        <TouchableOpacity>
           <Text>{label}</Text>
        </TouchableOpacity>
    )
}