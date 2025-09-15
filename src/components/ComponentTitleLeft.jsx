import { TitleLeft } from "../pages/ListaVeiculos/styles";
import { Text } from "react-native";

export default function ComponentTitleLeft({Label}){
    return(
        <TitleLeft>
            <Text>{Label}</Text>
        </TitleLeft>
    )
}