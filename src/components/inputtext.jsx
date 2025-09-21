import { Text, TouchableOpacity } from "react-native";
import { Nomeinput } from "./componentsstyle";
export default function Input ({placeholder, value, placeholderTextColor = '#FFFFFF'}) {
    return(
        <Nomeinput placeholder={placeholder}
        placeholderTextColor = '#FFFFFF'
        // defino aqui a cor do Input
         >{value}</Nomeinput>
        
    )
}

// const styles = StyleSheet.create ({
//     EmailInput :
// border: "2px solid #003554",
// width: 50%,
// background-color:#003554,
// border-radius:8px,
// color:white;
// })

