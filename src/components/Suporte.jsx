import { Text, View, } from "react-native";
import { SuporteText } from "./componentsstyle";
import { SuporteTextContainer } from "./componentsstyle";
import { SuporteTextAnchor } from "./componentsstyle";

export default function Suporte() {
    return (
        <SuporteTextContainer>
            <SuporteText>Suporte?</SuporteText>
            <SuporteTextAnchor>Clique aqui!</SuporteTextAnchor>
        </SuporteTextContainer>
    )
}