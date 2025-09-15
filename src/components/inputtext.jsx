import { Text, TouchableOpacity } from "react-native";
import { EmailInput } from "../pages/login/styles";
import { Nomeinput } from "../pages/Cadastro/styles";
export default function Input ({placeholder}) {
    return(
        <Nomeinput>{placeholder}</Nomeinput>
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

