import { TitleLeft } from "./componentsstyle";
import { Text } from "react-native";

export default function ComponentTitleLeft({Label}){
    return(
        <TitleLeft>
            <Text>{Label}</Text>
        </TitleLeft>
    )
}