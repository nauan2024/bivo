import { View } from "react-native";
import { LineDivisionleft } from "../pages/entrada/styles";
import { LineDivisionright } from "../pages/entrada/styles";

export default function DoubleLines () {
    return(
        <View>
            <LineDivisionright></LineDivisionright>
            <LineDivisionleft></LineDivisionleft>
        </View>
)
}

