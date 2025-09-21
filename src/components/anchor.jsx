import { Image, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native";


export default function Anchoras({label, to}) {

    const navegacao = useNavigation

    return (
        <TouchableOpacity onPress={() => navegacao.navigate(to)}>
      <Text>
        {label}
      </Text>
    </TouchableOpacity>
    )
}